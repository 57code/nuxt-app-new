<template>
  <div class="flex items-center flex-col gap-2 py-4">
    <!-- <div>
      index page
      <div>
        <UButton>Button</UButton>
      </div>
    </div>
    <NuxtLink to="/detail/1">detail 1</NuxtLink> -->

    <!-- <div v-for="post in posts" :key="post.id">
      <NuxtLink class="text-lg" :to="`/detail/${post.id}`">{{
        post.title
      }}</NuxtLink>
      <p class="text-slate-500">发布于: {{ post.date }}</p>
    </div> -->

    <div>
      <h1>Color mode: {{ $colorMode.value }}</h1>
      <select v-model="$colorMode.preference">
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="sepia">Sepia</option>
      </select>
    </div>

    <!-- 处理加载状态 -->
    <div v-if="pending">加载中...</div>

    <!-- 处理请求错误 -->
    <div v-else-if="error" class="text-red-300">{{ error.message }}</div>

    <!-- 正常显示内容 -->
    <div v-else>
      <div v-for="post in posts" :key="post.id">
        <NuxtLink class="text-lg" :to="`/detail/${post.id}`">{{
          post.title
        }}</NuxtLink>
        <p class="text-slate-500">发布于: {{ post.date }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode();
console.log(colorMode.preference);

// const posts = await $fetch("/api/posts");
const {
  data: posts,
  pending,
  error,
} = await useFetch("/api/posts", {
  lazy: true,
});
</script>
<style>

.dark-mode body {
  background-color: #091a28;
  color: #ebf4f1;
}
.sepia-mode body {
  background-color: #f1e7d0;
  color: #433422;
}
</style>