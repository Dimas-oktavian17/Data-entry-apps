<script setup lang="ts">
// See https://vueuse.org/core/useFileDialog
import { useFileDialog } from '@vueuse/core'
import { ref as storageRef } from 'firebase/storage'
import { useFirebaseStorage, useStorageFile } from 'vuefire'
import { ref } from 'vue'

function uploadPicture() {
    const data = files.value?.item(0)
    const storage = useFirebaseStorage()
    const mountainFileRef = storageRef(storage, data.name)

    const {
        url,
        // gives you a percentage between 0 and 1 of the upload progress
        uploadProgress,
        uploadError,
        // firebase upload task
        uploadTask,
        upload,
    } = useStorageFile(mountainFileRef)
    // const { _rawValue } = url
    filename.value = url
    if (data) {
        upload(data)
        console.log(data);
        console.table(url)
    }
}

const filename = ref('')
const { files, open, reset } = useFileDialog()
</script>

<template>
    <form @submit.prevent="uploadPicture">
        <!-- disable the form while uploading -->
        <fieldset>
            <button type="button" @click="open({ accept: 'image/*', multiple: false })">
                <template v-if="files?.length === 1">
                    Selected file: {{ files.item(0)!.name }} (Click to select another)
                </template>
                <template v-else> Select one picture </template>
            </button>

            <br />

            <button>Upload</button>
        </fieldset>
    </form>
    {{ filename }}
    <img v-if="filename._rawValue" :src="filename._rawValue" />
</template>