
const target = window.location.hash && window.location.hash.includes('/') ?
    window.location.hash.slice(1) : ''

export const targetHref = (() => {
    if (target.startsWith('/')) {
        const i = target.indexOf('/', 1)
        return i > 0 ? target.slice(i + 1) : target
    }
    return target
})()

export const targetNetwork = (() => {
    if (target.startsWith('/')) {
        const i = target.indexOf('/', 1)
        return i > 0 ? target.slice(1, i) : ''
    }
    return ''
})()

export function networkName(genesisId: string) {
    switch (genesisId) {
        case '0x000000000b2bce3c70bc649a02749e8687721b09ed2e15997f466536b20bb127':
            return 'TestNet'
        case '0x00000000851caf3cfdb6e899cf5958bfb1ac3413d346d43539627e6be7ec1b4a':
            return 'MainNet'
        case '0x00000000973ceb7f343a58b08f0693d6701a5fd354ff73d7058af3fba222aea4':
            return 'Solo Mode'
        default:
            return 'Unknown Network'
    }
}


import UAParser from 'ua-parser-js'

const ua = new UAParser(navigator.userAgent, {
    browser: [[/(sync)\/([\w\.]+)/i], [UAParser.BROWSER.NAME, UAParser.BROWSER.VERSION]]
})

export const platform = ((): NodeJS.Platform | undefined => {
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
})()

export const browser = ua.getBrowser()
