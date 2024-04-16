import { computed } from 'vue'
import { defineStore } from 'pinia'
import { UsersPinia } from '@/stores/users/users'
import { DataInfo } from '@/interfaces/InterfacesTableOne'

export const TableOneStore = defineStore('TableTwoStore', () => {
 // state
 const UserProfile = UsersPinia()
 // getters
 const UsersInput = computed<DataInfo[]>(() => {
  return UserProfile.dataKaryawan.flatMap(user => user.author ? user.author : [] as DataInfo[])
   .reduce((acc, author): DataInfo[] => {
    const found = acc.find((a: { uid: string }) => a.uid === author.uid)
    if (found) {
     found.count++
     found.picture = author.picture
    } else {
     acc.push({ uid: author.uid, name: author.name, photo: author.picture, email: author.email, count: 1 }) // Include count property here
    }
    return acc
   }, [])
 })
 return {
  UserProfile,
  UsersInput
 }
})

