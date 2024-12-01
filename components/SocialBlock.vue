<script lang="ts" setup>
defineProps({
  size: {
    type: String,
    default: "sm"
  }
})
</script>

<template>
  <div class="social-icons flex my-10 justify-around">
    <a href="https://linkedin.com/in/dsabalete" target="_blank" rel="noopener noreferrer" aria-label="Linkedin">
      <img src="/icons/linkedin.svg" alt="LinkedIn" :class="size" />
    </a>

    <a href="https://github.com/dsabalete" target="_blank" rel="noopener noreferrer" aria-label="Github">
      <img src="/icons/github.svg" alt="Github" :class="size" />
    </a>

    <a href="mailto:dsabalete@gmail.com" aria-label="Email">
      <img src="/icons/email.svg" alt="Email" :class="size" />
    </a>

    <!-- <a href="https://twitter.com/dsabalete" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
      <img src="/icons/twitter.svg" alt="Twitter" :class="size" />
    </a> -->

    <!-- <a href="https://blog.davidsabalete.com" target="_blank" rel="noopener noreferrer" aria-label="Blogger">
      <img src="/icons/blogger.svg" alt="Blogger" :class="size" />
    </a> -->
  </div>
</template>

<style lang="postcss" scoped>
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
