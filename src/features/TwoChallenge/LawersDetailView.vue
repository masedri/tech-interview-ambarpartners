<template>
  <MainLayout>
    <div class="bg-black flex flex-col rounded-3xl p-10 text-white h-full md:gap-10">
      <hr class="bg-white w-full" />
      <section class="xl:text-5xl md:text-4xl text-2xl font-extralight p-10 tracking-tighter leading-tight gap-1 md:gap-4 flex flex-col">
        <p>First-class clients.</p>
        <p>First-class lawyers.</p>
        <div class="font-semibold flex items-center">
          <p>Exceptional team</p>
          <p class="text-secondary">.</p>
        </div>
      </section>
      <div class="h-full overflow-auto pr-3">
        <TransitionGroup
          name="slide-fade"
          tag="div"
        >
          <div
            v-if="isList"
            class="grid grid-rows-1 grid-flow-col overflow-x-scroll gap-3"
          >
            <div
              v-for="(lawer, index) in lawers"
              :key="index"
              @click="detailLawer(lawer)"
            >
              <CardLawer :info="getInfoLawer(lawer)"></CardLawer>
            </div>
          </div>
        </TransitionGroup>
        <Transition name="fadeCard">
          <div
            v-if="!isList"
            class="grid grid-cols-1 md:grid-cols-2 items-center gap-10 justify-items-center"
          >
            <CardLawerDetail :lawer-detail="lawerDetail"></CardLawerDetail>
          </div>
        </Transition>
      </div>
      <Transition name="fadeCard">
        <div
          v-if="!isList"
          class="font-nothing hover:text-secondary flex items-center gap-2 justify-center h-max-content mt-5 cursor-pointer"
          @click="goToListView"
        >
          <Down class="transform rotate-90"></Down>
          Back to List of Lawers
        </div>
      </Transition>
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import Down from '@/assets/icons/down.svg'
import MainLayout from '@/core/layouts/MainLayout.vue'
import CardLawer from '@/features/TwoChallenge/components/CardLawer.vue'
import CardLawerDetail from '@/features/TwoChallenge/components/CardLawerDetail.vue'
import type { Lawer } from '@/features/TwoChallenge/types'
import { generateRamdonLawers } from '@/features/TwoChallenge/utils/'

/*
Reto 2: Vista de Datos del Usuario.

En este ejercicio queremos poner en práctica la creatividad y la capacidad de proponer mejoras
en los diseños por parte del desarrollador. En nuestro día a día trabajaremos con diseños definidos,
pero también vamos a valorar la capacidad de las personas a la hora de proponer estructuración para los datos.

Siéntete libre de modificar tanto código como sea necesario, recuerda que el código proporcionado es sólo un ejemplo.
*/

const lawers = generateRamdonLawers(10)
const isList = ref(true)
const lawerDetail = ref()

const getInfoLawer = (lawer: Lawer) => {
  const { firstName, lastName, image } = lawer.personalInfo
  const { name, title } = lawer.workInfo!.company
  return {
    firstName,
    lastName,
    company: name,
    title,
    image,
  }
}
const detailLawer = (lawer: Lawer) => {
  isList.value = false
  lawerDetail.value = lawer
}
const goToListView = () => {
  isList.value = true
}
</script>
<style scoped>
.slide-fade-enter-active {
  transition: all 0.8s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-200px);
  opacity: 0;
}

.fadeCard-enter-active {
  transition: opacity 0.8s ease-in;
  transition-delay: 1s;
}
.fadeCard-leave-active {
  transition: opacity 0.8s ease;
}

.fadeCard-enter-from,
.fadeCard-leave-to {
  opacity: 0;
}
</style>
