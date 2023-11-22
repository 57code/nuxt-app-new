<template>
  <div>
    {{ message }}
  </div>
</template>

<script setup lang="ts">
const { message } = await $fetch('/api/hello')
</script>