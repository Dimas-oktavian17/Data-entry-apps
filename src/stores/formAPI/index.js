import { ref, computed, watch } from 'vue'
import axios from 'axios';
import { defineStore } from 'pinia';

export const formPinia = defineStore('formPinia', () => {
  //  State
  const provinces = ref([])
  const cities = ref(null)
  const kecamatan = ref(null)
  const kelurahan = ref(null)
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
  // actions province
  const fetchProvinces = async ({ id, }) => {
    try {
      if (id === null) {
        selectedCity.value = null
        selectedDistrict.value = null
        cities.value = null
        kecamatan.value = null
        kelurahan.value = null
      } else {
        const { data } = await axios.get(`https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${id}.json`)
        cities.value = data
        console.log(data);
      }
    } catch (error) {
      console.error(error);
    }
  }
  // city and district actions
  const fecthCity = async ({ id, }) => {
    try {
      if (id === null) {
        selectedDistrict.value = null

        kecamatan.value = null
        kelurahan.value = null
      }
      else {
        const { data } = await axios.get(`https://www.emsifa.com/api-wilayah-indonesia/api/districts/${id}.json`)
        kecamatan.value = data
        console.log(data);
      }
    } catch (error) {
      console.error(error);
    }
  }

  const fetchDistrict = async ({ id, }) => {
    try {
      if (id === null) {
        kelurahan.value = null
      }
      else {
        const { data } = await axios.get(`https://www.emsifa.com/api-wilayah-indonesia/api/villages/${id}.json`)
        kelurahan.value = data
        console.log(data);
      }
    } catch (error) {
      console.error(error);
    }
  }
})
