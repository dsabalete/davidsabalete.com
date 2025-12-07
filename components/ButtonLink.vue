<template>
  <div class="button-link">
    <div class="button-link__container">
      <slot />
    </div>
  </div>
</template>

<style lang="css" scoped>
.button-link {
  @apply w-fit mx-auto mt-20 sm:mt-32;
}

.button-link__container {
  @apply bg-black text-white dark:bg-white dark:text-black px-6 py-2 uppercase font-bold tracking-wide text-lg shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 rounded-sm cursor-pointer;
}
</style>
