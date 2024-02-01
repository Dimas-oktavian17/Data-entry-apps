import '@/style.css'

import { createApp } from 'vue'
// Library dependencies
import { VueFire, VueFireAuth } from 'vuefire'
import { createPinia } from 'pinia'
import { Icon } from '@iconify/vue'
import router from './router'
import { plugin, defaultConfig } from '@formkit/vue'
// end library dependencies
// firebase configuration
import { firebaseApp } from './firebase/index.js'
import App from './App.vue'

const app = createApp(App)
app.component('IconVue', Icon)
app.use(createPinia())
app.use(plugin, defaultConfig)
app.use(router)
app.use(VueFire, {
  // imported above but could also just be created here
  firebaseApp,
  modules: [
    // we will see other modules later on
    VueFireAuth(),
  ],
})
  .mount('#app')
