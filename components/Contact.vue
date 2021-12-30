<template>
    <section id="contact" class="pb-16 flex flex-col">
        <h2>You can reach me...</h2>
        <Social size="lg" class="my-20 sm:my-64" />

        <a href="#about" v-scroll-to="'#about'" class="link">
            Back to the top</a
        >
    </section>
</template>

<script>
export default {}
</script>

<style lang="postcss" scoped>
.link {
    @apply mt-20 sm:mt-64 bg-blue-100 text-blue-900 px-1 py-2 text-center uppercase font-bold tracking-wide text-xl rounded-xl;
}
</style>
