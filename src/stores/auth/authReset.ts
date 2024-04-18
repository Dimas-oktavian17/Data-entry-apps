import { ref } from 'vue';
import { useFirebaseAuth, } from 'vuefire'
import { useRouter } from 'vue-router';
import { sendPasswordResetEmail } from 'firebase/auth';
import { defineStore } from 'pinia'
import { AuthSigin } from '@/stores/auth/authSignin'
import { AuthSignin } from '@/interfaces/InterfacesAuthReset';

export const authPinia = defineStore('AuthPinia', () => {
 const auth: any = useFirebaseAuth()
 const router = useRouter()
 const notif = ref<string>('')
 const notifStatus = ref<boolean>(false)
 const UsersLoginInput: AuthSignin = AuthSigin()

 async function submitHandler(emailUser: string) {
  try {
   sendPasswordResetEmail(auth, emailUser)
   notif.value = 'Check your email address'
   notifStatus.value = true
   setTimeout(() => {
    UsersLoginInput.email = ''
    notif.value = ''
    notifStatus.value = false
    router.push('/')
   }, 3000);
  } catch (error) {
   notif.value = `${error}: Email is not found`
   notifStatus.value = true
   setTimeout(() => {
    notif.value = ''
    notifStatus.value = false
   }, 3000);
  }
 }

 return {
  auth,
  router,
  submitHandler,
  notif,
  notifStatus,
  UsersLoginInput
 }
})
