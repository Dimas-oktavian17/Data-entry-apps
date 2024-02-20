<script setup>
import { UsersPinia } from '@/stores/users/users'
import { storeToRefs } from 'pinia'

const Users = UsersPinia()
const { UsersInput, uniqueUsers } = storeToRefs(Users)
</script>

<template>
 <div
  class="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
  <h4 class="mb-6 text-xl font-semibold text-black dark:text-white">Top Channels</h4>

  <div class="flex flex-col">
   <div class="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
    <div class="p-2.5 xl:p-5">
     <h5 class="text-sm font-medium uppercase xsm:text-base">Top Admin</h5>
    </div>
    <div class="p-2.5 text-center xl:p-5">
     <h5 class="text-sm font-medium uppercase xsm:text-base">Visitors</h5>
    </div>
    <div class="p-2.5 text-center xl:p-5">
     <h5 class="text-sm font-medium uppercase xsm:text-base">Revenues</h5>
    </div>
    <div class="hidden p-2.5 text-center sm:block xl:p-5">
     <h5 class="text-sm font-medium uppercase xsm:text-base">Sales</h5>
    </div>
    <div class="hidden p-2.5 text-center sm:block xl:p-5">
     <h5 class="text-sm font-medium uppercase xsm:text-base">Conversion</h5>
    </div>
   </div>
   <div>
    <div v-for="({ name, email, count, uid }) in UsersInput" :key="uid">
     name: {{ email }} - total input: {{ count }}
    </div>
   </div>


  </div>
 </div>
</template>
