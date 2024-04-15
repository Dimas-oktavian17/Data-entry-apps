import { ref, watch } from 'vue'
import { useFirebaseAuth, useCurrentUser } from 'vuefire'
import { useRouter } from 'vue-router';
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { googleAuthProvider } from '@/firebase';
import { defineStore } from 'pinia'

export const AuthSigin = defineStore('AuthSigin', () => {
 const user: any = useCurrentUser()
 const auth: any = useFirebaseAuth()
 const router = useRouter()
 const email = ref<string>('');
 const pw = ref<string>('');
 const notif = ref<string | any>('')
 const notifStatus = ref<boolean>(false)

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
   console.error(error);
   setTimeout(() => {
    router.push('/register')
   }, 5000);
  }
 }
 function signInPopu() {
  notif.value = ''
  signInWithPopup(auth, googleAuthProvider).then(() => router.push('/Dashboard')).catch(error => notif.value = error)
  return { notif }
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
  notif,
  notifStatus
 }
})
