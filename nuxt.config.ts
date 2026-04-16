// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  devtools: { enabled: true },

  ssr: true,

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxtjs/supabase',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
  ],

  supabase: {
    redirect: false
  },


  routeRules: {
    "/click/**": {
      headers: {
        "X-Robots-Tag": "noindex, nofollow, noarchive, nosnippet",
      },
    },
  },


  
})