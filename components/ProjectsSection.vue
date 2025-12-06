<template>
  <SectionApp id="projects">
    <template #title>{{ $t("projects_title") }}</template>

    <div class="grid md:grid-cols-2 gap-10">
      <ProjectCard v-for="(project, idx) in projects" :key="idx" :project="project" />
    </div>
  </SectionApp>
</template>

<script>
import { projects } from "../data/projects.js"
export default {
  data() {
    return {
      projects
    }
  }
}
</script>
