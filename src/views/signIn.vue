<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRouter, RouterLink } from 'vue-router';
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { useFirebaseAuth, useCurrentUser } from 'vuefire';
import { googleAuthProvider } from '@/firebase';
import NotifError from '@/components/base/NotifError.vue';

const auth = useFirebaseAuth();
const user = useCurrentUser();
const router = useRouter();
const email = ref('');
const pw = ref('');
const notif = ref('')
const notifStatus = ref(false)
console.log(auth);
const submitHandler = async () => {
 try {
  await signInWithEmailAndPassword(auth, email.value, pw.value);
  if (user.emailVerified === true) {
   router.push('/eCommerce')
  }
 } catch (error) {
  console.log(error);
  notif.value = `${error}`
  notifStatus.value = true
  setTimeout(() => {
   notif.value = ''
   notifStatus.value = false
   router.push('/register')
  }, 10000);
 }
};
onMounted(() => watch(user, user => user == null ? router.push('/register') : user.emailVerified === true ? router.push('/eCommerce') : router.push('/register')))
const signInPopup = () => signInWithPopup(auth, googleAuthProvider).then(() => router.push('/eCommerce')).catch(error => notif.value = error)
</script>


<template>
 <div class="container flex flex-col items-center justify-center h-screen">
  <NotifError v-if="notifStatus" :notif="notif" />
  <FormKit type="form" @submit="submitHandler" submit-label="Sign In" :classes="{
   outer: 'mb-2',
   inner: 'w-72 lg:w-1/2 max-w-xs space-y-6 ',
  }">
   <h1 class="mb-2 text-2xl font-bold text-center">Sign-In</h1>
   <FormKit v-model="email" class="p-16" type="text" name="email" label="Your email" placeholder="jane@example.com"
    validation="required|email" :classes="{
     outer: 'mb-2 ',
     label:
      'block mb-2 text-sm font-medium text-primary text-black',
     inner: ' focus:outline-1',
     input:
      'border border-black  normal-case text-black text-sm rounded-lg block w-72 p-2.5',
    }" />
   <FormKit v-model="pw" placeholder="***" type="password" label="Password" validation="required|password" :classes="{
    outer: 'mb-2',
    label:
     'block mb-2 text-sm font-medium text-primary text-black',
    inner: ' focus:outline-1',
    input:
     'border border-black  normal-case text-black text-sm rounded-lg block w-72 p-2.5',
   }" />
   <RouterLink to="/forgot-password" class="pt-2 text-blue-600 transition-all hover:opacity-50" type="button">
    Forgot Password?
   </RouterLink>
  </FormKit>
  <span class="pt-8 text-base">Or Login With</span>
  <div class="flex flex-col items-center justify-center mt-4">
   <ButtonAuth @handleGoogleAuth="signInPopup">
    <IconVue icon="flat-color-icons:google" class="w-12 h-auto transition-all group-hover:-rotate-45" />
   </ButtonAuth>
   <div class="flex flex-row justify-between pt-4">
    <p>Don’t have an account?</p>
    <RouterLink class="pl-2 text-blue-600 transition-all hover:opacity-50" to="/register">
     Sign-up
    </RouterLink>
   </div>
  </div>
 </div>
</template>