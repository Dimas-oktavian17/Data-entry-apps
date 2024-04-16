<script setup>
import { useRouteStore } from '@/stores/utility/route';
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
