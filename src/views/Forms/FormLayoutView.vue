<script setup >
import { onMounted, ref, watch, watchEffect } from 'vue'
import axios from 'axios'
import BreadcrumbDefault from '@/components/Breadcrumbs/BreadcrumbDefault.vue'
import DefaultCard from '@/components/Forms/DefaultCard.vue'
import InputGroup from '@/components/Forms/InputGroup.vue'
import SelectGroup from '@/components/Forms/SelectGroup.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'



// import locationAPI from '@/services/locationAPI'

const provinces = ref([])
const cities = ref(null)
const kecamatan = ref(null)
const kelurahan = ref(null)

const selectedProvince = ref(null)
const selectedCity = ref(null)
const selectedDistrict = ref(null)

const isOptionSelected = ref(false)

const changeTextColor = () => {
 isOptionSelected.value = true
}
``
const pageTitle = ref('Form Layout')
onMounted(async () => {
 try {
  const { data } = await axios.get(`https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json`)
  provinces.value = data
  console.log(provinces.value);
 } catch (error) {
  console.error(error)
 }
})

watch(selectedProvince, async (pronvinceID) => {
 try {
  if (pronvinceID === null) {
   selectedCity.value = null
   selectedDistrict.value = null

   cities.value = null
   kecamatan.value = null
   kelurahan.value = null
  } else {
   const { data } = await axios.get(`https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${pronvinceID}.json`)
   cities.value = data
   console.log(data);
  }
 } catch (error) {
  console.error(error);
 }
}
 , { immediate: true }

)


watch(selectedCity, async (cityID) => {
 try {
  if (cityID === null) {
   selectedDistrict.value = null

   kecamatan.value = null
   kelurahan.value = null
  }
  else {
   const { data } = await axios.get(`https://www.emsifa.com/api-wilayah-indonesia/api/districts/${cityID}.json`)
   kecamatan.value = data
   console.log(data);
  }
 } catch (error) {
  console.error(error);
 }
}
 , { immediate: true }
)

watch(selectedDistrict, async (districtID) => {
 try {
  if (districtID === null) {
   kelurahan.value = null
  }
  else {
   const { data } = await axios.get(`https://www.emsifa.com/api-wilayah-indonesia/api/villages/${districtID}.json`)
   kelurahan.value = data
   console.log(data);
  }
 } catch (error) {
  console.error(error);
 }
}
 , { immediate: true }
)
watchEffect(() => {
 if (selectedProvince.value !== null) {
  selectedCity.value = null
  selectedDistrict.value = null
  cities.value = null
  kecamatan.value = null
  kelurahan.value = null
 }
 else {
  kelurahan.value = null
 }
})
watchEffect(() => {
 if (selectedCity.value !== null) {
  selectedDistrict.value = null
  kecamatan.value = null
  kelurahan.value = null
 }
})
</script>

<template>
 <DefaultLayout>
  <!-- Breadcrumb Start -->
  <BreadcrumbDefault :pageTitle="pageTitle" />
  <!-- Breadcrumb End -->

  <!-- ====== Form Layout Section Start -->
  <div class="grid grid-cols-1 gap-9 ">
   <div class="flex flex-col gap-9">
    <!-- Contact Form Start -->
    <DefaultCard cardTitle="Contact Form">
     <form action="#">
      <div class="p-6.5">
       <div class="mb-4.5 flex flex-col gap-6 xl:flex-row">
        <InputGroup label="Your name" type="text" placeholder="Your name" customClasses="w-full xl:w-1/2" />
        <InputGroup label="Your age" type="number" placeholder="Your age" customClasses="w-full xl:w-1/2" />
       </div>
       <InputGroup label="Position" type="text" placeholder="Your position" customClasses="mb-4.5" required />
       <SelectGroup />
       <!-- location api -->
       <div class="mb-4.5">
        <label class="mb-2.5 block text-black dark:text-white mt-2.5">Province</label>

        <div class="relative z-20 bg-transparent dark:bg-form-input">
         <select v-model="selectedProvince"
          class="relative z-20 w-full px-5 py-3 transition bg-transparent border rounded outline-none appearance-none border-stroke focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          :class="{ 'text-black dark:text-white': isOptionSelected }" @change="changeTextColor">
          <option value="" disabled selected>Type your subject</option>
          <option v-for="({ name, id, index }) in provinces" :key="index" :value="id">{{ name }}</option>
         </select>
         <!-- {{ getProvince }} -->
         {{ selectedProvince }}
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
          :class="{ 'text-black dark:text-white': isOptionSelected }" @change="changeTextColor">
          <option value="" disabled selected>Type your subject</option>
          <option v-for="({ name, id, index }) in cities" :key="index" :value="id">{{ name }}</option>
         </select>
         <!-- {{ getProvince }} -->
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
          :class="{ 'text-black dark:text-white': isOptionSelected }" @change="changeTextColor">
          <option value="" disabled selected>Type your subject</option>
          <option v-for="({ name, id, index }) in kecamatan" :key="index" :value="id">{{ name }}</option>
         </select>
         <!-- {{ getProvince }} -->
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
         <select :disabled="selectedDistrict === null"
          class="relative z-20 w-full px-5 py-3 transition bg-transparent border rounded outline-none appearance-none border-stroke focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          :class="{ 'text-black dark:text-white': isOptionSelected }" @change="changeTextColor">
          <option value="" disabled selected>Type your subject</option>
          <option v-for="({ name, id, index }) in kelurahan" :key="index" :value="id">{{ name }}</option>
         </select>
         <!-- {{ getProvince }} -->
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
       <!-- <div class="mb-4.5">
        <label class="mb-2.5 block text-black dark:text-white"> Status </label>

        <div class="relative z-20 bg-transparent dark:bg-form-input">
         <select v-model="selectedOption"
          class="relative z-20 w-full px-5 py-3 transition bg-transparent border rounded outline-none appearance-none border-stroke focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          :class="{ 'text-black dark:text-white': isOptionSelected }" @change="changeTextColor">
          <option value="" disabled selected>Type your subject</option>
          <option v-for="({ name, id, index }) in provinces" :key="index" :value="id">{{ name }}</option>
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
       </div> -->
       <!-- <div class="mb-4.5">
        <label class="mb-2.5 block text-black dark:text-white"> Status </label>

        <div class="relative z-20 bg-transparent dark:bg-form-input">
         <select v-model="selectedOption"
          class="relative z-20 w-full px-5 py-3 transition bg-transparent border rounded outline-none appearance-none border-stroke focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          :class="{ 'text-black dark:text-white': isOptionSelected }" @change="changeTextColor">
          <option value="" disabled selected>Type your subject</option>
          <option v-for="({ name, id, index }) in provinces" :key="index" :value="id">{{ name }}</option>
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
       </div>
       <div class="mb-4.5">
        <label class="mb-2.5 block text-black dark:text-white"> Status </label>

        <div class="relative z-20 bg-transparent dark:bg-form-input">
         <select v-model="selectedOption"
          class="relative z-20 w-full px-5 py-3 transition bg-transparent border rounded outline-none appearance-none border-stroke focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          :class="{ 'text-black dark:text-white': isOptionSelected }" @change="changeTextColor">
          <option value="" disabled selected>Type your subject</option>
          <option v-for="({ name, id, index }) in provinces" :key="index" :value="id">{{ name }}</option>
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
       </div> -->

       <!-- end location api -->
       <button class="flex justify-center w-full p-3 font-medium rounded bg-primary text-gray hover:bg-opacity-90">
        Send Message
       </button>
      </div>
     </form>
    </DefaultCard>
    <!-- Contact Form End -->
   </div>


  </div>
  <!-- ====== Form Layout Section End -->
 </DefaultLayout>
</template>
