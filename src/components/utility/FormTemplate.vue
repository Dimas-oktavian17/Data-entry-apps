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
 </div>

 <!-- form edit -->
</template>