import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useRoute } from 'vue-router'
import { UsersPinia } from '../users/users'

export const TableStore = defineStore('TableStore', () => {
  // state
  const TableUsers = UsersPinia()
  const dataView = ref(null)
  // getters
  // actions
  const TableView = () => dataView.value = TableUsers.dataKaryawan.filter(details => details.id === useRoute().params.id)
  return {
    TableUsers,
    dataView,
    TableView
  }
})
