import { computed, watch } from 'vue'
import { useCollection, useCurrentUser } from 'vuefire'
import { useRouter } from 'vue-router';
import { karyawanRef } from '@/firebase'
import { defineStore } from 'pinia'
export const UsersPinia = defineStore('UsersPinia', () => {
 // statep
 const dataKaryawan = useCollection(karyawanRef)
 const users = useCurrentUser()
 const router = useRouter();
 // getters
 const name = computed<String>(() => users.value?.displayName || 'N/A')
 const Email = computed<String>(() => users.value?.email || 'N/A')
 const photo = computed<String>(() => users.value?.photoURL || 'N/A')
 const uid = computed<String>(() => users.value?.uid || 'N/A')
 watch(users, (newUser) => newUser === null && router.push('/'))
 // actions
 return {
  dataKaryawan,
  users,
  name,
  Email,
  photo,
  uid,
  router
 }
})
