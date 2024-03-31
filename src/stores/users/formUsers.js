/* eslint-disable no-unused-vars */
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router'
import { defineStore } from 'pinia';
import { addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { karyawanRef } from '@/firebase'
import { useCollection } from 'vuefire';
import { reset } from '@formkit/core'

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
  const StatusMagang = computed(() => dataKaryawan.value.filter(({ status_karyawan, createAt }) => status_karyawan === 'magang' && createAt === 3).length)
  const StatusKontrak = computed(() => dataKaryawan.value.filter(({ status_karyawan, createAt }) => status_karyawan === 'kontrak' && createAt === 3).length)
  const StatusKartap = computed(() => dataKaryawan.value.filter(({ status_karyawan, createAt }) => status_karyawan === 'kartap' && createAt === 3).length)

  const DataMagang = computed(() => {
    const filteredMagang = dataKaryawan.value.filter(item => {
      return item.status_karyawan === 'magang' && item.createAt >= 1 && item.createAt <= 12
    });
    // Group filtered data by createAt value
    const grouped = []
    for (let i = 1; i <= 12; i++) {
      grouped[i - 1] = filteredMagang.filter(item => item.createAt === i).length;
    }
    CountMagang.value = grouped
    return CountMagang.value
  });
  const DataKontrak = computed(() => {
    const filteredMagang = dataKaryawan.value.filter(item => {
      return item.status_karyawan === 'kontrak' && item.createAt >= 1 && item.createAt <= 12
    });
    // Group filtered data by createAt value
    const grouped = []
    for (let i = 1; i <= 12; i++) {
      grouped[i - 1] = filteredMagang.filter(item => item.createAt === i).length;
    }
    CountKontrak.value = grouped
    return CountKontrak.value
  });
  const DataKartap = computed(() => {
    const filteredMagang = dataKaryawan.value.filter(item => {
      return item.status_karyawan === 'kartap' && item.createAt >= 1 && item.createAt <= 12
    });
    // Group filtered data by createAt value
    const grouped = []
    for (let i = 1; i <= 12; i++) {
      grouped[i - 1] = filteredMagang.filter(item => item.createAt === i).length;
    }
    CountKartap.value = grouped
    return CountKartap.value
  });
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
    StatusMagang,
    StatusKontrak,
    StatusKartap,
    DataMagang,
    DataKontrak,
    DataKartap,
    CountMagang,
    CountKontrak,
    CountKartap,
  };
});
