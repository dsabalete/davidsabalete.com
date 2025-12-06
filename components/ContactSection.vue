<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <SectionApp id="contact" class="pb-16 flex flex-col">
    <template #title>{{ t("contact_title") }}</template>
    <SocialBlock size="lg" class="mt-20 mb-12" />

    <ClientOnly>
      <a v-smooth-scroll="{ duration: 2000 }" href="#about" class="button-link"> {{ t("contact_back") }}</a>
    </ClientOnly>
  </SectionApp>
</template>

<style lang="css" scoped>
.button-link {
  @apply w-60 mx-auto mt-20 sm:mt-32 bg-black text-white px-1 py-2 text-center uppercase font-bold tracking-wide text-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer;
}
</style>
