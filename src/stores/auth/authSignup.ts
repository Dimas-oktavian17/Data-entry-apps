import { useFirebaseAuth, useCurrentUser } from 'vuefire'
import { useRouter } from 'vue-router';
import { createUserWithEmailAndPassword, sendEmailVerification, signInWithPopup, } from 'firebase/auth';
import { googleAuthProvider } from '@/firebase';
import { defineStore } from 'pinia'
import { authPinia } from '@/stores/auth/authReset';
import { AuthSigin } from '@/stores/auth/authSignin';


export const AuthSignUp = defineStore('AuthSignUp', () => {
 const CurrentUser: any = useCurrentUser()
 const auth: any = useFirebaseAuth()
 const router = useRouter()
 const NotificationStore = authPinia()
 const AuthSigninStore = AuthSigin()

 const submitHandler = async (email: string, password: string): Promise<void> => {
  try {
   const { user } = await createUserWithEmailAndPassword(auth, email, password)
   CurrentUser.value
   if (user && !user.emailVerified) {
    sendEmailVerification(user)
    NotificationStore.notif = `Check your email, & verification`
    NotificationStore.notifStatus = true
    setTimeout(() => {
     CurrentUser.value = null
     NotificationStore.notif = ""
     NotificationStore.notifStatus = false
     AuthSigninStore.email = null;
     AuthSigninStore.pw = null
     router.push('/')
    }, 5000);
   }
  } catch (error) {
   NotificationStore.notif = `${error}`
   NotificationStore.notifStatus = true
   setTimeout(() => {
    NotificationStore.notif = ""
    NotificationStore.notifStatus = false
    AuthSigninStore.email = null;
    AuthSigninStore.pw = null
   }, 5000);
  }
 }
 function signInPopu() {
  signInWithPopup(auth, googleAuthProvider).then(() => router.push('/')).catch(error => console.error(error))
 }
 function checkUser() {
  CurrentUser.value === null ? router.push('/register') : CurrentUser.value.emailVerified === true ? router.push('/') : router.push('/register')
 }
 return {
  submitHandler,
  signInPopu,
  checkUser,
  NotificationStore,
  AuthSigninStore,
  auth,
  CurrentUser,
  router,
 }
})
