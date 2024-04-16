/* eslint-disable no-undef */
import { computed } from 'vue'
import { defineStore } from 'pinia'
import { UsersPinia } from '@/stores/users/users.ts'
import { TableOneStore } from '@/stores/tables/TableOneStore'
import { DataInfo } from '@/interfaces/InterfacesTableOne'

export const DataStatsStore = defineStore('DataStatsStore', () => {
 // state
 const DataKaryawan: any = UsersPinia()
 const UsersData = TableOneStore()
 // getters
 const TotalEmploye = computed<number>(() => DataKaryawan.dataKaryawan.length)
 const CurrentCountUsers = computed<number>(() => {
  const CurrentUser = UsersData.UsersInput.find(({ email }: { email: string }) => email === DataKaryawan.users.email)
  return CurrentUser ? CurrentUser.count : 0
 })
 // actions
 return {
  DataKaryawan,
  TotalEmploye,
  CurrentCountUsers
 }
})
