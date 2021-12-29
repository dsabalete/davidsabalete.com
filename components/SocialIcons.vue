<template>
    <div class="social-icons flex my-10 justify-around">
        <a
            href="https://linkedin.com/in/dsabalete"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Linkedin"
            v-tooltip.bottom="{
                content: 'Contact me on LinkedIn!',
                delay: 500
            }"
        >
            <img src="/icons/linkedin.svg" alt="LinkedIn" />
        </a>

        <a
            href="https://github.com/dsabalete"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github"
            v-tooltip.bottom="{
                content: 'Take a look at my repos in Github',
                delay: 500
            }"
        >
            <img src="/icons/github.svg" alt="Github" />
        </a>

        <a
            href="https://twitter.com/dsabalete"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            v-tooltip.bottom="{ content: 'Follow me on Twitter', delay: 500 }"
        >
            <img src="/icons/twitter.svg" alt="Twitter" />
        </a>

        <a
            href="https://blog.davidsabalete.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Blogger"
            v-tooltip.bottom="{
                content: 'Read my recent post on Blogger',
                delay: 500
            }"
        >
            <img src="/icons/blogger.svg" alt="Blogger" />
        </a>
    </div>
</template>

<script>
export default {}
</script>

<style lang="postcss" scoped>
img {
    @apply hover:scale-150 duration-500;
}
</style>
