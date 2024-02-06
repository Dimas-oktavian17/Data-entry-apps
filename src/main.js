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
// Component configuration
import NotifError from "@/components/base/NotifError.vue"
import buttonAuth from "@/components/base/ButtonAuth.vue"
import App from './App.vue'

const app = createApp(App)
app.component('IconVue', Icon)
  .component('NotifError', NotifError)
  .component('ButtonAuth', buttonAuth)
  .use(createPinia())
  .use(plugin, defaultConfig)
  .use(router)
  .use(VueFire, {
    // imported above but could also just be created here
    firebaseApp,
    modules: [
      // we will see other modules later on
      VueFireAuth(),
    ],
  })
  .mount('#app')
