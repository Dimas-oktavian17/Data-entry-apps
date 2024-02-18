import { ref } from 'vue'
// import { useCollection } from 'vuefire'
import { karyawanRef } from '@/firebase'
import { defineStore } from 'pinia'
import {
  // query,
  // orderBy,
  // limit, doc, collection, updateDoc, onSnapshot,
  addDoc,
  // deleteDoc
} from "firebase/firestore";

export const authPinia = defineStore('AuthPinia', () => {
  // state
  const dataKaryawan = ref(karyawanRef)
  // getters
  // actions
  const handleForm = (names, age, position, statusKaryawan, provinces, citys, districts, villages) => {
    addDoc(dataKaryawan, {
      name: names,
      umur: age,
      jabatan: position,
      status_karyawan: statusKaryawan,
      provinsi: provinces,
      kota: citys,
      kecamatan: districts,
      kelurahan: villages,
    })
  }
  return {
    dataKaryawan,
    handleForm
  }
})
