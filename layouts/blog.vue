<template>
  <div>
    <NuxtLink to="/" class="mt-2 text-2xl uppercase font-bold text-black sticky top-2 left-0">
      <img v-tooltip.right="`Go back home`" src="/icons/home.svg" alt="Home" class="h-8 ml-2" />
    </NuxtLink>
    <div class="sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto p-4">
      <slot />
    </div>
  </div>
</template>
