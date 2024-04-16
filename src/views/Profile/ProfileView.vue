<script setup lang="ts">
import { useRouteStore } from '@/stores/utility/route'
</script>

<template>
 <DefaultLayout>
  <div class="mx-auto max-w-242.5">
   <!-- Breadcrumb Start -->
   <BreadcrumbDefault :pageTitle="useRouteStore().RouteName" />
   <!-- Breadcrumb End -->
   <ProfileCard />
  </div>
 </DefaultLayout>
</template>
