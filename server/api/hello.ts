// 约定导出defineEventHandler(handler)
export default defineEventHandler((event) => {
  // 此处可以返回对象或Promise
  return {
    message: 'hello，nuxt3！'
  }
})