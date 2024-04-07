import { computed, watch, ref } from 'vue'
import { useCollection, useCurrentUser } from 'vuefire'
import { useRouter } from 'vue-router';
import { karyawanRef } from '@/firebase'
import { defineStore } from 'pinia'
import { formPinia } from '../formAPI';
export const UsersPinia = defineStore('UsersPinia', () => {
  // statep
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
  watch(users, (newUser) => newUser === null && router.push('/'))
  // actions
  return {
    nameProvinces,
    dataKaryawan,
    users,
    name,
    Email,
    photo,
    uid,
    FormUsers,
    router
  }
})
