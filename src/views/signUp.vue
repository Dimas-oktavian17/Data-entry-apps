<script setup>
import { ref, } from 'vue'
import { RouterLink } from 'vue-router';
import { authPinia } from '@/stores/auth/authSignup'
import NotifError from '@/components/base/NotifError.vue';

const email = ref('')
const password = ref('')
const notif = ref('')
const notifStatus = ref(false)
const authSignup = authPinia()

const handleSignup = async () => {
 const { notif: newNotif, notifStatus: newNotifStatus } = await authSignup.submitHandler(email.value, password.value)
 notif.value = `${newNotif}`
 notifStatus.value = newNotifStatus
 // 
}
const signInPopup = async () => {
 const { notif: newNotif } = await authSignup.signInPopu()
 notif.value = newNotif
}
</script>
<template>
 <div class="container flex flex-col items-center justify-center h-screen">
  <NotifError v-if="notifStatus" :notif="notif" />
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
   <ButtonAuth @handleGoogleAuth="signInPopup">
    <IconVue icon="flat-color-icons:google" class="w-12 h-auto transition-all group-hover:-rotate-45" />
   </ButtonAuth>
   <div class="flex flex-row justify-between pt-4">
    <p>Do ready have an account?</p>
    <RouterLink class="pl-2 text-blue-600 transition-all hover:opacity-50" to="/">
     sign-in
    </RouterLink>
   </div>
  </div>
 </div>
</template>