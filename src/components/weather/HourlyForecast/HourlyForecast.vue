<template>
  <div class="card-bg p-4 rounded-lg w-full">
    <div class="pb-2 flex justify-between items-center">
      <h3 class="text-xl">Hourly forecast</h3>
      <SplitButton label="day" :model="items" />
    </div>
    <template v-for="index in Array.from({ length: 8 })" :key="index">
      <div
        class="card-bg p-2 mt-2 rounded-lg w-full flex items-center justify-between gap-2"
      >
        <div class="flex items-center">
          <figure class="w-12 h-12">
            <img
              alt="weather"
              src="/images/icon-sunny.webp"
              class="w-full h-full"
            />
          </figure>
          <span class="text-lg">3 PM</span>
        </div>
        <p class="text-md">20 &deg;</p>
      </div>
    </template>
  </div>
</template>

<script src="./HourlyForecast.js"></script>
<style scoped></style>
