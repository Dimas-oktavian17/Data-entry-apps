import { ref, computed, watchEffect } from 'vue';
import { defineStore } from 'pinia';
import { useFirebaseStorage, useStorageFile, useCollection, useCurrentUser, updateCurrentUserProfile } from 'vuefire'
import { karyawanRef } from '@/firebase'
import { updateDoc, doc } from 'firebase/firestore';
import { ref as storageRef, deleteObject } from 'firebase/storage'
import { UsersPinia } from './users';
export const excelStore = defineStore('excelStore', () => {
  // state
  const UsersInput = UsersPinia()
  const imagePreview = ref('')
  const dataKaryawan = useCollection(karyawanRef)
  const users = ref(useCurrentUser())
  const formData = ref({
    fullName: users.value?.displayName || 'N/A',
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
  const UpdatePhotoAction = async (photo) => {
    // filtering data by uid firestore
    const docs = dataKaryawan.value.filter(doc => doc.author[0].uid === users.value.uid)
    for (const dosc of docs) {
      const userDoc = doc(karyawanRef, dosc.id)
      //  loop all data and update by id
      await updateDoc(userDoc, {
        author: [{ ...dosc.author[0], picture: photo }],
      })
    }
  }
  const UpdateNameAction = async (names) => {
    // filtering data by uid firestore
    const docs = dataKaryawan.value.filter(doc => doc.author[0].uid === users.value.uid)
    for (const dosc of docs) {
      const userDoc = doc(karyawanRef, dosc.id)
      //  loop all data and update by id
      await updateDoc(userDoc, {
        author: [{ ...dosc.author[0], name: names }],
      })
    }
  }

  const HandleSubmit = async (name) => {
    try {
      updateCurrentUserProfile({
        displayName: name
      })
      console.log(users.value.displayName);
      return UpdateNameAction(name)
    } catch (error) {
      console.error(error);
    }
  }
  const UpdatePhoto = async (photo) => {
    try {
      const storage = useFirebaseStorage()
      filePath.value = new URL(photoUser.value).pathname.split('/').pop()
      const mountainFileRef = storageRef(storage, filePath.value)
      deleteObject(mountainFileRef)
      updateCurrentUserProfile({
        photoURL: photo
      })
      return UpdatePhotoAction(photo)
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
  const HandlePhotoCancel = async (file) => {
    const storage = useFirebaseStorage()
    filePath.value = new URL(file).pathname.split('/').pop()
    const mountainFileRef = storageRef(storage, filePath.value)
    deleteObject(mountainFileRef)
    filename.value = ''
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
    HandlePhotoSubmit,
    UpdatePhoto,
    DeletePhoto,
    HandlePhotoCancel,
    UsersInput,
    UpdatePhotoAction,
    UpdateNameAction
  };
});
