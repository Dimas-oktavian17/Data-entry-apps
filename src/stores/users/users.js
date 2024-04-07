import { computed, watch, ref } from 'vue'
import { useCollection, useCurrentUser } from 'vuefire'
import { useRouter } from 'vue-router';
import { karyawanRef } from '@/firebase'
import { defineStore } from 'pinia'
import { formPinia } from '../formAPI';
export const UsersPinia = defineStore('UsersPinia', () => {
  // state
  const FormUsers = formPinia()
  const nameProvinces = ref([])
  const dataKaryawan = useCollection(karyawanRef)
  const users = useCurrentUser()
  const router = useRouter();
  // getters
  const name = computed(() => users.value?.displayName || 'N/A')
  const Email = computed(() => users.value?.email || 'N/A')
  const photo = computed(() => users.value?.photoURL || 'N/A')
  const uid = computed(() => users.value?.uid || 'N/A')
  const StatusMagang = computed(() => dataKaryawan.value.filter(({ status_karyawan }) => status_karyawan === 'magang').length)
  const StatusKontrak = computed(() => dataKaryawan.value.filter(({ status_karyawan }) => status_karyawan === 'kontrak').length)
  const StatusKartap = computed(() => dataKaryawan.value.filter(({ status_karyawan }) => status_karyawan === 'kartap').length)
  const UsersInput = computed(() => {
    return dataKaryawan.value.flatMap(user => user.author ? user.author : [])
      .reduce((acc, author) => {
        const found = acc.find(a => a.uid === author.uid)
        if (found) {
          found.count++
          found.picture = author.picture
        } else {
          acc.push({ uid: author.uid, name: author.name, photo: author.picture, email: author.email, count: 1 }) // Include count property here
        }
        return acc
      }, [])
  })
  watch(users, (newUser) => newUser === null && router.push('/'))
  // actions
  return {
    nameProvinces,
    dataKaryawan,
    StatusMagang,
    StatusKontrak,
    StatusKartap,
    UsersInput,
    users,
    name,
    Email,
    photo,
    uid,
    FormUsers,
    router
  }
})
