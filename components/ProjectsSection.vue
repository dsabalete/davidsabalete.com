<template>
  <SectionApp id="projects">
    <template #title>{{ $t("projects_title") }}</template>

    <div class="grid md:grid-cols-2 gap-10">
      <ProjectCard v-for="(project, idx) in displayedProjects" :key="idx" :project="project" />
    </div>

    <div v-if="projects.length > 6" class="mt-12 flex justify-center">
      <button
        class="bg-black text-white px-6 py-2 uppercase font-bold tracking-wide text-lg shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 rounded-sm"
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
