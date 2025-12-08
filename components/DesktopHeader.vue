<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <header class="flex gap-x-8 mt-16 m-8">
    <img
      class="profile-image rounded-2xl w-24 md:w-40 h-full shadow-2xl"
      alt="Image of David"
      src="../assets/images/profile.jpg"
    />
    <div>
      <h1 class="self-end font-sans text-left text-2xl md:text-4xl uppercase font-extrabold text-black dark:text-white">
        David Sabalete Rodríguez
      </h1>
      <h2 class="text-xl font-semibold text-black dark:text-gray-200 mt-4 mb-2">Senior Fullstack Developer</h2>
      <h3 class="text-base my-2 text-gray-700 dark:text-gray-300">
        Nuxt.js, Vue.js, JS, TS, Node.js, Terraform, AWS, Git, GitHub
      </h3>
      <p class="text-black dark:text-gray-400 text-sm">{{ t("header_location") }}</p>
    </div>
  </header>
</template>
