<template>
    <div class="bg-blue-100">
        <nuxt-link
            to="/"
            class="mt-2 text-2xl uppercase font-bold text-blue-900 sticky top-2 left-0"
        >
            <img
                v-tooltip.right="`Go back home`"
                src="/icons/home.svg"
                alt="Home"
                class="h-8 ml-2"
            />
        </nuxt-link>
        <div
            class="sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto p-4"
        >
            <nuxt />
        </div>
    </div>
</template>
