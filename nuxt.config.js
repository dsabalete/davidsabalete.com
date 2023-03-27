import i18n from "./i18n"

export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: "static",

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: "davidsabalete.com",
        htmlAttrs: {
            lang: "en"
        },
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            },
            {
                hid: "description",
                name: "description",
                content:
                    "David Sabalete Rodríguez home site, personal website and portfolio"
            },
            { name: "format-detection", content: "telephone=no" }
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ["@/assets/css/main.css"],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: ["~/plugins/vue-tooltip.client.js", "~/plugins/vue-gtag.js"],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        "@nuxtjs/eslint-module",
        // https://go.nuxtjs.dev/tailwindcss
        "@nuxtjs/tailwindcss",
        "@nuxt/postcss8",
        "@nuxtjs/google-fonts"
    ],

    tailwindcss: {
        cssPath: "@/assets/css/main.css",
        configPath: "tailwind.config.js",
        exposeConfig: false,
        config: {},
        injectPosition: 0
    },

    googleFonts: {
        families: {
            Roboto: true,
            "Josefin+Sans": true,
            Audiowide: true,
            Lato: [100, 300],
            Raleway: {
                wght: [100, 400],
                ital: [100]
            }
        },
        display: "swap"
    },

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        ["@nuxtjs/gtm"],
        ["@nuxt/content"],
        ["vue-scrollto/nuxt", { duration: 500 }],
        ["@nuxtjs/i18n", { ...i18n }],
        [
            "@nuxtjs/google-gtag",
            {
                id: "UA-1969234-5", // required
                config: {
                    // this are the config options for `gtag
                    // check out official docs: https://developers.google.com/analytics/devguides/collection/gtagjs/
                    //anonymize_ip: true, // anonymize IP
                    //send_page_view: false, // might be necessary to avoid duplicated page track on page reload
                    // linker: {
                    //     domains: ["domain.com", "domain.org"]
                    // }
                },
                debug: true, // enable to track in dev mode
                disableAutoPageTrack: false // disable if you don't want to track each page route with router.afterEach(...)
                // optional you can add more configuration like [AdWords](https://developers.google.com/adwords-remarketing-tag/#configuring_the_global_site_tag_for_multiple_accounts)
            }
        ]
    ],

    gtm: {
        id: "GTM-KMZWHH6"
    },

    publicRuntimeConfig: {
        gtm: {
            id: process.env.GOOGLE_TAG_MANAGER_ID
        }
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        postcss: {
            plugins: {
                autoprefixer: {}
            }
        }
    }
}
