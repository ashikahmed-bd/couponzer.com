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
    'nuxt-schema-org',
    '@nuxtjs/sitemap',
  ],


  site: {
    url: 'https://www.couponzer.com',
    name: 'Couponzer- Latest coupon, Discount Codes, Promo codes and Cashback offer',
    description: 'description: Discover the latest coupon codes, promo deals, cash back offer and exclusive discounts from top brands in the world. Save more with Couponzer.',
    defaultLocale: 'en',

    host: 'https://www.couponzer.com',
  },


  sitemap: {
    sitemaps: {
      pages: {
        urls: [
          { loc: '/', lastmod: new Date().toISOString() },
          { loc: '/coupons', lastmod: new Date().toISOString() },
          { loc: '/stores', lastmod: new Date().toISOString() },
          { loc: '/categories', lastmod: new Date().toISOString() },
          { loc: '/help', lastmod: new Date().toISOString() },
          { loc: '/privacy', lastmod: new Date().toISOString() },
          { loc: '/terms', lastmod: new Date().toISOString() },
          { loc: '/disclaimer', lastmod: new Date().toISOString() },
          ],
      },

      coupons: {
        includeAppSources: true,
        include: ['/coupon/**'],
        sources: ['/api/sitemap/coupons'],
      },

      stores: {
        includeAppSources: true,
        include: ['/store/**'],
        sources: ['/api/sitemap/stores'],
      },

      categories: {
        includeAppSources: true,
        include: ['/category/**'],
        sources: ['/api/sitemap/categories'],
      },
    },

    exclude: [
      '/auth/**',
      '/dashboard/**',
    ],
  },

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

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
      meta: [
        {
          name: "impact-site-verification",
          content: "309a0a67-94a1-41f4-a931-92fa91fa66e1",
        },
      ],
      bodyAttrs: {
        class: 'antialiased text-base font-body text-dark overflow-x-hidden',
      },
      
    },
  },


  
})