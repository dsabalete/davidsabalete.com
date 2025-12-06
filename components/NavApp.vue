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
    class="navbar flex flex-col justify-center md:items-center z-20 md:w-64 md:h-screen md:fixed items-center"
  >
    <button
      class="mobile-nav-toggle block fixed z-30 top-5 right-4 sm:hidden rounded-md p-1 w-8 aspect-square border-0 bg-center bg-no-repeat outline-none"
      :class="{ 'mobile-nav-toggle--open': isOpen, 'bg-white': !isOpen }"
      aria-controls="primary-navigation"
      @click="toggleMobileNav"
    >
      <IconHamburger v-if="!expanded" />
      <IconClose v-else />
      <span class="sr-only" :aria-expanded="expanded">Menu</span>
    </button>
    <a href="#"></a>
    <ul
      id="primary-navigation"
      :data-visible="isOpen"
      :class="`fixed px-8 sm:px-0 pt-20 sm:pt-0 top-0 right-0 bottom-0
                sm:relative translate-x-96 sm:translate-x-0
                sm:backdrop-blur-none duration-500 ease-in-out`"
      style="backdrop-filter: blur(40px)"
      @click="close"
    >
      <ClientOnly>
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
      <li class="flex justify-center">
        <div v-for="loc in locales" :key="loc.code">
          <nuxt-link :to="`${switchLocalePath(loc.code)}`">
            <img :src="`/icons/flag-${loc.code}.svg`" :alt="loc.name" />
          </nuxt-link>
        </div>
      </li>
    </ul>
  </nav>
</template>

<style lang="css" scoped>
li {
  @apply py-2 sm:py-0;
}

.nav-entry {
  @apply px-8 md:py-1 my-4 w-full text-center text-black text-sm uppercase md:block sm:hover:bg-black sm:hover:text-white;
}

.mobile-nav-toggle {
  @apply text-black;
}

.mobile-nav-toggle--open {
  @apply text-black;
}

#primary-navigation[data-visible="true"] {
  @apply translate-x-2 sm:translate-x-0;
}
</style>
