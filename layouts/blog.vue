<script setup lang="ts">
const route = useRoute()
const isBlogIndex = computed(() => route.path === '/blog')
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
    <header class="sticky top-0 z-20 bg-white/90 dark:bg-gray-950/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <div class="max-w-2xl mx-auto px-6 h-14 flex items-center justify-between">
        <NuxtLink
          to="/"
          class="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200 tracking-wide"
        >
          david sabalete
        </NuxtLink>
        <div class="flex items-center gap-3">
          <NuxtLink
            v-if="!isBlogIndex"
            to="/blog"
            class="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200"
          >
            writing
          </NuxtLink>
          <ThemeToggle />
        </div>
      </div>
    </header>

    <main class="max-w-2xl mx-auto px-6 pb-24">
      <slot />
    </main>
  </div>
</template>
