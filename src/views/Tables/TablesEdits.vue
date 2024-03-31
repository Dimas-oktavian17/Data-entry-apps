<script setup>
import { onMounted, watchEffect, watch, ref } from 'vue';
import { formPinia } from '@/stores/formAPI/index'
import { UsersPinia } from '@/stores/users/users'
import { formUsers } from '@/stores/users/formUsers';
import { TableStore } from "@/stores/tables/tableStore"
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';
const route = useRoute()
const ID = ref(route.params.id)
// State Management
const formStore = formPinia()
const FormUsers = formUsers()
const Users = UsersPinia()
const { name, Email, photo, uid } = storeToRefs(Users)
const {
 provinces,
 cities,
 kecamatan,
 kelurahan,
} = storeToRefs(formStore)
const {
 AlertsStatus,
 names,
 age,
 position,
 statusKaryawan,
 selectedProvince,
 selectedCity,
 selectedDistrict,
 selectedVillages
} = storeToRefs(FormUsers)
// end State Management
const pageTitle = ref('Form Layout')
// data form
const handleSubmit = async () => FormUsers.HandleUpdate(
 ID.value,
 name.value,
 Email.value,
 uid.value,
 photo.value,
 names.value,
 age.value,
 position.value,
 statusKaryawan.value,
 selectedProvince.value,
 selectedCity.value,
 selectedDistrict.value,
 selectedVillages.value,
)
// Fetching data 
const fetchProvinces = async (obj) => {
 // checking the parameter from select is null or not, procces if not null
 const id = obj?.id;
 id && formStore.fetchProvinces({ id }, selectedCity.value, selectedDistrict.value)
}
const fecthCity = async (obj) => {
 const id = obj?.id;
 id && formStore.fecthCity({ id }, selectedDistrict.value)
}
const fetchDistrict = async (obj) => {
 const id = obj?.id;
 id && formStore.fetchDistrict({ id }, selectedVillages.value)
}
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
// Watch Mutations API
watch(selectedDistrict, fetchDistrict, { immediate: true })
watch(selectedProvince, fetchProvinces, { immediate: true })
watch(selectedCity, fecthCity, { immediate: true })
watchEffect(() => selectedProvince.value !== null && handleProvince())
watchEffect(() => selectedCity.value !== null && handleCity())
watchEffect(() => selectedDistrict.value !== null && handleDistrict())
onMounted(() => TableStore().TableView())
</script>

<template>
 <DefaultLayout>
  <!-- edit form -->
  <!-- Breadcrumb Start -->
  <BreadcrumbDefault :pageTitle="pageTitle" />
  <!-- Breadcrumb End -->
  <!-- ====== Form Layout Section Start -->
  <div class="grid grid-cols-1 gap-9 ">
   <div class="flex flex-col gap-9">
    <!-- Contact Form Start -->
    <DefaultCard cardTitle="Contact Form">
     <AlertSuccess v-if="AlertsStatus" :title="names" />
     <FormKit type="form" @submit="handleSubmit">
      <div class="p-6.5">
       <div class="mb-4.5 flex flex-col gap-6 xl:flex-row">
        <FormKit v-model="names" type="text" name="name" label="Your name" placeholder="Abu Na'im"
         validation="required|length:5,15" :classes="{
   outer: 'mb-4.5 w-full xl:w-1/2',
   label:
    'mb-2.5 block text-black dark:text-white',
   inner: ' focus:outline-1',
   input:
    'w-full rounded border-[1.5px] text-black border-stroke bg-transparent py-3 px-5 font-normal outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:text-white dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary',
  }" />
        <FormKit v-model="age" type="number" name="age" label="Your age" placeholder="Your age" validation="required"
         :classes="{
   outer: 'mb-4.5 w-full xl:w-1/2',
   label:
    'mb-2.5 block text-black dark:text-white',
   inner: ' focus:outline-1',
   input:
    'w-full rounded border-[1.5px] text-black border-stroke bg-transparent py-3 px-5 font-normal outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:text-white dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary',
  }" />
       </div>
       <FormKit v-model="position" type="text" name="Position" label="Your position" placeholder="IT Staff"
        validation="required|length:5,15" :classes="{
   outer: 'mb-4.5 w-full ',
   label:
    'mb-2.5 block text-black dark:text-white',
   inner: ' focus:outline-1',
   input:
    'w-full rounded border-[1.5px] text-black border-stroke bg-transparent py-3 px-5 font-normal outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:text-white dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary',
  }" />
       <SelectGroup v-model="statusKaryawan" />
       <!-- location api -->
       <div class="mb-4.5">
        <label class="mb-2.5 block text-black dark:text-white mt-2.5">Province</label>
        <div class="relative z-20 bg-transparent dark:bg-form-input">
         <select v-model="selectedProvince"
          class="relative z-20 w-full px-5 py-3 transition bg-transparent border rounded outline-none appearance-none border-stroke focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          :class="{ 'text-black dark:text-white': TableStore().isOptionSelected }"
          @change="TableStore().changeTextColor()">
          <option value="" disabled selected>Type your subject</option>
          <option v-for="( item, index ) in provinces" :key="index" :value="item">
           {{ item.name }}
          </option>
         </select>
         <span class="absolute z-30 -translate-y-1/2 top-1/2 right-4">
          <svg class="fill-current" width="24" height="24" viewBox="0 0 24 24" fill="none"
           xmlns="http://www.w3.org/2000/svg">
           <g opacity="0.8">
            <path fill-rule="evenodd" clip-rule="evenodd"
             d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
             fill=""></path>
           </g>
          </svg>
         </span>
        </div>
        <!-- City -->
        <label class="mb-2.5 block text-black dark:text-white mt-2.5">City</label>
        <div class="relative z-20 bg-transparent dark:bg-form-input">
         <select :disabled="cities === null" v-model="selectedCity"
          class="relative z-20 w-full px-5 py-3 transition bg-transparent border rounded outline-none appearance-none border-stroke focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          :class="{ 'text-black dark:text-white': TableStore().isOptionSelected }"
          @change="TableStore().changeTextColor()">
          <option value="" disabled selected>Type your subject</option>
          <option v-for="( item, index ) in cities" :key="index" :value="item">{{ item.name }}</option>
         </select>
         <span class="absolute z-30 -translate-y-1/2 top-1/2 right-4">
          <svg class="fill-current" width="24" height="24" viewBox="0 0 24 24" fill="none"
           xmlns="http://www.w3.org/2000/svg">
           <g opacity="0.8">
            <path fill-rule="evenodd" clip-rule="evenodd"
             d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
             fill=""></path>
           </g>
          </svg>
         </span>
        </div>
        <!-- end city -->
        <!-- kecamatan -->
        <label class="mb-2.5 block text-black dark:text-white mt-2.5">Kecamatan</label>
        <div class="relative z-20 bg-transparent dark:bg-form-input">
         <select :disabled="selectedCity === null" v-model="selectedDistrict"
          class="relative z-20 w-full px-5 py-3 transition bg-transparent border rounded outline-none appearance-none border-stroke focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          :class="{ 'text-black dark:text-white': TableStore().isOptionSelected }"
          @change="TableStore().changeTextColor()">
          <option value="" disabled selected>Type your subject</option>
          <option v-for="(item, index) in kecamatan" :key="index" :value="item">{{ item.name }}</option>
         </select>
         <span class="absolute z-30 -translate-y-1/2 top-1/2 right-4">
          <svg class="fill-current" width="24" height="24" viewBox="0 0 24 24" fill="none"
           xmlns="http://www.w3.org/2000/svg">
           <g opacity="0.8">
            <path fill-rule="evenodd" clip-rule="evenodd"
             d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
             fill=""></path>
           </g>
          </svg>
         </span>
        </div>
        <!-- end kecamatan -->
        <!-- kelurahan -->
        <label class="mb-2.5 block text-black dark:text-white mt-2.5">Kelurahan</label>
        <div class="relative z-20 bg-transparent dark:bg-form-input">
         <select :disabled="selectedDistrict === null" v-model="selectedVillages"
          class="relative z-20 w-full px-5 py-3 transition bg-transparent border rounded outline-none appearance-none border-stroke focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          :class="{ 'text-black dark:text-white': TableStore().isOptionSelected }"
          @change="TableStore().changeTextColor()">
          <option value="" disabled selected>Type your subject</option>
          <option v-for="(item, index) in kelurahan" :key="index" :value="item">{{ item.name }}</option>
         </select>
         <span class="absolute z-30 -translate-y-1/2 top-1/2 right-4">
          <svg class="fill-current" width="24" height="24" viewBox="0 0 24 24" fill="none"
           xmlns="http://www.w3.org/2000/svg">
           <g opacity="0.8">
            <path fill-rule="evenodd" clip-rule="evenodd"
             d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
             fill=""></path>
           </g>
          </svg>
         </span>
        </div>
        <!-- end kelurahan -->
       </div>
       <!-- end location api -->
       <button class="flex justify-center w-full p-3 font-medium rounded bg-primary text-gray hover:bg-opacity-90">
        Send Message
       </button>
      </div>
     </FormKit>
    </DefaultCard>
   </div>
  </div>
  <!-- ====== Form Layout Section End -->
 </DefaultLayout>
</template>
