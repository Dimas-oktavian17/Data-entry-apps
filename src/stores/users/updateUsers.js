import { ref, computed } from 'vue'
import { useCollection, useCurrentUser, updateCurrentUserProfile } from 'vuefire'
import { karyawanRef } from '@/firebase'
import { defineStore } from 'pinia'

export const updateUsers = defineStore('UsersPinia', () => {
  // state
  const dataKaryawan = useCollection(karyawanRef)
  const users = useCurrentUser()
  const formData = ref({
    fullName: users.value.displayName,
    phoneNumber: users.value.phoneNumber,
    emailAddress: users.value.email,
    photoUsers: users.value.photoURL,
    // username: UpdateUsers.uid,
    // bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere fermentum urna, eu condimentum mauris tempus ut. Donec fermentum blandit aliquet.'
  })
  // getters
  const name = computed(() => formData.value.fullName)
  const email = computed(() => formData.value.emailAddress)
  const phone = computed(() => formData.value.phoneNumber)
  const photo = computed(() => formData.value.photoUsers)
  // actions
  return {
    dataKaryawan,
    users,
    formData,
    email,
    name,
    phone,
    photo
  }
})
