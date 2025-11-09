import { queryCollection } from "@nuxt/content/server"

interface BlogPost {
  path?: string
  _path?: string
  stem?: string
  id?: string
  updatedAt?: string | Date
  createdAt?: string | Date
  meta?: {
    updatedAt?: string | Date
    createdAt?: string | Date
  }
  [key: string]: unknown
}

interface SitemapUrl {
  loc: string
  lastmod?: string
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never"
  priority?: number
}

export default defineEventHandler(async (event) => {
  // Get site URL from config or environment variable
  const siteUrl =
    process.env.NUXT_PUBLIC_SITE_URL ||
    (process.env.NODE_ENV === "production" ? "https://www.davidsabalete.com" : "http://localhost:3000")

  const urls: SitemapUrl[] = []

  // Static pages
  urls.push({
    loc: `${siteUrl}/`,
    changefreq: "monthly",
    priority: 1.0
  })

  urls.push({
    loc: `${siteUrl}/blog`,
    changefreq: "weekly",
    priority: 0.8
  })

  // Dynamic blog posts
  try {
    const postsResult = await queryCollection(event, "posts").all()
    const posts = (postsResult || []) as unknown as BlogPost[]

    console.log(`[Sitemap] Found ${posts.length} blog posts`)

    if (posts.length > 0) {
      // Debug: log first post structure
      console.log(
        "[Sitemap] Sample post structure:",
        JSON.stringify(
          {
            path: posts[0].path,
            _path: posts[0]._path,
            stem: posts[0].stem,
            id: posts[0].id,
            keys: Object.keys(posts[0])
          },
          null,
          2
        )
      )
    }

    posts.forEach((post) => {
      // Try multiple ways to get the slug
      let slug = ""

      // Method 1: From path or _path
      const postPath = post.path || post._path || ""
      if (postPath) {
        slug = postPath.replace("/posts/", "").replace(/^\//, "").replace(/\.md$/, "")
      }

      // Method 2: From stem (filename without extension)
      if (!slug && post.stem) {
        slug = post.stem
      }

      // Method 3: From id
      if (!slug && post.id) {
        slug = post.id.replace("/posts/", "").replace(/^\//, "").replace(/\.md$/, "")
      }

      if (!slug) {
        console.warn(`[Sitemap] Skipping post with no valid slug. Post keys:`, Object.keys(post))
        return
      }

      // Try to get dates from meta first (as seen in pages/blog/index.vue)
      const lastmod = post.meta?.updatedAt || post.meta?.createdAt || post.updatedAt || post.createdAt
      let lastmodDate: string | undefined = undefined

      if (lastmod) {
        try {
          lastmodDate = typeof lastmod === "string" ? new Date(lastmod).toISOString() : new Date(lastmod).toISOString()
        } catch {
          // If date parsing fails, skip lastmod
          console.warn(`[Sitemap] Failed to parse date for post ${slug}:`, lastmod)
        }
      }

      urls.push({
        loc: `${siteUrl}/blog/${slug}`,
        lastmod: lastmodDate,
        changefreq: "monthly",
        priority: 0.7
      })
    })

    const blogUrls = urls.filter((u) => u.loc.includes("/blog/") && u.loc !== `${siteUrl}/blog`)
    console.log(`[Sitemap] Added ${blogUrls.length} blog post URLs`)
  } catch (error) {
    console.error("[Sitemap] Error fetching blog posts:", error)
    if (error instanceof Error) {
      console.error("[Sitemap] Error details:", error.message, error.stack)
    }
    // Continue without blog posts if there's an error
  }

  // Generate XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map((url) => {
    let urlXml = `  <url>
    <loc>${escapeXml(url.loc)}</loc>`
    if (url.lastmod) {
      urlXml += `
    <lastmod>${url.lastmod}</lastmod>`
    }
    if (url.changefreq) {
      urlXml += `
    <changefreq>${url.changefreq}</changefreq>`
    }
    if (url.priority !== undefined) {
      urlXml += `
    <priority>${url.priority}</priority>`
    }
    urlXml += `
  </url>`
    return urlXml
  })
  .join("\n")}
</urlset>`

  // Set proper headers for XML
  setHeader(event, "Content-Type", "application/xml")
  setHeader(event, "Cache-Control", "public, max-age=3600, s-maxage=3600")

  return xml
})

// Helper function to escape XML special characters
function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")
}
