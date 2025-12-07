<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <SectionApp id="contact" class="pb-40 md:pb-16 flex flex-col">
    <template #title>{{ t("contact_title") }}</template>
    <SocialBlock size="lg" class="mt-20 mb-12" />

    <ButtonLink v-smooth-scroll="{ duration: 2000 }" href="#about"> {{ t("contact_back") }}</ButtonLink>
  </SectionApp>
</template>

<style lang="css" scoped></style>
