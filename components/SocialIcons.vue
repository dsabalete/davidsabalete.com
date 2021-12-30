<template>
    <div class="social-icons flex my-10 justify-around">
        <a
            href="https://linkedin.com/in/dsabalete"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Linkedin"
        >
            <img src="/icons/linkedin.svg" alt="LinkedIn" />
        </a>

        <a
            href="https://github.com/dsabalete"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github"
        >
            <img src="/icons/github.svg" alt="Github" />
        </a>

        <a href="mailto:dsabalete@gmail.com" aria-label="Email">
            <img src="/icons/email.svg" alt="Email" />
        </a>

        <a
            href="https://twitter.com/dsabalete"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
        >
            <img src="/icons/twitter.svg" alt="Twitter" />
        </a>

        <a
            href="https://blog.davidsabalete.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Blogger"
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
