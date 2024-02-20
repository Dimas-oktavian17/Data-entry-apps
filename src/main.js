import '@/style.css'
import './assets/css/satoshi.css'
import './assets/css/style.css'
import 'jsvectormap/dist/css/jsvectormap.min.css'
import 'flatpickr/dist/flatpickr.min.css'


import { createApp } from 'vue'
// Library dependencies
import { VueFire, VueFireAuth } from 'vuefire'
import { createPinia } from 'pinia'
import { Icon } from '@iconify/vue'
import router from './router'
import { plugin, defaultConfig } from '@formkit/vue'
import VueApexCharts from 'vue3-apexcharts'

// end library dependencies
// firebase configuration
import { firebaseApp } from './firebase/index.js'
// Component configuration
import NotifError from "@/components/base/NotifError.vue"
import buttonAuth from "@/components/base/ButtonAuth.vue"
import AlertSuccess from '@/components/Alerts/AlertSuccess.vue'
import AlertView from '@/components/Alerts/AlertView.vue'
import ChartThree from '@/components/Charts/ChartThree.vue'
import App from './App.vue'

const app = createApp(App)
app.component('IconVue', Icon)
  .component('NotifError', NotifError)
  .component('ButtonAuth', buttonAuth)
  .component('AlertSuccess', AlertSuccess)
  .component('AlertView', AlertView)
  .component('ChartThree', ChartThree)
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
  .use(VueApexCharts)
  .mount('#app')
