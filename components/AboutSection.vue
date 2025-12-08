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
  </SectionApp>
</template>

<style lang="css" scoped>
p {
  @apply my-4 px-4 sm:px-0;
}
</style>
