<template>
    <article
        class="bg-white rounded-xl drop-shadow-xl p-4 sm:p-6 md:p-8 sm:m-8"
    >
        <h1 class="text-3xl mb-4 font-bold">{{ article.title }}</h1>
        <p class="text-base mb-2">{{ article.description }}</p>
        <p class="text-sm mb-8">
            Article created on {{ formatDate(article.createdAt) }} and updated
            on
            {{ formatDate(article.updatedAt) }}
        </p>

        <img :src="article.img" :alt="article.alt" class="mx-auto mb-8" />

        <nuxt-content :document="article" />

        <div class="w-full text-center">
            <nuxt-link to="/blog" class="underline text-blue-500 text-sm"
                >Back to blog</nuxt-link
            >
        </div>
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
.nuxt-content a {
    color: rgb(59, 130, 246);
    text-decoration: underline;
}
.nuxt-content blockquote {
    border-left: 4px solid rgb(59, 130, 246);
    padding-left: 20px;
    margin: 20px 0;
    font-style: italic;
}
.nuxt-content em {
    font-style: italic;
}
.nuxt-content strong {
    font-weight: bold;
}
.icon.icon-link {
    background-image: url("~assets/svg/icon-hashtag.svg");
    display: inline-block;
    width: 20px;
    height: 20px;
    background-size: 20px 20px;
    margin-right: 5px;
}
</style>
