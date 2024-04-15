import { watch } from 'vue'
import { defineStore } from 'pinia'
import { UsersPinia } from '@/stores/users/users'
import { useFirebaseAuth } from 'vuefire'
import { signOut } from 'firebase/auth';
import { useRouter } from 'vue-router';
export const AuthLogout = defineStore('AuthLogout', () => {
 // state
 const UsersProfile: any = UsersPinia()
 // auth is data firebase login user
 const Auth: any = useFirebaseAuth()
 const Router = useRouter()
 // actions
 const HandleLogout = async (): Promise<void> => {
  try {
   UsersProfile.users === null && Router.push('/')
   await signOut(Auth)
  } catch (error) {
   console.error(error);
  }
 }
 watch(UsersProfile.users, (newUser) => newUser === null && Router.push('/'));
 return {
  UsersProfile,
  Auth,
  Router,
  HandleLogout
 }
})
