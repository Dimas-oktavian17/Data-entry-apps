/* eslint-disable no-undef */
import { computed } from 'vue'
import { defineStore } from 'pinia'
import { UsersPinia } from '@/stores/users/users'
import { TableOneStore } from '@/stores/tables/TableOneStore'
export const DataStatsStore = defineStore('DataStatsStore', () => {
 // state
 const DataKaryawan = UsersPinia()
 const UsersData = TableOneStore()
 // getters
 const TotalEmploye = computed<number>(() => DataKaryawan.dataKaryawan.length)
 const CurrentCountUsers = computed<number>(() => {
  const CurrentUser = UsersData.UsersInput.find(({ email }) => email === DataKaryawan.users.email)
  return CurrentUser ? CurrentUser.count : 0
 })
 // actions
 return {
  DataKaryawan,
  TotalEmploye,
  CurrentCountUsers
 }
})
