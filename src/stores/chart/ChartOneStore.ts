/* eslint-disable no-undef */
import { computed, ref, reactive, watchEffect } from 'vue'
import { defineStore } from 'pinia'
import { UsersPinia } from '@/stores/users/users'
import { formUsers } from '@/stores/users/formUsers'

interface DataInfo {
 name: string;
 count: number;
}
export const ChartOneStore = defineStore('ChartOneStore', () => {
 // getters
 const StatusMagang = computed<number>(() => DataKaryawan.dataKaryawan.filter(({ status_karyawan }) => status_karyawan === 'magang').length)
 const StatusKontrak = computed<number>(() => DataKaryawan.dataKaryawan.filter(({ status_karyawan }) => status_karyawan === 'kontrak').length)
 const StatusKartap = computed<number>(() => DataKaryawan.dataKaryawan.filter(({ status_karyawan }) => status_karyawan === 'kartap').length)
 const DataMagang = computed(() => {
  const filteredMagang = DataKaryawan.dataKaryawan.filter(item => {
   return item.status_karyawan === 'magang' && item.createAt >= 1 && item.createAt <= 12
  });
  // Group filtered data by createAt value
  const grouped = []
  for (let i = 1; i <= 12; i++) {
   grouped[i - 1] = filteredMagang.filter(item => item.createAt === i).length;
  }
  CountMagang.value = grouped
  return CountMagang.value
 });
 const DataKontrak = computed(() => {
  const filteredMagang = DataKaryawan.dataKaryawan.filter(item => {
   return item.status_karyawan === 'kontrak' && item.createAt >= 1 && item.createAt <= 12
  });
  // Group filtered data by createAt value
  const grouped = []
  for (let i = 1; i <= 12; i++) {
   grouped[i - 1] = filteredMagang.filter(item => item.createAt === i).length;
  }
  CountKontrak.value = grouped
  return CountKontrak.value
 });
 const DataKartap = computed(() => {
  const filteredMagang = DataKaryawan.dataKaryawan.filter(item => {
   return item.status_karyawan === 'kartap' && item.createAt >= 1 && item.createAt <= 12
  });
  // Group filtered data by createAt value
  const grouped = []
  for (let i = 1; i <= 12; i++) {
   grouped[i - 1] = filteredMagang.filter(item => item.createAt === i).length;
  }
  CountKartap.value = grouped
  return CountKartap.value
 });
 // state
 const DataKaryawan = UsersPinia()
 const DataStatus = formUsers()
 const DataResult: DataInfo[] = reactive([
  {
   name: 'Total Magang',
   count: StatusMagang.value,
  },
  {
   name: 'Total Kontrak',
   count: StatusKontrak.value,
  },
  {
   name: 'Total Kartap',
   count: StatusKartap.value,
  },
 ])
 const CountMagang = ref([])
 const CountKontrak = ref([])
 const CountKartap = ref([])
 // onMounted hook to update DataResult after computed properties are evaluated
 watchEffect(() => {
  DataResult[0].count = StatusMagang.value
  DataResult[1].count = StatusKontrak.value
  DataResult[2].count = StatusKartap.value
 })
 // actions
 return {
  DataKaryawan,
  DataStatus,
  StatusMagang,
  StatusKontrak,
  StatusKartap,
  DataResult,
  DataKartap,
  DataKontrak,
  DataMagang
 }
})

