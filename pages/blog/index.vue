<template>
    <div>
        <h1 class="text-center text-2xl py-8 uppercase font-bold">
            Blog Entries
        </h1>
        <div class="flex flex-col">
            <nuxt-link
                v-for="post in posts"
                :key="post.slug"
                :to="`/blog/${post.slug}`"
                class="bg-white rounded-xl drop-shadow-xl p-4 text-center mx-8 hover:bg-blue-500 hover:text-white"
            >
                {{ post.title }}
                <span class="text-base"
                    >({{ formatDate(post.updatedAt) }})</span
                >
            </nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
    layout: "blog",
    async asyncData({ $content }) {
        const posts = await $content("posts").fetch()

        return { posts }
    },
    methods: {
        formatDate(date) {
            const options = { year: "numeric", month: "short", day: "numeric" }
            return new Date(date).toLocaleDateString("es", options)
        }
    }
}
</script>

<style lang="scss" scoped></style>
