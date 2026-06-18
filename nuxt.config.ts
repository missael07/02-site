// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  vite: {
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit',
      ]
    }
  },

  css: [
    '@/assets/css/main.css',
  ],

  modules: [
    '@nuxt/devtools',
    '@nuxt/eslint',
    '@nuxt/fonts',
  ],

  app: {
    head: {
      title: 'Tienda Online',
      meta: [
        { name: 'description', content: 'Tienda Online' }
      ],
    }
  }

})
