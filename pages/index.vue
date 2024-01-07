<script setup lang="ts">
const { value: count } = storeToRefs(useCounter())
</script>

<template>
  <h1>Index Page</h1>
  <p>
    <UButton>Nuxt3 in Action</UButton>
  </p>
  <p>
    <UIcon name="i-carbon-time" />
    counter: {{ count }}
  </p>
</template>
