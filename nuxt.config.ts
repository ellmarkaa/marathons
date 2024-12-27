// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n', '@nuxt/eslint', 'vue3-carousel-nuxt', '@nuxt/fonts'],
  components: [
    {
      path: '~/components/ui',
      pathPrefix: false, // Отключаем префиксы для компонентов в этой папке
    },
    '~/components',
  ],

  i18n: {
    vueI18n: './i18n.config.ts',
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  compatibilityDate: '2024-12-19',
});
