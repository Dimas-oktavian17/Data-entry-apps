/* eslint-disable no-unused-vars */
import { ref, computed, watchEffect } from 'vue';
import { useRouter } from 'vue-router'
import { defineStore } from 'pinia';
import { addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { karyawanRef } from '@/firebase'
import { useCollection } from 'vuefire';
import { reset } from '@formkit/core'
import { formPinia } from '../formAPI';

export const formUsers = defineStore('formUsers', () => {
  // state
  const CountMagang = ref([])
  const CountKontrak = ref([])
  const CountKartap = ref([])
  const dataKaryawan = useCollection(karyawanRef)
  const formID = ref(null)
  const names = ref('')
  const age = ref(null)
  const position = ref('')
  const statusKaryawan = ref(null)
  const selectedProvince = ref([])
  const selectedCity = ref([])
  const selectedDistrict = ref([])
  const selectedVillages = ref(null)
  const AlertsStatus = ref(false)
  const AlertForm = ref(false)
  const router = useRouter()
  // getters
  const createAt = computed(() => new Date().getMonth() + 1)
  // actions
  const HandleProvince = (selectedCity, selectedDistrict, selectedVillages, cities, kecamatan, kelurahan) => {
    selectedCity = null
    selectedDistrict = null
    selectedVillages = null
    cities = null
    kecamatan = null
    kelurahan = null
  }
  const HandleCity = (selectedDistrict, kecamatan, kelurahan, selectedVillages) => {
    selectedDistrict = null
    kecamatan = null
    kelurahan = null
    selectedVillages = null
  }
  const HandleDistrict = (kelurahan, selectedVillages) => {
    kelurahan = null
    selectedVillages = null
  }
  const HandleSubmit = async (
    name,
    Email,
    uid,
    photo,
  ) => {
    const FormStore = formPinia()
    try {
      addDoc(karyawanRef, {
        author: [{ name: name, email: Email, uid: uid, picture: photo }],
        id: karyawanRef.id,
        name: names.value,
        umur: Number(age.value),
        jabatan: position.value,
        status_karyawan: statusKaryawan.value,
        provinsi: selectedProvince.value,
        kota: selectedCity.value,
        kecamatan: selectedDistrict.value,
        kelurahan: selectedVillages.value,
        createAt: createAt.value
      })
      // ? reset data api location
      FormStore.provincesID = null
      FormStore.citiesID = null
      FormStore.kecamatanID = null
      FormStore.kelurahanID = null
      names.value = '',
        age.value = null,
        position.value = '',
        statusKaryawan.value = null,
        selectedProvince.value = null,
        selectedCity.value = null,
        selectedDistrict.value = null,
        selectedVillages.value = null
      AlertsStatus.value = true
      setTimeout(() => AlertsStatus.value = false, 3000);
      console.log('ini di formusers', FormStore.provincesID);
    } catch (error) {
      console.error(error);
    }
  }
  const HandleUpdate = async (
    id,
    name,
    Email,
    uid,
    photo,
    names,
    age,
    position,
    statusKaryawan,
    selectedProvince,
    selectedCity,
    selectedDistrict,
    selectedVillages,
  ) => {
    try {
      updateDoc(doc(karyawanRef, id), {
        author: [{ name: name, email: Email, uid: uid, picture: photo }],
        id: new Date().getTime(),
        uidPhoto: photo,
        name: names,
        umur: age,
        jabatan: position,
        status_karyawan: statusKaryawan,
        provinsi: selectedProvince,
        kota: selectedCity,
        kecamatan: selectedDistrict,
        kelurahan: selectedVillages,
        createAt: createAt.value
      })
      AlertsStatus.value = true
    } catch (error) {
      console.error(error);
    } finally {
      reset('myForm',
        names = '',
        age = null,
        position = '',
        statusKaryawan = null,
        selectedProvince = null,
        selectedCity = null,
        selectedDistrict = null,
        selectedVillages = null
      )
      AlertsStatus.value = false
      router.push('/tables')
    }
  }
  const HandleDelete = (id) => deleteDoc(doc(karyawanRef, id))
  return {
    formID,
    names,
    age,
    position,
    statusKaryawan,
    selectedProvince,
    selectedCity,
    selectedDistrict,
    selectedVillages,
    AlertsStatus,
    HandleProvince,
    HandleCity,
    HandleDistrict,
    HandleSubmit,
    createAt,
    HandleUpdate,
    AlertForm,
    HandleDelete,
    CountMagang,
    CountKontrak,
    CountKartap,
    dataKaryawan
  };
});
