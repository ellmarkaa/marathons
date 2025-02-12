// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  modules: ['@nuxtjs/i18n', '@nuxt/eslint', 'vue3-carousel-nuxt', '@nuxt/fonts', '@nuxt/ui', '@pinia/nuxt'],
  css: ['~/assets/styles/main.css'],
  components: [
    {
      path: '~/components/ui',
      pathPrefix: false, // Отключаем префиксы для компонентов в этой папке
    },
    '~/components',
  ],
  // runtimeConfig: {
  //   public: {
  //     apiBase: process.env.API_URL || 'https://api.example.com',
  //   },
  // },
  pinia: {
    storesDirs: ['./stores/**'],
  },

  devServer: {
    port: 3001
  },

  i18n: {
    vueI18n: './i18n.config.ts',
  },

  runtimeConfig: {
    public: {
      apiCatalog: 'https://api.4lmnts.taskmaster.team/cms/',
      catalogEmail: process.env.NUXT_CATALOG_EMAIL,
      catalogPassword: process.env.NUXT_CATALOG_PASSWORD,
    },
  },

  compatibilityDate: '2024-12-19',
});
