<script setup>
const props = defineProps(['StyleWrap', 'StyleMain'])
</script>
<template>
 <!-- ===== Page Wrapper Start ===== -->
 <div :class="props.StyleWrap">
  <!-- ===== Content Area Start ===== -->
  <main>
   <div :class="props.StyleMain">
    <slot></slot>
   </div>
  </main>
  <!-- ===== Main Content End ===== -->
 </div>
 <!-- ===== Page Wrapper End ===== -->
</template>
