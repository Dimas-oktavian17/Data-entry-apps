import { computed, watch } from 'vue'
import { useCollection, useCurrentUser } from 'vuefire'
import { useRouter } from 'vue-router';
import { karyawanRef } from '@/firebase'
import { defineStore } from 'pinia'

export const UsersPinia = defineStore('UsersPinia', () => {
  // state
  const dataKaryawan = useCollection(karyawanRef)
  const users = useCurrentUser()
  const router = useRouter();
  // getters
  const currentCountUsers = computed(() => {
    const CurrentUser = UsersInput.value.find(({ name }) => name === users.value.displayName)
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
          found.count++,
            found.name = name.value,
            found.photo = photo.value
        } else {
          acc.push({ uid: author.uid, name: author.name, photo: author.picture, email: author.email, count: 1 }) // Include count property here
        }
        return acc
      }, [])
  })
  const employeAceh = computed(() => dataKaryawan.value.filter((item) => item.provinsi.name === 'ACEH').length)
  const employeSumut = computed(() => dataKaryawan.value.filter((item) => item.provinsi.id === "12").length)
  const employeSumbar = computed(() => dataKaryawan.value.filter((item) => item.provinsi.id === "13").length)
  const employeRiau = computed(() => dataKaryawan.value.filter((item) => item.provinsi.id === "14").length)
  const employeJambi = computed(() => dataKaryawan.value.filter((item) => item.provinsi.id === "15").length)
  const employeSumsel = computed(() => dataKaryawan.value.filter((item) => item.provinsi.id === "16").length)
  const employeBengkulu = computed(() => dataKaryawan.value.filter((item) => item.provinsi.id === "17").length)
  const employeLampung = computed(() => dataKaryawan.value.filter((item) => item.provinsi.id === "18").length)
  const employeBangka = computed(() => dataKaryawan.value.filter((item) => item.provinsi.id === "19").length)
  const employeKepri = computed(() => dataKaryawan.value.filter((item) => item.provinsi.id === "21").length)
  const employeJkt = computed(() => dataKaryawan.value.filter((item) => item.provinsi.id === "31").length)
  const employeJabar = computed(() => dataKaryawan.value.filter((item) => item.provinsi.id === "32").length)
  const employeJateng = computed(() => dataKaryawan.value.filter((item) => item.provinsi.id === "33").length)
  const employeJogja = computed(() => dataKaryawan.value.filter((item) => item.provinsi.id === "34").length)
  const employeJatim = computed(() => dataKaryawan.value.filter((item) => item.provinsi.id === "35").length)
  const employeBanten = computed(() => dataKaryawan.value.filter((item) => item.provinsi.id === "36").length)
  const employeBali = computed(() => dataKaryawan.value.filter((item) => item.provinsi.id === "51").length)
  const employeNusbar = computed(() => dataKaryawan.value.filter((item) => item.provinsi.id === "52").length)
  const employeNustim = computed(() => dataKaryawan.value.filter((item) => item.provinsi.id === "53").length)
  const employeKalbar = computed(() => dataKaryawan.value.filter((item) => item.provinsi.id === "61").length)
  const employeKalteng = computed(() => dataKaryawan.value.filter((item) => item.provinsi.id === "62").length)
  const employeKalsel = computed(() => dataKaryawan.value.filter((item) => item.provinsi.id === "63").length)
  const employeKaltim = computed(() => dataKaryawan.value.filter((item) => item.provinsi.id === "64").length)
  const employeKalut = computed(() => dataKaryawan.value.filter((item) => item.provinsi.id === "65").length)
  const employeSulut = computed(() => dataKaryawan.value.filter((item) => item.provinsi.id === "71").length)
  const employeSulteng = computed(() => dataKaryawan.value.filter((item) => item.provinsi.id === "72").length)
  const employeSulsel = computed(() => dataKaryawan.value.filter((item) => item.provinsi.id === "73").length)
  const employeSultengg = computed(() => dataKaryawan.value.filter((item) => item.provinsi.id === "74").length)
  const employeGorontalo = computed(() => dataKaryawan.value.filter((item) => item.provinsi.id === "75").length)
  const employeSulbar = computed(() => dataKaryawan.value.filter((item) => item.provinsi.id === "76").length)
  const employeMaluku = computed(() => dataKaryawan.value.filter((item) => item.provinsi.id === "81").length)
  const employeMalut = computed(() => dataKaryawan.value.filter((item) => item.provinsi.id === "82").length)
  const employePapbar = computed(() => dataKaryawan.value.filter((item) => item.provinsi.id === "91").length)
  const employePapua = computed(() => dataKaryawan.value.filter((item) => item.provinsi.id === "94").length)
  watch(users, (newUser) => {
    newUser === null && router.push('/');
    // UsersInformations.value
  });
  // actions
  return {
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
    employeAceh,
    employeSumut,
    employeSumbar,
    employeRiau,
    employeJambi,
    employeSumsel,
    employeBengkulu,
    employeLampung,
    employeBangka,
    employeKepri,
    employeJkt,
    employeJabar,
    employeJateng,
    employeJogja,
    employeJatim,
    employeBanten,
    employeBali,
    employeNusbar,
    employeNustim,
    employeKalbar,
    employeKalteng,
    employeKalsel,
    employeKaltim,
    employeKalut,
    employeSulut,
    employeSulteng,
    employeSulsel,
    employeSultengg,
    employeGorontalo,
    employeSulbar,
    employeMaluku,
    employeMalut,
    employePapbar,
    employePapua,
  }
})
