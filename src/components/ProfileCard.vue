<script setup>
import { UsersPinia } from '@/stores/users/users';
import { ProfileStore } from '@/stores/profile/ProfileStore'
import { storeToRefs } from 'pinia';
const { name, email, uid, photo, users } = storeToRefs(UsersPinia())
const { LoginDate, CreateDate } = storeToRefs(ProfileStore())
</script>

<template>
 <!-- ====== Profile Section Start -->
 <div
  class="overflow-hidden bg-white border rounded-sm border-stroke shadow-default dark:border-strokedark dark:bg-boxdark">
  <div class="relative z-20 h-35 md:h-65">
   <!--  -->
   <img :src="photo" :alt="name" class="object-fill object-center w-full h-full rounded-tl-sm rounded-tr-sm">
   <div class="absolute z-10 bottom-1 right-1 xsm:bottom-4 xsm:right-4">
   </div>
  </div>
  <div class="px-4 pb-6 text-center lg:pb-8 xl:pb-11.5">
   <div
    class="relative z-30 grid w-full p-1 mx-auto rounded-full place-items-center -mt-22 h-30 max-w-30 bg-white/20 backdrop-blur sm:h-44 sm:max-w-44 sm:p-3">
    <div class="relative drop-shadow-2">
     <img :src="photo" class="rounded-full" :alt="name" />
    </div>
   </div>
   <div class="mt-4">
    <h3 class="mb-1.5 text-2xl font-medium text-black dark:text-white">{{ name }}</h3>
    <p class="font-medium">{{ uid }} - {{ email }}</p>
    <div
     class="mx-auto mt-4.5 mb-5.5 grid max-w-94 lg:grid-cols-3 rounded-md border border-stroke py-2.5 shadow-1 dark:border-strokedark dark:bg-[#37404F]">
     <div class="flex flex-col items-center justify-center gap-1 px-4 border-r border-stroke dark:border-strokedark">
      <span class="font-semibold text-black dark:text-white">{{ LoginDate }}</span>
      <span class="text-sm">Last Login</span>
     </div>
     <div class="flex flex-col items-center justify-center gap-1 px-4 border-r border-stroke dark:border-strokedark ">
      <span class="font-semibold text-black dark:text-white">{{ CreateDate }}</span>
      <span class="text-sm">Create At</span>
     </div>
     <div v-if="users.emailVerified" class="flex flex-col items-center justify-center gap-1 px-4 xsm:flex-row">
      <span class="font-semibold text-black dark:text-white">
       <IconVue icon="bitcoin-icons:verify-filled" class="text-green-400 size-8" />
      </span>
      <span class="text-sm">Verify</span>
     </div>
    </div>
   </div>
  </div>
 </div>
 <!-- ====== Profile Section End -->
</template>
