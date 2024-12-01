<script lang="ts" setup>
import { formatDate } from "~/utils"

definePageMeta({
  layout: "blog"
})

const posts = await queryContent("posts")
  .find()
  .then((posts) => posts.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)))
</script>

<template>
  <div>
    <h1 class="text-center text-2xl py-8 uppercase font-bold text-blue-900">Blog Entries</h1>
    <div class="flex flex-col mb-8">
      <nuxt-link
        v-for="post in posts"
        :key="post.slug"
        :to="`/blog/${post._path?.replace('/posts/', '')}`"
        class="bg-white rounded-xl drop-shadow-xl p-4 text-center mx-8 hover:bg-blue-900 hover:text-blue-100 mb-8"
      >
        {{ post.title }}
        <span class="text-base">({{ formatDate(post.updatedAt) }})</span>
      </nuxt-link>
      <nuxt-link to="/" class="underline text-blue-900 text-sm text-center p-4">Back to home</nuxt-link>
    </div>
  </div>
</template>
