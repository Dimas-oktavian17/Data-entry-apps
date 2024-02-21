<script setup lang="ts">
import { ref } from 'vue'
const pageTitle = ref('Profile')
</script>

<template>
 <DefaultLayout>
  <div class="mx-auto max-w-242.5">
   <!-- Breadcrumb Start -->
   <BreadcrumbDefault :pageTitle="pageTitle" />
   <!-- Breadcrumb End -->
   <ProfileCard />
  </div>
 </DefaultLayout>
</template>
