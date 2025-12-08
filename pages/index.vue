<script lang="ts" setup>
// SEO metadata for the home page
useSeoMeta({
  title: "David Sabalete | Senior Fullstack Developer | Vue.js Expert | Barcelona",
  description:
    "Senior Fullstack Developer in Barcelona specializing in Vue.js, Nuxt.js, Node.js, and AWS. Expert in building scalable web applications with modern JavaScript frameworks. Remote developer available for hire.",
  keywords:
    "fullstack developer Barcelona, Vue.js expert, Nuxt.js developer, senior web developer, JavaScript developer, TypeScript, Node.js, AWS, remote developer, frontend developer, backend developer, web development Barcelona, software engineer, Vue.js specialist",
  author: "David Sabalete Rodríguez",
  ogTitle: "David Sabalete | Senior Fullstack Developer | Vue.js Expert | Barcelona",
  ogDescription:
    "Senior Fullstack Developer in Barcelona specializing in Vue.js, Nuxt.js, Node.js, and AWS. Expert in building scalable web applications with modern JavaScript frameworks.",
  ogImage: "/assets/images/profile.jpg",
  ogUrl: "https://www.davidsabalete.com",
  ogType: "website",
  twitterCard: "summary_large_image",
  twitterTitle: "David Sabalete | Senior Fullstack Developer | Vue.js Expert | Barcelona",
  twitterDescription:
    "Senior Fullstack Developer in Barcelona specializing in Vue.js, Nuxt.js, Node.js, and AWS. Expert in building scalable web applications.",
  twitterImage: "/assets/images/profile.jpg"
})

// Structured data for the home page
useSchemaOrg([
  definePerson({
    name: "David Sabalete Rodríguez",
    alternateName: "David Sabalete",
    url: "https://www.davidsabalete.com",
    image: "https://www.davidsabalete.com/assets/images/profile.jpg",
    jobTitle: "Senior Fullstack Developer",
    description:
      "Senior Fullstack Developer in Barcelona specializing in Vue.js, Nuxt.js, Node.js, and AWS. Expert in building scalable web applications with modern JavaScript frameworks.",
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
      "Angular",
      "PHP",
      "Drupal",
      "WordPress",
      "Docker",
      "Kubernetes",
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
      "Senior Fullstack Developer portfolio showcasing expertise in Vue.js, Nuxt.js, Node.js, and AWS development.",
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
  <div class="page-index sm:mx-auto sm:mt-16">
    <DesktopHeader />
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
