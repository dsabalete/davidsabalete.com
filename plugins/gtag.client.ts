/* eslint-disable @typescript-eslint/no-explicit-any */

declare global {
  interface Window {
    dataLayer: any[]
  }
}

export default defineNuxtPlugin((_) => {
  const { gtagId } = useRuntimeConfig().public

  type GtagArgs = [string, ...any[]]

  const gtag = (...args: GtagArgs): void => {
    window.dataLayer.push(args)
  }

  window.dataLayer = window.dataLayer || []

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
