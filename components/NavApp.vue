<script lang="ts" setup>
const { locales, t } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const expanded = ref(false)
const isOpen = ref(false)

const toggleMobileNav = () => {
  isOpen.value = !isOpen.value
  expanded.value = !expanded.value
}

const close = () => {
  const interval = setInterval(() => {
    if (expanded.value) {
      expanded.value = false
      isOpen.value = false
      clearInterval(interval)
    }
  }, 200)
}

const route = useRoute()
console.log(route.hash)
</script>

<template>
  <nav
    id="sideNav"
    class="nav-app flex flex-col justify-between md:items-center z-20 lg:bg-transparent lg:w-40 xl:w-64 md:h-screen md:fixed items-center"
  >
    <div class="flex justify-center items-center">
      <div v-for="loc in locales" :key="loc.code" class="mx-3 text-base">
        <nuxt-link :to="`${switchLocalePath(loc.code)}`">
          {{ loc.code }}
          <!-- <img :src="`/icons/flag-${loc.code}.svg`" :alt="loc.name" /> -->
        </nuxt-link>
      </div>
      <ThemeToggle class="ml-4" />
    </div>

    <button
      class="mobile-nav-toggle block fixed z-30 top-5 right-4 sm:hidden rounded-md p-1 w-8 aspect-square border-0 bg-center bg-no-repeat outline-none"
      :class="{ 'mobile-nav-toggle--open': isOpen, 'bg-white dark:bg-gray-800': !isOpen }"
      aria-controls="primary-navigation"
      @click="toggleMobileNav"
    >
      <IconHamburger v-if="!expanded" />
      <IconClose v-else />
      <span class="sr-only" :aria-expanded="expanded">Menu</span>
    </button>

    <ul
      id="primary-navigation"
      :data-visible="isOpen"
      class="nav-app__list"
      style="backdrop-filter: blur(40px)"
      @click="close"
    >
      <ClientOnly>
        <li>
          <a href="#"/>
        </li>
        <li>
          <a v-smooth-scroll href="#about" class="nav-entry">{{ t("about") }} </a>
        </li>
        <li>
          <a v-smooth-scroll href="#experience" class="nav-entry">{{ t("experience") }} </a>
        </li>
        <li>
          <a v-smooth-scroll href="#education" class="nav-entry">{{ t("education") }} </a>
        </li>
        <li>
          <a v-smooth-scroll href="#certificates" class="nav-entry">{{ t("certificates") }} </a>
        </li>
        <li>
          <a v-smooth-scroll href="#skills" class="nav-entry">{{ t("skills") }} </a>
        </li>
        <li>
          <a v-smooth-scroll href="#interests" class="nav-entry">{{ t("interests") }} </a>
        </li>
        <li>
          <a v-smooth-scroll href="#projects" class="nav-entry">{{ t("projects") }} </a>
        </li>
        <li>
          <nuxt-link v-smooth-scroll to="/blog" class="nav-entry">blog</nuxt-link>
        </li>
        <li>
          <a v-smooth-scroll href="#contact" class="nav-entry">{{ t("contact") }} </a>
        </li>
      </ClientOnly>
    </ul>
    <div><!-- placeholder for contact--></div>
  </nav>
</template>

<style lang="css" scoped>
.nav-app {
  @apply flex flex-col;
}

.nav-app__list {
  @apply fixed px-8 sm:px-0 pt-20 sm:pt-0 top-0 right-0 bottom-0 sm:relative translate-x-96 sm:translate-x-0 sm:backdrop-blur-none duration-500 ease-in-out dark:text-black sm:bg-white sm:dark:bg-transparent;
}

li {
  @apply py-2 sm:py-0;
}

.nav-entry {
  @apply px-8 md:py-1 my-4 w-full text-center text-black dark:text-gray-200 text-sm uppercase md:block sm:hover:bg-black sm:hover:text-white sm:dark:hover:bg-white sm:dark:hover:text-black;
}

.mobile-nav-toggle {
  @apply text-black dark:text-white;
}

.mobile-nav-toggle--open {
  @apply text-black dark:text-white;
}

#primary-navigation[data-visible="true"] {
  @apply translate-x-2 sm:translate-x-0;
}
</style>
