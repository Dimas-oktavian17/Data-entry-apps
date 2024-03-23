/* eslint-disable no-unused-vars */
import { ref, computed } from 'vue'
import axios from 'axios';
import { defineStore } from 'pinia';
import { karyawanRef } from '@/firebase'
import { useCollection, useCurrentUser } from 'vuefire'
export const formPinia = defineStore('formPinia', () => {
  //  State
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
    return dataKaryawan.value.filter(item => {
      const provinsi = provincesID.value ? item.provinsi.id === provincesID.value : true;
      const city = citiesID.value ? item.kota.id === citiesID.value : true;
      const district = kecamatanID.value ? item.kecamatan.id === kecamatanID.value : true;
      return (provincesID.value ? provinsi : true) &&
        (citiesID.value ? city : true) &&
        (kecamatanID.value ? district : true);
    })
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
  const fetchProvinces = async ({ id, name }, selectedCity, selectedDistrict) => {
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
    filterUsers
  }
})
