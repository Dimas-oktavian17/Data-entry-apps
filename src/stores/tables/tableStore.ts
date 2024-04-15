import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useRoute } from 'vue-router'
import { UsersPinia } from '../users/users'
import { DataUsers } from '@/interfaces/InterfacesDataUsers'

export const TableStore = defineStore('TableStore', () => {
 // state
 const TableUsers = UsersPinia()
 const dataView = ref<any>([])
 const isOptionSelected = ref<boolean>(false)
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
