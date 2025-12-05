<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <SectionApp id="contact" class="pb-16 flex flex-col">
    <template #title>{{ t("contact_title") }}</template>
    <SocialBlock size="lg" class="mt-20 mb-12" />

    <ClientOnly>
      <a
        v-smooth-scroll="{ duration: 2000 }"
        href="#about"
        class="w-60 mx-auto mt-20 sm:mt-32 bg-green-200 text-green-900 px-1 py-2 text-center uppercase font-bold tracking-wide text-xl rounded-xl shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
      >
        {{ t("contact_back") }}</a
      >
    </ClientOnly>
  </SectionApp>
</template>
