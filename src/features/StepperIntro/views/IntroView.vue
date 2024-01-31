<template>
  <div
    class="h-full overflow-scroll relative"
    @scroll="handleScroll"
  >
    <div class="h-[200%] absolute flex flex-col items-center w-full top-96">
      <div class="w-72 md:w-96">
        <AmbarPartners class="fill-black"></AmbarPartners>
      </div>
      <div class="text-secondary text-3xl capitalize font-nothing">Frontend challenge</div>
      <router-link :to="{ name: 'stepper-info' }">
        <Down class="mt-10 animate-bounce cursor-pointer"> </Down>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

import AmbarPartners from '@/assets/icons/AmbarPartners.svg'
import Down from '@/assets/icons/down.svg'

const router = useRouter()

const handleScroll = () => router.push({ name: 'stepper-info' })
</script>
