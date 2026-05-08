<template>
  <div class="weather-conditions py-4 grid grid-cols-4 gap-6 mt-4">
    <div class="condition-card card-bg p-4 rounded-lg w-full">
      <h4 class="text-sm">Feels Like</h4>
      <p class="mt-4 text-2xl">20 &deg;</p>
    </div>
    <div class="condition-card card-bg p-4 rounded-lg w-full">
      <h4 class="text-sm">Humidity</h4>
      <p class="mt-4 text-2xl">46%</p>
    </div>
    <div class="condition-card card-bg p-4 rounded-lg w-full">
      <h4 class="text-sm">Wind</h4>
      <p class="mt-4 text-2xl">14 Km/h</p>
    </div>
    <div class="condition-card card-bg p-4 rounded-lg w-full">
      <h4 class="text-sm">Percipitation</h4>
      <p class="mt-4 text-2xl">0 mm</p>
    </div>
  </div>
</template>
<script src="./WeatherConditions.js"></script>
<style scoped>
/* weather conditions */
.condition-card {
  & h4 {
    color: var(--Neutral-300);
  }
}
</style>
