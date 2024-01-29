<template>
  <div>
    <label
      class="font-semibold block my-3 text-md"
      for="username"
    >
      {{ $attrs.label }}
    </label>
    <input
      v-model="input"
      v-bind="$attrs"
      class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
      @change="showError = !validation()"
    />
    <span
      v-if="showError"
      class="text-xs text-red-500"
      >{{ errorMessage }}</span
    >
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  errorMessage: string
  validation: () => boolean
}>()
defineOptions({
  inheritAttrs: false,
})
const input = defineModel()
const showError = ref(false)
</script>
