import { defineStore } from 'pinia'
import { useRoute, useRouter } from 'vue-router'
import { computed, ref } from 'vue'
import { TableStore } from '@/stores/tables/tableStore.js'
export const useRouteStore = defineStore('route', () => {
 // state
 const route = ref(useRoute())
 const TableDataStore = TableStore()
 const router = useRouter()
 // getters
 const RouteName = computed(() => route.value.name)
 // actions 
 const GoBack = () => {
  TableDataStore.dataView = null
  router.back()
 }
 return {
  TableDataStore,
  route,
  RouteName,
  GoBack,
 }
})
