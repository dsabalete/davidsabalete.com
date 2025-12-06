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
      <a :href="project.live" target="_blank">
        <img
          :src="project.image"
          :alt="project.alt"
          class="mx-auto md:mx-0 md:w-80 md:aspect-video rounded-xl hover:scale-110 transition duration-500 ease-in-out"
      /></a>
    </div>
    <div class="project-info justify-center">
      <h3 class="text-lg font-bold pt-3 pb-0">{{ project.title }}</h3>
      <p class="mb-4">{{ project.description }}</p>
      <a :href="project.repo" class="text-base text-blue-600 hover:text-black mr-4" target="_blank">{{
        $t("project_view")
      }}</a>
    </div>
  </div>
</template>
