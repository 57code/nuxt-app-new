<template>
  <div class="pt-10">
    <h1 class="text-2xl text-center mb-2">
      出了点错 - {{ error?.statusCode }}
    </h1>
    <p class="text-center p-4">{{ error?.message }}</p>
    <div class="text-center">
      <UButton @click="retry" class="mr-2">重试</UButton>
      <UButton @click="handleError">回到首页</UButton>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  error: Object,
});
console.log(props.error);
const router = useRouter();
const retry = () => (window.location.href = props.error!.url);
const handleError = () => clearError({ redirect: "/" });
</script>
