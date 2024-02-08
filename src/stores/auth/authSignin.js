import { ref, watch } from 'vue'
import { useFirebaseAuth, useCurrentUser } from 'vuefire'
import { useRouter } from 'vue-router';
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { googleAuthProvider } from '@/firebase';
import { defineStore } from 'pinia'

export const authPinia = defineStore('AuthPinia', () => {
  const count = ref(0)
  const user = useCurrentUser()
  const auth = useFirebaseAuth()
  const router = useRouter()

  watch(user, () => user.value === null ? router.push('/register') : user.value.emailVerified === true ? router.push('/Dashboard') : router.push('/register'))

  async function submitHandler(email, pw,) {
    let notif = ''
    let notifStatus = false
    try {
      await signInWithEmailAndPassword(auth, email, pw);
      if (user.emailVerified === true) {
        router.push('/Dashboard')
      }
    } catch (error) {
      notif = error
      notifStatus = true
      console.log(user);
      console.log(auth);
      setTimeout(() => {
        notif = ''
        notifStatus = false
        router.push('/register')
      }, 10000);
    }
    return { notif, notifStatus }
  }
  function signInPopu() {
    let notif = ''
    signInWithPopup(auth, googleAuthProvider).then(() => router.push('/Dashboard')).catch(error => notif = error)
    return { notif, }
  }
  function checkUser() {
    user.value === null ? router.push('/register') : user.value.emailVerified === true ? router.push('/Dashboard') : router.push('/register')
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
