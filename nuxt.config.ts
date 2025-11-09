// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-11-09",
  compatibilityVersion: 4,
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      gtagId: "G-E0XXZ7KMLT"
    }
  },
  site: {
    url:
      process.env.NUXT_PUBLIC_SITE_URL ||
      (process.env.NODE_ENV === "production" ? "https://www.davidsabalete.com" : "http://localhost:3000"),
    name: "David Sabalete Rodríguez home site"
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
          key: "description",
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
        { key: "canonical", rel: "canonical", href: "https://www.davidsabalete.com" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Roboto&family=Josefin+Sans&family=Audiowide&family=Lato:wght@100;300&family=Raleway:ital,wght@0,100;0,400;1,100&display=swap"
        }
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
    "@nuxt/content"
  ],
  i18n: {
    locales: [
      { code: "en", language: "en-US", name: "English", file: "en.json" },
      { code: "es", language: "es-ES", name: "Español", file: "es.json" },
      { code: "ca", language: "ca-ES", name: "Català", file: "ca.json" }
    ],
    defaultLocale: "en",
    langDir: "locales"
  },
  content: {},
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/sitemap.xml"]
    }
  }
})