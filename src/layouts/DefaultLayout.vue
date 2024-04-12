<script setup lang="ts">

</script>

<template>
 <!-- ===== Page Wrapper Start ===== -->
 <div class="flex h-screen overflow-hidden">
  <!-- ===== Sidebar Start ===== -->
  <SidebarArea />
  <!-- ===== Sidebar End ===== -->

  <!-- ===== Content Area Start ===== -->
  <div class="relative flex flex-col flex-1 overflow-x-hidden overflow-y-auto">
   <!-- ===== Header Start ===== -->
   <HeaderArea />
   <!-- ===== Header End ===== -->

   <!-- ===== Main Content Start ===== -->
   <main>
    <div class="p-4 mx-auto max-w-screen-2xl md:p-6 2xl:p-10">
     <slot></slot>
    </div>
   </main>
   <!-- ===== Main Content End ===== -->
  </div>
 </div>
 <!-- ===== Page Wrapper End ===== -->
</template>
