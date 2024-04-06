import { computed, watchEffect } from 'vue'
import { defineStore } from 'pinia'
import { UsersPinia } from '@/stores/users/users'
import { formPinia } from '@/stores/formAPI'

// Define a type or interface for the array of numbers
type StringArray = string[];
export const ChartTwoStore = defineStore('ChartTwoStore', () => {
 // state
 const DataProvinsi = formPinia()
 const DataKaryawan = UsersPinia()
 // getters
 const NameProvinsi = computed<StringArray>(() => DataProvinsi.provinces.filter(item => item.name).map(item => item.name))
 const CountProvinsi = computed<any>(() => {
  const filteredData = DataKaryawan.dataKaryawan.filter(item => item.provinsi.name)
  return Array.from({ length: NameProvinsi.value.length }, (_, i) => filteredData.filter(item => item.provinsi.name === NameProvinsi.value[i]).length);
 })
 return {
  DataProvinsi,
  DataKaryawan,
  NameProvinsi,
  CountProvinsi
 }
})

