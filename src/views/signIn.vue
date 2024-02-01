<script setup>
import { ref, onMounted, watch, } from 'vue';
import { useRouter } from 'vue-router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useCurrentUser, useFirebaseAuth } from 'vuefire';
const auth = useFirebaseAuth();
const user = useCurrentUser();
const router = useRouter();
const email = ref('');
const pw = ref('');
const submitHandler = async () => {
    try {
        1
        await signInWithEmailAndPassword(auth, email.value, pw.value);
    } catch (error) {
        // alert(error.message);
        if (error.code === 'auth/user-not-found') {
            alert('No account found with this email. Redirecting to sign up.');
            router.push('/SignUp');
        } else {
            alert(error.message);
        }
    }
};
onMounted(async () => {
    watch(user, curentUser => {
        return curentUser === null ? router.push('/SignUp') : router.push('/Dashboard')
    });
});

</script>


<template>
    <div class="container flex flex-col items-center justify-center h-screen">
        <FormKit type="form" @@submit.prevent="submitHandler" submit-label="Sign In" :classes="{
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
            <FormKit v-model="pw" placeholder="***" type="password" label="Password" validation="required|password"
                :classes="{
                    outer: 'mb-2',
                    label:
                        'block mb-2 text-sm font-medium text-primary text-black',
                    inner: ' focus:outline-1',
                    input:
                        'border border-black  normal-case text-black text-sm rounded-lg block w-72 p-2.5',
                }" />
            <button class="pt-2 text-blue-600 transition-all hover:opacity-50" type="button">
                Forgot Password?
            </button>

        </FormKit>
        <span class="pt-8 text-base">Or Login With</span>
        <div class="flex flex-col items-center justify-center mt-4">
            <button class="px-8 py-2 border rounded border-slate-200 group">
                <IconVue icon="flat-color-icons:google" class="w-12 h-auto transition-all group-hover:-rotate-45" />
            </button>
            <div class="flex flex-row justify-between pt-4">
                <p>Don’t have an account?</p>
                <RouterLink class="pl-2 text-blue-600 transition-all hover:opacity-50" to="/SignUp">
                    Sign-up Now
                </RouterLink>
            </div>
        </div>
    </div>
</template>

