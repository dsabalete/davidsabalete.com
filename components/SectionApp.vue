<template>
  <section class="border-b border-gray-300 py-10 px-8 sm:min-h-screen">
    <h2 v-if="hasHeader" class="text-3xl font-bold text-black uppercase pt-8 pb-16">
      <slot name="title" />
    </h2>

    <slot />
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
