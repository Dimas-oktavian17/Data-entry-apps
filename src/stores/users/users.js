import { computed } from 'vue'
import { useCollection } from 'vuefire'
import { karyawanRef } from '@/firebase'
import { defineStore } from 'pinia'

export const UsersPinia = defineStore('UsersPinia', () => {
  // state
  const dataKaryawan = useCollection(karyawanRef)
  // getters
  const StatusMagang = computed(() => dataKaryawan.value.filter(({ status_karyawan }) => status_karyawan === 'magang').length)
  const StatusKontrak = computed(() => dataKaryawan.value.filter(({ status_karyawan }) => status_karyawan === 'kontrak').length)
  const StatusKartap = computed(() => dataKaryawan.value.filter(({ status_karyawan }) => status_karyawan === 'kartap').length)
  // actions
  return {
    dataKaryawan,
    StatusMagang,
    StatusKontrak,
    StatusKartap
  }
})
