<template>
  <nav
    class="py-4 px-6 w-full fixed"
    :class="[isWhite ? 'bg-white' : 'bg-black']"
  >
    <div class="w-60 cursor-pointer hover:scale-105 transition">
      <AmbarPartners
        :class="[isWhite ? 'fill-black' : 'fill-white']"
        @click="goToHome"
      ></AmbarPartners>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

import AmbarPartners from '@/assets/icons/AmbarPartners.svg'

defineOptions({
  name: 'AppNavbar',
})

const router = useRouter()
const route = useRoute()

const isWhite = computed(() => ['intro', 'stepper-info'].includes(route?.name as string))

const goToHome = () => router.push('/')
</script>
