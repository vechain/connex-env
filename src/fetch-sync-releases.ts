#!/usr/bin/env node

import _https from 'https'
// tslint:disable-next-line:no-var-requires
const https = require('follow-redirects').https as typeof _https
import { writeFileSync } from 'fs'
import * as Path from 'path'
import * as URL from 'url'
import JSYaml from 'js-yaml'

function getPlatform(ymlUrl: string): NodeJS.Platform {
    if (ymlUrl.endsWith('-linux.yml')) {
        return 'linux'
    }
    if (ymlUrl.endsWith('-mac.yml')) {
        return 'darwin'
    }
    return 'win32'
}
async function fetchReleases() {
    const releases: Release[] = []
    const data = await httpGet('https://api.github.com/repos/vechain/thor-sync.electron/releases' + (process.env['GH_TOKEN'] ? '?access_token=' + process.env['GH_TOKEN'] : ''))
    const items = JSON.parse(data) as any[]
    for (const item of items) {
        const assets: Release.Asset[] = []
        releases.push({
            version: item.name,
            releaseDate: item.created_at,
            assets
        })
        const ymlAssets = (item.assets as any[])
            .filter(asset => asset.browser_download_url.endsWith('.yml'))

        for (const asset of ymlAssets) {
            const yml = JSYaml.safeLoad(await httpGet(asset.browser_download_url))
            const file = (yml.files as any[]).find(f => f.size)
            if (file) {
                assets.push({
                    fileName: file.url,
                    url: URL.resolve(asset.browser_download_url, file.url),
                    size: file.size,
                    checksum: file.sha512,
                    platform: getPlatform(asset.browser_download_url)
                })
            }
        }
    }
    return releases
}

function httpGet(url: string) {
    return new Promise<string>((resolve, reject) => {
        https.get(url,
            { headers: { 'User-Agent': 'Mozilla/5.0' } },
            res => {
                const chunks: Buffer[] = []
                res.on('data', chunk => {
                    chunks.push(chunk)
                })
                res.on('end', () => {
                    resolve(Buffer.concat(chunks).toString('utf8'))
                })
            }).on('error', err => {
                reject(err)
            })
    })
}

fetchReleases().then(assets => {
    writeFileSync(Path.resolve(__dirname, 'assets', 'sync-releases.json'), JSON.stringify(assets), 'utf8')
}).catch(err => {
    // tslint:disable-next-line:no-console
    console.error(err)
    process.exit(1)
})

