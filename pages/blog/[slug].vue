<script lang="ts" setup>
import type { BlogPost } from "~/types/blog"

definePageMeta({
  layout: "blog"
})

const route = useRoute()

// queryCollection is auto-imported by Nuxt Content v3
const { data: post } = await useAsyncData(`blog-post-${route.params.slug}`, async () => {
  try {
    if (typeof queryCollection !== "undefined") {
      const slug = route.params.slug as string

      // Try different ways to find the article
      return (await queryCollection("posts").path(`/posts/${slug}`).first()) as unknown as BlogPost
    }
    console.error("queryCollection is not available")
    return null
  } catch (error) {
    console.error("Error fetching article:", error)
    return null
  }
})
</script>

<template>
  <article v-if="post" class="bg-white rounded-xl drop-shadow-xl p-4 sm:p-6 md:p-8 sm:m-8">
    <h1 class="text-3xl mb-4 font-bold">{{ post.title || "Untitled" }}</h1>
    <p v-if="post.description" class="text-base mb-2">
      {{ post.description }}
    </p>
    <p v-if="post?.meta?.createdAt || post?.meta?.updatedAt" class="text-sm mb-8">
      <span v-if="post?.meta?.createdAt"> post created on {{ post?.meta?.createdAt }} </span>
      <span v-if="post?.meta?.updatedAt"> and updated on {{ post?.meta?.updatedAt }} </span>
    </p>

    <img
      v-if="post?.meta?.img"
      :src="post?.meta?.img as string"
      :alt="(post?.meta?.alt as string) || ''"
      class="mx-auto mb-8"
    />

    <ContentRenderer v-if="post" :value="post" class="nuxt-content" />
    <div v-else>
      <h1>Document not found</h1>
    </div>

    <div class="w-full text-center">
      <nuxt-link to="/blog" class="underline text-black-500 text-sm">Back to blog</nuxt-link>
    </div>
  </article>
</template>

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
  background-image: url("@/assets/images/icons/icon-hashtag.svg");
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
  margin-right: 5px;
}
</style>
