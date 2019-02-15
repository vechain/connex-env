import Vue from 'vue'


Vue.filter('osName', (platform: NodeJS.Platform) => {
    switch (platform) {
        case 'win32':
            return 'Windows'
        case 'darwin':
            return 'Mac OSX'
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
