<template>
    <div class="page-container">
        <header>
            <h1><span class="text-black">David</span> Sabalete Rodríguez</h1>
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
.page-container {
    @apply md:ml-64 md:mt-0;
}
header {
    @apply sm:m-8;
}
header h1 {
    @apply hidden font-sans text-left md:block text-7xl uppercase font-extrabold text-blue-900;
}
section {
    @apply border-b border-gray-300 py-10 px-4 sm:px-8 md:min-h-screen;
}
section h2 {
    @apply font-title text-4xl font-bold text-blue-900 uppercase py-8;
}
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
