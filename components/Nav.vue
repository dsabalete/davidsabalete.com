<template>
    <nav class="navbar" id="sideNav">
        <a href="#" v-scroll-to="'#about'">
            <div class="md:w-60 self-center">
                <div class="star-name">David Sabalete Rodríguez</div>
                <div class="mt-20">
                    <img
                        alt="Image of David"
                        class="rounded-full border-8 border-blue-100 mx-auto my-4 w-2/3"
                        src="../assets/images/profile.jpg"
                    />
                </div>
            </div>
        </a>

        <a href="#about" class="nav-entry" v-scroll-to="'#about'">about </a>
        <a href="#experience" class="nav-entry" v-scroll-to="'#experience'"
            >experience
        </a>
        <a href="#education" class="nav-entry" v-scroll-to="'#education'"
            >education
        </a>
        <a href="#skills" class="nav-entry" v-scroll-to="'#skills'">skills </a>
        <a href="#interests" class="nav-entry" v-scroll-to="'#interests'"
            >interests
        </a>
        <a href="#projects" class="nav-entry" v-scroll-to="'#projects'"
            >projects
        </a>
        <a href="#" class="nav-entry" @click="goToBlog">blog </a>
    </nav>
</template>

<script>
export default {
    name: "Nav",
    methods: {
        goToBlog() {
            const areYouSure = confirm(
                "Are you sure you want to go to the blog?"
            )
            if (areYouSure) {
                window.location.href = "https://blog.davidsabalete.com"
            }
        }
    }
}
</script>

<style lang="postcss" scoped>
.star-name {
    @apply fixed top-0 w-full text-center uppercase font-bold tracking-wider text-xl bg-blue-900 text-white p-4 md:hidden;
}
.navbar {
    @apply flex flex-col justify-start z-20 md:w-60 md:h-screen md:fixed md:bg-blue-900 items-center;
}
.nav-entry {
    @apply hidden p-4 w-full text-center text-blue-100 font-bold text-xl uppercase md:block hover:bg-blue-100 hover:text-blue-900;
}
</style>
