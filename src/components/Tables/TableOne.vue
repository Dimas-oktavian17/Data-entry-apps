<script setup>
import { TableOneStore } from '@/stores/tables/TableOneStore';
import { storeToRefs } from 'pinia'
const { UsersInput } = storeToRefs(TableOneStore())
</script>

<template>
 <div
  class="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
  <h4 class="mb-6 text-xl font-semibold text-black dark:text-white">Top Channels</h4>

  <div class="flex flex-col">
   <div class="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-4">
    <div class="p-2.5 xl:p-5">
     <h5 class="text-sm font-medium uppercase xsm:text-base">Top Admin</h5>
    </div>
    <div class="p-2.5 text-center xl:p-5">
     <h5 class="text-sm font-medium uppercase xsm:text-base">Name</h5>
    </div>
    <div class="p-2.5 text-center xl:p-5">
     <h5 class="text-sm font-medium uppercase xsm:text-base">Email</h5>
    </div>
    <div class="hidden p-2.5 text-center sm:block xl:p-5">
     <h5 class="text-sm font-medium uppercase xsm:text-base">Count</h5>
    </div>

   </div>

   <div v-for="({ name, email, photo, count, uid }) in UsersInput" :key="uid"
    :class="`grid grid-cols-3 sm:grid-cols-4  ${uid === UsersInput.length - 1 ? '' : 'border-b border-stroke dark:border-strokedark'}`">
    <div class="flex items-center gap-3 p-2.5 xl:p-5">
     <div class="flex-shrink-0">
      <img :src="photo" :alt="name" class="rounded-full size-16" />
     </div>
    </div>

    <div class="flex items-center justify-start p-2.5 xl:p-5">
     <p class="text-black dark:text-white">{{ name }}</p>
    </div>

    <div class="flex items-center justify-start  p-2.5 xl:p-5">
     <p class="break-all text-meta-3">{{ email }}</p>
    </div>

    <div class="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
     <p class="text-black dark:text-white">{{ count }}</p>
    </div>
   </div>

  </div>
 </div>
</template>
