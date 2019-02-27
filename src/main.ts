import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import './assets/style.scss'
import './filters'
import VueAnalytics from 'vue-analytics'
import env from './env'
import 'spectre.css/dist/spectre-icons.css'

Vue.config.productionTip = false

if (env.target.href && window.connex) {
    window.location.href = env.target.href
} else {
    Vue.use({
        install(vue: typeof Vue) {
            vue.prototype.$env = env
        }
    })
    Vue.use(VueAnalytics, {
        id: 'UA-132391998-2'
    })
    new App().$mount('#app', true)
}

declare module 'vue/types/vue' {
    interface Vue {
        $env: typeof env
    }
}
