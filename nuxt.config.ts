// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   ssr: false,
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/image',
    '@nuxt/fonts',
    'nuxt-swiper',
    '@nuxtjs/robots',
  ],
  css: ['@/assets/styles/main.scss'],
  site: { indexable: false },
  app: {
    head: {
      title: 'SpaceCode',
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          key: "description",
          name: "description",
          content: "SpaceCode",
        },
        {
          key: "msapplication-TileColor",
          name: "msapplication-TileColor",
          content: "#000000",
        },
        {
          key: "sapplication-TileImage",
          name: "sapplication-TileImage",
          content: "/favicon/ms-icon-144x144.png",
        },
        {
          key: "theme-color",
          name: "theme-color",
          content: "#000000",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/png",
          sizes: "96x96",
          href: "/favicon/favicon-96x96.png",
        },
        {
          rel: "icon",
          type: "image/svg+xml",
          href: "/favicon/favicon.svg",
        },
        {
          rel: "shortcut icon",
          href: "/favicon/favicon.ico",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/favicon/apple-touch-icon.png",
        },
        {
          rel: "manifest",
          href: "/favicon/site.webmanifest",
        },
      ],
    },
  }
})