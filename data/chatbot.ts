export interface ChatbotTopic {
  keywords: string[]
  replyKey: string
}

export const chatbotTopics: ChatbotTopic[] = [
  {
    keywords: ["good morning", "good afternoon", "hello", "hey there", "hi there", "hola", "bonjour", "hallo", "greetings"],
    replyKey: "chatbot_reply_welcome"
  },
  {
    keywords: [
      "who is",
      "tell me about yourself",
      "introduce yourself",
      "profile",
      "barcelona",
      "where is",
      "about david",
      "sobre david",
      "sobre ti",
      "quien es",
      "qui és",
      "wer ist",
      "qui est"
    ],
    replyKey: "chatbot_reply_about"
  },
  {
    keywords: [
      "experience",
      "career",
      "work history",
      "worked at",
      "companies",
      "company",
      "job",
      "roles",
      "trayectoria",
      "experiencia",
      "experiència",
      "erfahrung",
      "expérience",
      "carrière",
      "beruf"
    ],
    replyKey: "chatbot_reply_experience"
  },
  {
    keywords: [
      "technologies",
      "technology",
      "stack",
      "skills",
      "frameworks",
      "tools",
      "programming languages",
      "vue",
      "nuxt",
      "node.js",
      "node",
      "aws",
      "react",
      "backend",
      "frontend",
      "habilidades",
      "tecnologías",
      "tecnologias",
      "tecnologies",
      "technologien",
      "aptitudes",
      "habilitats",
      "competencias",
      "kompetenzen",
      "compétences"
    ],
    replyKey: "chatbot_reply_skills"
  },
  {
    keywords: [
      "projects",
      "portfolio",
      "github",
      "repositories",
      "repos",
      "built",
      "build",
      "applications",
      "apps",
      "proyectos",
      "projectes",
      "projets",
      "projekte",
      "portafolio"
    ],
    replyKey: "chatbot_reply_projects"
  },
  {
    keywords: [
      "contact",
      "email",
      "reach",
      "hire",
      "available",
      "availability",
      "linkedin",
      "schedule a call",
      "get in touch",
      "contacto",
      "contactar",
      "correo",
      "contacte",
      "kontakt",
      "kontaktieren",
      "contacter",
      "joindre",
      "e-mail"
    ],
    replyKey: "chatbot_reply_contact"
  },
  {
    keywords: [
      "certificates",
      "certifications",
      "certification",
      "courses",
      "university",
      "degree",
      "education",
      "studies",
      "certificados",
      "certificats",
      "cursos",
      "estudios",
      "zertifikate",
      "cours"
    ],
    replyKey: "chatbot_reply_certificates"
  },
  {
    keywords: ["cv", "resume", "curriculum", "currículum", "lebenslauf", "download cv", "cv pdf"],
    replyKey: "chatbot_reply_cv"
  },
  {
    keywords: ["blog", "articles", "posts", "artículos", "articulos", "articles de blog"],
    replyKey: "chatbot_reply_blog"
  },
  {
    keywords: ["salary", "salaries", "rate", "rates", "cost", "payment", "paid", "money", "tarif", "gehalt", "salario"],
    replyKey: "chatbot_reply_salary"
  }
]

export const chatbotFallbackKeys: string[] = [
  "chatbot_reply_fallback_1",
  "chatbot_reply_fallback_2",
  "chatbot_reply_fallback_3"
]

export const matchChatbotTopic = (message: string): string | null => {
  const normalized = message.toLowerCase().trim()
  if (!normalized) return null

  let bestKey: string | null = null
  let bestScore = 0

  for (const topic of chatbotTopics) {
    const score = topic.keywords.reduce((acc, keyword) => (normalized.includes(keyword) ? acc + keyword.length : acc), 0)
    if (score > bestScore) {
      bestKey = topic.replyKey
      bestScore = score
    }
  }

  return bestScore > 0 ? bestKey : null
}
