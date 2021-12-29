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
    plugins: ["~/plugins/vue-tooltip.client.js"],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        "@nuxtjs/eslint-module",
        // https://go.nuxtjs.dev/tailwindcss
        "@nuxtjs/tailwindcss",
        "@nuxt/postcss8"
    ],

    tailwindcss: {
        cssPath: "@/assets/css/main.css",
        configPath: "tailwind.config.js",
        exposeConfig: false,
        config: {},
        injectPosition: 0
    },

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [["vue-scrollto/nuxt", { duration: 500 }]],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        postcss: {
            plugins: {
                autoprefixer: {}
            }
        }
    }
}
