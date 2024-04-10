import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { formPinia } from '@/stores/formAPI/index';
// Define a type or interface for the array of numbers
type NumberCount = number;
export const PagginationStore = defineStore('PagginationStore', () => {
 // state
 const DataUsers = formPinia()
 const page = ref<NumberCount>(1)
 const pageSize = ref<NumberCount>(10)
 const data = ref([])
 const Database = ref(DataUsers.filterUsers)
 // getters
 const RealData = computed(() => data.value)
 // Actions
 function fetch(page: NumberCount, pageSize: NumberCount) {
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
  fetch(currentPage, currentPageSize).then((responseData) => {
   data.value = responseData
  });
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

