// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxt/icon'
  ],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
})