<template>
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
</template>
<script src="./SearchHero.js"></script>
<style scoped>
/* Hero */
.title {
  font-family: "Bricolage Grotesque", sans-serif;
}
</style>
