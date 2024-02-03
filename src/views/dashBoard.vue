<script setup>
import { useCollection, useFirestore } from 'vuefire'
import { collection } from 'firebase/firestore'

const db = useFirestore()
const todos = useCollection(collection(db, 'todos'))

</script>

<template>
    <ul>
        <li v-for="({ name, id }) in todos" :key="id">
            <span>{{ name }}</span>
        </li>
    </ul>
</template>
