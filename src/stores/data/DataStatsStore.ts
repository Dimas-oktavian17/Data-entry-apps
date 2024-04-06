/* eslint-disable no-undef */
import { computed} from 'vue'
import { defineStore } from 'pinia'
import { UsersPinia } from '@/stores/users/users'
export const DataStatsStore = defineStore('DataStatsStore', () => {
  // state
  const DataKaryawan = UsersPinia()
  // getters
  const TotalEmploye = computed<number>(()=> DataKaryawan.dataKaryawan.length)
  const CurrentCountUsers = computed<number>(() => {
    const CurrentUser = DataKaryawan.UsersInput.find(({email})=>email === DataKaryawan.users.email)
    return CurrentUser ? CurrentUser.count : 0
  })
  // actions
  return {
DataKaryawan,
TotalEmploye,
CurrentCountUsers
  }
})
