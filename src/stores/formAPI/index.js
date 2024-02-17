/* eslint-disable no-unused-vars */
import { ref } from 'vue'
import axios from 'axios';
import { defineStore } from 'pinia';

export const formPinia = defineStore('formPinia', () => {
  //  State
  const provinces = ref([])
  const cities = ref(null)
  const kecamatan = ref(null)
  const kelurahan = ref(null)
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
      console.error(error)
    }
  }
  const fetchProvinces = async ({ id }, selectedCity, selectedDistrict) => {
    try {
      id === null && handleProvinces(selectedCity, selectedDistrict)
      const { data } = await axios.get(`https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${id}.json`)
      cities.value = data
    } catch (error) {
      console.error(error);
    }
  }
  // city and district actions
  const fecthCity = async ({ id }, selectedDistrict) => {
    try {
      id === null && handleCity(selectedDistrict)
      const { data } = await axios.get(`https://www.emsifa.com/api-wilayah-indonesia/api/districts/${id}.json`)
      kecamatan.value = data
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  const fetchDistrict = async ({ id }, selectedVillages) => {
    try {
      id === null && handleDistrict(selectedVillages)
      const { data } = await axios.get(`https://www.emsifa.com/api-wilayah-indonesia/api/villages/${id}.json`)
      kelurahan.value = data
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  return {
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
    handleDistrict
  }
})
