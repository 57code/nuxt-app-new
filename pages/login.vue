<template>
  <div>
    <UButton @click="onLogin">登录</UButton>
  </div>
</template>

<script setup lang="ts">
const { isLogin } = storeToRefs(useUser())
const router = useRouter()
const route = useRoute()
const onLogin = () => {
  isLogin.value = true
  const callback= route.query.callback?.toString() || ''
  router.push(callback)
}
</script>