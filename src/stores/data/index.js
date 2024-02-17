import { ref } from 'vue'
import { useCollection } from 'vuefire'
import { karyawanRef } from '@/firebase'
import { defineStore } from 'pinia'

export const authPinia = defineStore('AuthPinia', () => {
  // state
  const dataKaryawan = useCollection(karyawanRef)
  // getters
  // actions
  return {
    dataKaryawan
  }
})
