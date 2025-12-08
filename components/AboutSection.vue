<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <SectionApp class="flex flex-col pt-0 sm:pt-8">
    <p>
      {{ t("about_text_1") }}
    </p>

    <p>
      {{ t("about_text_2") }}
    </p>

    <p>
      {{ t("about_text_3") }}
    </p>

    <div class="flex flex-col sm:flex-row justify-center items-center gap-6 mt-20 sm:mt-32">
      <ButtonLink class="!mt-0">
        <a v-smooth-scroll href="#contact"> {{ t("about_contact_me") }}</a>
      </ButtonLink>
      <ButtonLink class="!mt-0">
        <a href="/cv.pdf" target="_blank" rel="noopener noreferrer"> {{ t("about_download_cv") }}</a>
      </ButtonLink>
    </div>
  </SectionApp>
</template>

<style lang="css" scoped>
p {
  @apply my-4;
}
</style>
