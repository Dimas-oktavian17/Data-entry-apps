/* eslint-disable no-unused-vars */
import { ref, computed, watchEffect } from 'vue';
import { defineStore } from 'pinia';
import { addDoc } from 'firebase/firestore';
import { karyawanRef } from '@/firebase'

export const formUsers = defineStore('formUsers', () => {
  // state
  // Data source for the input group
  const names = ref('')
  const age = ref(null)
  const position = ref('')
  const statusKaryawan = ref(null)
  const selectedProvince = ref([])
  const selectedCity = ref([])
  const selectedDistrict = ref([])
  const selectedVillages = ref(null)
  const AlertsStatus = ref(false)
  // getters

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
  return {
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
    HandleSubmit
  };
});
