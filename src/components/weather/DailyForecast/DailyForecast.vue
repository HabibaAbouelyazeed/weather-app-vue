<template>
  <div class="daily-forecast pt-4">
    <h3 class="text-xl">Daily forecast</h3>
    <div class="forecast-cards grid grid-cols-7 gap-4 mt-4">
      <template v-for="index in Array.from({ length: 7 })" :key="index">
        <!-- forecast card -->
        <div
          class="card-bg p-4 rounded-lg w-full flex flex-col items-center gap-2"
        >
          <h4 class="text-md">Sat</h4>
          <figure class="w-12 h-12">
            <img
              alt="weather"
              src="/images/icon-sunny.webp"
              class="w-full h-full"
            />
          </figure>
          <div class="w-full flex justify-between">
            <p class="mt-4 text-md">20 &deg;</p>
            <p class="mt-4 text-md">14 &deg;</p>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<script src="./DailyForecast.js"></script>
<style scoped></style>
