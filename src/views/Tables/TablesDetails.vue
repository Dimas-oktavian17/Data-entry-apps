<script setup>
import { useRouteStore } from '@/stores/route';
import { onMounted } from 'vue';
import { TableStore } from "@/stores/tables/tableStore"
import { storeToRefs } from 'pinia';
import BreadcrumbDefault from '@/components/Breadcrumbs/BreadcrumbDefault.vue';
const { dataView } = storeToRefs(TableStore())
onMounted(() => TableStore().TableView())
</script>
<template>
 <ErrorLayout StyleMain="grid p-4 mx-auto lg:grid-rows-2 place-items-center max-w-screen-2xl md:p-6 2xl:p-10"
  StyleWrap="grid h-screen overflow-hidden place-items-center">
  <BreadcrumbDefault :pageTitle="useRouteStore().RouteName"></BreadcrumbDefault>
  <section v-if="dataView">
   <AlertView :data="dataView" />
  </section>
 </ErrorLayout>
</template>