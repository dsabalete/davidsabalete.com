<template>
    <section>
        <p class="mb-4">
            I am experienced in Vue.js and Nuxt.js in which I produce high
            quality code for my clients that are both well performing and well
            tested.
        </p>

        <p>
            I focus on solving problems, not only technical problems but
            creating an awesome experience for the users of my software both
            visual and accessible. Mixing powerful tools and knowledge about the
            users brings visual UI's to life and leads to webpages being
            accessible and useful.
        </p>

        <SocialIcons />
    </section>
</template>

<script>
export default {}
</script>

<style lang="css" scoped>
section {
    min-height: calc(100vh - 370px);
}
</style>

<style lang="postcss" scoped>
section {
    @apply flex flex-col w-full lg:w-2/3 sm:mr-4 pt-0;
}
</style>
