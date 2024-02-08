<!-- <script setup>
import { ref, onMounted } from 'vue'
import {
 signInWithCredential,
 getRedirectResult,
 signInWithRedirect,
 signOut,
} from 'firebase/auth'
import { useCurrentUser, useFirebaseAuth } from 'vuefire'
import { googleAuthProvider } from '@/firebase';

const auth = useFirebaseAuth() // only exists on client side

// display errors if any
const error = ref(null)
function signinRedirect(response) {
 // Build Firebase credential with the Google ID token.
 const idToken = response.credential;
 const credential = googleAuthProvider.credential(idToken);

 // Sign in with credential from the Google user.
 signInWithCredential(auth, credential).catch((error) => {
  // Handle Errors here.
  const errorCode = error.code;
  const errorMessage = error.message;
  // The email of the user's account used.
  const email = error.email;
  // The credential that was used.
  const credential = googleAuthProvider.credentialFromError(error);
  // ...
 });
}

// only on client side

</script>

<template>
 <main>
  <ErrorBox v-if="error" :error="error" />
  <button @click="signinRedirect()">SignIn with Google</button>
 </main>
</template> -->