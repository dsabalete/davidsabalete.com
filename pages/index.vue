<template>
    <div class="page-container">
        <header>
            <h1
                class="hidden text-left md:block text-7xl uppercase font-extrabold text-blue-900"
            >
                <span class="text-black">David</span> Sabalete Rodríguez
            </h1>
            <p class="text-center md:text-left">
                <a
                    href="mailto:dsabalete@gmail.com"
                    class="font-normal text-blue-900 uppercase"
                    >dsabalete@gmail.com</a
                >
            </p>
        </header>
        <main>
            <About />
            <Experience />
            <Education />
            <Skills />
            <Interests />
            <Projects />
        </main>
    </div>
</template>

<script>
export default {
    name: "IndexPage"
}
</script>

<style lang="postcss">
.page-container {
    @apply md:ml-64 md:mt-32;
}
header {
    @apply m-8;
}
section {
    @apply border-b border-gray-300 py-10 px-8 p-60 md:min-h-screen;
}
section h2 {
    @apply text-4xl font-bold text-blue-900 uppercase py-8;
}
.resume-item {
    @apply flex flex-col md:flex-row justify-between mb-8;
}
h3 {
    @apply text-2xl font-bold text-blue-900 py-6;
}
.subheading {
    @apply uppercase text-lg font-semibold mb-2;
}
.resume-date {
    @apply text-sm text-blue-900 whitespace-nowrap p-6;
}
</style>
