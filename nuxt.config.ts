// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
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
