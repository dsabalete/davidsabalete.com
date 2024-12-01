export default defineNuxtPlugin((nuxtApp) => {
  const { gtagId } = useRuntimeConfig().public

  const gtag = (...args: any[]): void => {
    ;(window as any).dataLayer.push(args)
  }

  ;(window as any).dataLayer = (window as any).dataLayer || []

  gtag("js", new Date())
  gtag("config", gtagId)

  useHead({
    script: [
      {
        src: `https://www.googletagmanager.com/gtag/js?id=${gtagId}`,
        async: true
      }
    ]
  })
})
