<script setup>

</script>
<template>
  <div class="container flex flex-col items-center justify-center h-screen">
    <FormKit ref="form" type="form" submit-label="Sign Up" :classes="{
      outer: 'mb-2',
      inner: 'w-72 lg:w-1/2 max-w-xs space-y-6 ',
    }">
      <h1 class="mb-2 text-2xl font-bold text-center w-">Sign-up</h1>
      <FormKit class="p-16" type="text" name="email" label="Your email" placeholder="jane@example.com"
        validation="required|email" :classes="{
          outer: 'mb-2 ',
          label:
            'block mb-2 text-sm font-medium text-primary text-black',
          inner: ' focus:outline-1',
          input:
            'border border-black  normal-case text-black text-sm rounded-lg block w-72 p-2.5',
        }" />
      <FormKit placeholder="***" type="password" label="Password" validation="required|password" :classes="{
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