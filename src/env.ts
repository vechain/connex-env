import UAParser from 'ua-parser-js'
// tslint:disable-next-line:no-var-requires
const syncReleases = require('./assets/sync-releases') as Release[]

const ua = new UAParser(navigator.userAgent, {
    browser: [[/(sync)\/([\w\.]+)/i], [UAParser.BROWSER.NAME, UAParser.BROWSER.VERSION]]
})

const target = (() => {
    const hash = decodeURIComponent(window.location.hash)
    return (hash && hash.includes(':')) ?
        hash.slice(1) : ''
})()

const env = {
    get prerender() {
        return !!(window as any).$PRERENDER
    },
    get platform(): NodeJS.Platform | undefined {
        if (this.prerender) {
            return undefined
        }
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
    preferredAsset(assets: Release.Asset[]) {
        return assets.find(a => a.platform === this.platform)
    }
}

export default env
