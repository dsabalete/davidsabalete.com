<script setup lang="ts">
const { t } = useI18n()
const { trackEvent } = useAnalytics()
const { emailCopied, copyEmailToClipboard } = useCopyEmail()

const handleContactClick = () => {
  trackEvent("contact_button_click", {
    button_location: "header",
    button_text: t("header_contact")
  })
}

const handleDownloadCvClick = () => {
  trackEvent("download_cv_click", {
    button_location: "header",
    button_text: t("header_download_cv")
  })
}

const handleCopyEmailClick = async () => {
  await copyEmailToClipboard()
}
</script>

<template>
  <header class="flex flex-col md:flex-row gap-x-8 mt-16 m-8" role="banner" aria-label="Profile header">
    <div class="flex flex-row gap-4 items-center mb-6 md:hidden">
      <div class="shrink-0">
        <nuxt-img
          class="profile-image rounded-lg w-40 h-auto object-cover aspect-3/4 shadow-2xl"
          alt="David Sabalete Rodríguez - Senior Full Stack Developer in Barcelona"
          src="/web-profile.webp"
          width="150"
          height="200"
          sizes="200px"
          loading="eager"
          decoding="async"
        />
      </div>
      <h1 class="font-sans text-left text-2xl uppercase font-extrabold text-black dark:text-white" itemprop="name">
        David Sabalete Rodríguez
      </h1>
    </div>

    <div class="shrink-0 hidden md:block">
      <nuxt-img
        class="profile-image rounded-lg w-24 md:w-40 h-auto object-cover aspect-[3/4] shadow-2xl"
        alt="David Sabalete Rodríguez - Senior Full Stack Developer in Barcelona"
        src="/web-profile.webp"
        width="160"
        height="213"
        sizes="213px"
        loading="eager"
        decoding="async"
      />
    </div>

    <div class="flex flex-col justify-center">
      <h1
        class="hidden md:block self-center font-sans text-left text-2xl md:text-4xl uppercase font-extrabold text-black dark:text-white"
        itemprop="name"
      >
        David Sabalete Rodríguez
      </h1>

      <h2 class="self-center text-xl font-semibold text-black dark:text-gray-200 mt-4 mb-2" itemprop="jobTitle">
        Senior Full Stack Developer
      </h2>

      <p class="text-base text-gray-600 dark:text-gray-400 my-5 max-w-2xl leading-relaxed">
        {{ t("header_value_proposition") }}
      </p>

      <p
        class="text-black dark:text-gray-400 text-sm"
        itemprop="address"
        itemscope
        itemtype="https://schema.org/PostalAddress"
      >
        <span class="font-semibold">{{ t("header_location_label") }} </span>
        <span itemprop="addressLocality"> Barcelona</span>,
        <span itemprop="addressCountry">{{ t("header_location_country") }}</span>
      </p>
      <div class="text-sm text-green-700 dark:text-green-300">{{ t("header_available") }}</div>
      <div class="mt-3 flex flex-wrap gap-2" aria-label="Quick contact and social links">
        <a
          href="#"
          class="inline-flex items-center px-3 py-1 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
          aria-label="Email David Sabalete"
          @click.prevent="handleCopyEmailClick"
        >
          <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          {{ emailCopied ? "Copied!" : t("header_hire_me") }}
        </a>
        <a
          v-smooth-scroll
          href="#contact"
          class="inline-flex items-center px-3 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          aria-label="Go to contact section"
          @click="handleContactClick"
        >
          {{ t("header_contact") }}
        </a>
        <a
          href="/cv.pdf"
          class="inline-flex items-center px-3 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download CV PDF"
          @click="handleDownloadCvClick"
        >
          {{ t("header_download_cv") }}
        </a>
      </div>
    </div>
  </header>
</template>
