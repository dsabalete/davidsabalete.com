<template>
    <div class="project flex flex-col drop-shadow-2xl">
        <div class="project-image w-full">
            <a :href="project.repo" target="_blank">
                <img
                    :src="project.image"
                    :alt="project.alt"
                    class="mx-auto md:mx-0 md:w-80 md:aspect-video rounded-xl hover:scale-110 transition duration-500 ease-in-out"
            /></a>
        </div>
        <div class="project-info justify-center">
            <h3 class="text-lg font-bold pt-3 pb-0">{{ project.title }}</h3>
            <p class="mb-4">{{ project.description }}</p>
            <a
                :href="project.repo"
                class="view-project text-blue-700 hover:text-green-900 mr-4"
                target="_blank"
                >{{ $t("project_view") }}</a
            >
            <a
                v-if="project.live"
                :href="project.live"
                class="view-demo text-right text-blue-700 hover:text-green-900"
                target="_blank"
                >{{ $t("project_demo") }}</a
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
