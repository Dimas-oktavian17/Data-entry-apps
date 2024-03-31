import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useRoute } from 'vue-router'
import { UsersPinia } from '../users/users'

export const TableStore = defineStore('TableStore', () => {
  // state
  const TableUsers = UsersPinia()
  const dataView = ref(null)
  const isOptionSelected = ref(false)
  // getters
  // actions
  const changeTextColor = () => isOptionSelected.value = true
  const TableView = () => dataView.value = TableUsers.dataKaryawan.filter(details => details.id === useRoute().params.id)
  return {
    TableUsers,
    dataView,
    TableView,
    isOptionSelected,
    changeTextColor
  }
})
