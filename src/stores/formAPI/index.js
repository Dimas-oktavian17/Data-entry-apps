/* eslint-disable no-unused-vars */
import { ref, computed, defineProps } from 'vue'
import axios from 'axios';
import { defineStore } from 'pinia';
import { karyawanRef } from '@/firebase'
import { useCollection } from 'vuefire'
import { formUsers } from '@/stores/users/formUsers';
export const formPinia = defineStore('formPinia', () => {
  //  State
  const FormUsers = formUsers()
  const dataKaryawan = useCollection(karyawanRef)
  const provinces = ref([])
  const cities = ref(null)
  const kecamatan = ref(null)
  const kelurahan = ref(null)
  const provincesID = ref(null)
  const citiesID = ref('')
  const kecamatanID = ref('')
  const kelurahanID = ref('')
  // getters
  const filterUsers = computed(() => {
    let copyItems = [...dataKaryawan.value]
    copyItems = copyItems
      .filter(item => provincesID.value ? item.provinsi.id === provincesID.value : true)
      .filter(item => citiesID.value ? item.kota.id === citiesID.value : true)
      .filter(item => kecamatanID.value ? item.kecamatan.id === kecamatanID.value : true)
      .filter(item => FormUsers.selectedVillages?.id || null ? item.kelurahan.id === FormUsers.selectedVillages.id : true)
    return copyItems
  })

  // actions function delegations
  const handleProvinces = (selectedDistrict, selectedCity) => {
    selectedDistrict = null
    selectedCity = null
    cities.value = null
    kecamatan.value = null
    kelurahan.value = null
  }
  const handleCity = (selectedDistrict) => {
    selectedDistrict = null
    kecamatan.value = null
    kelurahan.value = null
  }
  const handleDistrict = (selectedVillages) => {
    selectedVillages = null
    kelurahan.value = null
  }
  // actions
  const LoadProvinces = async () => {
    try {
      const { data } = await axios.get(`https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json`)
      provinces.value = data
      console.log(provinces.value);
    } catch (error) {
      // console.error(error)
    }
  }
  const fetchProvinces = async ({ id }, selectedCity, selectedDistrict) => {
    try {
      console.log(id);
      console.log(typeof (provincesID.value));
      id === null && handleProvinces(selectedCity, selectedDistrict)
      const { data } = await axios.get(`https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${id}.json`)
      provincesID.value = id
      console.log(provincesID.value, 'ok');
      cities.value = data
    } catch (error) {
      // console.warn(error);
    }
  }
  // city and district actions
  const fecthCity = async ({ id }, selectedDistrict) => {
    try {
      console.log(id);
      citiesID.value = id
      id === null && handleCity(selectedDistrict)
      const { data } = await axios.get(`https://www.emsifa.com/api-wilayah-indonesia/api/districts/${id}.json`)
      kecamatan.value = data
    } catch (error) {
      // console.error(error);
    }
  }

  const fetchDistrict = async ({ id }, selectedVillages) => {
    try {
      console.log(id);
      kecamatanID.value = id
      id === null && handleDistrict(selectedVillages)
      const { data } = await axios.get(`https://www.emsifa.com/api-wilayah-indonesia/api/villages/${id}.json`)
      kelurahan.value = data
    } catch (error) {
      // console.error(error);
    }
  }
  return {
    dataKaryawan,
    provinces,
    cities,
    kecamatan,
    kelurahan,
    LoadProvinces,
    fecthCity,
    fetchProvinces,
    fetchDistrict,
    handleProvinces,
    handleCity,
    handleDistrict,
    filterUsers,
    FormUsers
  }
})
