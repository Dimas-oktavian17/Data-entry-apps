<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import VueApexCharts from 'vue3-apexcharts'
import { formUsers } from '@/stores/users/formUsers';
import { storeToRefs } from 'pinia';
import { UsersPinia } from '@/stores/users/users';
const { DataMagang, DataKontrak, DataKartap } = storeToRefs(formUsers())

const chartData = ref({
 series: [
  {
   name: 'Kontrak',
   data: DataKontrak.value
  },
  {
   name: 'Magang',
   data: DataMagang.value
  },
  {
   name: 'Kartap',
   data: DataKartap.value
  }
 ],
 labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
})
const chart = ref(null)
const apexOptions = ref({
 legend: {
  show: false,
  position: 'top',
  horizontalAlign: 'left'
 },
 colors: ['#FFA70B', '#D34053', '#219653'],
 chart: {
  fontFamily: 'Satoshi, sans-serif',
  height: 335,
  type: 'area',
  dropShadow: {
   enabled: true,
   color: '#623CEA14',
   top: 10,
   blur: 4,
   left: 0,
   opacity: 0.1
  },

  toolbar: {
   show: false
  }
 },
 responsive: [
  {
   breakpoint: 1024,
   options: {
    chart: {
     height: 300
    }
   }
  },
  {
   breakpoint: 1366,
   options: {
    chart: {
     height: 350
    }
   }
  }
 ],
 stroke: {
  width: [2, 2],
  curve: 'straight'
 },

 labels: {
  show: false,
  position: 'top'
 },
 grid: {
  xaxis: {
   lines: {
    show: true
   }
  },
  yaxis: {
   lines: {
    show: true
   }
  }
 },
 dataLabels: {
  enabled: false
 },
 markers: {
  size: 4,
  colors: '#fff',
  strokeColors: ['#3056D3', '#80CAEE'],
  strokeWidth: 3,
  strokeOpacity: 0.9,
  strokeDashArray: 0,
  fillOpacity: 1,
  discrete: [],
  hover: {
   size: undefined,
   sizeOffset: 5
  }
 },
 xaxis: {
  type: 'category',
  categories: chartData.value.labels,
  axisBorder: {
   show: false
  },
  axisTicks: {
   show: false
  }
 },
 yaxis: {
  title: {
   style: {
    fontSize: '0px'
   }
  },
  min: 0,
  max: 100
 }
})
watchEffect(() => {
 chartData.value.series = [
  {
   name: 'Kontrak',
   data: DataKontrak.value
  },
  {
   name: 'Magang',
   data: DataMagang.value
  },
  {
   name: 'Kartap',
   data: DataKartap.value
  }]
})
</script>

<template>
 <div
  class="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
  <div class="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
   <div class="flex flex-wrap w-full gap-3 sm:gap-5">
    <div class="flex min-w-47.5">
     <span class="flex items-center justify-center w-full h-4 mt-1 mr-2 border rounded-full max-w-4 border-[#D34053]">
      <span class="block h-2.5 w-full max-w-2.5 rounded-full bg-[#D34053]"></span>
     </span>
     <div class="w-full">
      <p class="font-semibold text-[#D34053]">Total Magang</p>
      <p class="text-sm font-medium">{{ UsersPinia().StatusMagang }}</p>
     </div>
    </div>
    <div class="flex min-w-47.5">
     <span class="flex items-center justify-center w-full h-4 mt-1 mr-2 border rounded-full max-w-4 border-[#FFA70B]">
      <span class="block h-2.5 w-full max-w-2.5 rounded-full bg-[#FFA70B]"></span>
     </span>
     <div class="w-full">
      <p class="font-semibold text-[#FFA70B]">Total Kontrak</p>
      <p class="text-sm font-medium"> {{ UsersPinia().StatusKontrak }} </p>
     </div>
    </div>
    <div class="flex min-w-47.5">
     <span class="flex items-center justify-center w-full h-4 mt-1 mr-2 border rounded-full max-w-4 border-[#219653]">
      <span class="block h-2.5 w-full max-w-2.5 rounded-full bg-[#219653]"></span>
     </span>
     <div class="w-full">
      <p class="font-semibold text-[#219653]">Total Kartap</p>
      <p class="text-sm font-medium">{{ UsersPinia().StatusKartap }}</p>
     </div>
    </div>
   </div>
   <!-- <div class="flex justify-end w-full max-w-45">
    <div class="inline-flex items-center rounded-md bg-whiter p-1.5 dark:bg-meta-4">
     <button
      class="px-3 py-1 text-xs font-medium text-black bg-white rounded shadow-card hover:bg-white hover:shadow-card dark:bg-boxdark dark:text-white dark:hover:bg-boxdark">
      Day
     </button>
     <button
      class="px-3 py-1 text-xs font-medium text-black rounded hover:bg-white hover:shadow-card dark:text-white dark:hover:bg-boxdark">
      Week
     </button>
     <button
      class="px-3 py-1 text-xs font-medium text-black rounded hover:bg-white hover:shadow-card dark:text-white dark:hover:bg-boxdark">
      Month
     </button>
    </div>
   </div> -->
  </div>
  <div>
   <div id="chartOne" class="-ml-5">
    <VueApexCharts type="area" height="350" :options="apexOptions" :series="chartData.series" ref="chart" />
   </div>
  </div>
 </div>
</template>
