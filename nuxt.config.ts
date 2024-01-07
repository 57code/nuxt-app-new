// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ui: {
    icons: ['carbon']
  },
  imports: {
    dirs: ['store'],
  },
  modules: ['@nuxt/ui', [
    '@pinia/nuxt',
    {
      autoImports: [
        // 自动引入 `defineStore(), storeToRefs()`
        'defineStore',
        'storeToRefs',
      ],
    },
  ]],
})
