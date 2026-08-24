// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config"
import tailwindcss from "@tailwindcss/vite"

export default defineNuxtConfig({
  compatibilityDate: "2025-11-09",
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: [
        "@vue/devtools-core",
        "@vue/devtools-kit",
        "vue3-smooth-scroll", // CJS
        "@unhead/schema-org/vue"
      ]
    }
  },
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      gtmId: process.env.NUXT_PUBLIC_GTM_ID || "",
      chatbotApiUrl: process.env.NUXT_PUBLIC_CHATBOT_API_URL || ""
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
      title: "David Sabalete | Senior Full Stack Developer | Vue.js Expert | Barcelona",
      titleTemplate: "%s | David Sabalete Rodríguez",
      meta: [
        { charset: "utf-8" },
        {
          key: "description",
          name: "description",
          content:
            "Senior Full Stack Developer in Barcelona specializing in Vue.js, Nuxt.js, Node.js, and AWS. Expert in building scalable web applications with modern JavaScript frameworks. Remote developer available for hire."
        },
        {
          name: "keywords",
          content:
            "Full Stack developer Barcelona, Vue.js expert, Nuxt.js developer, Senior full Stack developer, JavaScript developer, TypeScript, Node.js, AWS, remote developer, frontend developer, backend developer, web development Barcelona, software engineer, Vue.js specialist, JavaScript, TypeScript, Vue.js, Nuxt.js, Node.js, React, Frontend Development, Full-Stack Development, AWS, Cloud Computing, REST API, HTML5, CSS3, Unit Testing, CI/CD, Agile, Scrum, Software Architecture, Web Performance, Responsive Design, Git, DevOps, Technical Leadership, AI, Generative AI, LLM Integration, web application development, e-commerce development, responsive design, mobile-first development, SEO optimization, performance optimization, test automation, agile development, Scrum, Git, GitHub, CI/CD, DevOps, cloud computing, serverless, microservices, API development, REST API, GraphQL, MongoDB, PostgreSQL, MySQL, Docker, Terraform, infrastructure as code, Barcelona developer, Spain developer, European developer, remote work, freelance developer, contract developer, full-time developer, senior developer, lead developer, tech lead, software architect"
        },
        {
          name: "author",
          content: "David Sabalete Rodríguez"
        },
        {
          name: "robots",
          content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        },
        // Open Graph / Facebook
        {
          property: "og:type",
          content: "website"
        },
        {
          property: "og:url",
          content: "https://www.davidsabalete.com"
        },
        {
          property: "og:title",
          content: "David Sabalete | Senior Full Stack Developer | Vue.js Expert | Barcelona"
        },
        {
          property: "og:description",
          content:
            "Senior Full Stack Developer in Barcelona specializing in Vue.js, Nuxt.js, Node.js, and AWS. Expert in building scalable web applications with modern JavaScript frameworks."
        },
        {
          property: "og:image",
          content: "https://www.davidsabalete.com/web-profile.webp"
        },
        {
          property: "og:image:alt",
          content: "David Sabalete Rodríguez - Senior Full Stack Developer"
        },
        {
          property: "og:site_name",
          content: "David Sabalete Rodríguez Portfolio"
        },
        {
          property: "og:locale",
          content: "en_US"
        },
        // Twitter
        {
          name: "twitter:card",
          content: "summary_large_image"
        },
        {
          name: "twitter:url",
          content: "https://www.davidsabalete.com"
        },
        {
          name: "twitter:title",
          content: "David Sabalete | Senior Full Stack Developer | Vue.js Expert | Barcelona"
        },
        {
          name: "twitter:description",
          content:
            "Senior Full Stack Developer in Barcelona specializing in Vue.js, Nuxt.js, Node.js, and AWS. Expert in building scalable web applications."
        },
        {
          name: "twitter:image",
          content: "https://www.davidsabalete.com/web-profile.webp"
        },
        {
          name: "twitter:image:alt",
          content: "David Sabalete Rodríguez - Senior Full Stack Developer"
        },
        // LinkedIn specific
        {
          property: "linkedin:owner",
          content: "https://www.linkedin.com/in/dsabalete"
        },
        // Geographic/Location
        {
          name: "geo.region",
          content: "ES-CT"
        },
        {
          name: "geo.placename",
          content: "Barcelona, Spain"
        },
        {
          name: "geo.position",
          content: "41.3851;2.1734"
        },
        // Professional
        {
          name: "professional-title",
          content: "Senior Full Stack Developer"
        },
        {
          name: "specialization",
          content: "Vue.js, Nuxt.js, JavaScript, TypeScript, Node.js, AWS"
        },
        {
          name: "availability",
          content: "Available for remote work"
        },
        // Technical
        {
          name: "theme-color",
          content: "#000000"
        },
        {
          name: "msapplication-TileColor",
          content: "#000000"
        }
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
        { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
        { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },

        { rel: "alternate", hreflang: "en", href: "https://www.davidsabalete.com" },
        { rel: "alternate", hreflang: "es", href: "https://www.davidsabalete.com/es" },
        { rel: "alternate", hreflang: "ca", href: "https://www.davidsabalete.com/ca" },
        { rel: "alternate", hreflang: "de", href: "https://www.davidsabalete.com/de" },
        { rel: "alternate", hreflang: "fr", href: "https://www.davidsabalete.com/fr" },
        { rel: "alternate", hreflang: "x-default", href: "https://www.davidsabalete.com" }
      ]
    }
  },
  css: ["@/assets/css/main.css"],
  modules: [
    "@nuxtjs/i18n",
    "@nuxt/eslint",
    "floating-vue/nuxt",
    "@nuxt/content",
    "@nuxtjs/seo",
    "@nuxtjs/color-mode",
    "@nuxt/image"
  ],
  colorMode: {
    classSuffix: ""
  },
  i18n: {
    locales: [
      { code: "en", language: "en-US", name: "English", file: "en.json" },
      { code: "es", language: "es-ES", name: "Español", file: "es.json" },
      { code: "ca", language: "ca-ES", name: "Català", file: "ca.json" },
      { code: "de", language: "de-DE", name: "Deutsch", file: "de.json" },
      { code: "fr", language: "fr-FR", name: "Français", file: "fr.json" }
    ],
    defaultLocale: "en",
    langDir: "locales",
    experimental: {
      preload: true
    }
  },
  robots: {
    disallow: ["/_nuxt/", "/api/"],
    sitemap: "https://www.davidsabalete.com/sitemap.xml"
  },
  sitemap: false,
  ogImage: {
    zeroRuntime: true
  },
  content: {},
  nitro: {
    preset: "netlify",
    prerender: {
      crawlLinks: true,
      routes: ["/sitemap.xml"]
    }
  },
  image: {
    provider: "netlify"
  }
})
