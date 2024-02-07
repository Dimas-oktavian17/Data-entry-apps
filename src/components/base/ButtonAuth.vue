<script setup>
defineEmits(['handleGoogleAuth'])
</script>
<template>
 <button @click="$emit('handleGoogleAuth')" class="px-8 py-2 border rounded border-slate-200 group">
  <slot></slot>
 </button>
</template>