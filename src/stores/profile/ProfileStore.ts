import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { UsersPinia } from '@/stores/users/users'
import { useDateFormat } from '@vueuse/core'

// Define a type or interface for the array of numbers
type String = string;
export const ProfileStore = defineStore('ProfileStore', () => {
 // state
 const UserDate = ref<String>('dddd MMM DD YYYY')
 const UserProfile = UsersPinia()
 // getters
 const LoginDate = computed(() => useDateFormat(UserProfile.users.metadata.lastSignInTime, UserDate).value);
 const CreateDate = computed(() => useDateFormat(UserProfile.users.metadata.creationTime, UserDate).value)
 return {
  UserProfile,
  UserDate,
  LoginDate,
  CreateDate
 }
})

