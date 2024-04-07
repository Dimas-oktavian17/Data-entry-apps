<script setup>
</script>

<template>
 <div class="flex flex-col gap-9">
  <!-- Sign In Start -->
  <DefaultCard cardTitle="Sign In Form">
   <form action="#">
    <div class="p-6.5">
     <InputGroup label="Email" type="email" placeholder="Enter your email address" customClasses="mb-4.5" />

     <InputGroup label="Password" type="password" placeholder="Enter your password" />

     <div class="mt-5 mb-5.5 flex items-center justify-between">
      <label for="formCheckbox" class="flex cursor-pointer">
       <div class="relative pt-0.5">
        <input type="checkbox" id="formCheckbox" class="sr-only taskCheckbox" />
        <div
         class="flex items-center justify-center w-5 h-5 mr-3 border rounded box border-stroke dark:border-form-strokedark dark:bg-form-input">
         <span class="text-white opacity-0">
          <svg class="fill-current" width="10" height="7" viewBox="0 0 10 7" fill="none"
           xmlns="http://www.w3.org/2000/svg">
           <path fill-rule="evenodd" clip-rule="evenodd"
            d="M9.70685 0.292804C9.89455 0.480344 10 0.734667 10 0.999847C10 1.26503 9.89455 1.51935 9.70685 1.70689L4.70059 6.7072C4.51283 6.89468 4.2582 7 3.9927 7C3.72721 7 3.47258 6.89468 3.28482 6.7072L0.281063 3.70701C0.0986771 3.5184 -0.00224342 3.26578 3.785e-05 3.00357C0.00231912 2.74136 0.10762 2.49053 0.29326 2.30511C0.4789 2.11969 0.730026 2.01451 0.992551 2.01224C1.25508 2.00996 1.50799 2.11076 1.69683 2.29293L3.9927 4.58607L8.29108 0.292804C8.47884 0.105322 8.73347 0 8.99896 0C9.26446 0 9.51908 0.105322 9.70685 0.292804Z"
            fill="" />
          </svg>
         </span>
        </div>
       </div>
       <p>Remember me</p>
      </label>

      <router-link to="/#" class="text-sm text-primary hover:underline">Forget password?</router-link>
     </div>

     <button class="flex justify-center w-full p-3 font-medium rounded bg-primary text-gray hover:bg-opacity-90">
      Sign In
     </button>
    </div>
   </form>
  </DefaultCard>
  <!-- Sign In End -->

  <!-- Sign Up Start -->

  <DefaultCard cardTitle="Sign Up Form">
   <form action="#">
    <div class="p-6.5">
     <InputGroup label="Name" type="text" placeholder="Enter full name" customClasses="mb-4.5" />

     <InputGroup label="Email" type="email" placeholder="Enter email address" customClasses="mb-4.5" />

     <InputGroup label="Password" type="password" placeholder="Enter password" customClasses="mb-4.5" />

     <InputGroup label="Re-type Password" type="password" placeholder="Re-enter" customClasses="mb-5.5" />

     <button class="flex justify-center w-full p-3 font-medium rounded bg-primary text-gray hover:bg-opacity-90">
      Sign Up
     </button>
    </div>
   </form>
  </DefaultCard>
  <!-- Sign Up End -->
 </div>

 <div class="flex flex-col gap-9">
  <!-- Sign In Start -->
  <DefaultCard cardTitle="Sign In Form">
   <form action="#">
    <div class="p-6.5">
     <InputGroup label="Email" type="email" placeholder="Enter your email address" customClasses="mb-4.5" />

     <InputGroup label="Password" type="password" placeholder="Enter your password" />

     <div class="mt-5 mb-5.5 flex items-center justify-between">
      <label for="formCheckbox" class="flex cursor-pointer">
       <div class="relative pt-0.5">
        <input type="checkbox" id="formCheckbox" class="sr-only taskCheckbox" />
        <div
         class="flex items-center justify-center w-5 h-5 mr-3 border rounded box border-stroke dark:border-form-strokedark dark:bg-form-input">
         <span class="text-white opacity-0">
          <svg class="fill-current" width="10" height="7" viewBox="0 0 10 7" fill="none"
           xmlns="http://www.w3.org/2000/svg">
           <path fill-rule="evenodd" clip-rule="evenodd"
            d="M9.70685 0.292804C9.89455 0.480344 10 0.734667 10 0.999847C10 1.26503 9.89455 1.51935 9.70685 1.70689L4.70059 6.7072C4.51283 6.89468 4.2582 7 3.9927 7C3.72721 7 3.47258 6.89468 3.28482 6.7072L0.281063 3.70701C0.0986771 3.5184 -0.00224342 3.26578 3.785e-05 3.00357C0.00231912 2.74136 0.10762 2.49053 0.29326 2.30511C0.4789 2.11969 0.730026 2.01451 0.992551 2.01224C1.25508 2.00996 1.50799 2.11076 1.69683 2.29293L3.9927 4.58607L8.29108 0.292804C8.47884 0.105322 8.73347 0 8.99896 0C9.26446 0 9.51908 0.105322 9.70685 0.292804Z"
            fill="" />
          </svg>
         </span>
        </div>
       </div>
       <p>Remember me</p>
      </label>

      <router-link to="/#" class="text-sm text-primary hover:underline">Forget password?</router-link>
     </div>

     <button class="flex justify-center w-full p-3 font-medium rounded bg-primary text-gray hover:bg-opacity-90">
      Sign In
     </button>
    </div>
   </form>
  </DefaultCard>
  <!-- Sign In End -->

  <!-- Sign Up Start -->

  <DefaultCard cardTitle="Sign Up Form">
   <form action="#">
    <div class="p-6.5">
     <InputGroup label="Name" type="text" placeholder="Enter full name" customClasses="mb-4.5" />

     <InputGroup label="Email" type="email" placeholder="Enter email address" customClasses="mb-4.5" />

     <InputGroup label="Password" type="password" placeholder="Enter password" customClasses="mb-4.5" />

     <InputGroup label="Re-type Password" type="password" placeholder="Re-enter" customClasses="mb-5.5" />

     <button class="flex justify-center w-full p-3 font-medium rounded bg-primary text-gray hover:bg-opacity-90">
      Sign Up
     </button>
    </div>
   </form>
  </DefaultCard>
  <!-- Sign Up End -->
  <!-- select -->
  <!-- <label for="status" class="mb-2.5 block text-black dark:text-white">
        Status 
        <select name="status"
         class="w-full rounded border-[1.5px] text-black border-stroke bg-transparent py-3 px-5 font-normal outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:text-white dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary flex flex-row items-center justify-start mt-2">
         <option value="kontrak">Kontrak</option>
         <option value="saab">Kartap</option>
         <option value="kontrak">Magang</option>
        </select>
       </label> -->

  <!-- text area -->
  <!-- <div class="mb-6">
        <label class="mb-2.5 block text-black dark:text-white"> Message </label>
        <textarea rows="6" placeholder="Type your message"
         class="w-full rounded border-[1.5px] text-black border-stroke bg-transparent py-3 px-5 font-normal outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:text-white dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"></textarea>
       </div> -->


  <!-- select -->
  <!-- <select name="" id=""
      class="relative z-20 inline-flex py-1 pl-3 pr-8 text-sm font-medium bg-transparent outline-none appearance-none">
      <option value="">Monthly</option>
      <option value="">Yearly</option>
     </select> -->
  <!-- <span class="absolute z-10 -translate-y-1/2 top-1/2 right-3">
      <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path
        d="M0.47072 1.08816C0.47072 1.02932 0.500141 0.955772 0.54427 0.911642C0.647241 0.808672 0.809051 0.808672 0.912022 0.896932L4.85431 4.60386C4.92785 4.67741 5.06025 4.67741 5.14851 4.60386L9.09079 0.896932C9.19376 0.793962 9.35557 0.808672 9.45854 0.911642C9.56151 1.01461 9.5468 1.17642 9.44383 1.27939L5.50155 4.98632C5.22206 5.23639 4.78076 5.23639 4.51598 4.98632L0.558981 1.27939C0.50014 1.22055 0.47072 1.16171 0.47072 1.08816Z"
        fill="#637381" />
       <path fill-rule="evenodd" clip-rule="evenodd"
        d="M1.22659 0.546578L5.00141 4.09604L8.76422 0.557869C9.08459 0.244537 9.54201 0.329403 9.79139 0.578788C10.112 0.899434 10.0277 1.36122 9.77668 1.61224L9.76644 1.62248L5.81552 5.33722C5.36257 5.74249 4.6445 5.7544 4.19352 5.32924C4.19327 5.32901 4.19377 5.32948 4.19352 5.32924L0.225953 1.61241C0.102762 1.48922 -4.20186e-08 1.31674 -3.20269e-08 1.08816C-2.40601e-08 0.905899 0.0780105 0.712197 0.211421 0.578787C0.494701 0.295506 0.935574 0.297138 1.21836 0.539529L1.22659 0.546578ZM4.51598 4.98632C4.78076 5.23639 5.22206 5.23639 5.50155 4.98632L9.44383 1.27939C9.5468 1.17642 9.56151 1.01461 9.45854 0.911642C9.35557 0.808672 9.19376 0.793962 9.09079 0.896932L5.14851 4.60386C5.06025 4.67741 4.92785 4.67741 4.85431 4.60386L0.912022 0.896932C0.809051 0.808672 0.647241 0.808672 0.54427 0.911642C0.500141 0.955772 0.47072 1.02932 0.47072 1.08816C0.47072 1.16171 0.50014 1.22055 0.558981 1.27939L4.51598 4.98632Z"
        fill="#637381" />
      </svg>
     </span> -->

  <!-- settingcard.vue -->
  <!-- Username Section -->
  <!-- <div class="mb-5.5">
       <label class="block mb-3 text-sm font-medium text-black dark:text-white" for="Username">Username</label>
       <input v-model="formData.username"
        class="w-full rounded border border-stroke bg-gray py-3 px-4.5 font-normal text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
        type="text" name="Username" id="Username" placeholder="devidjhon24" />
      </div> -->

  <!-- Bio Section -->
  <!-- <div class="mb-5.5">
       <label class="block mb-3 text-sm font-medium text-black dark:text-white" for="bio">BIO</label>
       <div class="relative">
        <span class="absolute left-4.5 top-4">
         <svg class="fill-current" width="20" height="20" viewBox="0 0 20 20" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.8" clip-path="url(#clip0_88_10224)">
           <path fill-rule="evenodd" clip-rule="evenodd"
            d="M1.56524 3.23223C2.03408 2.76339 2.66997 2.5 3.33301 2.5H9.16634C9.62658 2.5 9.99967 2.8731 9.99967 3.33333C9.99967 3.79357 9.62658 4.16667 9.16634 4.16667H3.33301C3.11199 4.16667 2.90003 4.25446 2.74375 4.41074C2.58747 4.56702 2.49967 4.77899 2.49967 5V16.6667C2.49967 16.8877 2.58747 17.0996 2.74375 17.2559C2.90003 17.4122 3.11199 17.5 3.33301 17.5H14.9997C15.2207 17.5 15.4326 17.4122 15.5889 17.2559C15.7452 17.0996 15.833 16.8877 15.833 16.6667V10.8333C15.833 10.3731 16.2061 10 16.6663 10C17.1266 10 17.4997 10.3731 17.4997 10.8333V16.6667C17.4997 17.3297 17.2363 17.9656 16.7674 18.4344C16.2986 18.9033 15.6627 19.1667 14.9997 19.1667H3.33301C2.66997 19.1667 2.03408 18.9033 1.56524 18.4344C1.0964 17.9656 0.833008 17.3297 0.833008 16.6667V5C0.833008 4.33696 1.0964 3.70107 1.56524 3.23223Z"
            fill="" />
           <path fill-rule="evenodd" clip-rule="evenodd"
            d="M16.6664 2.39884C16.4185 2.39884 16.1809 2.49729 16.0056 2.67253L8.25216 10.426L7.81167 12.188L9.57365 11.7475L17.3271 3.99402C17.5023 3.81878 17.6008 3.5811 17.6008 3.33328C17.6008 3.08545 17.5023 2.84777 17.3271 2.67253C17.1519 2.49729 16.9142 2.39884 16.6664 2.39884ZM14.8271 1.49402C15.3149 1.00622 15.9765 0.732178 16.6664 0.732178C17.3562 0.732178 18.0178 1.00622 18.5056 1.49402C18.9934 1.98182 19.2675 2.64342 19.2675 3.33328C19.2675 4.02313 18.9934 4.68473 18.5056 5.17253L10.5889 13.0892C10.4821 13.196 10.3483 13.2718 10.2018 13.3084L6.86847 14.1417C6.58449 14.2127 6.28409 14.1295 6.0771 13.9225C5.87012 13.7156 5.78691 13.4151 5.85791 13.1312L6.69124 9.79783C6.72787 9.65131 6.80364 9.51749 6.91044 9.41069L14.8271 1.49402Z"
            fill="" />
          </g>
          <defs>
           <clipPath id="clip0_88_10224">
            <rect width="20" height="20" fill="white" />
           </clipPath>
          </defs>
         </svg>
        </span>
        <textarea v-model="formData.bio"
         class="w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 font-normal text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
         name="bio" id="bio" rows="6" placeholder="Write your bio here"></textarea>
       </div>
      </div> -->

 </div>

 <!-- form edit -->
 <!-- ChartOne.vue filter by year -->
 <!-- <div class="flex justify-end w-full max-w-45">
    <div class="inline-flex items-center rounded-md bg-whiter p-1.5 dark:bg-meta-4">
     <button
      class="px-3 py-1 text-xs font-medium text-black bg-white rounded shadow-card hover:bg-white hover:shadow-card dark:bg-boxdark dark:text-white dark:hover:bg-boxdark">
      Day
     </button>
     <button
      class="px-3 py-1 text-xs font-medium text-black rounded hover:bg-white hover:shadow-card dark:text-white dark:hover:bg-boxdark">
      Week
     </button>
     <button
      class="px-3 py-1 text-xs font-medium text-black rounded hover:bg-white hover:shadow-card dark:text-white dark:hover:bg-boxdark">
      Month
     </button>
    </div>
   </div> -->
 <!-- ProfileCard.vue -->
 <!-- <label for="cover"
     class="flex items-center justify-center gap-2 px-2 py-1 text-sm font-medium text-white rounded cursor-pointer bg-primary hover:bg-opacity-80 xsm:px-4">
     <input type="file" name="cover" id="cover" class="sr-only" />
     <span>
      <svg class="fill-current" width="14" height="14" viewBox="0 0 14 14" fill="none"
       xmlns="http://www.w3.org/2000/svg">
       <path fill-rule="evenodd" clip-rule="evenodd"
        d="M4.76464 1.42638C4.87283 1.2641 5.05496 1.16663 5.25 1.16663H8.75C8.94504 1.16663 9.12717 1.2641 9.23536 1.42638L10.2289 2.91663H12.25C12.7141 2.91663 13.1592 3.101 13.4874 3.42919C13.8156 3.75738 14 4.2025 14 4.66663V11.0833C14 11.5474 13.8156 11.9925 13.4874 12.3207C13.1592 12.6489 12.7141 12.8333 12.25 12.8333H1.75C1.28587 12.8333 0.840752 12.6489 0.512563 12.3207C0.184375 11.9925 0 11.5474 0 11.0833V4.66663C0 4.2025 0.184374 3.75738 0.512563 3.42919C0.840752 3.101 1.28587 2.91663 1.75 2.91663H3.77114L4.76464 1.42638ZM5.56219 2.33329L4.5687 3.82353C4.46051 3.98582 4.27837 4.08329 4.08333 4.08329H1.75C1.59529 4.08329 1.44692 4.14475 1.33752 4.25415C1.22812 4.36354 1.16667 4.51192 1.16667 4.66663V11.0833C1.16667 11.238 1.22812 11.3864 1.33752 11.4958C1.44692 11.6052 1.59529 11.6666 1.75 11.6666H12.25C12.4047 11.6666 12.5531 11.6052 12.6625 11.4958C12.7719 11.3864 12.8333 11.238 12.8333 11.0833V4.66663C12.8333 4.51192 12.7719 4.36354 12.6625 4.25415C12.5531 4.14475 12.4047 4.08329 12.25 4.08329H9.91667C9.72163 4.08329 9.53949 3.98582 9.4313 3.82353L8.43781 2.33329H5.56219Z"
        fill="white" />
       <path fill-rule="evenodd" clip-rule="evenodd"
        d="M6.99992 5.83329C6.03342 5.83329 5.24992 6.61679 5.24992 7.58329C5.24992 8.54979 6.03342 9.33329 6.99992 9.33329C7.96642 9.33329 8.74992 8.54979 8.74992 7.58329C8.74992 6.61679 7.96642 5.83329 6.99992 5.83329ZM4.08325 7.58329C4.08325 5.97246 5.38909 4.66663 6.99992 4.66663C8.61075 4.66663 9.91659 5.97246 9.91659 7.58329C9.91659 9.19412 8.61075 10.5 6.99992 10.5C5.38909 10.5 4.08325 9.19412 4.08325 7.58329Z"
        fill="white" />
      </svg>
     </span>
     <button type="button" @click="randomBg">Edit</button>
    </label> -->
 <!-- <label for="profile"
      class="absolute bottom-0 right-0 flex h-8.5 w-8.5 cursor-pointer items-center justify-center rounded-full bg-primary text-white hover:bg-opacity-90 sm:bottom-2 sm:right-2">
      <svg class="fill-current" width="14" height="14" viewBox="0 0 14 14" fill="none"
       xmlns="http://www.w3.org/2000/svg">
       <path fill-rule="evenodd" clip-rule="evenodd"
        d="M4.76464 1.42638C4.87283 1.2641 5.05496 1.16663 5.25 1.16663H8.75C8.94504 1.16663 9.12717 1.2641 9.23536 1.42638L10.2289 2.91663H12.25C12.7141 2.91663 13.1592 3.101 13.4874 3.42919C13.8156 3.75738 14 4.2025 14 4.66663V11.0833C14 11.5474 13.8156 11.9925 13.4874 12.3207C13.1592 12.6489 12.7141 12.8333 12.25 12.8333H1.75C1.28587 12.8333 0.840752 12.6489 0.512563 12.3207C0.184375 11.9925 0 11.5474 0 11.0833V4.66663C0 4.2025 0.184374 3.75738 0.512563 3.42919C0.840752 3.101 1.28587 2.91663 1.75 2.91663H3.77114L4.76464 1.42638ZM5.56219 2.33329L4.5687 3.82353C4.46051 3.98582 4.27837 4.08329 4.08333 4.08329H1.75C1.59529 4.08329 1.44692 4.14475 1.33752 4.25415C1.22812 4.36354 1.16667 4.51192 1.16667 4.66663V11.0833C1.16667 11.238 1.22812 11.3864 1.33752 11.4958C1.44692 11.6052 1.59529 11.6666 1.75 11.6666H12.25C12.4047 11.6666 12.5531 11.6052 12.6625 11.4958C12.7719 11.3864 12.8333 11.238 12.8333 11.0833V4.66663C12.8333 4.51192 12.7719 4.36354 12.6625 4.25415C12.5531 4.14475 12.4047 4.08329 12.25 4.08329H9.91667C9.72163 4.08329 9.53949 3.98582 9.4313 3.82353L8.43781 2.33329H5.56219Z"
        fill="" />
       <path fill-rule="evenodd" clip-rule="evenodd"
        d="M7.00004 5.83329C6.03354 5.83329 5.25004 6.61679 5.25004 7.58329C5.25004 8.54979 6.03354 9.33329 7.00004 9.33329C7.96654 9.33329 8.75004 8.54979 8.75004 7.58329C8.75004 6.61679 7.96654 5.83329 7.00004 5.83329ZM4.08337 7.58329C4.08337 5.97246 5.38921 4.66663 7.00004 4.66663C8.61087 4.66663 9.91671 5.97246 9.91671 7.58329C9.91671 9.19412 8.61087 10.5 7.00004 10.5C5.38921 10.5 4.08337 9.19412 4.08337 7.58329Z"
        fill="" />
      </svg>
      <input type="file" name="profile" id="profile" class="sr-only" />
     </label> -->
 <!-- <div class="mx-auto max-w-180">
     <h4 class="font-medium text-black dark:text-white">About Me</h4>
     <p class="mt-4.5 text-sm font-normal">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere fermentum
      urna, eu condimentum mauris tempus ut. Donec fermentum blandit aliquet. Etiam dictum
      dapibus ultricies. Sed vel aliquet libero. Nunc a augue fermentum, pharetra ligula sed,
      aliquam lacus.
     </p>
    </div> -->

 <!-- <div class="mt-6.5">
     <h4 class="mb-3.5 font-medium text-black dark:text-white">Follow me on</h4>
     <div class="flex items-center justify-center gap-3.5">
      <a href="#" class="hover:text-primary" name="social-icon" aria-label="social-icon">
       <svg class="fill-current" width="22" height="22" viewBox="0 0 22 22" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_30_966)">
         <path
          d="M12.8333 12.375H15.125L16.0416 8.70838H12.8333V6.87504C12.8333 5.93088 12.8333 5.04171 14.6666 5.04171H16.0416V1.96171C15.7428 1.92229 14.6144 1.83337 13.4227 1.83337C10.934 1.83337 9.16663 3.35229 9.16663 6.14171V8.70838H6.41663V12.375H9.16663V20.1667H12.8333V12.375Z"
          fill="" />
        </g>
        <defs>
         <clipPath id="clip0_30_966">
          <rect width="22" height="22" fill="white" />
         </clipPath>
        </defs>
       </svg>
      </a>
      <a href="#" class="hover:text-primary" name="social-icon" aria-label="social-icon">
       <svg class="fill-current" width="23" height="22" viewBox="0 0 23 22" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_30_970)">
         <path
          d="M20.9813 5.18472C20.2815 5.49427 19.5393 5.69757 18.7795 5.78789C19.5804 5.30887 20.1798 4.55498 20.4661 3.66672C19.7145 4.11405 18.8904 4.42755 18.0315 4.59714C17.4545 3.97984 16.6898 3.57044 15.8562 3.43259C15.0225 3.29474 14.1667 3.43617 13.4218 3.83489C12.6768 4.2336 12.0845 4.86726 11.7368 5.63736C11.3891 6.40746 11.3056 7.27085 11.4993 8.0933C9.97497 8.0169 8.48376 7.62078 7.12247 6.93066C5.76118 6.24054 4.56024 5.27185 3.59762 4.08747C3.25689 4.67272 3.07783 5.33801 3.07879 6.01522C3.07879 7.34439 3.75529 8.51864 4.78379 9.20614C4.17513 9.18697 3.57987 9.0226 3.04762 8.72672V8.77439C3.04781 9.65961 3.35413 10.5175 3.91465 11.2027C4.47517 11.8878 5.2554 12.3581 6.12304 12.5336C5.55802 12.6868 4.96557 12.7093 4.39054 12.5996C4.63517 13.3616 5.11196 14.028 5.75417 14.5055C6.39637 14.983 7.17182 15.2477 7.97196 15.2626C7.17673 15.8871 6.2662 16.3488 5.29243 16.6212C4.31866 16.8936 3.30074 16.9714 2.29688 16.8502C4.04926 17.9772 6.08921 18.5755 8.17271 18.5735C15.2246 18.5735 19.081 12.7316 19.081 7.66522C19.081 7.50022 19.0765 7.33339 19.0691 7.17022C19.8197 6.62771 20.4676 5.95566 20.9822 5.18564L20.9813 5.18472Z"
          fill="" />
        </g>
        <defs>
         <clipPath id="clip0_30_970">
          <rect width="22" height="22" fill="white" transform="translate(0.666138)" />
         </clipPath>
        </defs>
       </svg>
      </a>
      <a href="#" class="hover:text-primary" name="social-icon" aria-label="social-icon">
       <svg class="fill-current" width="23" height="22" viewBox="0 0 23 22" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_30_974)">
         <path
          d="M6.69548 4.58327C6.69523 5.0695 6.50185 5.53572 6.15786 5.87937C5.81387 6.22301 5.34746 6.41593 4.86123 6.41569C4.375 6.41545 3.90878 6.22206 3.56513 5.87807C3.22149 5.53408 3.02857 5.06767 3.02881 4.58144C3.02905 4.09521 3.22244 3.62899 3.56643 3.28535C3.91042 2.9417 4.37683 2.74878 4.86306 2.74902C5.34929 2.74927 5.81551 2.94265 6.15915 3.28664C6.5028 3.63063 6.69572 4.09704 6.69548 4.58327ZM6.75048 7.77327H3.08381V19.2499H6.75048V7.77327ZM12.5438 7.77327H8.89548V19.2499H12.5071V13.2274C12.5071 9.87244 16.8796 9.56077 16.8796 13.2274V19.2499H20.5005V11.9808C20.5005 6.32494 14.0288 6.53577 12.5071 9.31327L12.5438 7.77327Z"
          fill="" />
        </g>
        <defs>
         <clipPath id="clip0_30_974">
          <rect width="22" height="22" fill="white" transform="translate(0.333862)" />
         </clipPath>
        </defs>
       </svg>
      </a>
      <a href="#" class="hover:text-primary" name="social-icon" aria-label="social-icon">
       <svg class="fill-current" width="22" height="22" viewBox="0 0 22 22" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_30_978)">
         <path
          d="M18.3233 10.6077C18.2481 9.1648 17.7463 7.77668 16.8814 6.61929C16.6178 6.90312 16.3361 7.16951 16.038 7.41679C15.1222 8.17748 14.0988 8.79838 13.0011 9.25929C13.1542 9.58013 13.2945 9.89088 13.4182 10.1842V10.187C13.4531 10.2689 13.4867 10.3514 13.519 10.4345C14.9069 10.2786 16.3699 10.3355 17.788 10.527C17.9768 10.5527 18.1546 10.5802 18.3233 10.6077ZM9.72038 3.77854C10.6137 5.03728 11.4375 6.34396 12.188 7.69271C13.3091 7.25088 14.2359 6.69354 14.982 6.07296C15.2411 5.8595 15.4849 5.62824 15.7117 5.38088C14.3926 4.27145 12.7237 3.66426 11 3.66671C10.5711 3.66641 10.1429 3.70353 9.72038 3.77762V3.77854ZM3.89862 9.16396C4.52308 9.1482 5.1468 9.11059 5.76863 9.05121C7.27163 8.91677 8.7618 8.66484 10.2255 8.29771C9.46051 6.96874 8.63463 5.67578 7.75046 4.42296C6.80603 4.89082 5.97328 5.55633 5.30868 6.37435C4.64409 7.19236 4.16319 8.14374 3.89862 9.16396ZM5.30113 15.6155C5.65679 15.0957 6.12429 14.5109 6.74488 13.8747C8.07771 12.5089 9.65071 11.4455 11.4712 10.8589L11.528 10.8424C11.3768 10.5087 11.2347 10.2108 11.0917 9.93029C9.40871 10.4207 7.63588 10.7269 5.86946 10.8855C5.00779 10.9634 4.23504 10.9973 3.66671 11.0028C3.66509 12.6827 4.24264 14.3117 5.30204 15.6155H5.30113ZM13.7546 17.7971C13.4011 16.0144 12.9008 14.2641 12.2586 12.5639C10.4235 13.2303 8.96138 14.2047 7.83113 15.367C7.375 15.8276 6.97021 16.3362 6.62388 16.8841C7.88778 17.8272 9.42308 18.3356 11 18.3334C11.9441 18.3347 12.8795 18.1533 13.7546 17.799V17.7971ZM15.4715 16.8117C16.9027 15.7115 17.8777 14.1219 18.2096 12.3475C17.898 12.2696 17.5029 12.1917 17.0684 12.1312C16.1023 11.9921 15.1221 11.9819 14.1534 12.101C14.6988 13.6399 15.1392 15.2141 15.4715 16.8126V16.8117ZM11 20.1667C5.93729 20.1667 1.83337 16.0628 1.83337 11C1.83337 5.93729 5.93729 1.83337 11 1.83337C16.0628 1.83337 20.1667 5.93729 20.1667 11C20.1667 16.0628 16.0628 20.1667 11 20.1667Z"
          fill="" />
        </g>
        <defs>
         <clipPath id="clip0_30_978">
          <rect width="22" height="22" fill="white" />
         </clipPath>
        </defs>
       </svg>
      </a>
      <a href="#" class="hover:text-primary" name="social-icon" aria-label="social-icon">
       <svg class="fill-current" width="23" height="22" viewBox="0 0 23 22" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_30_982)">
         <path
          d="M11.6662 1.83337C6.6016 1.83337 2.49951 5.93546 2.49951 11C2.49847 12.9244 3.10343 14.8002 4.22854 16.3613C5.35366 17.9225 6.94181 19.0897 8.76768 19.6974C9.22602 19.7771 9.39743 19.5021 9.39743 19.261C9.39743 19.0438 9.38552 18.3224 9.38552 17.5542C7.08285 17.9786 6.48701 16.9932 6.30368 16.4771C6.2001 16.2131 5.75368 15.4 5.3641 15.1819C5.04326 15.0105 4.58493 14.586 5.35218 14.575C6.07451 14.5631 6.58968 15.2396 6.76201 15.5146C7.58701 16.9006 8.90518 16.511 9.43135 16.2709C9.51202 15.675 9.75218 15.2745 10.0162 15.0453C7.9766 14.8161 5.84535 14.025 5.84535 10.5188C5.84535 9.52146 6.2001 8.69737 6.78493 8.05479C6.69326 7.82562 6.37243 6.88604 6.8766 5.62562C6.8766 5.62562 7.64385 5.38546 9.39743 6.56612C10.1437 6.35901 10.9147 6.25477 11.6891 6.25629C12.4683 6.25629 13.2474 6.35896 13.9808 6.56521C15.7334 5.37354 16.5016 5.62654 16.5016 5.62654C17.0058 6.88696 16.6849 7.82654 16.5933 8.05571C17.1772 8.69737 17.5329 9.51046 17.5329 10.5188C17.5329 14.037 15.3906 14.8161 13.351 15.0453C13.6829 15.3313 13.9698 15.8813 13.9698 16.7411C13.9698 17.9667 13.9579 18.9521 13.9579 19.262C13.9579 19.5021 14.1302 19.7881 14.5885 19.6965C16.4081 19.0821 17.9893 17.9126 19.1094 16.3526C20.2296 14.7926 20.8323 12.9206 20.8329 11C20.8329 5.93546 16.7308 1.83337 11.6662 1.83337Z"
          fill="" />
        </g>
        <defs>
         <clipPath id="clip0_30_982">
          <rect width="22" height="22" fill="white" transform="translate(0.666138)" />
         </clipPath>
        </defs>
       </svg>
      </a>
     </div>
    </div> -->
</template>