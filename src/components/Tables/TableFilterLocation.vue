<script setup>
import { onMounted, ref, watchEffect, watch, } from 'vue'
import { storeToRefs } from 'pinia'
import { formPinia } from '@/stores/formAPI/index'

const formStore = formPinia()

const {
 provinces,
 cities,
 kecamatan,
 kelurahan,
} = storeToRefs(formStore)

const selectedProvince = ref([])
const selectedCity = ref([])
const selectedDistrict = ref([])
const selectedVillages = ref(null)
onMounted(async () => {
 formStore.LoadProvinces()
 console.log(selectedProvince.value.id);
})
// Fetching data 
// Fetching data 
const fetchProvinces = async (obj) => {
 // checking the parameter from select is null or not, procces if not null
 const id = obj?.id;
 id && formStore.fetchProvinces({ id }, selectedCity.value, selectedDistrict.value)
}
const fecthCity = async (obj) => {
 // checking the parameter from select is null or not, procces if not null
 const id = obj?.id;
 id && formStore.fecthCity({ id }, selectedDistrict.value)
}
const fetchDistrict = async (obj) => {
 // checking the parameter from select is null or not, procces if not null
 const id = obj?.id;
 id && formStore.fetchDistrict({ id }, selectedVillages.value)
}
// Watch effect for data form
watch(selectedProvince, fetchProvinces, { immediate: true })
watch(selectedCity, fecthCity, { immediate: true })
watch(selectedDistrict, fetchDistrict, { immediate: true })
const handleProvince = () => {
 selectedCity.value = null
 selectedDistrict.value = null
 selectedVillages.value = null
 cities.value = null
 kecamatan.value = null
 kelurahan.value = null
}
const handleCity = () => {
 selectedDistrict.value = null
 kecamatan.value = null
 kelurahan.value = null
 selectedVillages.value = null
}
const handleDistrict = () => {
 kelurahan.value = null
 selectedVillages.value = null
}

watchEffect(() => selectedProvince.value !== null && handleProvince())
watchEffect(() => selectedCity.value !== null && handleCity())
watchEffect(() => selectedDistrict.value !== null && handleDistrict())

</script>

<template>
 <div class="max-w-full overflow-x-auto">
  <table class="w-full table-auto">
   <thead>
    <tr class="text-left bg-gray-2 dark:bg-meta-4">
     <th class="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
      <label class="mb-2.5 block text-black dark:text-white mt-2.5">Province</label>
      <div class="relative z-20 bg-transparent dark:bg-form-input">
       <select v-model="selectedProvince"
        class="relative z-20 w-full px-5 py-3 transition bg-transparent border rounded outline-none appearance-none border-stroke focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
        :class="{ 'text-black dark:text-white': isOptionSelected }" @change="changeTextColor">
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
     </th>
     <th class="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
      <label class="mb-2.5 block text-black dark:text-white mt-2.5">City</label>
      <div class="relative z-20 bg-transparent dark:bg-form-input">
       <select :disabled="cities === null" v-model="selectedCity"
        class="relative z-20 w-full px-5 py-3 transition bg-transparent border rounded outline-none appearance-none border-stroke focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
        :class="{ 'text-black dark:text-white': isOptionSelected }" @change="changeTextColor">
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
     </th>
     <th class="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
      <!-- kecamatan -->
      <label class="mb-2.5 block text-black dark:text-white mt-2.5">Kecamatan</label>
      <div class="relative z-20 bg-transparent dark:bg-form-input">
       <select :disabled="selectedCity === null" v-model="selectedDistrict"
        class="relative z-20 w-full px-5 py-3 transition bg-transparent border rounded outline-none appearance-none border-stroke focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
        :class="{ 'text-black dark:text-white': isOptionSelected }" @change="changeTextColor">
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
     </th>
     <th class="px-4 py-4 font-medium text-black dark:text-white">
      <!-- kelurahan -->
      <label class="mb-2.5 block text-black dark:text-white mt-2.5">Kelurahan</label>
      <div class="relative z-20 bg-transparent dark:bg-form-input">
       <select :disabled="selectedDistrict === null" v-model="selectedVillages"
        class="relative z-20 w-full px-5 py-3 transition bg-transparent border rounded outline-none appearance-none border-stroke focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
        :class="{ 'text-black dark:text-white': isOptionSelected }" @change="changeTextColor">
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
     </th>
    </tr>
   </thead>
  </table>
 </div>
</template>