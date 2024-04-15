import { ref, computed, watchEffect } from 'vue';
import { defineStore } from 'pinia';
import { useFirebaseStorage, useStorageFile, useCollection, useCurrentUser, updateCurrentUserProfile } from 'vuefire'
import { karyawanRef } from '@/firebase'
import { updateDoc, doc } from 'firebase/firestore';
import { ref as storageRef, deleteObject } from 'firebase/storage'
import { UsersPinia } from './users';
import { Author } from '@/interfaces/InterfacesUpdateUsers';
export const excelStore = defineStore('excelStore', () => {
 // state
 const UsersInput = UsersPinia()
 const dataKaryawan = useCollection(karyawanRef)
 const users = ref<any>(useCurrentUser())
 const formData = ref<Author>({
  fullName: users.value?.displayName || 'N/A',
  phoneNumber: users.value?.phoneNumber || 'N/A',
  emailAddress: users.value?.email || 'N/A',
  photoUsers: users.value?.photoURL || 'N/A',
  uidUsers: users.value?.uid || 'N/A',
 })
 // State photo
 const filename = ref<any>('')
 const filePath = ref<any>('')
 // getters
 const emailUser = computed<string>(() => users.value?.email || 'N/A')
 const phoneUser = computed<string>(() => users.value?.phoneNumber || 'N/A')
 const photoUser = computed<string>(() => users.value?.photoURL || 'N/A')
 // actions
 const UpdatePhotoAction = async (photo: string) => {
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
 const UpdateNameAction = async (names: string) => {
  // filtering data by uid firestore
  const docs = dataKaryawan.value.filter((doc) => doc.author[0].uid === users.value.uid)
  if (docs.length > 0) {
   for (const dosc of docs) {
    const userDoc = doc(karyawanRef, dosc.id)
    //  loop all data and update by id
    await updateDoc(userDoc, {
     author: [{ ...dosc.author[0], name: names }],
    })
   }
  }
 }
 const HandleSubmit = async (name: string): Promise<void> => {
  try {
   updateCurrentUserProfile({
    displayName: name
   })
   await UpdateNameAction(name)
  } catch (error) {
   console.error(error);
  }
 }
 const UpdatePhoto = async (photo: string): Promise<void> => {
  try {
   const storage = useFirebaseStorage()
   filePath.value = new URL(photoUser?.value).pathname.split('/').pop()
   const mountainFileRef = storageRef(storage, filePath?.value)
   if (!filePath) {
    deleteObject(mountainFileRef)
    await updateCurrentUserProfile({
     photoURL: photo
    })
    await UpdatePhotoAction(photo)
   } else {
    await updateCurrentUserProfile({
     photoURL: photo
    })
    await UpdatePhotoAction(photo)
   }
  } catch (error) {
   console.error(error);
  }
 }
 const HandleCancel = async (nameUser: string): Promise<void> => {
  try {
   users.value.displayName !== nameUser ? formData.value.fullName = users.value.displayName : formData.value.fullName = users.value.displayName
  } catch (error) {
   console.error(error);
  }
 }
 const HandlePhotoSubmit = async (files: any): Promise<void> => {
  try {
   const data = files?.item(0)
   const storage = useFirebaseStorage()
   const mountainFileRef = storageRef(storage, data?.name || data.name)
   const { url, upload } = useStorageFile(mountainFileRef)
   watchEffect(() => filename.value = url);
   await data && upload(data)
  } catch (error) {
   console.error(error);
  }
 }
 const HandlePhotoCancel = async (file: string) => {
  const storage = useFirebaseStorage()
  filePath.value = new URL(file).pathname.split('/').pop()
  const mountainFileRef = storageRef(storage, filePath.value)
  deleteObject(mountainFileRef)
  filename.value = ''
 }
 const DeletePhoto = async (): Promise<void> => {
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
