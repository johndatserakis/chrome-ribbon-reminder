// Require manifest.json
require("../manifest.json")

// Program icons
require("../icons/ribbon.png")

// Fonts
require("../fonts/OpenSans/OpenSans-Regular.ttf")
require("../fonts/OpenSans/OpenSans-Bold.ttf")
require("../fonts/FontAwesome/fontawesome.js")

// App scss
require("../css/app.scss")

// Really nice chrome async plugin
require("../../node_modules/chrome-extension-async/chrome-extension-async.js")

// Main vue instance
import Vue from 'vue'

// Components
import App from './components/App.vue'

new Vue({
    el: '#app',
    render: h => h(App)
})
