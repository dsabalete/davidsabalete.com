<template>
    <section class="flex flex-col pt-0 sm:pt-8">
        <div>
            <p>
                I am experienced in Vue.js and Nuxt.js in which I produce high
                quality code for my clients that are both well performing and
                well tested.
            </p>
            <p>
                I focus on solving problems, not only technical problems but
                creating an awesome experience for the users of my software both
                visual and accessible. Mixing powerful tools and knowledge about
                the users brings visual UI's to life and leads to webpages being
                accessible and useful.
            </p>
        </div>

        <a href="#contact" v-scroll-to="'#contact'" class="link">
            Contact me!</a
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
