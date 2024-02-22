<script setup>
import { ref, onMounted, watchEffect, watch } from 'vue'
import { useCollection, useCurrentUser } from 'vuefire'
import { karyawanRef } from '@/firebase'
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
const dataKaryawan = useCollection(karyawanRef)
const dataView = ref([])
const open = ref(false)
const user = useCurrentUser();
const handleView = (name) => {
  const viewKaryawan = dataKaryawan.value.find(item => item.name === name)
  open.value = true
  dataView.value = viewKaryawan
}

// data form
const handleEdit = async (id) => {
  formID.value = id
  AlertsStatus.value = true
}
const handleSubmit = async () => {
  updateDoc(doc(karyawanRef, formID.value), {
    author: [{ name: user.value.displayName, email: user.value.email, uid: user.value.uid, picture: user.value.photoURL }],
    id: karyawanRef.id.length + 1,
    name: names.value,
    umur: age.value,
    jabatan: position.value,
    status_karyawan: statusKaryawan.value,
    provinsi: selectedProvince.value,
    kota: selectedCity.value,
    kecamatan: selectedDistrict.value,
    kelurahan: selectedVillages.value
  })
  AlertsStatus.value = false
}
// form edit function 
import { storeToRefs } from 'pinia'
import { formPinia } from '@/stores/formAPI/index'
import BreadcrumbDefault from '@/components/Breadcrumbs/BreadcrumbDefault.vue'
import DefaultCard from '@/components/Forms/DefaultCard.vue'
import InputGroup from '@/components/Forms/InputGroup.vue'
import SelectGroup from '@/components/Forms/SelectGroup.vue'

const formStore = formPinia()

const {
  provinces,
  cities,
  kecamatan,
  kelurahan,
} = storeToRefs(formStore)
// Data source for the input group
const names = ref('')
const age = ref(null)
const position = ref('')
const statusKaryawan = ref(null)
const selectedProvince = ref([])
const selectedCity = ref([])
const selectedDistrict = ref([])
const selectedVillages = ref(null)
const formID = ref(null)

const isOptionSelected = ref(false)
const AlertsSucces = ref(false)
const AlertsStatus = ref(false)
const changeTextColor = () => isOptionSelected.value = true
const pageTitle = ref('Form Layout')
const handleDelete = (index) => {
  deleteDoc(doc(karyawanRef, index))
  AlertsSucces.value = true
  setTimeout(() => AlertsSucces.value = false, 3000);
}
onMounted(async () => formStore.LoadProvinces())
// Fetching data 
const fetchProvinces = async ({ id }) => formStore.fetchProvinces({ id }, selectedCity.value, selectedDistrict.value)
const fecthCity = async ({ id }) => formStore.fecthCity({ id }, selectedDistrict.value)
const fetchDistrict = async ({ id }) => formStore.fetchDistrict({ id }, selectedVillages.value)
 
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
  <div v-if="AlertsStatus === false"
    class="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
    <TableFilterLocation/>
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
          <tr v-for="({ name, jabatan, status_karyawan, umur, id }) in dataKaryawan" :key="id">
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
                <button @click="handleView(name, index)">
                  <IconVue icon="ph:eye-bold" class="hover:text-primary w-[18px] h-auto" />
                </button>

                <button @click="handleDelete(id)" class="hover:text-primary">
                  <IconVue icon="ion:trash-outline" class="hover:text-primary w-[18px] h-auto" />
                </button>

                <button @click="handleEdit(id)" class="hover:text-primary">
                  <IconVue icon="akar-icons:edit" class="hover:text-primary w-[18px] h-auto" />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <!-- edit form -->
  <div class="" v-if="AlertsStatus !== false">
    <!-- Breadcrumb Start -->
    <BreadcrumbDefault :pageTitle="pageTitle" />
    <!-- Breadcrumb End -->

    <!-- ====== Form Layout Section Start -->
    <div class="grid grid-cols-1 gap-9 ">
      <div class="flex flex-col gap-9">
        <!-- Contact Form Start -->
        <DefaultCard cardTitle="Contact Form">
          <form @submit.prevent="handleSubmit">
            <div class="p-6.5">
              <div class="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <InputGroup v-model="names" label="Your name" type="text" placeholder="Your name"
                  customClasses="w-full xl:w-1/2" />
                <InputGroup v-model="age" label="Your age" type="number" placeholder="Your age"
                  customClasses="w-full xl:w-1/2" />
              </div>
              <InputGroup v-model="position" label="Position" type="text" placeholder="Your position"
                customClasses="mb-4.5" required />
              <SelectGroup v-model="statusKaryawan" />
              <!-- location api -->
              <div class="mb-4.5">
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
                <!-- City -->
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
              </div>
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
  </div>
</template>
