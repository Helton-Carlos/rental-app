export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@vueuse/nuxt', '@pinia/nuxt', '@vite-pwa/nuxt', "@nuxt/image"],
  app: {
    head: {
      htmlAttrs: { dir: 'ltr', lang: 'pt' },
      link: [{ rel: 'icon', type: 'image/png', href: "/icons/favicon-16x16.png" }],
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },
  pwa: {
    strategies: 'generateSW',
    registerType: 'autoUpdate',
    manifest: {
      name: 'Retal-App',
      short_name: 'Rental-App Saas projeto de estudo com nuxt3. Vue3, Nuxt3, Typescript, Tailwind e bibliotecas adicionais.',
      theme_color: '#000000',
      icons: [
        {
          src: '/icons/android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/icons/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: '/icons/mstile-150x150.png',
          sizes: '150x150',
          type: 'image/png',
        },
        {
          src: '/icons/favicon-32x32.png',
          sizes: '32x32',
          type: 'image/png',
        },
      ],
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
    },
    client: {
      installPrompt: true,
      periodicSyncForUpdates: 20,
    },
    devOptions: {
      enabled: true,
      suppressWarnings: true,
      navigateFallback: '/',
      navigateFallbackAllowlist: [/^\/$/],
      type: 'module',
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})