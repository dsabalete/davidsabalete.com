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
                <div class="star-name font-title">David Sabalete</div>
                <div class="mt-20">
                    <img
                        class="profile-image"
                        alt="Image of David"
                        src="../assets/images/profile.jpg"
                    />
                </div>
            </div>
        </a>
        <ul id="primary-navigation" :data-visible="isOpen" @click="close">
            <li>
                <a href="#about" class="nav-entry" v-scroll-to="'#about'"
                    >{{ $t("about") }}
                </a>
            </li>
            <li>
                <a
                    href="#experience"
                    class="nav-entry"
                    v-scroll-to="'#experience'"
                    >{{ $t("experience") }}
                </a>
            </li>
            <li>
                <a
                    href="#education"
                    class="nav-entry"
                    v-scroll-to="'#education'"
                    >{{ $t("education") }}
                </a>
            </li>
            <li>
                <a href="#skills" class="nav-entry" v-scroll-to="'#skills'"
                    >{{ $t("skills") }}
                </a>
            </li>
            <li>
                <a
                    href="#interests"
                    class="nav-entry"
                    v-scroll-to="'#interests'"
                    >{{ $t("interests") }}
                </a>
            </li>
            <li>
                <a href="#projects" class="nav-entry" v-scroll-to="'#projects'"
                    >{{ $t("projects") }}
                </a>
            </li>
            <li><a href="#" class="nav-entry" @click="goToBlog">blog </a></li>
            <li>
                <a href="#contact" class="nav-entry" v-scroll-to="'#contact'"
                    >{{ $t("contact") }}
                </a>
            </li>
            <li class="flex justify-center">
                <nuxt-link
                    v-for="locale in availableLocales"
                    :key="locale.code"
                    :to="switchLocalePath(locale.code)"
                >
                    <img
                        :src="`/icons/flag-${locale.code}.svg`"
                        :alt="locale.name"
                    />
                </nuxt-link>
            </li>
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
    computed: {
        availableLocales() {
            return this.$i18n.locales.filter(
                (i) => i.code !== this.$i18n.locale
            )
        }
    },
    methods: {
        goToBlog() {
            const areYouSure = confirm(
                "Are you sure you want to go to the blog?"
            )
            if (areYouSure) {
                this.$gtag("event", "visit_blog", { event_category: "nav" })
                window.location.href = "https://blog.davidsabalete.com"
            }
        },
        toggleMobileNav() {
            this.isOpen = !this.isOpen
            this.expanded = this.expanded === "false" ? "true" : "false"
        },
        close() {
            const interval = setInterval(() => {
                if (this.expanded === "true") {
                    this.expanded = "false"
                    this.isOpen = false
                    clearInterval(interval)
                }
            }, 200)
        }
    }
}
</script>

<style lang="postcss" scoped>
.star-name {
    @apply fixed top-0 w-full text-left uppercase font-bold tracking-wide text-xl bg-blue-900 text-white p-4 md:hidden;
}
.profile-image {
    @apply rounded-full border-8 border-blue-100 mx-auto my-4 w-1/2;
}
.navbar {
    @apply flex flex-col justify-start z-20 md:w-64 md:h-screen md:fixed md:bg-blue-900 items-center;
}
li {
    @apply py-2 sm:py-0;
}
.nav-entry {
    @apply font-title px-8 md:py-1  my-4 w-full text-center text-blue-900 md:text-blue-100 font-bold text-xl uppercase md:block sm:hover:bg-blue-100 sm:hover:text-blue-900;
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
}
#primary-navigation[data-visible="true"] {
    @apply translate-x-2 sm:translate-x-0;
}
</style>
