<template>
  <SectionApp id="projects">
    <template #title>{{ $t("projects_title") }}</template>

    <div class="grid md:grid-cols-2 gap-10">
      <ProjectCard v-for="(project, idx) in displayedProjects" :key="idx" :project="project" />
    </div>

    <div v-if="projects.length > 6" class="mt-12 flex justify-center">
      <button
        class="inline-flex items-center px-3 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        @click="showAll = !showAll"
      >
        {{ showAll ? "Show Less" : "Show More" }}
      </button>
    </div>
  </SectionApp>
</template>

<script>
import { projects } from "../data/projects.js"
export default {
  data() {
    return {
      projects,
      showAll: false
    }
  },
  computed: {
    displayedProjects() {
      return this.showAll ? this.projects : this.projects.slice(0, 6)
    }
  }
}
</script>
