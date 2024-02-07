<script setup>
import { onMounted, watch } from 'vue';
import { useRouter, } from 'vue-router';
import { useCollection, useFirestore, useFirebaseAuth, useCurrentUser } from 'vuefire'
import { collection, } from 'firebase/firestore'
import { signOut } from 'firebase/auth';

const user = useCurrentUser()
const router = useRouter()
const db = useFirestore()
const todos = useCollection(collection(db, 'todos'))
const auth = useFirebaseAuth()

const logout = async () => {
 try {
  await signOut(auth)
  if (user === null) {
   router.push('/')
  }
  console.log(auth);
 } catch (error) {
  console.error(error)
 }
}
onMounted(() => watch(user, curentUser => curentUser === null ? router.push('/') : router.push('/Dashboard')))
</script>

<template>
 <ButtonAuth @handleGoogleAuth="logout">Logout</ButtonAuth>
 <ul>
  <li v-for="({ name, id }) in todos" :key="id">
   <span>{{ name }}</span>
  </li>
 </ul>
</template>
