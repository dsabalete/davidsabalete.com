<script lang="ts" setup>
defineProps({
  certificate: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="certificate flex flex-col drop-shadow-2xl border-2 border-gray-200 dark:border-gray-700 rounded-xl p-4 hover:border-gray-300 dark:hover:border-gray-600 transition-colors">
    <h3 class="text-xl font-bold pb-0 mb-4">{{ certificate.name }}</h3>
    <div class="certificate-image w-full mb-4">
      <a :href="certificate.pdf" target="_blank" rel="noopener noreferrer">
        <img
          :src="certificate.image"
          :alt="certificate.name"
          class="mx-auto md:mx-0 w-full md:w-80 md:aspect-video rounded-xl hover:scale-110 transition duration-500 ease-in-out object-cover"
        />
      </a>
    </div>
    <div class="certificate-info justify-center">
      <a
        :href="certificate.pdf"
        class="text-base text-blue-600 dark:text-blue-400 hover:text-black dark:hover:text-white inline-flex items-center gap-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ $t("certificate_view") }}
        <svg
          class="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </a>
    </div>
  </div>
</template>
