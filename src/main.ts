import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import './assets/style.scss'
import './filters'
import { targetHref } from './utils'
import VueAnalytics from 'vue-analytics'

Vue.config.productionTip = false

if (targetHref && window.connex) {
    window.location.href = targetHref
} else {
    Vue.use(VueAnalytics, {
        id: 'UA-132391998-2'
    })
    new App().$mount('#app')
}
