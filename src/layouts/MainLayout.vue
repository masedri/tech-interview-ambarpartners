<template>
  <div class="h-screen w-screen flex flex-col">
    <AppNavbar />

    <div class="overflow-y-auto flex flex-1 mt-20">
      <main class="flex-1 overflow-y-auto p-4">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
import AppNavbar from '@/components/App/Navbar.vue'

defineOptions({
  name: 'MainLayout',
})
</script>
