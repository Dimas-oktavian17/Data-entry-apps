<script setup>
import { useRouteStore } from '@/stores/utility/route';
</script>

<template>
 <DefaultLayout>
  <!-- Breadcrumb Start -->
  <BreadcrumbDefault :pageTitle="useRouteStore().RouteName" />
  <!-- Breadcrumb End -->
  <div class="flex flex-col gap-10">
   <!-- <TableOne /> -->
   <!-- <TableTwo /> -->
   <TableThree />
  </div>
 </DefaultLayout>
</template>
