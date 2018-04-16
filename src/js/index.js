// Require manifest.json
require("../manifest.json")

// Program icons
require("../icons/ribbon.png")

// Fonts
require("../fonts/Karla/Karla-Regular.ttf")
require("../fonts/Karla/Karla-Bold.ttf")
require("../fonts/FontAwesome/fontawesome.js")

// App scss
require("../css/app.scss")

// Really nice chrome async plugin
require("../../node_modules/chrome-extension-async/chrome-extension-async.js")

// Main vue instance
import Vue from 'vue'

// Plugins
import VuejsDialog from "vuejs-dialog"
Vue.use(VuejsDialog)

// Components
import App from './components/App.vue'
import Popup from './components/Popup.vue'

// Globally register components
Vue.component('popup', Popup)

new Vue({
    el: '#app',
    render: h => h(App)
})
