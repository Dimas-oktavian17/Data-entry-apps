<script setup lang="ts">
const props = defineProps(['cardTitle'])
</script>

<template>
 <div class="bg-white border rounded-sm border-stroke shadow-default dark:border-strokedark dark:bg-boxdark">
  <div class="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
   <h3 class="font-medium text-black dark:text-white">{{ props.cardTitle }}</h3>
  </div>
  <slot></slot>
 </div>
</template>
