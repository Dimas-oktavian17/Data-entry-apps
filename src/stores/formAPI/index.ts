import { ref, computed } from 'vue'
import axios from 'axios';
import { defineStore } from 'pinia';
import { karyawanRef } from '@/firebase'
import { useCollection } from 'vuefire'
import { formUsers } from '@/stores/users/formUsers';
import { City, District, LocationAPI, Provinsi, StringOrNull, Villages } from '@/interfaces/InterfacesFormApi';

export const formPinia = defineStore('formPinia', () => {
 //  State
 const FormUsers = formUsers()
 const dataKaryawan: any = useCollection(karyawanRef)
 const provinces = ref<LocationAPI[]>([])
 const cities = ref<LocationAPI[] | null>(null)
 const kecamatan = ref<LocationAPI[] | null>(null)
 const kelurahan = ref<LocationAPI[] | null>(null)
 const provincesID = ref<StringOrNull>(null)
 const citiesID = ref<StringOrNull>('')
 const kecamatanID = ref<StringOrNull>('')
 const kelurahanID = ref<StringOrNull>('')
 // getters
 const filterUsers = computed(() => {
  let copyItems = [...dataKaryawan.value]
  copyItems = copyItems
   .filter(({ provinsi }: { provinsi: Provinsi }) => provincesID.value ? provinsi.id === provincesID.value : true)
   .filter(({ kota }: { kota: City }) => citiesID.value ? kota.id === citiesID.value : true)
   .filter(({ kecamatan }: { kecamatan: District }) => kecamatanID.value ? kecamatan.id === kecamatanID.value : true)
   .filter(({ kelurahan }: { kelurahan: Villages }) => FormUsers.selectedVillages?.id || null ? kelurahan?.id === FormUsers.selectedVillages?.id : true)
  return copyItems
 })

 // actions function delegations
 const handleProvinces = (): void => {
  FormUsers.selectedDistrict = null
  FormUsers.selectedCity = null
  cities.value = null
  kecamatan.value = null
  kelurahan.value = null
 }
 const handleCity = (): void => {
  FormUsers.selectedDistrict = null
  kecamatan.value = null
  kelurahan.value = null
 }
 const handleDistrict = (): void => {
  FormUsers.selectedVillages = null
  kelurahan.value = null
 }
 // actions
 const LoadProvinces = async (): Promise<void> => {
  try {
   const { data } = await axios.get<Provinsi[]>(`https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json`)
   provinces.value = data
  } catch (error) {
   console.error(error)
  }
 }
 const fetchProvinces = async ({ id }: { id: string }): Promise<void> => {
  try {
   id === null && handleProvinces()
   const { data } = await axios.get<City[]>(`https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${id}.json`)
   provincesID.value = id
   cities.value = data
  } catch (error) {
   console.warn(error);
  }
 }
 // city and district actions
 const fecthCity = async ({ id }: { id: string }): Promise<void> => {
  try {
   citiesID.value = id
   id === null && handleCity()
   const { data } = await axios.get<District[]>(`https://www.emsifa.com/api-wilayah-indonesia/api/districts/${id}.json`)
   kecamatan.value = data
  } catch (error) {
   console.error(error);
  }
 }

 const fetchDistrict = async ({ id }: { id: string }): Promise<void> => {
  try {
   kecamatanID.value = id
   id === null && handleDistrict()
   const { data } = await axios.get<Villages[]>(`https://www.emsifa.com/api-wilayah-indonesia/api/villages/${id}.json`)
   kelurahan.value = data
  } catch (error) {
   console.error(error);
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
  FormUsers,
  provincesID,
  citiesID,
  kecamatanID,
  kelurahanID,
 }
})
