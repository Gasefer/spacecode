// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxt/fonts', 'nuxt-swiper', '@nuxtjs/robots'],
  css: ['@/assets/styles/main.scss'],
  site: { indexable: false }
})