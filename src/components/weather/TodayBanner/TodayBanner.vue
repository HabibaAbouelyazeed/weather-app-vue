<template>
  <div
    class="today-banner h-72 w-full p-8 rounded-2xl flex items-center justify-center"
  >
    <div class="w-full flex justify-between items-center">
      <div>
        <h2 class="text-white font-bold text-2xl">Berlin, Germany</h2>
        <p class="text-white">Monday, 20 Feb, 2025</p>
      </div>
      <div class="flex items-center gap-2">
        <figure class="w-26 h-26">
          <img
            alt="weather"
            src="/images/icon-sunny.webp"
            class="w-full h-full"
          />
        </figure>
        <span class="text-white font-bold text-6xl">20 &deg;</span>
      </div>
    </div>
  </div>
</template>

<script src="./TodayBanner.js"></script>
<style scoped>
/* today banner */
.today-banner {
  background: url("/images/bg-today-large.svg") no-repeat center;
  background-size: cover;
}
</style>
