// Server API route to provide blog posts for sitemap
// This endpoint is used by nuxt-simple-sitemap to fetch dynamic blog routes

// queryContent is auto-imported by Nuxt Content
// TypeScript declaration for the auto-imported function
declare function queryContent(query?: string): {
  find(): Promise<
    Array<{
      _path?: string
      updatedAt?: string | Date
      createdAt?: string | Date
      [key: string]: unknown
    }>
  >
}

export default defineEventHandler(async () => {
  try {
    // Fetch all blog posts from content
    // queryContent is auto-imported by Nuxt Content v2
    const posts = await queryContent("posts").find()

    // Map posts to sitemap entries with proper metadata
    return posts.map((post) => {
      const slug = post._path?.replace("/posts/", "") || ""
      const lastmod = post.updatedAt || post.createdAt || new Date().toISOString()

      return {
        loc: `/blog/${slug}`,
        lastmod: typeof lastmod === "string" ? lastmod : new Date(lastmod).toISOString(),
        changefreq: "monthly" as const,
        priority: 0.7
      }
    })
  } catch (error) {
    console.error("Error fetching blog posts for sitemap:", error)
    return []
  }
})
