import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { formPinia } from '@/stores/formAPI/index';

export const PagginationStore = defineStore('PagginationStore', () => {
 // state
 const DataUsers = formPinia()
 const page = ref<number>(1)
 const pageSize = ref<number>(10)
 const data = ref<any>([])
 const SearchInput = ref<string>('')
 const StatusEmployes = ref([])
 // getters
 const RealData = computed(() => {
  return data.value
   .filter((i: any) => i.name.toLowerCase().includes(SearchInput.value.toLowerCase()))
   .filter((i: any) => StatusEmployes.value.length === 0 || StatusEmployes.value.includes(i.status_karyawan));
 })
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
 const StatusEmploye = (status_karyawan: never) => !StatusEmployes.value.includes(status_karyawan) && StatusEmployes.value.push(status_karyawan);
 const DeleteStatusEmploye = () => StatusEmployes.value.splice(0, 1)
 return {
  DataUsers,
  page,
  pageSize,
  data,
  RealData,
  fetch,
  fetchData,
  SearchInput,
  StatusEmployes,
  StatusEmploye,
  DeleteStatusEmploye
 }
})

