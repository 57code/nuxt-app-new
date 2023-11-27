export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.errorHandler = (..._args) => {
    console.log('vue error handler')
  }
  nuxtApp.hook('vue:error', (..._args) => {
    console.log('vue:error')
  })
})