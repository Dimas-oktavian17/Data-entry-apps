<!-- eslint-disable vue/no-side-effects-in-computed-properties -->
<script setup>
import { ref, watchEffect } from 'vue'
import { ChartOneStore } from '@/stores/chart/ChartOneStore'
import { storeToRefs } from 'pinia'
import VueApexCharts from 'vue3-apexcharts'

const { StatusKartap, StatusKontrak, StatusMagang } = storeToRefs(ChartOneStore())
const DataEmploye = ref([
 {
  name: 'Magang',
  count: StatusMagang
 },
 {
  name: 'Kontrak',
  count: StatusKontrak
 },
 {
  name: 'Kartap',
  count: StatusKartap
 }
])
const chartData = ref({
 series: [StatusKontrak.value, StatusMagang.value, StatusKartap.value],
 labels: ['kontrak', 'magang', 'kartap']
})
const chart = ref(null)
const apexOptions = {
 chart: {
  type: 'donut',
  width: 380
 },
 colors: ['#FFA70B', '#D34053', '#219653'],
 labels: chartData.value.labels,
 legend: {
  show: false,
  position: 'bottom'
 },
 plotOptions: {
  pie: {
   donut: {
    size: '65%',
    background: 'transparent'
   }
  }
 },
 dataLabels: {
  enabled: false
 },
 responsive: [
  {
   breakpoint: 640,
   options: {
    chart: {
     width: 200
    }
   }
  }
 ]
}
watchEffect(() => chartData.value.series = [StatusKontrak.value, StatusMagang.value, StatusKartap.value])
</script>

<template>
 <div
  class="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-5">
  <div class="justify-between gap-4 mb-3 sm:flex">
   <div>
    <h4 class="text-xl font-bold text-black dark:text-white">
     Employe Analytics
    </h4>
   </div>
   <div>
    <div class="relative z-20 inline-block">
    </div>
   </div>
  </div>
  <div class="mb-2">
   <div id="chartThree" class="flex justify-center mx-auto">
    <VueApexCharts type="donut" width="340" :options="apexOptions" :series="chartData.series" ref="chart" />
   </div>
  </div>

  <div class="flex flex-wrap items-center justify-center -mx-8 gap-y-3">
   <div class="w-full px-8 sm:w-1/2" v-for="({ name, count }, index) in DataEmploye" :key="index">
    <div class="flex items-center w-full">
     <span :class="{
     'block w-full h-3 mr-2 rounded-full max-w-3 bg-danger': name === 'Magang',
     'block w-full h-3 mr-2 rounded-full max-w-3 bg-warning': name === 'Kontrak',
     'block w-full h-3 mr-2 rounded-full max-w-3 bg-success': name === 'Kartap'
    }"></span>
     <p class="flex justify-between w-full text-sm font-medium text-black dark:text-white">
      <span> {{ name }}</span>
      <span> {{ count }} </span>
     </p>
    </div>
   </div>
   <div class="w-full px-8 sm:w-1/2">
    <div class="flex items-center w-full">
     <span class="block w-full h-3 mr-2 bg-transparent rounded-full max-w-3"></span>
     <p class="flex justify-between w-full text-sm font-medium text-black dark:text-white">
      <span> </span>
      <span> </span>
     </p>
    </div>
   </div>
  </div>
 </div>
</template>
