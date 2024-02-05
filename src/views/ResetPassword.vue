<script setup>
import { ref, } from 'vue'
import { useRouter, } from 'vue-router';
import { sendPasswordResetEmail } from 'firebase/auth';
import NotifError from '@/components/base/NotifError.vue';
import { useFirebaseAuth } from 'vuefire';
const auth = useFirebaseAuth()
const router = useRouter()
const notif = ref('')
const notifStatus = ref(false)
const email = ref('')
const submitHandler = async () => {
 try {
  sendPasswordResetEmail(auth, email.value)
  notif.value = 'Check your email address'
  notifStatus.value = true
  setTimeout(() => {
   notif.value = ''
   notifStatus.value = false
   router.push('/')
  }, 10000);

 } catch (error) {
  notif.value = 'Email is not found'
  notifStatus.value = true
  setTimeout(() => {
   notif.value = ''
   notifStatus.value = false
  }, 10000);
 }
}
</script>

<template>
 <div class="container flex flex-col items-center justify-center h-screen space-y-5">
  <NotifError v-if="notifStatus" :notif="notif" />
  <FormKit type="form" @submit="submitHandler" submit-label="Send Email" :classes="{
   outer: 'mb-2',
   inner: 'w-72 lg:w-1/2 max-w-xs space-y-6 ',
  }">
   <h1 class="mb-2 text-2xl font-bold text-center">Reset your password</h1>
   <FormKit v-model="email" class="p-16" type="text" name="email" label="Your email" placeholder="jane@example.com"
    validation="required|email" :classes="{
     outer: 'mb-2 ',
     label:
      'block mb-2 text-sm font-medium text-primary text-black',
     inner: ' focus:outline-1',
     input:
      'border border-black  normal-case text-black text-sm rounded-lg block w-72 p-2.5',
    }" />
  </FormKit>
 </div>
</template>