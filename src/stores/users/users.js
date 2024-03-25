import { computed, watch, ref } from 'vue'
import { useCollection, useCurrentUser } from 'vuefire'
import { useRouter } from 'vue-router';
import { karyawanRef } from '@/firebase'
import { defineStore } from 'pinia'
import { formPinia } from '../formAPI';
export const UsersPinia = defineStore('UsersPinia', () => {
  // state
  const FormUsers = formPinia()
  const nameProvinces = ref([])
  const dataKaryawan = useCollection(karyawanRef)
  const users = useCurrentUser()
  const router = useRouter();
  // getters
  const currentCountUsers = computed(() => {
    const CurrentUser = UsersInput.value.find(({ email }) => email === users.value.email)
    return CurrentUser ? CurrentUser.count : 0
  })
  const LoginDate = computed(() => new Date(users.value.metadata.lastSignInTime).toDateString())
  const CreateDate = computed(() => new Date(users.value.metadata.creationTime).toDateString())
  const name = computed(() => users.value?.displayName || 'N/A')
  const Email = computed(() => users.value?.email || 'N/A')
  const photo = computed(() => users.value?.photoURL || 'N/A')
  const uid = computed(() => users.value?.uid || 'N/A')
  const TotalEmploye = computed(() => dataKaryawan.value.length)
  const StatusMagang = computed(() => dataKaryawan.value.filter(({ status_karyawan }) => status_karyawan === 'magang').length)
  const StatusKontrak = computed(() => dataKaryawan.value.filter(({ status_karyawan }) => status_karyawan === 'kontrak').length)
  const StatusKartap = computed(() => dataKaryawan.value.filter(({ status_karyawan }) => status_karyawan === 'kartap').length)
  const UsersInput = computed(() => {
    return dataKaryawan.value.flatMap(user => user.author ? user.author : [])
      .reduce((acc, author) => {
        const found = acc.find(a => a.uid === author.uid)
        if (found) {
          found.count++
          found.picture = author.picture
        } else {
          acc.push({ uid: author.uid, name: author.name, photo: author.picture, email: author.email, count: 1 }) // Include count property here
        }
        return acc
      }, [])
  })
  const nameProvinsi = computed(() => FormUsers.provinces.filter(item => item.name).map(item => item.name))
  const countProvinsi = computed(() => {
    const filteredData = dataKaryawan.value.filter(item => item.provinsi.name)
    const grouped = [];
    for (let i = 0; i < nameProvinsi.value.length; i++) {
      const provinceName = nameProvinsi.value[i];
      grouped[i] = filteredData.filter(item => item.provinsi.name === provinceName).length;
    }
    return grouped;
  })
  watch(users, (newUser) => newUser === null && router.push('/'))
  // actions
  return {
    nameProvinces,
    dataKaryawan,
    StatusMagang,
    StatusKontrak,
    StatusKartap,
    UsersInput,
    users,
    name,
    Email,
    photo,
    uid,
    LoginDate,
    CreateDate,
    TotalEmploye,
    currentCountUsers,
    nameProvinsi,
    FormUsers,
    countProvinsi
  }
})
