<script setup>
import { onMounted } from 'vue';
import { RouterView, } from 'vue-router'
import locationAPI from '@/services/locationAPI'

onMounted(async () => {
 try {
  const { data } = await locationAPI.getLocation()
  console.table(data);
 } catch (error) {
  console.error(error);
 }
})
</script>

<template>
 <RouterView />
</template>
