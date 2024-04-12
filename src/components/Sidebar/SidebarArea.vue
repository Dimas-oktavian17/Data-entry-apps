<script setup lang="ts">
import { useSidebarStore } from '@/stores/sidebar'
import { onClickOutside } from '@vueuse/core'
import { ref } from 'vue'
const target = ref(null)
const sidebarStore = useSidebarStore()

onClickOutside(target, () => sidebarStore.isSidebarOpen = false)
</script>

<template>
 <aside
  class="absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0"
  :class="{
   'translate-x-0': sidebarStore.isSidebarOpen,
   '-translate-x-full': !sidebarStore.isSidebarOpen
  }" ref="target">
  <!-- SIDEBAR HEADER -->
  <div class="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
   <router-link to="/Dashboard">
    <img src="@/assets/images/logo/logo.svg" alt="Logo" />
   </router-link>

   <button class="block lg:hidden" @click="sidebarStore.isSidebarOpen = false">
    <IconVue icon="charm:cross" class="duration-200 ease-in-out dark:text-white size-8" />
   </button>
  </div>
  <!-- SIDEBAR HEADER -->

  <div class="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">
   <!-- Sidebar Menu -->
   <nav class="px-4 py-4 mt-5 lg:mt-9 lg:px-6">
    <template v-for="menuGroup in sidebarStore.menuGroups" :key="menuGroup.name">
     <div>
      <h3 class="mb-4 ml-4 text-sm font-medium text-bodydark2">{{ menuGroup.name }}</h3>
      <ul class="mb-6 flex flex-col gap-1.5">
       <SidebarItem v-for="(menuItem, index) in menuGroup.menuItems" :item="menuItem" :key="index" :index="index" />
      </ul>
     </div>
    </template>
   </nav>
   <!-- Sidebar Menu -->
  </div>
 </aside>
</template>
