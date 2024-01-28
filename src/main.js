import '@/style.css'

import { createApp } from 'vue'
// Library dependencies
import { createPinia } from 'pinia'
import { Icon } from '@iconify/vue'
import router from './router'
import { plugin, defaultConfig } from '@formkit/vue'
// end library dependencies

import App from './App.vue'

const app = createApp(App)
app.component('IconVue', Icon)
app.use(createPinia())
app.use(plugin, defaultConfig)
app.use(router)

app.mount('#app')
