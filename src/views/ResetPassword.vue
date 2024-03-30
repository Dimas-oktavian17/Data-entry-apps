<script setup>
import { ref, } from 'vue'
import NotifError from '@/components/base/NotifError.vue';
import { authPinia } from '@/stores/auth/authReset'

const authResetPassword = authPinia()
const notif = ref('')
const notifStatus = ref(false)
const email = ref('')

const submitHandler = async () => {
 const { notif: newNotif, notifStatus: newNotifStatus } = await authResetPassword.submitHandler(email.value)
 notif.value = `${newNotif}`
 notifStatus.value = newNotifStatus
}
</script>

<template>
 
 <div class="container flex flex-col items-center justify-center h-screen space-y-5">
  <NotifError v-if="notifStatus" :notif="notif" />
  <FormKit type="form" @submit="submitHandler" submit-label="Send Email" :classes="{
   outer: 'mb-2',
   inner: 'w-72 lg:w-1/2 max-w-xs space-y-6  bg-white',
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
   <FormKit type="submit" :classes="{
   outer: 'my-4',
   input: 'w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 font-medium text-white transition '
  }">
    Reset Password
   </FormKit>
  </FormKit>
 </div>
</template>