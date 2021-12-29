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

<style lang="postcss" scoped>
img {
    @apply w-60 h-40 hover:scale-110 transition duration-500 ease-in-out;
}
.project {
    @apply flex flex-col drop-shadow-2xl;
}
.project-image {
    @apply w-full;
}
.project-info {
    @apply justify-center;
}
.project-info h3 {
    @apply text-lg font-bold py-3;
}
.view-project {
    @apply text-blue-500 hover:text-blue-700 mr-4;
}
.view-demo {
    @apply text-right text-blue-500 hover:text-blue-700;
}
</style>
