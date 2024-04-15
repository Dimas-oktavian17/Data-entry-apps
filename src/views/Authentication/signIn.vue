<script setup>
import { onMounted, watch } from 'vue'
import { RouterLink } from 'vue-router';
import NotifError from '@/components/base/NotifError.vue';
import { AuthSigin } from '@/stores/auth/authSignin';
import { storeToRefs } from 'pinia'
const authSigin = AuthSigin()
const { email, pw, notif, notifStatus } = storeToRefs(authSigin)
const submitHandler = async () => authSigin.submitHandler(email.value, pw.value)

const signInPopup = async () => {
 const { notif: newNotif } = await authSigin.signInPopu()
 notif.value = newNotif
}

onMounted(() => watch(() => authSigin.user && authSigin.user.value !== null, () => authSigin.checkUser()))
</script>


<template>
 <DefaultAuthCard subtitle="Sign in your account" title="Sign In to TailAdmin">
  <NotifError v-if="notifStatus" :notif="notif" />
  <FormKit type="form" @submit="submitHandler" submit-label="Sign In" :classes="{
   outer: 'mb-2',
   inner: 'w-72 lg:w-1/2 max-w-xs space-y-6 ',
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
    outer: 'mb-2 ',
    label:
     'block mb-2 text-sm font-medium text-primary text-black',
    inner: ' focus:outline-1',
    input:
     'w-full rounded border-[1.5px] text-black border-stroke bg-transparent py-3 px-5 font-normal outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:text-white dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary',
   }" />
   <RouterLink to="/forgot-password" class="my-6 text-blue-600 transition-all hover:opacity-50">
    Forgot Password?
   </RouterLink>
   <FormKit type="submit" :classes="{
    outer: 'my-4',
    input: 'w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 font-medium text-white transition '
   }">
    Sign in account
   </FormKit>
  </FormKit>
  <ButtonAuth @handleGoogleAuth="signInPopup">
   <IconVue icon="flat-color-icons:google" class="w-5 h-auto transition-all group-hover:-rotate-45" />
   Sign in with Google
  </ButtonAuth>
  <div class="mt-6 text-center">
   <p class="font-medium">
    Don’t have any account?
    <router-link to="/register" class="text-primary">Sign up</router-link>
   </p>
  </div>
 </DefaultAuthCard>
</template>