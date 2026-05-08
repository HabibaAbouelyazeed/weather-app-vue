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
    <SearchHero />

    <!-- ======== main grid ======== -->
    <section class="container m-auto py-8 px-10">
      <div class="grid grid-cols-3 gap-6">
        <div class="col-span-2">
          <!-- ======== Today Banner ======== -->
          <TodayBanner />
          <!-- ======== Weather Conditions ======== -->
          <WeatherConditions />
          <!-- ======== Daily Forecast ======== -->
          <DailyForecast />
        </div>
        <!-- ===== Hourly Forecast -->
        <HourlyForecast />
      </div>
    </section>
  </div>
</template>

<script src="./App.js"></script>
<style scoped>
/* Header */
.p-tieredmenu {
  color: white !important;
}
</style>
