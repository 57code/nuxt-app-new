<template>
  <div>
    请打开控制台查看是否有日志输出
  </div>
</template>

<script setup lang="ts">
// definePageMeta({
//   middleware(to, from) {
//     console.log('匿名中间件，具体页面执行');
//   }
// })
definePageMeta({
  middleware: ['amid', 'bmid']
})
</script>
