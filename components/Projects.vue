<template>
    <section id="projects" class="md:pr-60">
        <h2>Projects</h2>

        <div class="grid md:grid-cols-2 gap-10">
            <Project
                v-for="(project, idx) in projects"
                :key="idx"
                :project="project"
            />
        </div>
    </section>
</template>

<script>
import { projects } from "./projects.js"
export default {
    data() {
        return {
            projects
        }
    }
}
</script>
