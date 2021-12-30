import en from "./translations/en"
import es from "./translations/es"
import ca from "./translations/ca"

const DEFAULT_LOCALE = "en"

const messages = {
    en,
    es,
    ca
}

export default {
    locales: [
        {
            code: "en",
            iso: "en-US",
            name: "English"
        },
        {
            code: "es",
            iso: "es-ES",
            name: "Español"
        },
        {
            code: "ca",
            iso: "ca-ES",
            name: "Català"
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
