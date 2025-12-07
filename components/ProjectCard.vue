<script lang="ts" setup>
defineProps({
  project: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="project flex flex-col drop-shadow-2xl">
    <div class="project-image w-full">
      <a :href="project.live || project.repo" target="_blank">
        <img
          :src="project.image"
          :alt="project.alt"
          class="mx-auto md:mx-0 md:w-80 md:aspect-video rounded-xl hover:scale-110 transition duration-500 ease-in-out"
      /></a>
    </div>
    <div class="project-info justify-center">
      <h3 class="text-xl font-bold pt-3 pb-0 mb-2">{{ project.title }}</h3>
      <p class="text-base mb-2">{{ project.description }}</p>
      <div class="flex flex-row gap-2 text-sm mb-2">
        <div
          v-for="tag in project.tags"
          :key="tag"
          class="bg-gray-200 dark:bg-gray-700 dark:text-gray-200 px-2 rounded"
        >
          {{ tag }}
        </div>
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
