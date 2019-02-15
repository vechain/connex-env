module.exports = {
    lintOnSave: false,
    publicPath: process.env.NODE_ENV === 'production' ? '/connex-env/' : '/',
    pwa: {
        workboxOptions: {
            skipWaiting: true,
            clientsClaim: true
        }
    }
}
