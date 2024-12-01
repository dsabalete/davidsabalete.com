// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      gtagId: "G-E0XXZ7KMLT"
    }
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "en"
      },
      title: "David Sabalete Rodríguez home site",
      meta: [
        { charset: "utf-8" },
        {
          hid: "description",
          name: "description",
          content:
            "This is the home site of David Sabalete Rodríguez, personal website and portfolio. I'm a software engineer and web developer."
        },
        {
          name: "keywords",
          content: "David Sabalete Rodríguez, software engineer, web developer, portfolio, home site"
        }
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { hid: "canonical", rel: "canonical", href: "https://www.davidsabalete.com" }
      ],
      script: [
        {
          src: "https://www.googletagmanager.com/gtag/js?id=G-E0XXZ7KMLT",
          async: true
        },
        {
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-E0XXZ7KMLT');
          `
        }
      ]
    }
  },
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
