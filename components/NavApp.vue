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
  <nav id="sideNav" class="navbar flex flex-col justify-start z-20 md:w-64 md:h-screen md:fixed items-center">
    <button
      class="mobile-nav-toggle block fixed z-30 right-0 m-4 sm:hidden bg-transparent w-6 aspect-square border-0 bg-center bg-no-repeat outline-none"
      :class="{ 'mobile-nav-toggle--open': isOpen }"
      aria-controls="primary-navigation"
      @click="toggleMobileNav"
    >
      <span class="sr-only" :aria-expanded="expanded">Menu</span>
    </button>
    <a href="#">
      <div class="md:w-60 self-center">
        <div
          class="star-name fixed top-0 w-full text-left uppercase font-bold tracking-wide text-xl bg-green-900 text-white p-4 md:hidden"
        >
          David Sabalete
        </div>
        <div class="mt-20">
          <img
            class="profile-image rounded-lg mx-auto my-4 w-1/2"
            alt="Image of David"
            src="../assets/images/profile.jpg"
          />
        </div>
      </div>
    </a>
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
  @apply px-8 md:py-1 my-4 w-full text-center text-black text-xl uppercase md:block sm:hover:bg-green-100 sm:hover:text-green-900;
}

.mobile-nav-toggle {
  background-image: url(@/assets/images/icons/icon-hamburger.svg);
}

.mobile-nav-toggle--open {
  background-image: url(@/assets/images/icons/icon-close.svg);
}

#primary-navigation[data-visible="true"] {
  @apply translate-x-2 sm:translate-x-0;
}
</style>
