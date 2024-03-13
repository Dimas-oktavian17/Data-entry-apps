import { ref, computed, watchEffect } from 'vue';
import { defineStore } from 'pinia';
import { useFirebaseStorage, useStorageFile, useCollection, useCurrentUser, updateCurrentUserProfile } from 'vuefire'
import { karyawanRef } from '@/firebase'
import { ref as storageRef, deleteObject } from 'firebase/storage'

export const excelStore = defineStore('excelStore', () => {
  // state
  const imagePreview = ref('')
  const dataKaryawan = useCollection(karyawanRef)
  const users = ref(useCurrentUser())
  const formData = ref({
    fullName: users.value?.displayName || users.value.displayName,
    phoneNumber: users.value?.phoneNumber || 'N/A',
    emailAddress: users.value?.email || 'N/A',
    photoUsers: users.value?.photoURL || 'N/A',
    uidUsers: users.value?.uid || 'N/A',
  })
  // State photo
  const filename = ref('')
  const filePath = ref('')
  // getters
  const emailUser = computed(() => users.value?.email || 'N/A')
  const phoneUser = computed(() => users.value?.phoneNumber || 'N/A')
  const photoUser = computed(() => users.value?.photoURL || 'N/A')
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
  const UpdatePhoto = async (photo) => {
    try {
      updateCurrentUserProfile({
        photoURL: photo
      })
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
    try {
      const data = files?.item(0)
      const storage = useFirebaseStorage()
      const mountainFileRef = storageRef(storage, data?.name || data.name)
      const { url, upload } = useStorageFile(mountainFileRef)
      watchEffect(() => filename.value = url)
      data && upload(data)
    } catch (error) {
      console.error(error);
    }
  }
  const DeletePhoto = async () => {
    try {
      const storage = useFirebaseStorage()
      filePath.value = new URL(photoUser.value).pathname.split('/').pop()
      const mountainFileRef = storageRef(storage, filePath.value)
      deleteObject(mountainFileRef)
      updateCurrentUserProfile({
        photoURL: ''
      })
    } catch (error) {
      console.error(error);
    }
  }
  return {
    emailUser,
    phoneUser,
    users,
    formData,
    dataKaryawan,
    imagePreview,
    filename,
    photoUser,
    HandleSubmit,
    HandleCancel,
    HandleFileChange,
    ReadFileContents,
    HandlePhotoSubmit,
    UpdatePhoto,
    DeletePhoto,
  };
});
