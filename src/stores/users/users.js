import { ref, computed } from 'vue'
import { useCollection, useCurrentUser } from 'vuefire'
import { karyawanRef } from '@/firebase'
import { defineStore } from 'pinia'


export const UsersPinia = defineStore('UsersPinia', () => {
  // state
  const dataKaryawan = useCollection(karyawanRef)
  const users = useCurrentUser()
  const name = ref(users.value.displayName)
  const email = ref(users.value.email)
  const photo = ref(users.value.photoURL)
  const uid = ref(users.value.uid)
  const dateSingin = new Date(users.value.metadata.lastSignInTime)
  const dateCreate = new Date(users.value.metadata.creationTime)
  const LoginDate = dateSingin.toDateString()
  const CreateDate = dateCreate.toDateString()

  // getters
  const StatusMagang = computed(() => dataKaryawan.value.filter(({ status_karyawan }) => status_karyawan === 'magang').length)
  const StatusKontrak = computed(() => dataKaryawan.value.filter(({ status_karyawan }) => status_karyawan === 'kontrak').length)
  const StatusKartap = computed(() => dataKaryawan.value.filter(({ status_karyawan }) => status_karyawan === 'kartap').length)
  const UsersInput = computed(() => {
    return dataKaryawan.value.flatMap(user => user.author ? user.author : [])
      .reduce((acc, author) => {
        const found = acc.find(a => a.uid === author.uid)
        found ? found.count++ : acc.push({ uid: author.uid, name: author.name, photo: author.picture, email: author.email, count: 1 }) // Include count property here
        return acc
      }, [])
  })
  // actions
  return {
    dataKaryawan,
    StatusMagang,
    StatusKontrak,
    StatusKartap,
    UsersInput,
    users,
    name,
    email,
    photo,
    uid,
    LoginDate,
    CreateDate
  }
})
