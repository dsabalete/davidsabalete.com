<script lang="ts" setup>
import { defineAsyncComponent } from "vue"

const EducationSection = defineAsyncComponent(() => import("@/components/EducationSection.vue"))
const CertificatesSection = defineAsyncComponent(() => import("@/components/CertificatesSection.vue"))
const SkillsSection = defineAsyncComponent(() => import("@/components/SkillsSection.vue"))
const InterestsSection = defineAsyncComponent(() => import("@/components/InterestsSection.vue"))
const ProjectsSection = defineAsyncComponent(() => import("@/components/ProjectsSection.vue"))
const ContactSection = defineAsyncComponent(() => import("@/components/ContactSection.vue"))

useSeoMeta({
  title: "David Sabalete | Senior Full Stack Developer | Vue.js Expert | Barcelona",
  description:
    "Senior Full Stack Developer in Barcelona specializing in Vue.js, Nuxt.js, Node.js, and AWS. Expert in building scalable web applications with modern JavaScript frameworks. Remote developer available for hire.",
  author: "David Sabalete Rodríguez",
  ogTitle: "David Sabalete | Senior Full Stack Developer | Vue.js Expert | Barcelona",
  ogDescription:
    "Senior Full Stack Developer in Barcelona specializing in Vue.js, Nuxt.js, Node.js, and AWS. Expert in building scalable web applications with modern JavaScript frameworks.",
  ogImage: "/profile.jpg",
  ogUrl: "https://www.davidsabalete.com",
  ogType: "website",
  twitterCard: "summary_large_image",
  twitterTitle: "David Sabalete | Senior Full Stack Developer | Vue.js Expert | Barcelona",
  twitterDescription:
    "Senior Full Stack Developer in Barcelona specializing in Vue.js, Nuxt.js, Node.js, and AWS. Expert in building scalable web applications.",
  twitterImage: "/profile.jpg"
})

useHead({
  link: [{ rel: "canonical", href: "https://www.davidsabalete.com" }]
})

// Structured data for the home page
useSchemaOrg([
  definePerson({
    name: "David Sabalete Rodríguez",
    alternateName: "David Sabalete",
    url: "https://www.davidsabalete.com",
    image: "https://www.davidsabalete.com/profile.jpg",
    jobTitle: "Senior Full Stack Developer",
    description:
      "Senior Full Stack Developer in Barcelona specializing in Vue.js, Nuxt.js, Node.js, and AWS. Expert in building scalable web applications with modern JavaScript frameworks.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Barcelona",
      addressRegion: "Catalonia",
      addressCountry: "Spain"
    },
    sameAs: [
      "https://www.linkedin.com/in/dsabalete",
      "https://github.com/dsabalete",
      "https://codepen.io/dsabalete",
      "https://instagram.com/dsabalete"
    ],
    knowsAbout: [
      "Vue.js",
      "Nuxt.js",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "AWS",
      "React",
      "Svelte",
      "PHP",
      "Drupal",
      "Docker",
      "Terraform",
      "Git",
      "GitHub",
      "CI/CD",
      "DevOps",
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "REST API",
      "GraphQL",
      "Agile Development",
      "Scrum",
      "Test Automation",
      "SEO",
      "Performance Optimization"
    ]
  }),
  defineWebPage({
    name: "David Sabalete Rodríguez - Portfolio",
    description:
      "Senior Full Stack Developer portfolio showcasing expertise in Vue.js, Nuxt.js, Node.js, and AWS development.",
    url: "https://www.davidsabalete.com",
    inLanguage: "en",
    isPartOf: {
      "@type": "WebSite",
      name: "David Sabalete Rodríguez Portfolio",
      url: "https://www.davidsabalete.com"
    }
  })
])

definePageMeta({
  layout: "default"
})
</script>

<template>
  <div class="page-index sm:mx-auto sm:mt-16 md:ml-40 xl:ml-64">
    <ProfileHeader />
    <main role="main" aria-label="Main content">
      <section id="about" aria-labelledby="about-heading">
        <AboutSection />
      </section>
      <section id="experience" aria-labelledby="experience-heading">
        <ExperienceSection />
      </section>
      <section id="education" aria-labelledby="education-heading">
        <EducationSection />
      </section>
      <section id="certificates" aria-labelledby="certificates-heading">
        <CertificatesSection />
      </section>
      <section id="skills" aria-labelledby="skills-heading">
        <SkillsSection />
      </section>
      <section id="interests" aria-labelledby="interests-heading">
        <InterestsSection />
      </section>
      <section id="projects" aria-labelledby="projects-heading">
        <ProjectsSection />
      </section>
      <section id="contact" aria-labelledby="contact-heading">
        <ContactSection />
      </section>
    </main>
  </div>
</template>
