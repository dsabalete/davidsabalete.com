<template>
  <div
    class="resume-item flex flex-col md:flex-row justify-between mb-5 border-gray-200 border-2 sm:border-none rounded-lg p-6"
  >
    <div class="resume-content">
      <h3 class="text-2xl font-bold text-black dark:text-gray-100 pb-4">
        {{ position }}
      </h3>
      <div class="subheading uppercase text-lg font-semibold mb-2">
        {{ company }}
      </div>
      <div class="resume-date text-sm text-black dark:text-gray-400 whitespace-nowrap">
        <span class="text-primary">{{ period }}</span>
      </div>

      <!-- eslint-disable vue/no-v-html -->
      <p class="text-justify mt-4" v-html="description" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    position: {
      type: String,
      required: true
    },
    company: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    grade: {
      type: String,
      default: null
    },
    period: {
      type: String,
      required: true
    }
  }
}
</script>
