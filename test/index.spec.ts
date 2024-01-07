import { describe, expect, it } from 'vitest'
import { $fetch, setup } from '@nuxt/test-utils'

describe('my test', async () => {
  await setup({
    // 测试上下文
  })

  it('index page should be work', async () => {
    const html = await $fetch('/')
    expect(html).toMatch('<h1>Index Page</h1>')
  })
})
