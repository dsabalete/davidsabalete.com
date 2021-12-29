<template>
    <div class="project">
        <div class="project-image">
            <img :src="project.image" :alt="project.alt" />
        </div>
        <div class="project-info">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <a :href="project.repo" class="view-project" target="_blank"
                >View Project</a
            >
            <a :href="project.live" class="view-demo" target="_blank">Demo</a>
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

<style lang="scss" scoped></style>
