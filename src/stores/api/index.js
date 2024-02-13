import { useFirebaseAuth, } from 'vuefire'
import { useRouter } from 'vue-router';
import { sendPasswordResetEmail } from 'firebase/auth';
import { defineStore } from 'pinia'

export const authPinia = defineStore('AuthPinia', () => {
  const auth = useFirebaseAuth()
  const router = useRouter()
  async function submitHandler(email) {
    let notif = ''
    let notifStatus = false
    try {
      sendPasswordResetEmail(auth, email)
      notif = 'Check your email address'
      notifStatus = true
      setTimeout(() => {
        notif = ''
        notifStatus = false
        router.push('/')
      }, 10000);

    } catch (error) {
      notif = 'Email is not found'
      notifStatus = true
      setTimeout(() => {
        notif = ''
        notifStatus = false
      }, 10000);
    }
    return { notif, notifStatus }
  }

  return {
    auth,
    router,
    submitHandler,
  }
})
