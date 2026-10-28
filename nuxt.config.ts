// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  modules: ['@nuxt/fonts', '@nuxt/icon/module', '@nuxt/image', '@nuxt/ui'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  ui: {
    colorMode: false
  },
  vite: {
    plugins: [
      tailwindcss(),
    ]
  },
  fonts: {
    families: [
      { name: 'Inter', provider: 'google' },
    ]
  },
  
})
