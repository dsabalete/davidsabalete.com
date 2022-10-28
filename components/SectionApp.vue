<template>
    <section
        class="border-b border-gray-300 py-10 px-4 sm:px-8 sm:min-h-screen"
    >
        <h2
            v-if="hasHeader"
            class="font-title text-4xl font-bold text-blue-900 uppercase pt-8 pb-16"
        >
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
