import { ref, computed, watch } from 'vue';
import { defineStore } from 'pinia';
import { useCollection, useCurrentUser, updateCurrentUserProfile } from 'vuefire'
import { karyawanRef } from '@/firebase'
// import { UsersPinia } from '@/stores/users/users';

export const excelStore = defineStore('excelStore', () => {
  // state
  const dataKaryawan = useCollection(karyawanRef)
  const users = ref(useCurrentUser())
  const formData = ref({
    fullName: users.value.displayName,
    phoneNumber: users.value.phoneNumber,
    emailAddress: users.value.email,
    photoUsers: users.value.photoURL,
    // username: UpdateUsers.uid,
    // bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere fermentum urna, eu condimentum mauris tempus ut. Donec fermentum blandit aliquet.'
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

  watch(users, (newVal) => formData.value.fullName = newVal.displayName, { immediate: true });

  return {
    emailUser,
    phoneUser,
    users,
    formData,
    dataKaryawan,
    HandleSubmit,
    HandleCancel
  };
});
