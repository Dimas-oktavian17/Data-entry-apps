<script setup>
import { ref, onMounted, watchEffect } from 'vue'
import VueApexCharts from 'vue3-apexcharts'
import { storeToRefs } from 'pinia';
import { formPinia } from '@/stores/formAPI';
import { ChartTwoStore } from '@/stores/chart/ChartTwoStore';
const { NameProvinsi, CountProvinsi } = storeToRefs(ChartTwoStore())
onMounted(async () => {
 formPinia().LoadProvinces()
 options.value
})
const options = ref({
 series: [{
  data: CountProvinsi.value
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
  categories: NameProvinsi.value,
  labels: {
   style: {
    colors: '#000000',
    fontSize: '12px'
   }
  }
 }
})
watchEffect(() =>
 options.value.series = [{
  data: CountProvinsi.value
 }]
)
watchEffect(() => options.value.xaxis = {
 categories: NameProvinsi.value,
 labels: {
  style: {
   colors: '#000000',
   fontSize: '12px'
  }
 }
}
)

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
