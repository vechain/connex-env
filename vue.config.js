module.exports = {
    lintOnSave: false,
    publicPath: '/',
    pwa: {
        workboxOptions: {
            skipWaiting: true,
            clientsClaim: true
        }
    }
}
