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
// import '@/config/trusted-security-policies'
import { firebaseApp } from './firebase/index.js'
import App from './App.vue'
// import '@/trusted-security-policies'
import { trustedTypes } from 'trusted-types'
if (window.trustedTypes && trustedTypes.createPolicy) { // Feature detection
  const escapeHTMLPolicy = trustedTypes.createPolicy('myEscapePolicy', {
    createHTML: (string) => string.replace(/>/g, ">"),
  });
}
if (typeof trustedTypes == 'undefined') { trustedTypes = { createPolicy: (n, rules) => rules } }

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
