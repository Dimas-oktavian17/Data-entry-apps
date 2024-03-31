<script setup>
import { ref } from 'vue'
const pageTitle = ref('Tables')
</script>

<template>
 <DefaultLayout>
  <!-- Breadcrumb Start -->
  <BreadcrumbDefault :pageTitle="pageTitle" />
  <!-- Breadcrumb End -->
  <div class="flex flex-col gap-10">
   <!-- <TableOne /> -->
   <!-- <TableTwo /> -->
   <TableThree />
  </div>
 </DefaultLayout>
</template>
