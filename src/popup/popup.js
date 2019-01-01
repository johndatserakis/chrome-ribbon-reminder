// App scss
require("../css/app.scss")

// Mozilla's polyfill
window.browser = require("webextension-polyfill")

// Main vue instance
import Vue from 'vue'

// Plugins
import VuejsDialog from "vuejs-dialog"
Vue.use(VuejsDialog)

// Components
import App from './App.vue'
import Popup from './Popup.vue'

// Globally register components
Vue.component('popup', Popup)

new Vue({
    render: h => h(App)
}).$mount('#app')