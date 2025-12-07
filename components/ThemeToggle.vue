<template>
  <button
    class="flex items-center justify-center p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
    :aria-label="$colorMode.preference === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
    @click="toggleTheme"
  >
    <ClientOnly>
      <IconSun v-if="$colorMode.value === 'dark'" class="w-5 h-5 text-yellow-500" />
      <IconMoon v-else class="w-5 h-5 text-gray-700 dark:text-gray-200" />
    </ClientOnly>
  </button>
</template>

<script setup lang="ts">
const colorMode = useColorMode()

const toggleTheme = () => {
  colorMode.preference = colorMode.value === "dark" ? "light" : "dark"
}
</script>
