<script lang="ts" setup>
import type { BlogPost } from '~/types/blog'

definePageMeta({
  layout: 'blog'
})

const route = useRoute()
const {
  public: { siteUrl }
} = useRuntimeConfig()

const { data: post } = await useAsyncData(`blog-post-${route.params.slug}`, async () => {
  try {
    if (typeof queryCollection !== 'undefined') {
      const slug = route.params.slug as string
      return (await queryCollection('posts').path(`/posts/${slug}`).first()) as unknown as BlogPost
    }
    console.error('queryCollection is not available')
    return null
  } catch (error) {
    console.error('Error fetching article:', error)
    return null
  }
})

const postTitle = computed(() => post.value?.meta?.title || post.value?.title || 'Untitled')
const postDescription = computed(() => post.value?.meta?.description || post.value?.description || '')
const postImage = computed(() => post.value?.meta?.img || '')

const canonicalUrl = computed(() => `${siteUrl}/blog/${route.params.slug}`)

const readingTime = computed<number>(() => {
  const body = post.value?.body
  if (!body) return 0
  const text = JSON.stringify(body)
  const words = text.split(/\s+/).length
  return Math.max(1, Math.ceil(words / 200))
})

const formattedDate = computed<string>(() => {
  const raw = (post.value?.meta?.updatedAt || post.value?.meta?.createdAt) as string | undefined
  return raw ? formatDate(raw) : ''
})

useSeoMeta({
  title: postTitle,
  ogTitle: postTitle,
  description: postDescription,
  ogDescription: postDescription,
  ogUrl: canonicalUrl,
  ogImage: computed(() => (postImage.value ? `${siteUrl}${postImage.value}` : undefined)),
  twitterCard: 'summary_large_image',
  twitterTitle: postTitle,
  twitterDescription: postDescription
})

useHead({
  link: [{ rel: 'canonical', href: canonicalUrl.value }]
})

useSchemaOrg([
  defineArticle({
    headline: postTitle,
    description: postDescription,
    image: computed(() => (postImage.value ? `${siteUrl}${postImage.value}` : undefined)),
    datePublished: computed(() => post.value?.meta?.createdAt || undefined),
    dateModified: computed(() => post.value?.meta?.updatedAt || undefined),
    author: {
      '@type': 'Person',
      name: 'David Sabalete Rodríguez',
      url: 'https://www.davidsabalete.com'
    }
  })
])
</script>

<template>
  <article v-if="post">
    <header class="pt-14 pb-8 border-b border-gray-200 dark:border-gray-800">
      <h1 class="text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 leading-snug">
        {{ postTitle }}
      </h1>
      <p v-if="postDescription" class="mt-3 text-base text-gray-500 dark:text-gray-400 leading-relaxed">
        {{ postDescription }}
      </p>
      <div class="mt-4 flex items-center gap-3 text-sm text-gray-400 dark:text-gray-500">
        <time v-if="formattedDate">{{ formattedDate }}</time>
        <span v-if="formattedDate && readingTime" aria-hidden="true">·</span>
        <span v-if="readingTime">{{ readingTime }} min read</span>
      </div>
    </header>

    <nuxt-img
      v-if="post.meta?.img"
      :src="post.meta.img"
      :alt="(post.meta?.alt as string) || ''"
      width="672"
      height="378"
      sizes="(max-width: 640px) 100vw, 672px"
      class="w-full mt-10 rounded-lg"
    />

    <ContentRenderer :value="post" class="nuxt-content mt-10" />

    <footer class="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
      <NuxtLink
        to="/blog"
        class="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-150"
      >
        ← All writing
      </NuxtLink>
    </footer>
  </article>

  <div v-else class="pt-24 text-center">
    <p class="text-gray-500 dark:text-gray-400">Post not found.</p>
    <NuxtLink
      to="/blog"
      class="mt-4 inline-block text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-150"
    >
      ← All writing
    </NuxtLink>
  </div>
</template>

<style lang="postcss" scoped>
@reference "tailwindcss";

.nuxt-content :deep(h2) {
  font-size: 1.25rem;
  font-weight: 600;
  margin-top: 2.5rem;
  margin-bottom: 0.75rem;
  letter-spacing: -0.01em;
  @apply text-gray-900 dark:text-gray-100;
}

.nuxt-content :deep(h3) {
  font-size: 1.05rem;
  font-weight: 600;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
  @apply text-gray-900 dark:text-gray-100;
}

.nuxt-content :deep(p) {
  font-size: 1rem;
  line-height: 1.75;
  margin-bottom: 1.5rem;
  @apply text-gray-700 dark:text-gray-300;
}

.nuxt-content :deep(a) {
  text-decoration: underline;
  text-underline-offset: 3px;
  @apply text-gray-900 dark:text-gray-100 decoration-gray-400 dark:decoration-gray-600 hover:decoration-gray-900 dark:hover:decoration-gray-100 transition-colors duration-150;
}

.nuxt-content :deep(ul),
.nuxt-content :deep(ol) {
  margin-bottom: 1.5rem;
  padding-left: 1.5rem;
  @apply text-gray-700 dark:text-gray-300;
}

.nuxt-content :deep(ul) {
  list-style-type: disc;
}

.nuxt-content :deep(ol) {
  list-style-type: decimal;
}

.nuxt-content :deep(li) {
  font-size: 1rem;
  line-height: 1.75;
  margin-bottom: 0.25rem;
}

.nuxt-content :deep(blockquote) {
  border-left: 2px solid;
  padding-left: 1.25rem;
  margin: 2rem 0;
  font-style: italic;
  @apply border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400;
}

.nuxt-content :deep(strong) {
  font-weight: 600;
  @apply text-gray-900 dark:text-gray-100;
}

.nuxt-content :deep(em) {
  font-style: italic;
}

.nuxt-content :deep(hr) {
  margin: 2.5rem 0;
  @apply border-gray-200 dark:border-gray-800;
}

.nuxt-content :deep(code) {
  font-size: 0.875rem;
  padding: 0.15em 0.35em;
  border-radius: 0.25rem;
  font-family: ui-monospace, monospace;
  @apply bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200;
}

.nuxt-content :deep(pre) {
  margin: 1.75rem 0;
  padding: 1.25rem 1.5rem;
  border-radius: 0.5rem;
  overflow-x: auto;
  font-size: 0.875rem;
  line-height: 1.7;
  @apply bg-gray-950 dark:bg-gray-900 text-gray-100;
}

.nuxt-content :deep(pre code) {
  background: transparent;
  padding: 0;
  border-radius: 0;
  font-size: inherit;
  @apply text-gray-100;
}
</style>
