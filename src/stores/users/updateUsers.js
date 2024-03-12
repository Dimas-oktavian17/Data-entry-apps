import { ref, computed, watch, watchEffect } from 'vue';
import { defineStore } from 'pinia';
import { useFirebaseStorage, useStorageFile, useCollection, useCurrentUser, updateCurrentUserProfile } from 'vuefire'
import { karyawanRef } from '@/firebase'
import { ref as storageRef } from 'firebase/storage'

export const excelStore = defineStore('excelStore', () => {
  // state
  const imagePreview = ref(null)
  const dataKaryawan = useCollection(karyawanRef)
  const users = ref(useCurrentUser())
  const formData = ref({
    fullName: users.value.displayName,
    phoneNumber: users.value.phoneNumber,
    emailAddress: users.value.email,
    photoUsers: users.value.photoURL,
  })
  // State photo
  const filename = ref('')
  // getters
  const emailUser = computed(() => users.value.email)
  const phoneUser = computed(() => users.value.phoneNumber)
  // actions
  const HandleSubmit = async (name) => {
    try {
      updateCurrentUserProfile({
        displayName: name
      })
      console.log(users.value.displayName);
    } catch (error) {
      console.error(error);
    }
  }
  const HandleCancel = async (nameUser) => {
    try {
      users.value.displayName !== nameUser ? formData.value.fullName = users.value.displayName : formData.value.fullName = users.value.displayName
    } catch (error) {
      console.error(error);
    }
  }
  const HandleFileChange = (event) => {
    // get the file values
    const selectedFile = event
    // past value files to another function
    selectedFile && ReadFileContents(selectedFile)
    console.log(selectedFile, imagePreview.value);
  }
  const ReadFileContents = (file) => {
    // initialize fileReader api
    const reader = new FileReader();
    // Set the image data URL for preview when the data image is successfully read
    reader.onload = (event) => imagePreview.value = event.target.result;
    reader.readAsDataURL(file); // Read the file content as a data URL
    console.log(imagePreview.value);
  }
  const HandlePhotoSubmit = async (files) => {
    const data = files?.item(0)
    const storage = useFirebaseStorage()
    const mountainFileRef = storageRef(storage, data.name)
    const { url, upload } = useStorageFile(mountainFileRef)
    watchEffect(() => filename.value = url)
    if (data) {
      upload(data)
      console.log(data);
      console.table(filename)
    }
  }
  watch(users, (newVal) => formData.value.fullName = newVal.displayName, { immediate: true });

  return {
    emailUser,
    phoneUser,
    users,
    formData,
    dataKaryawan,
    imagePreview,
    HandleSubmit,
    HandleCancel,
    HandleFileChange,
    ReadFileContents,
    HandlePhotoSubmit,
    filename,
  };
});
