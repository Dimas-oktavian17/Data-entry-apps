import { ref } from 'vue';
import { defineStore } from 'pinia';
import { UsersPinia } from '@/stores/users/users';

export const excelStore = defineStore('excelStore', () => {
  // state
  const flattenedData = ref([]);
  // Adjust the fields accordingly
  const flattenedFields = ref({
    Nama: "name",
    Email: "email",
    Jabatan: "jabatan",
    Umur: "umur",
    Status_Karyawan: "status_karyawan",
    Provinsi: "provinsi",
    City: "kota",
    Kecamatan: "kecamatan",
    Kelurahan: "kelurahan",
  });

  // actions
  // excel example
  const generateFlattenedData = () => {
    flattenedData.value = UsersPinia().dataKaryawan.map(item => ({
      ...item,
      // Data User
      email: item.author[0].email,
      name: item.author[0].name,
      jabatan: item.jabatan,
      kecamatan: item.kecamatan.name,
      kelurahan: item.kelurahan.name,
      kota: item.kota.name,
      provinsi: item.provinsi.name,
      status_karyawan: item.status_karyawan,
      umur: item.umur
    }));
  };
  const data = () => {
    console.log('200 ok');
  }
  return {
    data,
    flattenedData,
    flattenedFields,
    generateFlattenedData
  };
});
