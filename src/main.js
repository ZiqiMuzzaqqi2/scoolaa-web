import { createApp } from 'vue'
import App from './App.vue'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { router } from './router'
import '@mdi/font/css/materialdesignicons.css'
import './style.css'

const vuetify = createVuetify({
    components,
    directives,
    defaults: {
        global: {
            style: {
                fontFamily: '"Kumbh Sans", sans-serif'
            }
        }
    }
})

const app = createApp(App)
app.use(vuetify)
app.use(router)
app.mount('#app')