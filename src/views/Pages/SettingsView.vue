<script setup lang="ts">
import { useRouteStore } from '@/stores/route';
</script>

<template>
 <DefaultLayout>
  <div class="mx-auto max-w-270">
   <!-- Breadcrumb Start -->
   <BreadcrumbDefault :pageTitle="useRouteStore().RouteName" />
   <!-- Breadcrumb End -->
   <SettingsCard />
  </div>
 </DefaultLayout>
</template>
