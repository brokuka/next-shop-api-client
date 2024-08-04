// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-08-01',

  devtools: { enabled: true },

  css: [
    '@unocss/reset/tailwind.css',
  ],

  features: {
    inlineStyles: false,
  },

  modules: ['@nuxt/eslint', '@unocss/nuxt', 'shadcn-nuxt', '@nuxt/icon', '@nuxt/fonts'],

  eslint: {
    config: {
      standalone: false,
    },
  },

  icon: {
    serverBundle: 'local',
  },

  fonts: {
    families: [
      {
        name: 'Inter',
        preload: true,
      },
    ],
  },
})
