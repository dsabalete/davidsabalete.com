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
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
        script: [
            {
                src: "https://www.googletagmanager.com/gtag/js?id=G-E0XXZ7KMLT",
                async: true
            },
            {
                src: 'js/gtag.js',
            }
        ]



    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ["@/assets/css/main.css"],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: ["~/plugins/vue-tooltip.client.js"],

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
        ["@nuxt/content"],
        ["vue-scrollto/nuxt", { duration: 500 }],
        ["@nuxtjs/i18n", { ...i18n }],
    ],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        postcss: {
            plugins: {
                autoprefixer: {}
            }
        }
    }
}
