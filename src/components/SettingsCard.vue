<script setup>
// import { ref, computed, watchEffect, watch, onMounted } from 'vue';
// firebase
import { useFileDialog } from '@vueuse/core'
// pinia
import { excelStore } from '@/stores/users/updateUsers.js';
import { storeToRefs } from 'pinia';
const UpdateUsers = excelStore()
const { phoneUser, emailUser, photoUser } = storeToRefs(UpdateUsers);
// import userPhoto from '@/assets/images/user/user-03.png'
// Handle form submission for personal information
const handleSubmit = async () => await UpdateUsers.HandleSubmit(UpdateUsers.formData.fullName)
// Handle cancel action for personal information
const handleCancel = async () => await UpdateUsers.HandleCancel(UpdateUsers.formData.fullName)
// Handle form submission for user photo
const handlePhotoSubmit = async () => await UpdateUsers.HandlePhotoSubmit(files.value, UpdateUsers.filename.value)
// const filename = ref('')
const { files, open } = useFileDialog()
// Handle file change for user photo
// const handleFileChange = (event) => UpdateUsers.HandleFileChange(event.target.files[0])

// const handlePhotoCancel = () => {
//  // Handle cancel action for user photo
// }

// const deletePhoto = () => {
//  // Handle delete action for user photo
// }

// Handle update action for user photo
const updatePhoto = async () => await UpdateUsers.UpdatePhoto(UpdateUsers.filename.value)

</script>

<template>
 <div class="grid grid-cols-5 gap-8">
  <!-- Personal Information Section -->
  <div class="col-span-5 xl:col-span-3">
   <div class="bg-white border rounded-sm border-stroke shadow-default dark:border-strokedark dark:bg-boxdark">
    <div class="py-4 border-b border-stroke px-7 dark:border-strokedark">
     <h3 class="font-medium text-black dark:text-white">Personal Information</h3>
    </div>
    <div class="p-7">

     <form @submit.prevent="handleSubmit">
      <!-- Full Name Section -->
      <div class="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
       <div class="w-full">
        <label class="block mb-3 text-sm font-medium text-black dark:text-white" for="fullName">Full
         Name</label>
        <div class="relative">
         <span class="absolute left-4.5 top-4">
          <svg class="fill-current" width="20" height="20" viewBox="0 0 20 20" fill="none"
           xmlns="http://www.w3.org/2000/svg">
           <g opacity="0.8">
            <path fill-rule="evenodd" clip-rule="evenodd"
             d="M3.72039 12.887C4.50179 12.1056 5.5616 11.6666 6.66667 11.6666H13.3333C14.4384 11.6666 15.4982 12.1056 16.2796 12.887C17.061 13.6684 17.5 14.7282 17.5 15.8333V17.5C17.5 17.9602 17.1269 18.3333 16.6667 18.3333C16.2064 18.3333 15.8333 17.9602 15.8333 17.5V15.8333C15.8333 15.1703 15.5699 14.5344 15.1011 14.0655C14.6323 13.5967 13.9964 13.3333 13.3333 13.3333H6.66667C6.00363 13.3333 5.36774 13.5967 4.8989 14.0655C4.43006 14.5344 4.16667 15.1703 4.16667 15.8333V17.5C4.16667 17.9602 3.79357 18.3333 3.33333 18.3333C2.8731 18.3333 2.5 17.9602 2.5 17.5V15.8333C2.5 14.7282 2.93899 13.6684 3.72039 12.887Z"
             fill="" />
            <path fill-rule="evenodd" clip-rule="evenodd"
             d="M9.99967 3.33329C8.61896 3.33329 7.49967 4.45258 7.49967 5.83329C7.49967 7.214 8.61896 8.33329 9.99967 8.33329C11.3804 8.33329 12.4997 7.214 12.4997 5.83329C12.4997 4.45258 11.3804 3.33329 9.99967 3.33329ZM5.83301 5.83329C5.83301 3.53211 7.69849 1.66663 9.99967 1.66663C12.3009 1.66663 14.1663 3.53211 14.1663 5.83329C14.1663 8.13448 12.3009 9.99996 9.99967 9.99996C7.69849 9.99996 5.83301 8.13448 5.83301 5.83329Z"
             fill="" />
           </g>
          </svg>
         </span>
         <input v-model="UpdateUsers.formData.fullName"
          class="rounded border border-stroke bg-gray py-3 pl-11.5 w-full pr-4.5 font-normal text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
          type="text" name="fullName" id="fullName" placeholder="Devid Jhon" />
        </div>
       </div>
       <!-- Phone Number Section -->
       <div class="hidden w-full sm:w-1/2">
        <label class="block mb-3 text-sm font-medium text-black dark:text-white" for="phoneNumber">Phone
         Number</label>
        <input v-model="phoneUser"
         class="w-full rounded border border-stroke bg-gray py-3 px-4.5 font-normal text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
         type="text" name="phoneNumber" id="phoneNumber" placeholder="+990 3343 7865" />
       </div>
      </div>
      <!-- Email Address Section -->
      <div class="mb-5.5 ">
       <label class="block mb-3 text-sm font-medium text-black dark:text-white" for="emailAddress">Email
        Address</label>
       <div class="relative">
        <span class="absolute left-4.5 top-4">
         <svg class="fill-current" width="20" height="20" viewBox="0 0 20 20" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.8">
           <path fill-rule="evenodd" clip-rule="evenodd"
            d="M3.33301 4.16667C2.87658 4.16667 2.49967 4.54357 2.49967 5V15C2.49967 15.4564 2.87658 15.8333 3.33301 15.8333H16.6663C17.1228 15.8333 17.4997 15.4564 17.4997 15V5C17.4997 4.54357 17.1228 4.16667 16.6663 4.16667H3.33301ZM0.833008 5C0.833008 3.6231 1.9561 2.5 3.33301 2.5H16.6663C18.0432 2.5 19.1663 3.6231 19.1663 5V15C19.1663 16.3769 18.0432 17.5 16.6663 17.5H3.33301C1.9561 17.5 0.833008 16.3769 0.833008 15V5Z"
            fill="" />
           <path fill-rule="evenodd" clip-rule="evenodd"
            d="M0.983719 4.52215C1.24765 4.1451 1.76726 4.05341 2.1443 4.31734L9.99975 9.81615L17.8552 4.31734C18.2322 4.05341 18.7518 4.1451 19.0158 4.52215C19.2797 4.89919 19.188 5.4188 18.811 5.68272L10.4776 11.5161C10.1907 11.7169 9.80879 11.7169 9.52186 11.5161L1.18853 5.68272C0.811486 5.4188 0.719791 4.89919 0.983719 4.52215Z"
            fill="" />
          </g>
         </svg>
        </span>
        <input readonly v-model="emailUser"
         class="w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 font-normal text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
         type="email" name="emailAddress" id="emailAddress" placeholder="devidjond45@gmail.com" />
       </div>
      </div>

      <!-- Save and Cancel Buttons -->
      <div class="flex justify-end gap-4.5">
       <button
        class="flex justify-center px-6 py-2 font-medium text-black border rounded border-stroke hover:shadow-1 dark:border-strokedark dark:text-white"
        type="button" @click="handleCancel">
        Cancel
       </button>
       <button class="flex justify-center px-6 py-2 font-medium rounded bg-primary text-gray hover:bg-opacity-90"
        type="submit">
        Save
       </button>
      </div>
     </form>
    </div>
   </div>
  </div>

  <!-- Your Photo Section -->
  <div class="col-span-5 xl:col-span-2">
   <div class="bg-white border rounded-sm border-stroke shadow-default dark:border-strokedark dark:bg-boxdark">
    <div class="py-4 border-b border-stroke px-7 dark:border-strokedark">
     <h3 class="font-medium text-black dark:text-white">Your Photo</h3>
    </div>
    <div class="p-7">
     <form @submit.prevent="handlePhotoSubmit">
      <!-- User Photo Section -->
      <div class="flex items-center gap-3 mb-4">
       <figure>
        <img class="rounded-full h-14 w-14" :src="photoUser" :alt="UpdateUsers.formData.fullName" />
       </figure>
       <div>
        <span class="mb-1.5 font-medium text-black dark:text-white">Edit your photo</span>
        <span class="flex gap-2.5">
         <button class="text-sm font-medium hover:text-primary" @click="deletePhoto">
          Delete
         </button>
         <button class="text-sm font-medium hover:text-primary" @click="updatePhoto">
          Update
         </button>
        </span>
       </div>
      </div>
      <!-- File Upload Section -->

      <figure>
       <img :src="UpdateUsers.filename.value" />
      </figure>
      <button
       class="block  relative mb-5.5  w-full cursor-pointer appearance-none rounded border-2 border-dashed border-primary bg-gray py-4 px-4 dark:bg-meta-4 sm:py-7.5 "
       @click="open({ accept: 'image/*', multiple: false })">
       <!-- <div id="FileUpload"> -->
       <!-- <input type="file" accept="image/*"
        class="absolute inset-0 z-50 w-full h-full p-0 m-0 outline-none opacity-0 cursor-pointer"
        @change="handleFileChange" /> -->
       <div class="flex flex-col items-center justify-center space-y-3">

        <span
         class="flex items-center justify-center w-10 h-10 bg-white border rounded-full border-stroke dark:border-strokedark dark:bg-boxdark">
         <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
           d="M1.99967 9.33337C2.36786 9.33337 2.66634 9.63185 2.66634 10V12.6667C2.66634 12.8435 2.73658 13.0131 2.8616 13.1381C2.98663 13.2631 3.1562 13.3334 3.33301 13.3334H12.6663C12.8431 13.3334 13.0127 13.2631 13.1377 13.1381C13.2628 13.0131 13.333 12.8435 13.333 12.6667V10C13.333 9.63185 13.6315 9.33337 13.9997 9.33337C14.3679 9.33337 14.6663 9.63185 14.6663 10V12.6667C14.6663 13.1971 14.4556 13.7058 14.0806 14.0809C13.7055 14.456 13.1968 14.6667 12.6663 14.6667H3.33301C2.80257 14.6667 2.29387 14.456 1.91879 14.0809C1.54372 13.7058 1.33301 13.1971 1.33301 12.6667V10C1.33301 9.63185 1.63148 9.33337 1.99967 9.33337Z"
           fill="#3C50E0" />
          <path fill-rule="evenodd" clip-rule="evenodd"
           d="M7.5286 1.52864C7.78894 1.26829 8.21106 1.26829 8.4714 1.52864L11.8047 4.86197C12.0651 5.12232 12.0651 5.54443 11.8047 5.80478C11.5444 6.06513 11.1223 6.06513 10.8619 5.80478L8 2.94285L5.13807 5.80478C4.87772 6.06513 4.45561 6.06513 4.19526 5.80478C3.93491 5.54443 3.93491 5.12232 4.19526 4.86197L7.5286 1.52864Z"
           fill="#3C50E0" />
          <path fill-rule="evenodd" clip-rule="evenodd"
           d="M7.99967 1.33337C8.36786 1.33337 8.66634 1.63185 8.66634 2.00004V10C8.66634 10.3682 8.36786 10.6667 7.99967 10.6667C7.63148 10.6667 7.33301 10.3682 7.33301 10V2.00004C7.33301 1.63185 7.63148 1.33337 7.99967 1.33337Z"
           fill="#3C50E0" />
         </svg>
        </span>
        <p class="text-sm font-medium">
         <span class="text-primary">Click to upload</span> or drag and drop
        </p>
        <p class="mt-1.5 text-sm font-medium">SVG, PNG, JPG or GIF</p>
        <p class="text-sm font-medium">(max, 800 X 800px)</p>
       </div>
       <!-- </div> -->
      </button>

      <!-- Save and Cancel Buttons for Photo Section -->
      <div class="flex justify-end gap-4.5">
       <button
        class="flex justify-center px-6 py-2 font-medium text-black border rounded border-stroke hover:shadow-1 dark:border-strokedark dark:text-white"
        type="button" @click="handlePhotoCancel">
        Cancel
       </button>
       <button class="flex justify-center px-6 py-2 font-medium rounded bg-primary text-gray hover:bg-opacity-90"
        type="submit">
        Save
       </button>
      </div>
     </form>
    </div>
   </div>
  </div>
 </div>
</template>
