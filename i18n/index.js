import en from "./translations/en"
import es from "./translations/es"

const DEFAULT_LOCALE = "en"

const messages = {
    en,
    es
}

export default {
    locales: [
        {
            code: "en",
            iso: "en-US"
        },
        {
            code: "es",
            iso: "es-ES"
        }
    ],
    defaultLocale: DEFAULT_LOCALE,
    vueI18n: {
        // https://github.com/kazupon/vue-i18n/issues/139#issuecomment-522896331
        silentFallbackWarn: true,
        fallbackLocale: DEFAULT_LOCALE,
        messages
    }
}
