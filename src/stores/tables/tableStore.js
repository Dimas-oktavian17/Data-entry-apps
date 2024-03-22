import { computed } from 'vue'
import { useCollection } from 'vuefire'
import { karyawanRef } from '@/firebase'
import { defineStore } from 'pinia'


export const UsersPinia = defineStore('UsersPinia', () => {
  // state
  const dataKaryawan = useCollection(karyawanRef)
  // getters
  const FiltersProvince = computed(() => 't')
  // actions
  return {
    dataKaryawan,
    FiltersProvince,
  }
})
