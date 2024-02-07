<script setup lang="ts">
const props = defineProps(['cardTitle'])
</script>

<template>
 <div class="mb-10 bg-white border rounded-sm border-stroke shadow-default dark:border-strokedark dark:bg-boxdark">
  <div class="py-4 border-b border-stroke px-7 dark:border-strokedark">
   <h3 class="font-medium text-black dark:text-white">{{ props.cardTitle }}</h3>
  </div>

  <div class="p-4 md:p-6 xl:p-9">
   <slot></slot>
  </div>
 </div>
</template>
