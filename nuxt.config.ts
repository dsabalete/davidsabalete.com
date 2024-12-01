// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["@/assets/css/main.css"],
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    "@nuxt/eslint",
    "floating-vue/nuxt",
    "@nuxt/content",
    "@nuxtjs/google-fonts"
  ],
  i18n: {
    locales: [
      { code: "en", iso: "en-US", name: "English", file: "en.json" },
      { code: "es", iso: "es-ES", name: "Español", file: "es.json" },
      { code: "ca", iso: "ca-ES", name: "Català", file: "ca.json" }
    ],
    defaultLocale: "en",
    lazy: true,
    langDir: "locales"
  },
  content: {},
  googleFonts: {
    families: {
      Roboto: true,
      "Josefin+Sans": true,
      Audiowide: true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100]
      }
    },
    display: "swap"
  }
})
