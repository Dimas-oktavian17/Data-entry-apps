<script setup>
import { ref, } from 'vue'
import { useRouter } from 'vue-router';
const router = useRouter();
import { createUserWithEmailAndPassword, sendEmailVerification, } from 'firebase/auth';
import { useFirebaseAuth } from 'vuefire';

const email = ref('')
const password = ref('')
const notif = ref('')
const notifStatus = ref(false)
const auth = useFirebaseAuth();

const handleSignup = async () => {
 try {
  const { user } = await createUserWithEmailAndPassword(auth, email.value, password.value)
  if (user && !user.emailVerified) {
   sendEmailVerification(user)
   notif.value = `Your email is not ${user.emailVerified}, please check your email for verification`
   notifStatus.value = true
   setTimeout(() => {
    notif.value = ''
    notifStatus.value = false
    router.push('/')
   }, 10000);
  }
 } catch (error) {
  console.error(error);
 }
}

</script>
<template>
 <div class="container flex flex-col items-center justify-center h-screen">
  <span class="flex flex-row max-w-xs text-base font-semibold text-red-500">
   {{ notif }}
   <IconVue v-if="notifStatus" icon="ion:warning" class="flex flex-row text-red-400 animate-ping" />
  </span>
  <FormKit @submit="handleSignup" ref="form" type="form" submit-label="Sign Up" :classes="{
   outer: 'mb-2',
   inner: 'w-72 lg:w-1/2 max-w-xs space-y-6',
  }">
   <h1 class="mb-2 text-2xl font-bold text-center w-">Sign-up</h1>
   <FormKit v-model="email" class="p-16" type="text" name="email" label="Your email" placeholder="jane@example.com"
    validation="required|email" :classes="{
     outer: 'mb-2 ',
     label:
      'block mb-2 text-sm font-medium text-primary text-black',
     inner: ' focus:outline-1',
     input:
      'border border-black  normal-case text-black text-sm rounded-lg block w-72 p-2.5',
    }" />
   <FormKit v-model="password" placeholder="***" type="password" label="Password" validation="required|password"
    :classes="{
     outer: 'mb-2',
     label:
      'block mb-2 text-sm font-medium text-primary text-black',
     inner: ' focus:outline-1',
     input:
      'border border-black  normal-case text-black text-sm rounded-lg block w-72 p-2.5',
    }" />

  </FormKit>
  <span class="pt-8 text-base">Or Sign-up With</span>
  <div class="flex flex-col items-center justify-center mt-4">
   <button class="px-8 py-2 border rounded border-slate-200 group">
    <IconVue icon="flat-color-icons:google" class="w-12 h-auto transition-all group-hover:-rotate-45" />
   </button>
   <div class="flex flex-row justify-between pt-4">
    <p>Do ready have an account?</p>
    <RouterLink class="pl-2 text-blue-600 transition-all hover:opacity-50" to="/">
     Sign-in Now
    </RouterLink>
   </div>
  </div>
 </div>
</template>