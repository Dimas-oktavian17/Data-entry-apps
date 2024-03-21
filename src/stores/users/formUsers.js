/* eslint-disable no-unused-vars */
import { ref, computed, watchEffect } from 'vue';
import { defineStore } from 'pinia';
import { addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { karyawanRef } from '@/firebase'
import { useCollection } from 'vuefire';

export const formUsers = defineStore('formUsers', () => {
  // state
  const dataKaryawan = useCollection(karyawanRef)
  const open = ref(false);
  const dataView = ref([])
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
    try {
      addDoc(karyawanRef, {
        author: [{ name: name, email: Email, uid: uid, picture: photo }],
        id: karyawanRef.id.length + 1,
        name: names.value,
        umur: age.value,
        jabatan: position.value,
        status_karyawan: statusKaryawan.value,
        provinsi: selectedProvince.value,
        kota: selectedCity.value,
        kecamatan: selectedDistrict.value,
        kelurahan: selectedVillages.value,
        createAt: createAt.value
      })
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
    } catch (error) {
      console.error(error);
    }
  }
  const HandleEdit = (id) => {
    formID.value = id
    AlertForm.value = true
  }
  const HandleUpdate = async (
    formID,
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
      updateDoc(doc(karyawanRef, formID), {
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
      names = '',
        age = null,
        position = '',
        statusKaryawan = null,
        selectedProvince = null,
        selectedCity = null,
        selectedDistrict = null,
        selectedVillages = null
      AlertForm.value = true
      setTimeout(() => AlertForm.value = false, 1000);
    } catch (error) {
      console.error(error);
    }
  }
  const HandleView = (name) => {
    const result = dataKaryawan.value.find(item => item.name === name);
    open.value = true
    dataView.value = result
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
    HandleEdit,
    AlertForm,
    HandleView,
    HandleDelete,
    open,
    dataView
  };
});
