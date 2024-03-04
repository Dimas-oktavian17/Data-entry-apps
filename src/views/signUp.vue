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
 <!-- new -->
 <DefaultAuthCard subtitle="Sign-up now" title="Sign Up to TailAdmin">
  <NotifError v-if="notifStatus" :notif="notif" />
  <FormKit @submit="handleSignup" ref="form" type="form" submit-label="Sign Up" :classes="{
   outer: 'mb-2',
   inner: 'w-72 lg:w-1/2 max-w-xs space-y-6',
  }">

   <FormKit v-model="email" class="p-16" type="text" name="email" label="Your email" placeholder="jane@example.com"
    validation="required|email" :classes="{
   outer: 'mb-2 ',
   label:
    'block mb-2 text-sm font-medium text-primary text-black',
   inner: ' focus:outline-1',
   input:
    'w-full rounded border-[1.5px] text-black border-stroke bg-transparent py-3 px-5 font-normal outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:text-white dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary',
  }" />
   <FormKit v-model="password" placeholder="***" type="password" label="Password" validation="required|password"
    :classes="{
   outer: 'mb-2',
   label:
    'block mb-2 text-sm font-medium text-primary text-black',
   inner: ' focus:outline-1',
   input:
    'w-full rounded border-[1.5px] text-black border-stroke bg-transparent py-3 px-5 font-normal outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:text-white dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary',
  }" />
   <FormKit type="submit" :classes="{
   outer: 'my-4',
   input: 'w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 font-medium text-white transition '
  }">
    Create Account
   </FormKit>
  </FormKit>
  <ButtonAuth @handleGoogleAuth="signInPopup">
   <IconVue icon="flat-color-icons:google" class="w-5 h-auto transition-all group-hover:-rotate-45" />
   Sign up with Google
  </ButtonAuth>
  <div class="mt-6 text-center">
   <p class="font-medium">
    Already have an account?
    <router-link to="/" class="text-primary">Sign in</router-link>
   </p>
  </div>
 </DefaultAuthCard>
</template>