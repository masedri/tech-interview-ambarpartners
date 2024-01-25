<script setup>
import { RouterView } from 'vue-router'

defineOptions({
  name: 'MainApp',
})
</script>

<template>
  <div
    id="app"
    class="h-screen w-screen"
  >
    <router-view />
  </div>
</template>
