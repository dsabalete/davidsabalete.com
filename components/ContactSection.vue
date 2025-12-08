<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <SectionApp id="contact" class="pb-40 md:pb-16 flex flex-col">
    <template #title>{{ t("contact_title") }}</template>
    <SocialBlock size="lg" class="mt-20 mb-12" />

    <div class="flex justify-center pt-10">
      <a
        v-smooth-scroll="{ duration: 2000 }"
        href="#about"
        class="inline-flex items-center px-3 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        aria-label="Go to contact section"
      >
        {{ t("contact_back") }}
      </a>
    </div>
  </SectionApp>
</template>

<style lang="css" scoped></style>
