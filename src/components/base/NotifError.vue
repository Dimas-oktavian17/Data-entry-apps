<script setup>
defineProps({
 notif: {
  type: String,
  required: true,
 }
})
</script>
<template>
 <header class="flex flex-col items-center justify-center group lg:justify-between lg:flex-row ">
  <span class="flex flex-col items-center max-w-xs text-base font-semibold text-center text-red-500 ">
   {{ notif }}
   <IconVue icon="ion:warning" class="text-red-500 group-hover:rotate-6" />
  </span>
 </header>
</template>