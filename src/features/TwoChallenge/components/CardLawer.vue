<template>
  <div class="flex cursor-pointer relative h-[450px] min-w-[280px] mb-4 xl:h-[500px] xl:w-[375px] md:h-[500px] md:w-[360px] 2xl:h-[500px] 2xl:w-[400px] rounded-xl">
    <img
      class="object-cover rounded-xl opacity-30 hover:opacity-100 transition"
      :src="info.image"
      @error="(e: Event) => ((e.target as HTMLImageElement).src = 'https://www.igaxes.org/wp-content/uploads/2018/04/img-default.jpg')"
    />
    <div class="flex text-white text-center absolute justify-center w-full flex-col bottom-0 p-5 font-mono items-center bg-zinc-950 opacity-70 hover:opacity-100">
      <div class="flex gap-1 font-bold">
        <p>{{ info.firstName }}</p>
        <p>{{ info.lastName }}</p>
      </div>
      <p class="font-nothing">{{ info.company }}</p>
      <p class="italic">{{ info.title }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  info: {
    firstName: string
    lastName: string
    company: string
    title: string
    image: string
  }
}>()
</script>
