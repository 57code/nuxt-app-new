<template>
  <div class="p-5">
    <h1 class="text-2xl">{{ title }}</h1>
    <div v-html="content"></div>
  </div>
</template>

<script setup lang="ts">
const router = useRoute();
const { title, content } = await $fetch(`/api/detail/${router.params.id}`);
</script>

<style scoped>
p {
  color: var(--link-color)
}
</style>