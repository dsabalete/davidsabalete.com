/* eslint-disable @typescript-eslint/no-explicit-any */

declare global {
  interface Window {
    dataLayer: any[]
  }
}

export default defineNuxtPlugin(() => {
  const { gtmId } = useRuntimeConfig().public

  if (!gtmId) {
    return
  }

  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" })

  useHead({
    script: [
      {
        innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`,
        tagPosition: "head"
      }
    ]
  })
})