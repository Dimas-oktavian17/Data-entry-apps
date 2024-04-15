import { computed } from 'vue'
import { defineStore } from 'pinia'
import { UsersPinia } from '@/stores/users/users'
import { useDateFormat } from '@vueuse/core'

export const ProfileStore = defineStore('ProfileStore', () => {
 // state
 const UserProfile = UsersPinia()
 // getters
 const LoginDate = computed<String>(() => useDateFormat(UserProfile.users.metadata.lastSignInTime, 'dddd MMM DD YYYY').value);
 const CreateDate = computed<String>(() => useDateFormat(UserProfile.users.metadata.creationTime, 'dddd MMM DD YYYY').value)
 return {
  UserProfile,
  LoginDate,
  CreateDate
 }
})

