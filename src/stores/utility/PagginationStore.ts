import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { formPinia } from '@/stores/formAPI/index';

export const PagginationStore = defineStore('PagginationStore', () => {
 // state
 const DataUsers = formPinia()
 const page = ref<number>(1)
 const pageSize = ref<number>(10)
 const data = ref<any>([])
 // getters
 const RealData = computed(() => data.value)
 // Actions
 function fetch(page: number, pageSize: number) {
  return new Promise((resolve) => {
   const start = (page - 1) * pageSize
   const end = start + pageSize
   setTimeout(() => {
    // data slice is must be state not getters
    resolve(DataUsers.filterUsers.slice(start, end))
   }, 100)
  })
 }
 fetchData(
  {
   currentPage: page.value,
   currentPageSize: pageSize.value,
  }
 )


 function fetchData({ currentPage, currentPageSize }: { currentPage: number, currentPageSize: number }) {
  fetch(currentPage, currentPageSize).then((responseData) => data.value = responseData);
 }
 return {
  DataUsers,
  page,
  pageSize,
  data,
  RealData,
  fetch,
  fetchData
 }
})

