<template>
  <aside class="bg-primary text-white p-4">
    <ul class="space-y-2">
      <li>
        <div
          class="flex items-center justify-between text-secondary px-4 py-2 hover:bg-gray-700 cursor-pointer"
          @click="redirectTo('intro')"
        >
          <div class="flex items-center">
            <span>Introducción</span>
          </div>
        </div>
      </li>
      <div class="border my-6" />
      <li>
        <div
          class="flex items-center justify-between text-secondary px-4 py-2 hover:bg-gray-700 cursor-pointer"
          @click="redirectTo('register-form')"
        >
          <div class="flex items-center">
            <span>Reto 1: Formulario</span>
          </div>
        </div>
      </li>
      <li>
        <div
          class="flex items-center justify-between text-secondary px-4 py-2 hover:bg-gray-700 cursor-pointer"
          @click="redirectTo('user-detail')"
        >
          <div class="flex items-center">
            <span>Reto 2: Diseño</span>
          </div>
        </div>
      </li>
      <li>
        <div
          class="flex items-center justify-between text-secondary px-4 py-2 hover:bg-gray-700 cursor-pointer"
          @click="redirectTo('event-calendar')"
        >
          <div class="flex items-center">
            <span>Reto 3: Calendario</span>
          </div>
        </div>
      </li>
    </ul>
  </aside>
</template>

<script setup>
import router from '@/router'

defineOptions({
  name: 'AppSidebar',
})

const redirectTo = (routename) => {
  router.push({ name: routename })
}
</script>
