import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { createVuetify } from 'vuetify'
import 'vuetify/styles'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(createVuetify())

app.mount('#app')
