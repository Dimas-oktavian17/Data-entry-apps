<script setup lang="ts">
import BreadcrumbDefault from '@/components/Breadcrumbs/BreadcrumbDefault.vue'
import DefaultCard from '@/components/Forms/DefaultCard.vue'
import InputGroup from '@/components/Forms/InputGroup.vue'
import SelectGroup from '@/components/Forms/SelectGroup.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

import { ref } from 'vue'

const pageTitle = ref('Form Layout')
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
        <InputGroup label="First name" type="text" placeholder="Enter your first name" customClasses="w-full xl:w-1/2" />

        <InputGroup label="Last name" type="text" placeholder="Enter your last name" customClasses="w-full xl:w-1/2" />
       </div>

       <InputGroup label="Email" type="email" placeholder="Enter your email address" customClasses="mb-4.5" required />

       <InputGroup label="Subject" type="text" placeholder="Enter your subject" customClasses="mb-4.5" />

       <SelectGroup />

       <div class="mb-6">
        <label class="mb-2.5 block text-black dark:text-white"> Message </label>
        <textarea rows="6" placeholder="Type your message"
         class="w-full rounded border-[1.5px] text-black border-stroke bg-transparent py-3 px-5 font-normal outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:text-white dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"></textarea>
       </div>

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
