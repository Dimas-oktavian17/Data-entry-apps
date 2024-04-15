import { useFirebaseAuth, useCurrentUser } from 'vuefire'
import { useRouter } from 'vue-router';
import { createUserWithEmailAndPassword, sendEmailVerification, signInWithPopup, } from 'firebase/auth';
import { googleAuthProvider } from '@/firebase';
import { defineStore } from 'pinia'
import { AuthSigin } from './authSignin';

export const AuthSignUp = defineStore('AuthSignUp', () => {
 const user: any = useCurrentUser()
 const auth: any = useFirebaseAuth()
 const router = useRouter()
 const authSigin = AuthSigin()
 async function submitHandler(email: string, password: string, notif: any, notifStatus: boolean): Promise<object> {
  notif = ''
  notifStatus = false
  try {
   const { user } = await createUserWithEmailAndPassword(auth, email, password)
   if (user && !user.emailVerified) {
    sendEmailVerification(user)
    notif = 'Please verify your email!'
    notifStatus = true
   }
  } catch (error) {
   notif = `${error}`
   notifStatus = true
   setTimeout(() => {
    notif = ''
    notifStatus = false
    router.push('/')
   }, 10000);
  } finally {
   setTimeout(() => {
    authSigin.notif = ''
    authSigin.notifStatus = false
    authSigin.router.push('/')
    authSigin.email = ''
    authSigin.pw = ''
   }, 5000);
  }
  return { notif, notifStatus }
 }
 function signInPopu() {
  signInWithPopup(auth, googleAuthProvider).then(() => router.push('/')).catch(error => console.error(error))
 }
 function checkUser() {
  user.value === null ? router.push('/register') : user.value.emailVerified === true ? router.push('/') : router.push('/register')
 }
 return {
  auth,
  user,
  router,
  submitHandler,
  signInPopu,
  checkUser,
  authSigin
 }
})
