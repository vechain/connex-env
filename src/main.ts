import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import './assets/style.scss'
import './filters'
import { targetHref } from './utils'

Vue.config.productionTip = false

if (targetHref && window.connex) {
    window.location.href = targetHref
} else {
    new App().$mount('#app')
}
