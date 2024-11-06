// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Kontour',
      meta: [{ name: 'description', content: 'Explore the world with us' }],
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern',
        },
      },
    },
  },
  modules: ['@pinia/nuxt', '@nuxt/eslint'],
  components: true,
  pinia: {
    storesDirs: ['./stores/**'],
  },
});
