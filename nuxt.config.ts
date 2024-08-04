// https://nuxt.com/docs/api/configuration/nuxt-config
import process from 'node:process'

export default defineNuxtConfig({
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      DB_URL: process.env.DB_URL as string,
    },
  },

  css: [
    '@unocss/reset/tailwind.css',
  ],

  features: {
    inlineStyles: false,
  },

  modules: ['@nuxt/eslint', '@unocss/nuxt', 'shadcn-nuxt', '@nuxt/icon'],

  eslint: {
    config: {
      standalone: false,
    },
  },

  icon: {
    serverBundle: 'local',
  },

  compatibilityDate: '2024-08-01',
})
