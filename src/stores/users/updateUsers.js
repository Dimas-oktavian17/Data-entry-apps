import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useCollection, useCurrentUser, updateCurrentUserProfile } from 'vuefire'
import { karyawanRef } from '@/firebase'
// import { UsersPinia } from '@/stores/users/users';

export const excelStore = defineStore('excelStore', () => {
  // state
  const dataKaryawan = useCollection(karyawanRef)
  const users = useCurrentUser()
  const formData = ref({
    fullName: users.value.displayName,
    phoneNumber: users.value.phoneNumber,
    emailAddress: users.value.email,
    photoUsers: users.value.photoURL,
    // username: UpdateUsers.uid,
    // bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere fermentum urna, eu condimentum mauris tempus ut. Donec fermentum blandit aliquet.'
  })
  // actions
  const HandleSubmit = async (name, phone, email, photo) => {
    try {
      updateCurrentUserProfile({
        displayName: name,
        phoneNumber: phone,
        // E: photo,
        // phoneNumber: phone,
      })
      console.log(users.value.phoneNumber);
    } catch (error) {
      console.error(error);
    }
  }
  // getters
  // const name = computed(() => formData.value.fullName)
  // const email = computed(() => formData.value.emailAddress)
  // const phone = computed(() => formData.value.phoneNumber)
  // const photo = computed(() => formData.value.photoUsers)

  return {
    // name, email, phone, photo,
    users, formData, dataKaryawan,
    HandleSubmit

  };
});
