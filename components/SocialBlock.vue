<script lang="ts" setup>
defineProps({
  size: {
    type: String,
    default: "sm"
  }
})

const socialLinks = [
  {
    name: "Linkedin",
    url: "https://linkedin.com/in/dsabalete",
    icon: "/icons/linkedin.svg",
    color: true
  },
  {
    name: "Github",
    url: "https://github.com/dsabalete",
    icon: "/icons/github.svg"
  },
  {
    name: "Email",
    url: "mailto:info@davidsabalete.com",
    icon: "/icons/email.svg"
  },
  {
    name: "Codepen",
    url: "https://codepen.io/dsabalete",
    icon: "/icons/codepen.svg"
  },
  {
    name: "Instagram",
    url: "https://instagram.com/dsabalete",
    icon: "/icons/instagram.svg",
    color: true
  }
]
</script>

<template>
  <div class="social-block flex my-10 justify-around">
    <a
      v-for="link in socialLinks"
      :key="link.name"
      :href="link.url"
      :target="link.url.startsWith('http') ? '_blank' : undefined"
      :rel="link.url.startsWith('http') ? 'noopener noreferrer' : undefined"
      :aria-label="link.name"
      class="social-block__link"
    >
      <img :src="link.icon" :alt="link.name" :class="[size, { 'dark:invert': !link.color }]" />
      <span class="social-block__name">{{ link.name }}</span>
    </a>
  </div>
</template>

<style lang="css" scoped>
.social-block__link {
  @apply flex flex-col items-center;
}
.social-block__name {
  @apply mt-2 text-center;
}
img {
  @apply hover:scale-150 duration-500;
}
.lg {
  @apply w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20;
}
.md {
  @apply w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16;
}
.sm {
  @apply w-4 h-4 sm:w-8 sm:h-8 md:w-12 md:h-12;
}
</style>
