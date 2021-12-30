<template>
    <nav class="navbar" id="sideNav">
        <button
            class="mobile-nav-toggle"
            :class="{ 'mobile-nav-toggle--open': isOpen }"
            aria-controls="primary-navigation"
            @click="toggleMobileNav"
        >
            <span class="sr-only" :aria-expanded="expanded">Menu</span>
        </button>
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
        <ul id="primary-navigation" :data-visible="isOpen">
            <li>
                <a href="#about" class="nav-entry" v-scroll-to="'#about'"
                    >about
                </a>
            </li>
            <li>
                <a
                    href="#experience"
                    class="nav-entry"
                    v-scroll-to="'#experience'"
                    >experience
                </a>
            </li>
            <li>
                <a
                    href="#education"
                    class="nav-entry"
                    v-scroll-to="'#education'"
                    >education
                </a>
            </li>
            <li>
                <a href="#skills" class="nav-entry" v-scroll-to="'#skills'"
                    >skills
                </a>
            </li>
            <li>
                <a
                    href="#interests"
                    class="nav-entry"
                    v-scroll-to="'#interests'"
                    >interests
                </a>
            </li>
            <li>
                <a href="#projects" class="nav-entry" v-scroll-to="'#projects'"
                    >projects
                </a>
            </li>
            <li><a href="#" class="nav-entry" @click="goToBlog">blog </a></li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: "Nav",
    data() {
        return {
            expanded: "false",
            isOpen: false
        }
    },
    methods: {
        goToBlog() {
            const areYouSure = confirm(
                "Are you sure you want to go to the blog?"
            )
            if (areYouSure) {
                window.location.href = "https://blog.davidsabalete.com"
            }
        },
        toggleMobileNav() {
            this.isOpen = !this.isOpen
            this.expanded = this.expanded === "false" ? "true" : "false"
        }
    }
}
</script>

<style lang="postcss" scoped>
.star-name {
    @apply fixed top-0 w-full text-center uppercase font-bold tracking-wide text-xl bg-blue-900 text-white p-4 md:hidden;
}
.navbar {
    @apply flex flex-col justify-start z-20 md:w-60 md:h-screen md:fixed md:bg-blue-900 items-center;
}
li {
    @apply py-2 sm:py-0;
}
.nav-entry {
    @apply px-8 md:py-1  my-4 w-full text-center text-blue-900 md:text-blue-100 font-bold text-xl uppercase md:block sm:hover:bg-blue-100 sm:hover:text-blue-900;
}
.mobile-nav-toggle {
    @apply block fixed z-30 right-0 m-4 sm:hidden bg-transparent w-6 aspect-square border-0 bg-center bg-no-repeat outline-none;
    background-image: url(~assets/images/icons/icon-hamburger.svg);
}
.mobile-nav-toggle--open {
    background-image: url(~assets/images/icons/icon-close.svg);
}
#primary-navigation {
    @apply fixed px-8 sm:px-0 pt-20 sm:pt-0 top-0 right-0 bottom-0 sm:relative translate-x-96 sm:translate-x-0 backdrop-blur-2xl sm:backdrop-blur-none duration-500 ease-in-out;
    /* @apply left-10 sm:left-0 sm:right-0 top-0 bottom-0 m-0  py-20 md:py-0 px-8 translate-x-96 inset-8 flex list-none flex-col justify-start z-20; */
}
#primary-navigation[data-visible="true"] {
    @apply translate-x-2 sm:translate-x-0;
}
</style>
