<script setup>
import { onMounted, watchEffect } from 'vue'
import { storeToRefs } from 'pinia'
import { formPinia } from '@/stores/formAPI/index'
import { formUsers } from '@/stores/users/formUsers';
import { excelStore } from '@/stores/excel/excelStore';
import { useOffsetPagination } from '@vueuse/core'
import { PagginationStore } from '@/stores/utility/PagginationStore';
// State Management
const formStore = formPinia()
const FormUsers = formUsers()
const StorePaggination = PagginationStore()
const { filterUsers } = storeToRefs(formStore)
const { RealData, page, pageSize, SearchInput, StatusEmployes } = storeToRefs(StorePaggination)
// end State Management
const handleDelete = (index) => FormUsers.HandleDelete(index)
// Fetching data 
function fetch() { return StorePaggination.fetch(page.value, pageSize.value) }

watchEffect(() => {
 //  // This will run immediately and re-run whenever any reactive 
 //  // dependencies (properties of `StorePaggination`) change.
 fetchData({
  currentPage: page.value,
  currentPageSize: pageSize.value,
 })
 useOffsetPagination({
  total: filterUsers.value.length,
  page: 1,
  pageSize,
  onPageChange: StorePaggination.fetchData,
  onPageSizeChange: StorePaggination.fetchData,
 })
})
function fetchData(item) {
 const currentPage = item?.currentPage
 const currentPageSize = item?.currentPageSize
 StorePaggination.fetchData({ currentPage, currentPageSize })
}
const {
 currentPage,
 pageCount,
 isFirstPage,
 isLastPage,
 prev,
 next,
} = useOffsetPagination({
 total: filterUsers.value.length,
 page: 1,
 pageSize,
 onPageChange: StorePaggination.fetchData,
 onPageSizeChange: StorePaggination.fetchData,
})
onMounted(async () => {
 formStore.LoadProvinces()
 filterUsers.value
})
watchEffect(() => {
 currentPage,
  pageCount,
  isFirstPage,
  isLastPage,
  prev,
  next
})
const AddEmployeFilter = (status_karyawan) => StorePaggination.StatusEmploye(status_karyawan)
const DeleteEmployeFilter = () => StorePaggination.DeleteStatusEmploye()
</script>

<template>
 <div
  class="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
  <header
   class="grid grid-flow-col grid-cols-3 md:grid-cols-1 place-items-center md:place-items-start place-content-center">
   <FormKit v-model="SearchInput" type="text" name="name" label="Search name" placeholder="Abu Na'im"
    validation="required|length:5,15" :classes="{
     outer: 'mb-4.5 w-full xl:w-1/2',
     label:
      'mb-2.5 block text-black dark:text-white',
     inner: ' focus:outline-1',
     input:
      'w-full rounded border-[1.5px] text-black border-stroke bg-transparent py-3 px-5 font-normal outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:text-white dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary',
    }" />
   <div class="flex items-center justify-center md:mt-6">
    <button v-for="(data, index) in StatusEmployes" :key="index" @click="DeleteEmployeFilter"
     class="inline-flex px-3 py-1 text-sm font-medium rounded-full bg-opacity-10" :class="{
      'bg-warning text-warning': data === 'kontrak',
      'bg-danger text-danger': data === 'magang',
      'bg-success text-success': data === 'kartap'
     }">
     {{ data }}
    </button>
   </div>
   <download-excel
    class="flex flex-row-reverse justify-center px-6 py-2 text-white transition-all rounded-md cursor-pointer md:mt-5 hover:transition-all align-items-center bg-primary hover:opacity-80"
    @click="excelStore().generateFlattenedData()" :data="excelStore().flattenedData"
    :fields="excelStore().flattenedFields" worksheet="Data Karyawan" name="Data_Karyawan.xls">
    <IconVue icon="material-symbols:download" class="w-6 h-auto" />
    Download
   </download-excel>

  </header>
  <TableFilterLocation />
  <div class="max-w-full overflow-x-auto">
   <table class="w-full table-auto">
    <thead>
     <tr class="text-left bg-gray-2 dark:bg-meta-4">
      <th class="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
       Employe name
      </th>
      <th class="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
       Position
      </th>
      <th class="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">Status</th>
      <th class="px-4 py-4 font-medium text-black dark:text-white">Actions</th>
     </tr>
    </thead>
    <tbody>
     <tr v-for="({ name, jabatan, status_karyawan, umur, id }) in RealData" :key="id">
      <td class="px-4 py-5 pl-9 xl:pl-11">
       <AlertSucces :title="name" />
       <h5 class="font-medium text-black dark:text-white">{{ name }}</h5>
       <p class="text-sm">{{ umur }} Thn</p>
      </td>
      <td class="px-4 py-5">
       <p class="text-black dark:text-white">{{ jabatan }}</p>
      </td>
      <td class="px-4 py-5">
       <button @click="AddEmployeFilter(status_karyawan)"
        class="inline-flex px-3 py-1 text-sm font-medium rounded-full bg-opacity-10" :class="{
         'bg-warning text-warning': status_karyawan === 'kontrak',
         'bg-danger text-danger': status_karyawan === 'magang',
         'bg-success text-success': status_karyawan === 'kartap'
        }">
        {{ status_karyawan }}
       </button>
      </td>
      <td class="px-4 py-5">
       <div class="flex items-center space-x-3.5">
        <router-link :to="{ name: 'tablesDetails', params: { id: id } }">
         <IconVue icon="ph:eye-bold" class="hover:text-primary w-[18px] h-auto" />
        </router-link>
        <button @click="handleDelete(id)" class="hover:text-primary">
         <IconVue icon="ion:trash-outline" class="hover:text-primary w-[18px] h-auto" />
        </button>
        <router-link :to="{ name: 'tablesEdits', params: { id: id } }" class="hover:text-primary">
         <IconVue icon="akar-icons:edit" class="hover:text-primary w-[18px] h-auto" />
        </router-link>
       </div>
      </td>
     </tr>
    </tbody>
   </table>
   <div class="flex flex-row items-center justify-center my-4 space-x-4 lg:space-x-6">
    <ButtonPagination CustomClass="flex-row" label="Prev" :disabled="isFirstPage" @handleActions="prev">
     <IconVue icon="wpf:previous" class="w-6 h-auto mr-2" />
    </ButtonPagination>
    <ButtonPagination :label="item" v-for="item in pageCount" :key="item" :disabled="currentPage === item"
     @handleActions="currentPage = item" />
    <ButtonPagination CustomClass="flex-row-reverse" label="Next" :disabled="isLastPage" @click="next">
     <IconVue icon="wpf:previous" class="w-6 h-auto ml-2 rotate-180 " />
    </ButtonPagination>
   </div>
   Total: {{ filterUsers.length }}
  </div>
 </div>
</template>