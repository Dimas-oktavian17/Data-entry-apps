<script setup>
import {
 onMounted,
 // ref,
 watchEffect, watch
} from 'vue'
import { storeToRefs } from 'pinia'
// import { UsersPinia } from '@/stores/users/users'
import { formPinia } from '@/stores/formAPI/index'
import { formUsers } from '@/stores/users/formUsers';
import { excelStore } from '@/stores/users/updateUsers';

const formStore = formPinia()
// const Users = UsersPinia()
const FormUsers = formUsers()
// Author information
// const { name, Email, photo, uid } = storeToRefs(Users)
const {
 // provinces,
 cities,
 kecamatan,
 kelurahan,
 filterUsers,
} = storeToRefs(formStore)
const {
 // formID,
 // names,
 // age,
 // position,
 // statusKaryawan,
 selectedProvince,
 selectedCity,
 selectedDistrict,
 selectedVillages
} = storeToRefs(FormUsers)
// data form
const handleDelete = (index) => FormUsers.HandleDelete(index)
// const handleEdit = async (id) => FormUsers.HandleEdit(id)
// const handleSubmit = async () => FormUsers.HandleUpdate(
//  formID.value,
//  name.value,
//  Email.value,
//  uid.value,
//  photo.value,
//  names.value,
//  age.value,
//  position.value,
//  statusKaryawan.value,
//  selectedProvince.value,
//  selectedCity.value,
//  selectedDistrict.value,
//  selectedVillages.value,
// )
// const isOptionSelected = ref(false)
// const changeTextColor = () => isOptionSelected.value = true
// const pageTitle = ref('Form Layout')
onMounted(async () => formStore.LoadProvinces())
// Fetching data 
const fetchProvinces = async ({ id }) => formStore.fetchProvinces({ id }, selectedCity.value, selectedDistrict.value)
const fecthCity = async ({ id }) => formStore.fecthCity({ id }, selectedDistrict.value)
const fetchDistrict = async ({ id }) => formStore.fetchDistrict({ id }, selectedVillages.value)
// Watch effect for data form
watch(selectedProvince, fetchProvinces, { immediate: true })
watch(selectedCity, fecthCity, { immediate: true })
watch(selectedDistrict, fetchDistrict, { immediate: true })
const handleProvince = () => FormUsers.HandleProvince(
 selectedCity.value,
 selectedDistrict.value,
 selectedVillages.value,
 cities.value,
 kecamatan.value,
 kelurahan.value
)
const handleCity = () => FormUsers.HandleCity(
 selectedDistrict.value,
 kecamatan.value,
 kelurahan.value,
 selectedVillages.value
)
const handleDistrict = () => FormUsers.HandleDistrict(kelurahan.value, selectedVillages.value)

watchEffect(() => selectedProvince.value !== null && handleProvince())
watchEffect(() => selectedCity.value !== null && handleCity())
watchEffect(() => selectedDistrict.value !== null && handleDistrict())
</script>

<template>
 <div
  class="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
  <header class="grid grid-cols-1 place-items-end">
   <!-- {{ testUser }} -->
   <download-excel
    class="flex flex-row-reverse justify-center px-6 py-2 my-4 text-white transition-all rounded-md cursor-pointer hover:transition-all align-items-center bg-primary hover:opacity-80"
    @click="excelStore().generateFlattenedData" :data="excelStore().flattenedData"
    :fields="excelStore().flattenedFields" worksheet="Data Karyawan" name="Data_Karyawan.xls">
    Download
    <IconVue icon="material-symbols:download" class="w-6 h-auto" />
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

     <tr v-for="({ name, jabatan, status_karyawan, umur, id }) in filterUsers" :key="id">
      <td class="px-4 py-5 pl-9 xl:pl-11">
       <div v-if="open" class="absolute -translate-x-1/2 -translate-y-1/2 z-999999 top-1/2 left-1/2">
        <button @click="open = false">
         <IconVue icon="maki:cross"
          class="flex flex-row items-end justify-end w-6 h-auto font-medium text-black dark:text-white" />
        </button>
        <AlertView :data="dataView" />
       </div>
       <AlertSucces :title="name" />
       <h5 class="font-medium text-black dark:text-white">{{ name }}</h5>
       <p class="text-sm">{{ umur }} Thn</p>
      </td>
      <td class="px-4 py-5">
       <p class="text-black dark:text-white">{{ jabatan }}</p>
      </td>
      <td class="px-4 py-5">
       <p class="inline-flex px-3 py-1 text-sm font-medium rounded-full bg-opacity-10" :class="{
     'bg-warning text-warning': status_karyawan === 'kontrak',
     'bg-danger text-danger': status_karyawan === 'magang',
     'bg-success text-success': status_karyawan === 'kartap'
    }">
        {{ status_karyawan }}
       </p>
      </td>
      <td class="px-4 py-5">
       <div class="flex items-center space-x-3.5">
        <router-link :to="{ name: 'tablesDetails', params: { id: id } }">
         <IconVue icon="ph:eye-bold" class="hover:text-primary w-[18px] h-auto" />
        </router-link>
        <!--  -->
        <button @click="handleDelete(id)" class="hover:text-primary">
         <IconVue icon="ion:trash-outline" class="hover:text-primary w-[18px] h-auto" />
        </button>
        <!-- @click="handleEdit(id)" -->
        <router-link :to="{ name: 'tablesEdits', params: { id: id } }" class="hover:text-primary">
         <IconVue icon="akar-icons:edit" class="hover:text-primary w-[18px] h-auto" />
        </router-link>
       </div>
      </td>
     </tr>
    </tbody>
   </table>
  </div>
 </div>
</template>