<template>
    <div class="project">
        <div class="project-image">
            <a :href="project.repo" target="_blank">
                <img :src="project.image" :alt="project.alt"
            /></a>
        </div>
        <div class="project-info">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <a :href="project.repo" class="view-project" target="_blank"
                >View Project</a
            >
            <a
                v-if="project.live"
                :href="project.live"
                class="view-demo"
                target="_blank"
                >Demo</a
            >
        </div>
    </div>
</template>

<script>
export default {
    name: "Project",
    props: {
        project: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="postcss" scoped>
.project {
    @apply flex flex-col drop-shadow-2xl;
}
img {
    @apply w-60 h-40 rounded-xl hover:scale-110 transition duration-500 ease-in-out;
}
p {
    @apply mb-4;
}
.project-image {
    @apply w-full;
}
.project-info {
    @apply justify-center;
}
.project-info h3 {
    @apply text-lg font-bold pt-3 pb-0;
}
.view-project {
    @apply text-blue-700 hover:text-green-900 mr-4;
}
.view-demo {
    @apply text-right text-blue-700 hover:text-green-900;
}
</style>
