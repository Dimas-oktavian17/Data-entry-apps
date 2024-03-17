<script setup lang="ts">
import { ref } from 'vue'
import VueApexCharts from 'vue3-apexcharts'
import { storeToRefs } from 'pinia';
import { UsersPinia } from '@/stores/users/users';
const Users = UsersPinia()
const {
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
} = storeToRefs(Users)

const chart = ref(null)

const options = {
 series: [{
  data: [
   employeAceh.value,
   employeSumut.value,
   employeSumbar.value,
   employeRiau.value,
   employeJambi.value,
   employeSumsel.value,
   employeBengkulu.value,
   employeLampung.value,
   employeBangka.value,
   employeKepri.value,
   employeJkt.value,
   employeJabar.value,
   employeJateng.value,
   employeJogja.value,
   employeJatim.value,
   employeBanten.value,
   employeBali.value,
   employeNusbar.value,
   employeNustim.value,
   employeKalbar.value,
   employeKalteng.value,
   employeKalsel.value,
   employeKaltim.value,
   employeKalut.value,
   employeSulut.value,
   employeSulteng.value,
   employeSulsel.value,
   employeSultengg.value,
   employeGorontalo.value,
   employeSulbar.value,
   employeMaluku.value,
   employeMalut.value,
   employePapbar.value,
   employePapua.value,
  ]
 }],
 chart: {
  height: 350,
  type: 'bar',
 },
 plotOptions: {
  bar: {
   columnWidth: '45%',
   distributed: true,
  }
 },
 dataLabels: {
  enabled: false
 },
 legend: {
  show: false
 },
 xaxis: {
  categories: [
   ['Aceh'],
   ['Sumut'],
   ['Sumbar'],
   ['Riau'],
   ['Jambi'],
   ['Sumsel'],
   ['Bengkulu'],
   ['Lampung'],
   ['Kep Bangka'],
   ['Kep Riau'],
   ['Jakarta'],
   ['Jabar'],
   ['Jateng'],
   ['Jogja'],
   ['Jatim'],
   ['Banten'],
   ['Bali'],
   ['Nusbar'],
   ['Nustim'],
   ['Kalbar'],
   ['Kalteng'],
   ['Kalsel'],
   ['Kaltim'],
   ['Kalut'],
   ['Sulut'],
   ['Sulteng'],
   ['Sulsel'],
   ['Sultengg'],
   ['Gorontalo'],
   ['Sulbar'],
   ['Maluku'],
   ['Malut'],
   ['Papbar'],
   ['Papua'],
  ],
  labels: {
   style: {
    colors: '#000000',
    fontSize: '12px'
   }
  }
 }
};
</script>

<template>
 <div
  class="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
  <div class="justify-between gap-4 mb-4 sm:flex">
   <div>
    <h4 class="text-xl font-bold text-black dark:text-white">Employe origin</h4>
   </div>
   <div>
   </div>
  </div>
  <div>
   <div id="chartTwo" class="-ml-5 -mb-9">
    <VueApexCharts type="bar" height="335" :options="options" :series="options.series" ref="chart" />
   </div>
  </div>
 </div>
</template>
