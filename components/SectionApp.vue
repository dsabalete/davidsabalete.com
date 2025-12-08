<template>
  <section class="content-section">
    <h2 v-if="hasHeader" class="text-3xl font-bold text-black dark:text-white uppercase pt-8 px-6 pb-16 section-title">
      <slot name="title" />
    </h2>
    <div class="section-content">
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    hasHeader() {
      return !!this.$slots.title
    }
  }
}
</script>

<style lang="css" scoped>
section {
  @apply sm:max-w-sm md:max-w-xl lg:max-w-2xl xl:max-w-4xl mx-auto border-b border-gray-300 py-10 px-4 sm:min-h-screen;
}
</style>
