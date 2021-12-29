<template>
    <section id="projects" class="lg:pr-32">
        <h2>Projects</h2>

        <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
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
