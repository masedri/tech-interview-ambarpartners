<!-- eslint-disable vue/no-v-html -->
<template>
  <div
    class="bg-white p-6 flex justify-center flex-col items-center text-md font-extraligth italic xl:w-2/3 text-center font-mono"
    v-html="htmlContent"
  ></div>
</template>
<script setup lang="ts">
defineProps<{
  htmlContent: string
}>()
</script>
