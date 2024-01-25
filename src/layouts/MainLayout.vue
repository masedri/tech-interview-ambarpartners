<template>
  <div class="h-screen w-screen flex flex-col">
    <AppNavbar />

    <div class="overflow-y-auto flex flex-1">
      <AppSidebar />
      <main class="flex-1 overflow-y-auto p-4">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppNavbar from '@/components/App/Navbar.vue'
import AppSidebar from '@/components/App/Sidebar.vue'

defineOptions({
  name: 'MainLayout',
})
</script>
