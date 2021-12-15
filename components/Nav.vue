<template>
    <nav
        class="flex flex-col justify-evenly navbar right-0 left-0 z-20 md:w-60 md:h-screen md:fixed md:bg-blue-900 items-center"
        id="sideNav"
    >
        <a href="#" v-scroll-to="'#about'">
            <div class="md:w-60 self-center">
                <div
                    class="fixed top-0 w-full text-center text-xl bg-blue-900 text-white p-4 md:hidden"
                >
                    David Sabalete Rodríguez
                </div>
                <div class="mt-20 sm:mt-0">
                    <img
                        alt="Image of David"
                        class="rounded-full border-8 border-blue-100 mx-auto my-4 w-2/3"
                        src="../assets/images/profile.jpg"
                    />
                </div>
            </div>
        </a>

        <a href="#" class="nav-entry" v-scroll-to="'#about'">about </a>
        <a href="#" class="nav-entry" v-scroll-to="'#experience'"
            >experience
        </a>
        <a href="#" class="nav-entry" v-scroll-to="'#education'">education </a>
        <a href="#" class="nav-entry" v-scroll-to="'#skills'">skills </a>
        <a href="#" class="nav-entry" v-scroll-to="'#interests'">interests </a>
        <a href="#" class="nav-entry" v-scroll-to="'#projects'">projects </a>
        <a href="https://blog.davidsabalete.com" class="nav-entry">blog </a>
    </nav>
</template>

<script>
export default {
    name: "Nav"
}
</script>

<style lang="postcss" scoped>
.nav-entry {
    @apply hidden text-blue-100 font-bold text-xl uppercase md:block;
}
</style>
