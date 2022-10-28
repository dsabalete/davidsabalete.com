<template>
    <SectionApp class="flex flex-col pt-0 sm:pt-8">
        <div>
            <p>
                {{ $t("about_text_1") }}
            </p>
            <p>
                {{ $t("about_text_2") }}
            </p>
        </div>

        <a
            href="#contact"
            v-scroll-to="'#contact'"
            class="w-full mt-20 sm:mt-32 bg-blue-100 text-blue-900 px-1 py-2 text-center uppercase font-bold tracking-wide text-xl rounded-xl"
        >
            {{ $t("about_contact_me") }}</a
        >
    </SectionApp>
</template>
