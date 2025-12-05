<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <SectionApp class="flex flex-col pt-0 sm:pt-8">
    <div>
      {{ t("about_text_1") }}
    </div>

    <div>
      {{ t("about_text_2") }}
    </div>

    <div>
      {{ t("about_text_3") }}
    </div>

    <ClientOnly>
      <div
        class="w-60 mx-auto mt-20 sm:mt-32 bg-blue-100 text-green-900 px-1 py-2 text-center uppercase font-bold tracking-wide text-xl rounded-xl shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
      >
        <a v-smooth-scroll href="#contact"> {{ t("about_contact_me") }}</a>
      </div>
    </ClientOnly>
  </SectionApp>
</template>

<style lang="postcss" scoped>
div {
  margin-bottom: 1rem;
}
</style>
