<template>
  <div>
    <ClientOnly>
      <p>{{ date1 }}</p>
      <p>{{ date2 }}</p>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
const nuxtApp = useNuxtApp();
const date1 = nuxtApp.$format();
const date2 = nuxtApp.$format(new Date(), "YYYY/MM/DD");
</script>
