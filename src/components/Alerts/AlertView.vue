<script setup>
defineProps({
 data: {
  type: [Array, Object],
  required: false
 }
})
</script>
<template>
 <div
  class="flex  w-full h-auto border-l-6 border-[#34D399] bg-[#34D399] bg-opacity-[15%] px-7 py-8 shadow-md dark:bg-[#1B1B24] dark:bg-opacity-30 md:p-9">
  <div class="mr-5 flex h-9 w-full max-w-[36px] items-center justify-center rounded-lg bg-[#34D399]">
   <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
     d="M15.2984 0.826822L15.2868 0.811827L15.2741 0.797751C14.9173 0.401867 14.3238 0.400754 13.9657 0.794406L5.91888 9.45376L2.05667 5.2868C1.69856 4.89287 1.10487 4.89389 0.747996 5.28987C0.417335 5.65675 0.417335 6.22337 0.747996 6.59026L0.747959 6.59029L0.752701 6.59541L4.86742 11.0348C5.14445 11.3405 5.52858 11.5 5.89581 11.5C6.29242 11.5 6.65178 11.3355 6.92401 11.035L15.2162 2.11161C15.5833 1.74452 15.576 1.18615 15.2984 0.826822Z"
     fill="white" stroke="white"></path>
   </svg>
  </div>
  <div class="w-full">
   <div v-for="({ name, umur, jabatan, status_karyawan, provinsi, kota, kecamatan, kelurahan, id }) in data" :key="id"
    class="flex flex-col items-start justify-start leading-relaxed capitalize text-body">
    <h1 class="pb-1 leading-relaxed text-body">
     Name: {{ name }} - Age: {{ umur }}
    </h1>
    <h2 class="pb-1 leading-relaxed text-body">
     Position: {{ jabatan }} - Status: {{ status_karyawan }}
    </h2>
    <ul class="pb-1 leading-relaxed text-body">
     <li>Provinsi: {{ provinsi?.name || 'na' }}</li>
     <li>City: {{ kota?.name || 'na' }}</li>
     <li>District: {{ kecamatan?.name || 'na' }}</li>
     <li>Villages: {{ kelurahan?.name || 'na' }}</li>
    </ul>
   </div>
  </div>
 </div>
</template>
