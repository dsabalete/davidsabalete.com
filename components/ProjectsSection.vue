<template>
    <SectionApp id="projects" class="lg:pr-32">
        <template #title>{{ $t("projects_title") }}</template>

        <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            <ProjectCard
                v-for="(project, idx) in projects"
                :key="idx"
                :project="project"
            />
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
