// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro:{
    preset: "vercel"
  },
  app: {
    head: {
      title: "村长的技术空间",
      meta: [
        { name: "description", content: "专注于前端技术分享" },
        { name: "keywords", content: "nuxt,vue,ts,frontend" },
      ]
    },
  },
  devtools: { enabled: true },
  css: [
    'assets/global.css'
  ],
  modules: [
    '@nuxt/ui',
    [
      "@pinia/nuxt",
      {
        autoImports: [
          // 自动引入 `defineStore(), storeToRefs()`
          "defineStore",
          "storeToRefs"
        ],
      },
    ]
  ]
})
