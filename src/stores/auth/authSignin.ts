import { ref, watch } from 'vue'
import { useFirebaseAuth, useCurrentUser } from 'vuefire'
import { useRouter } from 'vue-router';
import { authPinia } from './authReset';
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { googleAuthProvider } from '@/firebase';
import { defineStore } from 'pinia'


export const AuthSigin = defineStore('AuthSigin', () => {
 const user: any = useCurrentUser()
 const auth: any = useFirebaseAuth()
 const router = useRouter()
 const email = ref<string | null>('');
 const pw = ref<string | null>('');
 const NotificationStore = authPinia();


 watch(user, () => user.value === null ? router.push('/register') : user.value.emailVerified === true ? router.push('/Dashboard') : router.push('/register'))

 async function submitHandler(emailUser: string, password: string): Promise<void> {
  try {
   await signInWithEmailAndPassword(auth, emailUser, password);
   email.value = ''
   pw.value = ''
   if (user.emailVerified === true) {
    router.push('/Dashboard')
   }
  } catch (error) {
   NotificationStore.notif = `${error}`
   NotificationStore.notifStatus = true
   setTimeout(() => {
    NotificationStore.notif = ""
    NotificationStore.notifStatus = false
    email.value = null
    pw.value = null
    router.push('/register')
   }, 5000);
  }
 }
 function signInPopu() {

  signInWithPopup(auth, googleAuthProvider).then(() => router.push('/Dashboard')).catch(error => console.error(error))
 }
 function checkUser() {
  user.value === null ? router.push('/register') : user.value.emailVerified === true ? router.push('/Dashboard') : router.push('/register')
 }
 return {
  auth,
  user,
  router,
  submitHandler,
  signInPopu,
  checkUser,
  email,
  pw,
  NotificationStore
 }
}
)
