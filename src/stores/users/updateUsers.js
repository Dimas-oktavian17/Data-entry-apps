import { ref, computed, watch } from 'vue';
import { defineStore } from 'pinia';
import { useCollection, useCurrentUser, updateCurrentUserProfile } from 'vuefire'
import { karyawanRef } from '@/firebase'

export const excelStore = defineStore('excelStore', () => {
  // state
  const imagePreview = ref('')
  const dataKaryawan = useCollection(karyawanRef)
  const users = ref(useCurrentUser())
  const formData = ref({
    fullName: users.value.displayName,
    phoneNumber: users.value.phoneNumber,
    emailAddress: users.value.email,
    photoUsers: users.value.photoURL,
  })
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
  const HandlePhotoSubmit = async (photo) => {
    try {
      updateCurrentUserProfile({
        photoURL: imagePreview.value
      })
    } catch (error) {
      console.error(error);
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
  };
});
