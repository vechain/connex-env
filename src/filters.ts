import Vue from 'vue'


Vue.filter('osName', (platform: NodeJS.Platform) => {
    switch (platform) {
        case 'win32':
            return 'Windows'
        case 'darwin':
            return 'MacOS'
        case 'linux':
            return 'Linux'
    }
    return ''
})

Vue.filter('osLogo', (platform: NodeJS.Platform) => {
    switch (platform) {
        case 'win32':
            return require('@/assets/windows-logo.svg')
        case 'darwin':
            return require('@/assets/mac-logo.svg')
        case 'linux':
            return require('@/assets/linux-logo.svg')
    }
    return ''
})

Vue.filter('size', (size: number) => {
    if (size > 10 ** 9) {
        return Math.round(size / 10 ** 9) + ' GB'
    }
    if (size > 10 ** 6) {
        return Math.round(size / 10 ** 6) + ' MB'
    }
    if (size > 10 ** 3) {
        return Math.round(size / 10 ** 3) + ' KB'
    }
    return size + ' B'
})
