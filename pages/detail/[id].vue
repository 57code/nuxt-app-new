<template>
  <div class="p-5">
    <div v-if="pending">加载中...</div>
    <div v-else-if="error">{{ (error as NuxtError).data.message }}</div>
    <div v-else>
      <h1 class="text-2xl">{{ data?.title }}</h1>
      <div v-html="data?.content"></div>
      <!-- 评论区 -->
      <div class="py-2">
        <UTextarea
          v-model="value"
          placeholder="输入评论"
        />
        <UButton @click="onSubmit">发送</UButton>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { NuxtError } from 'nuxt/app';

// definePageMeta({
//   middleware: ['auth']
// })

const router = useRouter();
const route = useRoute()
// const fetchPost = () => $fetch(`/api/detail/${route.params.id}`);
const store = useUser();
const fetchPost = () =>
  $fetch(`/api/detail/${route.params.id}`, {
    // 如果已登录，请求时携带令牌
    headers: { token: store.token },
    onResponseError: ({ response }) => {
      // 如果响应 401 错误，重新登录
      if (response.status === 401) {
        router.push("/login?callback=" + route.path);
      }
    },
  });
const { data, pending, error } = useAsyncData(fetchPost);

// 增加评论相关逻辑，注意登录状态的获取和使用
const value = useState("comment", () => "");
// const store = useUser();
// const { isLogin } = storeToRefs(store)
// const toast = useToast()
const onSubmit = () => {
  // if (isLogin.value) {
    // 提示用户
    // toast.add({ title: '已提交评论!' })
    getCurrentInstance()?.proxy?.$toast('已提交评论!')
    // 提交留言...
    value.value = ''
  // } else {
    // 要求登录
    // router.push('/login?callback=' + route.path)
  // }
}
</script>