<template>
    <section id="contact" class="pb-16 flex flex-col">
        <h2>{{ $t("contact_title") }}</h2>
        <Social size="lg" class="mt-20 mb-12" />

        <a href="#about" v-scroll-to="'#about'" class="link">
            {{ $t("contact_back") }}</a
        >
    </section>
</template>

<script>
export default {}
</script>

<style lang="postcss" scoped>
.link {
    @apply w-full mt-20 sm:mt-32 bg-blue-100 text-blue-900 px-1 py-2 text-center uppercase font-bold tracking-wide text-xl rounded-xl;
}
</style>
