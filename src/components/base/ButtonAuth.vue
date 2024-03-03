<script setup>
defineEmits(['handleGoogleAuth'])
</script>

<template>
 <button @click="$emit('handleGoogleAuth')"
  class="flex w-full items-center justify-center gap-3.5 rounded-lg border border-stroke bg-gray p-4 font-medium hover:bg-opacity-70 dark:border-strokedark dark:bg-meta-4 dark:hover:bg-opacity-70">
  <slot></slot>
 </button>
</template>