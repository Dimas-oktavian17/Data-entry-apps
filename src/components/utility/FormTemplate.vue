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
 </div>
</template>