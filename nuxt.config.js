import colors from "vuetify/es5/util/colors";
import language from "./configs/language";

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        titleTemplate: "%s - nuxt-survey-file",
        title: "nuxt-survey-file",
        htmlAttrs: {
        lang: "en",
        },
        meta: [
        {
            charset: "utf-8",
        },
        {
            name: "viewport",
            content: "width=device-width, initial-scale=1",
        },
        {
            hid: "description",
            name: "description",
            content: "",
        },
        {
            name: "format-detection",
            content: "telephone=no",
        },
        ],
        link: [
        {
            rel: "icon",
            type: "image/x-icon",
            href: "/favicon.ico",
        },
        ],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        "~/assets/main.scss"
    ],
    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/vuetify
        "@nuxtjs/vuetify",
        "@nuxtjs/composition-api/module",
    ],

    // Modules: https://go.nuxtjs.dev/config-modules

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: "http://localhost:3000/api",
    },
    modules: [["@nuxtjs/i18n", language], "@nuxtjs/axios"],
  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
    vuetify: {
        customVariables: ["~/assets/variables.scss"],
        theme: {
            dark: false,
            themes: {
                dark: {
                primary: colors.blue.darken2,
                accent: colors.grey.darken3,
                secondary: colors.amber.darken3,
                info: colors.teal.lighten1,
                warning: colors.amber.base,
                error: colors.deepOrange.accent4,
                success: colors.green.accent3,
                },
            },
        },
    },

  // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        transpile: ["defu", "claygl", "echarts", "zrender"],
    },
    serverMiddleware: ["~/api"],
    server: {
        port: 3000, // default: 3000
        host: "0.0.0.0", // default: localhost,
        timing: false,
    },
};
