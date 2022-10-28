<template>
    <div class="border-b border-gray-300 py-10 px-4 sm:px-8 sm:min-h-screen">
        <h2
            class="font-title text-4xl font-bold text-blue-900 uppercase pt-8 pb-16"
        >
            <slot name="title" />
        </h2>
        <slot />
    </div>
</template>
