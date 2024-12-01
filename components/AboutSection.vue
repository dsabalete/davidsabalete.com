<template>
  <SectionApp class="flex flex-col pt-0 sm:pt-8">
    <div>
      {{ $t("about_text_1") }}
    </div>

    <div>
      {{ $t("about_text_2") }}
    </div>

    <div>
      {{ $t("about_text_3") }}
    </div>

    <ClientOnly>
      <a
        href="#contact"
        v-smooth-scroll
        class="w-full mt-20 sm:mt-32 bg-blue-100 text-blue-900 px-1 py-2 text-center uppercase font-bold tracking-wide text-xl rounded-xl"
      >
        {{ $t("about_contact_me") }}</a
      >
    </ClientOnly>
  </SectionApp>
</template>

<style lang="postcss" scoped>
div {
  margin-bottom: 1rem;
}
</style>
