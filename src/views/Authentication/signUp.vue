<script setup>
import { RouterLink } from 'vue-router';
import NotifError from '@/components/base/NotifError.vue';
import { AuthSigin } from '@/stores/auth/authSignin';
import { AuthSignUp } from '@/stores/auth/authSignup';
import { authPinia } from '@/stores/auth/authReset';
import { storeToRefs } from 'pinia'
const authSigin = AuthSigin()
const authSignup = AuthSignUp()
const NotificationStore = authPinia()
const { email, pw } = storeToRefs(authSigin)

const handleSignup = async () => await authSignup.submitHandler(email.value, pw.value)
const signInPopup = async () => await authSignup.signInPopu()
</script>

<template>
 <DefaultAuthCard subtitle="Sign-up now" title="Sign Up to TailAdmin">
  <NotifError v-if="NotificationStore.notifStatus" :notif="NotificationStore.notif" />
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
   <FormKit v-model="pw" placeholder="***" type="password" label="Password" validation="required|password" :classes="{
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