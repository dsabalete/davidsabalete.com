<template>
  <div class="resume-item flex flex-col md:flex-row justify-between mb-5">
    <div class="resume-content">
      <h3 class="text-2xl font-bold text-green-900 py-6">
        {{ position }}
      </h3>
      <div class="subheading uppercase text-lg font-semibold mb-2">
        {{ company }}
      </div>
      <div class="resume-date text-sm text-green-900 whitespace-nowrap">
        <span class="text-primary">{{ period }}</span>
      </div>

      <p class="text-justify my-4" v-html="description" />
      <!-- eslint-disable-line vue/no-v-html -->
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
