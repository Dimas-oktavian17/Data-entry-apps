<script setup lang="ts">
const props = defineProps(['pageTitle'])
</script>

<template>
 <div class="flex flex-col gap-3 mb-6 sm:flex-row sm:items-center sm:justify-between">
  <h2 class="font-semibold text-black capitalize text-title-md2 dark:text-white">
   {{ props.pageTitle }}
  </h2>

  <nav>
   <ol class="flex items-center gap-2">
    <li>
     <button class="font-medium" @click="$router.back()">Previous Page /</button>
    </li>
    <li class="font-medium text-primary">{{ props.pageTitle }}</li>
   </ol>
  </nav>
 </div>
</template>
