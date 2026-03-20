<script lang="ts" setup>
defineProps({
  certificate: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div
    class="certificate flex flex-col justify-between gap-4 drop-shadow-2xl border-2 border-gray-200 dark:border-gray-700 rounded-xl p-4 hover:border-gray-300 dark:hover:border-gray-600 transition-colors"
  >
    <h3 class="text-xl font-bold pb-0">{{ certificate.name }}</h3>
    <div class="certificate-image w-full">
      <a :href="certificate.pdf" target="_blank" rel="noopener noreferrer">
        <img
          :src="certificate.image"
          :alt="certificate.name"
          class="mx-auto md:mx-0 w-full md:w-80 md:aspect-video rounded-xl hover:scale-110 transition duration-500 ease-in-out object-cover"
        />
      </a>
    </div>
  </div>
</template>
