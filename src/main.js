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
import JsonExcel from "vue-json-excel3";
// end library dependencies
// firebase configuration
import { firebaseApp } from './firebase/index.js'
// Component configuration
import NotifError from "@/components/base/NotifError.vue"
import buttonAuth from "@/components/base/ButtonAuth.vue"
import AlertSuccess from '@/components/Alerts/AlertSuccess.vue'
import AlertView from '@/components/Alerts/AlertView.vue'
import ChartThree from '@/components/Charts/ChartThree.vue'
import DataStatsOne from '@/components/DataStats/DataStatsOne.vue'
import ChartOne from '@/components/Charts/ChartOne.vue'
import ChartTwo from '@/components/Charts/ChartTwo.vue'
import ChatCard from '@/components/ChatCard.vue'
import MapOne from '@/components/Maps/MapOne.vue'
import TableOne from '@/components/Tables/TableOne.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import BreadcrumbDefault from '@/components/Breadcrumbs/BreadcrumbDefault.vue'
import DefaultCard from '@/components/Forms/DefaultCard.vue'
import InputGroup from '@/components/Forms/InputGroup.vue'
import SelectGroup from '@/components/Forms/SelectGroup.vue'
import TableTwo from '@/components/Tables/TableTwo.vue'
import TableThree from '@/components/Tables/TableThree.vue'
import TableFilterLocation from '@/components/Tables/TableFilterLocation.vue'
import DarkModeSwitcher from '@/components/Header/DarkModeSwitcher.vue'
import DropdownMessage from '@/components/Header/DropdownMessage.vue'
import DropdownNotification from '@/components/Header/DropdownNotification.vue'
import DropdownUser from '@/components/Header/DropdownUser.vue'
import ProfileCard from '@/components/ProfileCard.vue'
import DefaultAuthCard from '@/components/Auths/DefaultAuthCard.vue'

import App from './App.vue'
const app = createApp(App)
app.component('IconVue', Icon)
  .component('NotifError', NotifError)
  .component('ButtonAuth', buttonAuth)
  .component('AlertSuccess', AlertSuccess)
  .component('AlertView', AlertView)
  .component('ChartThree', ChartThree)
  .component('DataStatsOne', DataStatsOne)
  .component('ChartOne', ChartOne)
  .component('ChartTwo', ChartTwo)
  .component('ChatCard', ChatCard)
  .component('DefaultLayout', DefaultLayout)
  .component('MapOne', MapOne)
  .component('TableOne', TableOne)
  .component('BreadcrumbDefault', BreadcrumbDefault)
  .component('DefaultCard', DefaultCard)
  .component('InputGroup', InputGroup)
  .component('SelectGroup', SelectGroup)
  .component('TableTwo', TableTwo)
  .component('TableThree', TableThree)
  .component('DarkModeSwitcher', DarkModeSwitcher)
  .component('DropdownMessage', DropdownMessage)
  .component('DropdownNotification', DropdownNotification)
  .component('DropdownUser', DropdownUser)
  .component('DefaultAuthCard', DefaultAuthCard)
  .component('ProfileCard', ProfileCard)
  .component('TableFilterLocation', TableFilterLocation)
  .component('downloadExcel', JsonExcel)
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
