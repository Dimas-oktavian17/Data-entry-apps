<script setup>
import { useCollection } from 'vuefire'
import { karyawanRef } from '@/firebase'
const dataKaryawan = useCollection(karyawanRef)
</script>

<template>
 <div
  class="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
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
     <tr v-for="({ name, jabatan, status_karyawan, umur, provinsi, kota, kecamatan, kelurahan, index }) in dataKaryawan"
      :key="index">
      <td class="px-4 py-5 pl-9 xl:pl-11">
       <h5 class="font-medium text-black dark:text-white">{{ name }}</h5>
       <p class="text-sm">{{ umur }}</p>
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
        <button>
         <IconVue icon="ph:eye-bold" class="hover:text-primary w-[18px] h-auto" />
        </button>

        <button class="hover:text-primary">
         <IconVue icon="ion:trash-outline" class="hover:text-primary w-[18px] h-auto" />
        </button>

        <button class="hover:text-primary">
         <IconVue icon="akar-icons:edit" class="hover:text-primary w-[18px] h-auto" />
        </button>
       </div>
      </td>
     </tr>
    </tbody>
   </table>
  </div>
 </div>
</template>
