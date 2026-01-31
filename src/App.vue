<script setup>
import { ref } from "vue";
// header
import SplitButton from "primevue/splitbutton";
// hero
import IconField from "primevue/iconfield";
import InputIcon from "primevue/inputicon";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
const items = [
  {
    label: "Update",
    command: () => {},
  },
  {
    label: "Delete",
    command: () => {},
  },
];
const searchValue = ref(null);
</script>

<template>
  <div>
    <!-- ======== Header ======== -->
    <header class="container m-auto py-8 px-10">
      <div class="flex justify-between items-center">
        <img src="/images/logo.svg" alt="logo" />
        <div class="relative">
          <SplitButton :model="items" class="units-split-btn text-white">
            <span class="flex items-center font-bold">
              <img
                alt="logo"
                src="/images/icon-units.svg"
                style="height: 1rem; margin-right: 0.5rem"
              />
              <span class="px-2">Units</span>
            </span>
          </SplitButton>
        </div>
      </div>
    </header>
    <!-- ======== Hero search ======== -->
    <section class="container m-auto py-8 px-10">
      <div class="flex flex-col items-center text-white">
        <h1 class="title text-4xl">How's the sky looking today?</h1>
        <div class="search-bar mt-4 flex gap-2 items-center justify-center">
          <IconField>
            <InputIcon>
              <img
                alt="logo"
                src="/images/icon-search.svg"
                class="w-4 h-4 inline-block me-2"
              />
            </InputIcon>
            <InputText
              v-model="searchValue"
              placeholder="Search for a place..."
              class="w-80"
            />
          </IconField>
          <Button label="Search" />
        </div>
      </div>
    </section>
    <!-- ======== main grid ======== -->
    <section class="container m-auto py-8 px-10">
      <div class="grid grid-cols-3 gap-6">
        <div class="col-span-2">
          <!-- ======== today banner ======== -->
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
          <!-- ======== weather conditions ======== -->
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

          <!-- ======== Daily Forcast ======== -->
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
        </div>
        <!-- ===== Hourly Forecast -->
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
      </div>
    </section>
  </div>
</template>

<style scoped>
.card-bg {
  background: var(--Neutral-700);
  border: 1px solid var(--Neutral-600);
}
/* Header */
.p-tieredmenu {
  color: white !important;
}
/* Hero */
.title {
  font-family: "Bricolage Grotesque", sans-serif;
}
/* today banner */
.today-banner {
  background: url("/images/bg-today-large.svg") no-repeat center;
  background-size: cover;
}

/* weather conditions */
.condition-card {
  & h4 {
    color: var(--Neutral-300);
  }
}
</style>
