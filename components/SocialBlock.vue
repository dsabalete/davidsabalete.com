<script lang="ts" setup>
const { copiedLink, copyEmailToClipboard } = useCopyEmail()

const handleEmailClick = async (url: string, name: string) => {
  if (name === "Email") {
    const email = url.replace("mailto:", "")
    await copyEmailToClipboard(email, name)
  }
}

interface SocialLink {
  name: string
  url: string
  icon: string
  color?: boolean
}

const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/dsabalete",
    icon: "/icons/linkedin.svg",
    color: true
  },
  {
    name: "GitHub",
    url: "https://github.com/dsabalete",
    icon: "/icons/github.svg"
  },
  {
    name: "Email",
    url: "mailto:info@davidsabalete.com",
    icon: "/icons/email.svg"
  }
]
</script>

<template>
  <div class="flex flex-wrap justify-center gap-3">
    <a
      v-for="link in socialLinks"
      :key="link.name"
      :href="link.url"
      :target="link.url.startsWith('http') ? '_blank' : undefined"
      :rel="link.url.startsWith('http') ? 'noopener noreferrer' : undefined"
      :aria-label="link.name"
      class="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-105 transition-all duration-300"
      @click="link.name === 'Email' ? ($event.preventDefault(), handleEmailClick(link.url, link.name)) : null"
    >
      <img :src="link.icon" :alt="link.name" class="w-5 h-5" :class="{ 'dark:invert': !link.color }" />
      <span class="text-sm font-medium text-gray-700 dark:text-gray-300">
        {{ copiedLink === link.name ? "Copied!" : link.name }}
      </span>
    </a>
  </div>
</template>
