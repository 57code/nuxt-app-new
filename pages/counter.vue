<template>
  <div class="p-4">
    Counter: {{ counter }} CounterRef: {{ counterRef }}
    <div class="mt-2">
      <UButton @click="counter++; counterRef++;">+</UButton>
      <UButton @click="counter--; counterRef--;">-</UButton>
    </div>
  </div>
  <Counter></Counter>
  <Counter></Counter>
</template>

<script setup lang="ts">
const counter = useState("counter", () => Math.round(Math.random() * 1000));
const counterRef = ref(Math.round(Math.random() * 1000));
</script>
