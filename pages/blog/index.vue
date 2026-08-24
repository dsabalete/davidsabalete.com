<script lang="ts" setup>
import type { BlogPost } from '~/types/blog'

definePageMeta({
  layout: 'blog'
})

const { data: postsData } = await useAsyncData('posts', () => queryCollection('posts').all())

const posts = computed<BlogPost[]>(() => {
  const raw = (postsData.value || []) as unknown as BlogPost[]
  return raw.slice().sort((a, b) => {
    const dateA = new Date((a.meta?.updatedAt || a.meta?.createdAt || '') as string).getTime()
    const dateB = new Date((b.meta?.updatedAt || b.meta?.createdAt || '') as string).getTime()
    return dateB - dateA
  })
})

const postsByYear = computed<Map<number, BlogPost[]>>(() => {
  const map = new Map<number, BlogPost[]>()
  for (const post of posts.value) {
    const rawDate = (post.meta?.updatedAt || post.meta?.createdAt || '') as string
    const year = parseYear(rawDate) ?? 0
    const group = map.get(year) ?? []
    group.push(post)
    map.set(year, group)
  }
  return new Map([...map.entries()].sort((a, b) => b[0] - a[0]))
})

const sortedYears = computed<number[]>(() => [...postsByYear.value.keys()])

const getPostUrl = (post: BlogPost): string => {
  const slug = post.path?.replace('/posts/', '') || ''
  return `/blog/${slug}`
}

const formatShortDate = (date: string | Date | undefined): string => {
  if (!date) return ''
  const formatted = formatDate(date)
  return formatted === 'Unknown date' ? '' : formatted
}
</script>

<template>
  <div>
    <div class="pt-16 pb-12 border-b border-gray-200 dark:border-gray-800">
      <h1 class="text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
        Writing
      </h1>
      <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
        Notes on software, books, and things I find worth writing about.
      </p>
    </div>

    <div v-if="posts.length === 0" class="pt-16 text-center text-gray-500 dark:text-gray-400 text-sm">
      No posts yet.
    </div>

    <div v-else>
      <section v-for="year in sortedYears" :key="year" class="mt-10">
        <h2 class="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">
          {{ year || 'Other' }}
        </h2>

        <ul class="divide-y divide-gray-100 dark:divide-gray-800">
          <li v-for="post in postsByYear.get(year)" :key="post.id">
            <NuxtLink
              :to="getPostUrl(post)"
              class="group flex items-baseline justify-between gap-4 py-4 hover:bg-transparent"
            >
              <div class="flex-1 min-w-0">
                <span
                  class="text-base font-medium text-gray-900 dark:text-gray-100 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-150 leading-snug"
                >
                  {{ post.meta?.title || post.title || 'Untitled' }}
                </span>
                <p
                  v-if="post.meta?.description || post.description"
                  class="mt-0.5 text-sm text-gray-500 dark:text-gray-400 truncate"
                >
                  {{ post.meta?.description || post.description }}
                </p>
              </div>
              <time
                v-if="post.meta?.updatedAt || post.meta?.createdAt"
                class="flex-none text-sm text-gray-400 dark:text-gray-500 whitespace-nowrap"
              >
                {{ formatShortDate((post.meta?.updatedAt || post.meta?.createdAt) as string) }}
              </time>
            </NuxtLink>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>
