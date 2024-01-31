<template>
  <div
    id="app"
    class="h-screen w-screen"
  >
    <router-view v-slot="{ Component }">
      <Transition
        mode="out-in"
        name="fade"
      >
        <component :is="Component" />
      </Transition>
    </router-view>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'

defineOptions({
  name: 'MainApp',
})
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
  transition-delay: 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
