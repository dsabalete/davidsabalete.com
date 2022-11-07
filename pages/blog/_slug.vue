<template>
    <article class="bg-white rounded-xl drop-shadow-xl p-8 m-8">
        <h1 class="text-3xl mb-4">{{ article.title }}</h1>
        <p class="text-base mb-2">{{ article.description }}</p>
        <img :src="article.img" :alt="article.alt" />
        <p class="text-sm">
            Article last updated: {{ formatDate(article.updatedAt) }}
        </p>

        <nuxt-content :document="article" />

        <nuxt-link to="/blog" class="underline text-blue-900 text-sm"
            >Back to blog</nuxt-link
        >
    </article>
</template>

<script>
export default {
    layout: "blog",
    async asyncData({ $content, params }) {
        const article = await $content("posts", params.slug).fetch()

        return { article }
    },
    methods: {
        formatDate(date) {
            const options = { year: "numeric", month: "short", day: "numeric" }
            return new Date(date).toLocaleDateString("es", options)
        }
    }
}
</script>

<style>
.nuxt-content h2 {
    font-weight: bold;
    font-size: 28px;
}
.nuxt-content h3 {
    font-weight: bold;
    font-size: 22px;
}
.nuxt-content p {
    margin-bottom: 20px;
}
</style>
