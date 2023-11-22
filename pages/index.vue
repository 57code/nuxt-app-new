<template>
  <div class="flex items-center flex-col gap-2 py-4">
    <!-- <div>
      index page
      <div>
        <UButton>Button</UButton>
      </div>
    </div>
    <NuxtLink to="/detail/1">detail 1</NuxtLink> -->
    <div v-for="post in posts" :key="post.id">
      <NuxtLink class="text-lg" :to="`/detail/${post.id}`">{{
        post.title
      }}</NuxtLink>
      <p class="text-slate-500">发布于: {{ post.date }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const posts = await $fetch("/api/posts");
</script>
