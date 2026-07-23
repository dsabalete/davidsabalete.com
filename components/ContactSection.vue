<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <SectionApp id="contact" class="pb-40 md:pb-16 flex flex-col">
    <template #title>{{ t("contact_title") }}</template>
    <SocialBlock size="sm" class="mt-12 mb-8" />

    <ContactForm />

    <div class="flex justify-center mt-6">
      <a
        href="https://calendly.com/dsabalete/30min"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      >
        {{ t("contact_schedule") }}
      </a>
    </div>

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
