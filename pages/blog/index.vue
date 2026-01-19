<script lang="ts" setup>
import { formatDate } from "~/utils"
import type { BlogPost } from "~/types/blog"

definePageMeta({
  layout: "blog"
})

// queryCollection is auto-imported by Nuxt Content v3
const { data: postsData } = await useAsyncData("posts", () => queryCollection("posts").all())

// order posts by updatedAt descending
postsData.value = postsData.value?.sort((a, b) => {
  const dateA = new Date((a.meta?.updatedAt || a.meta?.createdAt || "") as string | Date).getTime()
  const dateB = new Date((b.meta?.updatedAt || b.meta?.createdAt || "") as string | Date).getTime()
  return dateB - dateA
})

const posts = (postsData.value || []) as unknown as BlogPost[]

// Helper function to get post URL
const getPostUrl = (post: BlogPost): string => {
  const slug = post.path?.replace("/posts/", "") || ""
  return `/blog/${slug}`
}
</script>

<template>
  <div>
    <h1 class="text-center text-2xl py-8 uppercase font-bold text-black">Blog Entries</h1>
    <div class="flex flex-col md:grid md:grid-cols-3 gap-4 md:gap-8">
      <NuxtLink
        v-for="post in posts"
        :key="post.id"
        :to="getPostUrl(post)"
        class="flex flex-col justify-between bg-white text-black rounded-xl border p-4 text-center hover:bg-gray-100"
      >
        <div class="text-lg font-bold">{{ post?.meta?.title || post?.title || "Untitled" }}</div>

        <img :src="post?.meta?.img as string" :alt="post?.meta?.alt as string" class="w-full mx-auto" />

        <div v-if="post?.meta?.updatedAt || post?.meta?.createdAt" class="text-base">
          ({{ formatDate((post?.meta?.updatedAt || post?.meta?.createdAt) as string) }})
        </div>
      </NuxtLink>

      <div v-if="posts.length === 0" class="text-center p-8">
        <p>No posts found. Make sure queryContent is available and content/posts contains markdown files.</p>
      </div>
      <NuxtLink to="/" class="underline text-black-900 text-sm text-center p-4">Back to home</NuxtLink>
    </div>
  </div>
</template>
