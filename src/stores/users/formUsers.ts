import { ref, computed } from 'vue';
import { useDateFormat, useNow } from '@vueuse/core'
import { useRouter } from 'vue-router'
import { defineStore } from 'pinia';
import { addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { karyawanRef } from '@/firebase'
import { useCollection } from 'vuefire';
import { formPinia } from '../formAPI';
import { UsersInfo } from '@/interfaces/InterfacesFormUsers';
import { City, District, Provinsi, Villages } from '@/interfaces/InterfacesFormApi';

export const formUsers = defineStore('formUsers', () => {
 // state
 const dataKaryawan = useCollection(karyawanRef)
 const names = ref<UsersInfo>(null)
 const age = ref<UsersInfo>(null)
 const position = ref<UsersInfo>(null)
 const statusKaryawan = ref<UsersInfo>(null)
 const selectedProvince = ref<Provinsi | null>(null)
 const selectedCity = ref<City | null>(null)
 const selectedDistrict = ref<District | null>(null)
 const selectedVillages = ref<Villages | null>(null)
 const AlertsStatus = ref<Boolean>(false)
 const router = useRouter()
 // getters
 const createAt = computed<Number>(() => Number(useDateFormat(useNow(), 'M').value))
 // actions
 const HandleSubmit = async (name: String, Email: String, uid: String, photo: String): Promise<void> => {
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
    createAt: Number(createAt.value)
   })
   // ? reset data api location
   FormStore.provincesID = null
   FormStore.citiesID = null
   FormStore.kecamatanID = null
   FormStore.kelurahanID = null
   names.value = null,
    age.value = null,
    position.value = null,
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
 const HandleUpdate = async (
  id: string,
  name: string,
  Email: string,
  uid: string,
  photo: string,
  names: string,
  age: Number,
  position: string,
  statusKaryawan: string,
  selectedProvince: Provinsi,
  selectedCity: City,
  selectedDistrict: District,
  selectedVillages: Villages,
 ): Promise<void> => {
  const FormStore = formPinia()
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
   // ? reset data api location
   AlertsStatus.value = false
   router.push('/tables')
  } catch (error) {
   console.error(error);
  }
 }
 const HandleDelete = (id: string) => deleteDoc(doc(karyawanRef, id))
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
  HandleSubmit,
  createAt,
  HandleUpdate,
  HandleDelete,
  dataKaryawan
 };
});
