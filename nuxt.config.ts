// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-11-09",

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
      title: "David Sabalete | Senior Fullstack Developer | Vue.js Expert | Barcelona",
      titleTemplate: "%s | David Sabalete Rodríguez",
      meta: [
        { charset: "utf-8" },
        {
          key: "description",
          name: "description",
          content: "Senior Fullstack Developer in Barcelona specializing in Vue.js, Nuxt.js, Node.js, and AWS. Expert in building scalable web applications with modern JavaScript frameworks. Remote developer available for hire."
        },
        {
          name: "keywords",
          content: "fullstack developer Barcelona, Vue.js expert, Nuxt.js developer, senior web developer, JavaScript developer, TypeScript, Node.js, AWS, remote developer, frontend developer, backend developer, web development Barcelona, software engineer, Vue.js specialist, full-stack JavaScript, React developer, Angular developer, PHP developer, Drupal developer, WordPress developer, web application development, e-commerce development, responsive design, mobile-first development, SEO optimization, performance optimization, test automation, agile development, Scrum, Git, GitHub, CI/CD, DevOps, cloud computing, serverless, microservices, API development, REST API, GraphQL, MongoDB, PostgreSQL, MySQL, Docker, Kubernetes, Terraform, infrastructure as code, Barcelona developer, Spain developer, European developer, remote work, freelance developer, contract developer, full-time developer, senior developer, lead developer, tech lead, software architect"
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
          content: "David Sabalete | Senior Fullstack Developer | Vue.js Expert | Barcelona"
        },
        {
          property: "og:description",
          content: "Senior Fullstack Developer in Barcelona specializing in Vue.js, Nuxt.js, Node.js, and AWS. Expert in building scalable web applications with modern JavaScript frameworks."
        },
        {
          property: "og:image",
          content: "https://www.davidsabalete.com/assets/images/profile.jpg"
        },
        {
          property: "og:image:alt",
          content: "David Sabalete Rodríguez - Senior Fullstack Developer"
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
          content: "David Sabalete | Senior Fullstack Developer | Vue.js Expert | Barcelona"
        },
        {
          name: "twitter:description",
          content: "Senior Fullstack Developer in Barcelona specializing in Vue.js, Nuxt.js, Node.js, and AWS. Expert in building scalable web applications."
        },
        {
          name: "twitter:image",
          content: "https://www.davidsabalete.com/assets/images/profile.jpg"
        },
        {
          name: "twitter:image:alt",
          content: "David Sabalete Rodríguez - Senior Fullstack Developer"
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
          content: "Senior Fullstack Developer"
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
        { key: "canonical", rel: "canonical", href: "https://www.davidsabalete.com" },
        { rel: "alternate", hreflang: "en", href: "https://www.davidsabalete.com" },
        { rel: "alternate", hreflang: "es", href: "https://www.davidsabalete.com/es" },
        { rel: "alternate", hreflang: "ca", href: "https://www.davidsabalete.com/ca" },
        { rel: "alternate", hreflang: "x-default", href: "https://www.davidsabalete.com" }
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
        },
        // Structured Data
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "David Sabalete Rodríguez",
            "alternateName": "David Sabalete",
            "url": "https://www.davidsabalete.com",
            "image": "https://www.davidsabalete.com/assets/images/profile.jpg",
            "jobTitle": "Senior Fullstack Developer",
            "description": "Senior Fullstack Developer in Barcelona specializing in Vue.js, Nuxt.js, Node.js, and AWS. Expert in building scalable web applications with modern JavaScript frameworks.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Barcelona",
              "addressRegion": "Catalonia",
              "addressCountry": "Spain"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 41.3851,
              "longitude": 2.1734
            },
            "sameAs": [
              "https://www.linkedin.com/in/dsabalete",
              "https://github.com/dsabalete",
              "https://codepen.io/dsabalete",
              "https://instagram.com/dsabalete"
            ],
            "knowsAbout": [
              "Vue.js", "Nuxt.js", "JavaScript", "TypeScript", "Node.js", "AWS", "React", "Angular", "PHP", "Drupal", "WordPress", "Docker", "Kubernetes", "Terraform", "Git", "GitHub", "CI/CD", "DevOps", "MongoDB", "PostgreSQL", "MySQL", "REST API", "GraphQL", "Agile Development", "Scrum", "Test Automation", "SEO", "Performance Optimization"
            ],
            "offers": {
              "@type": "Offer",
              "description": "Available for remote fullstack development projects",
              "availability": "https://schema.org/InStock"
            }
          })
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
    "@nuxtjs/seo",
    "@nuxtjs/color-mode"
  ],
  colorMode: {
    classSuffix: ""
  },
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
