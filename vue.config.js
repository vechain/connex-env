const path = require('path')
const PrerenderSpaPlugin = require('prerender-spa-plugin')

module.exports = {
    lintOnSave: false,
    publicPath: '/',
    pwa: {
        workboxOptions: {
            skipWaiting: true,
            clientsClaim: true
        }
    },
    configureWebpack: {
        plugins: [
            new PrerenderSpaPlugin({
                staticDir: path.resolve(__dirname, './dist'),
                routes: ['/wallets']
            })
        ]
    }
}
