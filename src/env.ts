import UAParser from 'ua-parser-js'
// tslint:disable-next-line:no-var-requires
const syncReleases = require('./assets/sync-releases') as Release[]

const ua = new UAParser(navigator.userAgent, {
    browser: [[/(sync)\/([\w\.]+)/i], [UAParser.BROWSER.NAME, UAParser.BROWSER.VERSION]]
})

const target = window.location.hash && window.location.hash.includes('/') ?
    window.location.hash.slice(1) : ''

const env = {
    get platform(): NodeJS.Platform | undefined {
        switch (ua.getOS().name) {
            case 'Mac OS':
                return 'darwin'
            case 'Windows':
                return 'win32'
            case 'CentOS':
            case 'Fedora':
            case 'Debian':
            case 'Gentoo':
            case 'Linux':
            case 'Mandriva':
            case 'Mint':
            case 'RedHat':
            case 'Slackware':
            case 'SUSE':
            case 'Ubuntu':
                return 'linux'
        }
    },
    get target() {
        if (target.startsWith('/')) {
            const i = target.indexOf('/', 1)
            return {
                href: i > 0 ? target.slice(i + 1) : target,
                network: i > 0 ? target.slice(1, i) : ''
            }
        }
        return {
            href: target,
            network: ''
        }
    },
    syncReleases,
    preferredSyncDownloadUrl(assets?: Release.Asset[]) {
        assets = assets || this.syncReleases[0].assets
        const asset = assets.find(a => a.platform === this.platform)
        return asset ? asset.url : null
    }
}

export default env
