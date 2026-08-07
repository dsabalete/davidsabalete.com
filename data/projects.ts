export interface Project {
  image: string
  alt: string
  title: string
  description: string
  repo: string
  live: string
  tags: string[]
  metrics?: {
    performance: number
    accessibility: number
  }
}

export const projects: Project[] = [
  {
    image: "/chatbot.webp",
    alt: "AI Portfolio Assistant chatbot interface",
    title: "AI Portfolio Assistant",
    description:
      "An AI chatbot assistant built into this portfolio that answers questions about my experience, skills, projects and availability in multiple languages, with topic matching and analytics.",
    repo: "https://github.com/dsabalete/chatbot",
    live: "",
    tags: ["nuxt", "vue", "ai", "typescript"],
    metrics: { performance: 100, accessibility: 100 }
  },
  {
    image: "/alex-sabalete.webp",
    alt: "Alex Sabalete video portfolio homepage",
    title: "Alex Sabalete portfolio",
    description:
      "Video portfolio of Alex Sabalete, a young audiovisual director, editor and DOP. Built with Nuxt 3, TailwindCSS and Supabase. It allows users to watch his work, get in touch with him and get the latest news.",
    repo: "",
    live: "https://alexsabalete.site/",
    tags: ["nuxt", "video"],
    metrics: { performance: 100, accessibility: 100 }
  },
  {
    image: "/foto-uploader.webp",
    alt: "Foto Uploader homepage picture",
    title: "Foto Uploader",
    description:
      "A web application for uploading photos to a cloud storage, built with Vanilla JS, CSS and Netlify functions",
    repo: "https://github.com/dsabalete/foto-uploader",
    live: "https://foto-uploader.netlify.app/",
    tags: ["javascript", "netlify"],
    metrics: { performance: 100, accessibility: 100 }
  },
  {
    image: "/gym_tracker.webp",
    alt: "Gym Tracker homepage picture",
    title: "Gym Tracker",
    description:
      "A modern web application for tracking gym workouts, built with Nuxt 4, Vue 3, TailwindCSS, and Firebase",
    repo: "https://github.com/dsabalete/gym-app",
    live: "https://gym.davidsabalete.com/login/index.html",
    tags: ["nuxt", "tailwind", "firebase"],
    metrics: { performance: 98, accessibility: 100 }
  },
  {
    image: "/tercerespai.webp",
    alt: "Tercer Espai homepage picture",
    title: "Tercer Espai website",
    description:
      "Tercer Espai is a web built with Nuxt.js, Tailwind and Supabase. It allows users to know about the events organized by the organization Tercer Espai, get in touch with the organization and get the latest news.",
    repo: "",
    live: "https://tercerespai.org/",
    tags: ["nuxt", "tailwind", "supabase"],
    metrics: { performance: 99, accessibility: 94 }
  },
  {
    image: "/system-monitor.webp",
    alt: "System Monitor homepage picture",
    title: "System Monitor",
    description:
      "System Monitor is a web application for monitoring system resources, built with Node, Express and vanilla javascript.",
    repo: "https://github.com/dsabalete/system-monitor",
    live: "",
    tags: ["node", "express", "vanillajs"]
  },
  {
    image: "/goat-notes.webp",
    alt: "Goat Notes taking app with AI",
    title: "Goat Notes taking app with AI",
    description:
      "GOAT Notes is a modern note-taking application built with Next.js, Supabase, and Prisma. It allows users to create, edit, delete, and search notes, with additional features like AI-powered insights and a responsive design.",
    repo: "https://github.com/dsabalete/fcc-goat-notes",
    live: "https://fcc-goat-notes.vercel.app/",
    tags: ["next", "supabase", "prisma"],
    metrics: { performance: 92, accessibility: 95 }
  },
  {
    image: "/qrcode.webp",
    alt: "QR Code Generator picture",
    title: "QR Code Generator",
    description:
      "Webapp tool for generating QR Codes from valid URLs. Static Astro website with Cloudfare Worker to generate the image.",
    repo: "https://github.com/dsabalete/qr-code",
    live: "https://qr-code-e3h.pages.dev/",
    tags: ["astro", "cloudflare"],
    metrics: { performance: 99, accessibility: 100 }
  },
  {
    image: "/space-tourism.webp",
    alt: "Space tourism homepage picture",
    title: "Space tourism",
    description:
      "A website for a space tourism company. It is a static website with responsive design, plain CSS and a bit of vanilla javascript.",
    repo: "https://github.com/dsabalete/space-tourism",
    live: "https://space.davidsabalete.com",
    tags: ["html", "css", "javascript"]
  },
  {
    image: "/creualta.webp",
    alt: "Creualta homepage picture",
    title: "Creu Alta website",
    description: `Creu Alta Sabadell Basket website. It is running on Drupal as CMS an it has a VueJS app to register players during summer and christmas campus.`,
    repo: "",
    live: "https://www.creualtabasquet.cat",
    tags: ["drupal", "vue"]
  },
  {
    image: "/kiloday.webp",
    alt: "Kiloday homepage picture",
    title: "Kiloday calculator",
    description: "Alternative birthday calculator app made with Vue, Vite and Pinia",
    repo: "https://github.com/dsabalete/kiloday",
    live: "https://kiloday.davidsabalete.com",
    tags: ["vue", "vite", "pinia"]
  },
  {
    image: "/1rm.webp",
    alt: "My 1 RM homepage picture",
    title: "My 1 RM website",
    description: `App that calculates the 1RM of any training session. Made with Vuejs and hosted in Netlify.`,
    repo: "https://github.com/dsabalete/my-1-rm",
    live: "https://my-1-rm.netlify.app/",
    tags: ["nuxt", "netlify"]
  }
]
