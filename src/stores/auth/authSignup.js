import { ref, } from 'vue'
import { useFirebaseAuth, useCurrentUser } from 'vuefire'
import { useRouter } from 'vue-router';
import { createUserWithEmailAndPassword, sendEmailVerification, signInWithPopup, } from 'firebase/auth';
import { googleAuthProvider } from '@/firebase';
import { defineStore } from 'pinia'

export const authPinia = defineStore('AuthPinia', () => {
  const count = ref(0)
  const user = useCurrentUser()
  const auth = useFirebaseAuth()
  const router = useRouter()

  async function submitHandler(email, password) {
    let notif = ''
    let notifStatus = false
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password)
      if (user && !user.emailVerified) {
        sendEmailVerification(user)
        notif = 'Please verify your email!'
        notifStatus = true
        setTimeout(() => {
          notif = ''
          notifStatus = false
          router.push('/')
        }, 10000);
      }
    } catch (error) {
      notif = `${error}`
      notifStatus = true
      setTimeout(() => {
        notif = ''
        notifStatus = false
        router.push('/')
      }, 10000);
    }
    return { notif, notifStatus }
  }
  function signInPopu() {
    let notif = ''
    signInWithPopup(auth, googleAuthProvider).then(() => router.push('/')).catch(error => notif = error)
    return { notif }
  }
  function checkUser() {
    user.value === null ? router.push('/register') : user.value.emailVerified === true ? router.push('/') : router.push('/register')
  }
  return {
    count,
    auth,
    user,
    router,
    submitHandler,
    signInPopu,
    checkUser
  }
})
