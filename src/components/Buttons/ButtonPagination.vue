<script setup lang="ts">
defineProps({
 'label': {
  type: [String, Number],
  require: true
 },
 CustomClass: {
  type: [String, Number],
  require: true
 }
},

)

defineEmits(['handleActions']) 
</script>

<template>
 <button @click="$emit('handleActions')" :class="CustomClass"
  class="flex justify-center px-6 py-2 my-4 text-white transition-all rounded-md cursor-pointer hover:transition-all align-items-center bg-primary hover:opacity-80">
  <slot></slot>
  {{ label }}
 </button>
</template>