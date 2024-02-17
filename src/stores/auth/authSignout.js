import { ref, } from 'vue'
import { defineStore } from 'pinia'

export const authPinia = defineStore('AuthPinia', () => {
  // state
  const userName = ref(null)
  const email = ref(null)
  const metaData = ref([])
  const phoneNumber = ref(null)
  const profilPicture = ref(null)
  const id = ref(null)

  return {
    userName,
    email,
    metaData,
    phoneNumber,
    profilPicture,
    id,
  }
})
