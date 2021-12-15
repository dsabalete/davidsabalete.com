<template>
    <main class="md:ml-60 md:mt-32">
        <h1
            class="hidden md:block text-6xl uppercase font-bold text-blue-900 pl-8"
        >
            <span class="text-black">David</span> Sabalete Rodríguez
        </h1>
        <h2 class="text-center md:text-left pl-8">
            <a
                href="mailto:dsabalete@gmail.com"
                class="font-extralight text-blue-900"
                >dsabalete@gmail.com</a
            >
        </h2>
        <About />
        <Experience />
        <Education />
        <Skills />
        <Interests />
        <Projects />
    </main>
</template>

<script>
export default {
    name: "IndexPage"
}
</script>

<style lang="postcss">
section {
    @apply border-b border-gray-300 py-10 pl-8 p-60;
}

section h2 {
    @apply text-4xl font-bold text-blue-900 uppercase py-8;
}
</style>
