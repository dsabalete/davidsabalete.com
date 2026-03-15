<script lang="ts" setup>
defineProps({
  project: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div
    class="project flex flex-col drop-shadow-2xl border-2 border-gray-200 rounded-xl p-4 hover:scale-110 transition duration-500 ease-in-out"
  >
    <h3 class="text-xl font-bold pb-0 mb-2">{{ project.title }}</h3>
    <div class="project-image w-full">
      <a :href="project.live || project.repo" target="_blank">
        <img :src="project.image" :alt="project.alt" class="mx-auto md:mx-0 md:w-80 md:aspect-video rounded-xl"
      /></a>
    </div>
    <div class="project-info justify-center">
      <p class="text-base mt-4 mb-2">{{ project.description }}</p>
      <div class="flex flex-row gap-2 text-sm mb-2">
        <div
          v-for="tag in project.tags"
          :key="tag"
          class="bg-gray-200 dark:bg-gray-700 dark:text-gray-200 px-2 rounded"
        >
          {{ tag }}
        </div>
      </div>
      <div v-if="project.metrics" class="flex flex-row gap-2 text-xs mb-2">
        <span
          class="flex items-center gap-1 px-2 py-0.5 rounded-full font-semibold"
          :class="
            project.metrics.performance >= 90
              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
              : 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200'
          "
          title="Lighthouse Performance Score"
        >
          <svg class="w-3 h-3" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2L8.5 8.5 2 9.27l5 4.87-1.18 6.88L12 17.77l6.18 3.25L17 14.14l5-4.87-6.5-.77z" />
          </svg>
          Perf {{ project.metrics.performance }}
        </span>
        <span
          class="flex items-center gap-1 px-2 py-0.5 rounded-full font-semibold"
          :class="
            project.metrics.accessibility >= 90
              ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
              : 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200'
          "
          title="Lighthouse Accessibility Score"
        >
          <svg class="w-3 h-3" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <circle cx="12" cy="4" r="2" />
            <path
              d="M15.89 8.11A5.99 5.99 0 0 0 12 7c-1.4 0-2.69.48-3.71 1.28L6 7l-1.41 1.41 2.43 2.43A5.97 5.97 0 0 0 6 14h2a4 4 0 0 1 7.93-.8l1.98-.55A5.99 5.99 0 0 0 15.89 8.11zM12 20a4 4 0 0 1-4-4H6a6 6 0 0 0 12 0h-2a4 4 0 0 1-4 4z"
            />
          </svg>
          a11y {{ project.metrics.accessibility }}
        </span>
      </div>
      <a
        :href="project.repo"
        class="text-base text-blue-600 dark:text-blue-400 hover:text-black dark:hover:text-white mr-4"
        target="_blank"
        >{{ $t("project_view") }}</a
      >
    </div>
  </div>
</template>
