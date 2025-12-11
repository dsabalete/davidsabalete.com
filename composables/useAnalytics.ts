/* eslint-disable @typescript-eslint/no-explicit-any */

declare global {
  interface Window {
    dataLayer: any[]
  }
}

export const useAnalytics = () => {
  const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
    if (typeof window === 'undefined' || !window.dataLayer) {
      return
    }

    window.dataLayer.push({
      event: eventName,
      ...eventParams
    })
  }

  return {
    trackEvent
  }
}
