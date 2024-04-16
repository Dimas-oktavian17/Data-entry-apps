import { defineStore } from 'pinia'
import { useRoute, useRouter } from 'vue-router'
import { computed, ref } from 'vue'
import { TableStore } from '@/stores/tables/tableStore'
export const useRouteStore = defineStore('route', () => {
 // state
 const route = ref(useRoute())
 const TableDataStore = TableStore()
 const router = useRouter()
 // getters
 const RouteName = computed(() => route.value.name)
 // actions 
 const GoBack = () => {
  router.back()
  TableDataStore.dataView = null
 }
 return {
  TableDataStore,
  route,
  RouteName,
  GoBack,
 }
})
