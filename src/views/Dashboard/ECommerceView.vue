<script setup>
</script>

<template>
 <DefaultLayout>
  <div class="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
   <DataStatsOne />
  </div>

  <div class="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
   <!-- ====== Chart One Start -->
   <!-- <ChartOne /> -->
   <!-- ====== Chart One End -->

   <!-- ====== Chart Two Start -->
   <ChartTwo />
   <!-- ====== Chart Two End -->

   <!-- ====== Chart Three Start -->
   <ChartThree />
   <!-- ====== Chart Three End -->

   <!-- ====== Map One Start -->
   <MapOne />
   <!-- ====== Map One End -->

   <!-- ====== Table One Start -->
   <div class="col-span-12 ">
    <TableOne />
   </div>
   <!-- ====== Table One End -->

   <!-- ====== Chat Card Start -->
   <!-- <ChatCard /> -->
   <!-- ====== Chat Card End -->
  </div>
 </DefaultLayout>
</template>
