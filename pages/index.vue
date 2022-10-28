<template>
    <div class="page-container sm:ml-64 sm:mt-16">
        <header class="sm:m-8">
            <h1
                class="hidden font-sans text-left md:block text-7xl uppercase font-extrabold text-blue-900"
            >
                <span class="text-black">David</span> Sabalete Rodríguez
            </h1>
        </header>
        <main>
            <About />
            <Experience />
            <Education />
            <Skills />
            <Interests />
            <Projects />
            <Contact />
        </main>
    </div>
</template>

<script>
export default {
    name: "IndexPage"
}
</script>

<style lang="postcss">
.resume-item {
    @apply flex flex-col md:flex-row justify-between mb-8;
}
h3 {
    @apply text-2xl font-bold text-blue-900 py-6;
}
.subheading {
    @apply uppercase text-lg font-semibold mb-2 font-serif;
}
.resume-date {
    @apply text-sm text-blue-900 whitespace-nowrap p-6;
}
p {
    @apply text-justify my-4;
}
</style>
