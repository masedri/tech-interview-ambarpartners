<template>
  <div
    class="flex h-[500px] min-w-[280px] xl:h-[500px] xl:w-[375px] md:h-[500px] md:w-[360px] 2xl:h-[500px] 2xl:w-[400px] rounded-xl"
  >
    <img
      :src="lawerDetail.personalInfo.image"
      class="object-cover rounded-xl"
      @error="
        (e: Event) =>
          ((e.target as HTMLImageElement).src =
            'https://www.igaxes.org/wp-content/uploads/2018/04/img-default.jpg')
      "
    />
  </div>
  <div
    class="text-white font-mono grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 items-center w-full gap-3"
  >
    <section v-for="(lawer, key) in keys" :key="key">
      <h1 class="font-nothing capitalize text-2xl">
        {{ key }}
      </h1>
      <div v-for="(field, index) in lawer" :key="index">
        <div class="text-xs text-ellipsis overflow-hidden">
          {{ index }}: {{ field }}
        </div>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
import type { Lawer } from '@/types'

const props = defineProps<{
  lawerDetail: Lawer
}>()

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { id, ...keys } = props.lawerDetail
</script>
