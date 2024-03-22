<script setup lang="ts">
import { ref, onMounted } from 'vue'
import VueApexCharts from 'vue3-apexcharts'
import { storeToRefs } from 'pinia';
import { UsersPinia } from '@/stores/users/users';
import { formPinia } from '@/stores/formAPI';
const Users = UsersPinia()
const {
 nameProvinsi
} = storeToRefs(Users)
onMounted(async () => formPinia().LoadProvinces())
const data = ref([])
for (let index = 0; index <= 34; index++) {
 data.value.push([index])
}
console.log(data.value);
const chart = ref(null)
console.log(nameProvinsi);
const options = {
 series: [{
  data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34]
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
  categories: nameProvinsi.value,
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
