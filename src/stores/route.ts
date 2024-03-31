import { defineStore } from 'pinia'
import { useRoute } from 'vue-router'
import {computed, ref} from 'vue'
export const useRouteStore = defineStore('route', () => {
 // state
 const route =  ref(useRoute())
 // getters
 const RouteName = computed(()=>  route.value.name)
  return { route, RouteName}
})
