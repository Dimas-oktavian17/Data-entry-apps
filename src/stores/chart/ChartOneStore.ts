import { computed, ref, reactive, watchEffect } from 'vue'
import { defineStore } from 'pinia'
import { UsersPinia } from '@/stores/users/users'
import { formUsers } from '@/stores/users/formUsers'

interface DataInfo {
 name: string;
 count: number;
}
// Define a type or interface for the array of numbers
type NumberArray = number[];
type StringArray = string[];
export const ChartOneStore = defineStore('ChartOneStore', () => {
 // getters
 const StatusMagang = computed<number>(() => DataKaryawan.dataKaryawan.filter(({ status_karyawan }) => status_karyawan === 'magang').length)
 const StatusKontrak = computed<number>(() => DataKaryawan.dataKaryawan.filter(({ status_karyawan }) => status_karyawan === 'kontrak').length)
 const StatusKartap = computed<number>(() => DataKaryawan.dataKaryawan.filter(({ status_karyawan }) => status_karyawan === 'kartap').length)
 const DataMagang = computed<NumberArray>(() => {
  const filteredMagang = DataKaryawan.dataKaryawan.filter(item => item.status_karyawan === 'magang' && item.createAt >= 1 && item.createAt <= 12);
  // Filter by array from index and filter again base on index parameter
  const grouped = Array.from({ length: Labels.value.length }, (_, i) => filteredMagang.filter(item => item.createAt === i + 1).length);
  CountMagang.value = grouped
  return CountMagang.value
 });
 const DataKontrak = computed<NumberArray>(() => {
  const filteredKontrak = DataKaryawan.dataKaryawan.filter(item => item.status_karyawan === 'kontrak' && item.createAt >= 1 && item.createAt <= 12);
  // Filter by array from index and filter again base on index parameter
  const grouped = Array.from({ length: Labels.value.length }, (_, i) => filteredKontrak.filter(item => item.createAt === i + 1).length);
  CountKontrak.value = grouped
  return CountKontrak.value
 });
 const DataKartap = computed<NumberArray>(() => {
  const filteredKartap = DataKaryawan.dataKaryawan.filter(item => item.status_karyawan === 'kartap' && item.createAt >= 1 && item.createAt <= 12);
  // Filter by array from index and filter again base on index parameter
  const grouped = Array.from({ length: Labels.value.length }, (_, i) => filteredKartap.filter(item => item.createAt === i + 1).length);
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
 const CountMagang = ref<NumberArray>([])
 const CountKontrak = ref<NumberArray>([])
 const CountKartap = ref<NumberArray>([])
 const Labels = ref<StringArray>(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'])
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
  DataMagang,
  Labels
 }
})

