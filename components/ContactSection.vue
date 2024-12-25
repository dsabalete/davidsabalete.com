<template>
  <SectionApp id="contact" class="pb-16 flex flex-col">
    <template #title>{{ $t("contact_title") }}</template>
    <SocialBlock size="lg" class="mt-20 mb-12" />

    <ClientOnly>
      <a
        v-smooth-scroll="{ duration: 2000 }"
        href="#about"
        class="w-full mt-20 sm:mt-32 bg-blue-100 text-blue-900 px-1 py-2 text-center uppercase font-bold tracking-wide text-xl rounded-xl"
      >
        {{ $t("contact_back") }}</a
      >
    </ClientOnly>
  </SectionApp>
</template>
