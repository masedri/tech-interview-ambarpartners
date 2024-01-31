DownDown
<template>
  <MainLayout>
    <div class="text-secondary text-3xl xl:text-5xl capitalize h-20 font-nothing justify-center flex items-center">Frontend challenge</div>
    <Transition
      mode="out-in"
      name="fade"
    >
      <div
        :key="currentStep"
        class="flex flex-col items-center justify-center my-5"
      >
        <div class="transform rotate-180">
          <Down
            v-if="currentStep > 0"
            class="animate-bounce cursor-pointer"
            @click="previousStep"
          >
          </Down>
        </div>
        <div class="flex flex-col items-center justify-center gap-5">
          <StepInfo :html-content="STEPS[currentStep as keyof typeof STEPS]"></StepInfo>
          <div
            v-if="currentStep > 0"
            class="flex items-center mb-5 justify-between text-secondary px-4 py-2 cursor-pointer font-nothing border stroke-secondary text-2xl hover:bg-secondary hover:text-white border-current"
            @click="
              $router.push({
                name: routesChallenges[currentStep as keyof typeof routesChallenges].route,
              })
            "
          >
            <div class="flex items-center">
              <span>{{ routesChallenges[currentStep as keyof typeof routesChallenges].name }}</span>
            </div>
          </div>
        </div>

        <Down
          v-if="currentStep <= 2"
          class="animate-bounce cursor-pointer mb-10"
          @click="nextStep"
        >
        </Down>
      </div>
    </Transition>
  </MainLayout>
</template>
<script setup lang="ts">
import { ref } from 'vue'

import Down from '@/assets/icons/down.svg'
import StepInfo from '@/components/StepInfo.vue'
import MainLayout from '@/layouts/MainLayout.vue'

const currentStep = ref(0)
const nextStep = () => currentStep.value++
const previousStep = () => currentStep.value--

const routesChallenges = {
  1: { route: 'register-form', name: 'Formulario' },
  2: { route: 'lawers-detail', name: 'Diseño' },
  3: { route: 'event-calendar', name: 'Calendario' },
}

const STEPS = {
  0: ` <p>
        En este desafío técnico, te presentamos un proyecto de desarrollo web
        que utiliza <strong>Vue 3 y TailwindCss</strong>. Tu objetivo es
        solucionar los retos técnicos propuestos en las difentes vistas. Las
        vistas de cada reto contendrán la información técnica necesaria para el
        desarrollo del mismo, pero si en alguno de ellos existe alguna duda,
        contacta con nosotros y lo resolveremos.
        <br />
        <br />
        Además de los tres retos técnicos,
        <strong>se valorarán positivamente</strong> las aportaciones personales
        que se le quieran dar a la base del proyecto, como por ejemplo,
        <strong
          >mejoras a la interfaz para hacerla responsive y más actual o
          refactorizar código existente</strong
        >. No hay una única manera de resolver los ejercicios, no entres en
        loops infinitos de mejora,
        <strong
          >más allá de evaluar el conocimiento queremos conocer tu forma de
          trabajar</strong
        >. Siéntete libre de utilizar lo que tú consideres que es lo mejor para
        cada situación.
        <br />
        <br />
        Y puestos a pedir... ¡nos encantaría ver una estructura de
        <strong>testing</strong> con un par de ejemplos!
        <br />
        <br />
        Finalmente, para entregarnos tus resultados, por favor proporciona un
        enlace a un repositorio público que contenga tu solución. Puedes enviar
        la invitación al repo a
        <a class="text-secondary" href="mailto: tech.interview@ambarpartners.com"
          >tech.interview@ambarpartners.com</a
        >
        <br />
        <br />
        ¡Buena suerte!
      </p>`,
  1: `<h2 class="text-lg font-bold mb-4">
  Reto Técnico 1: Formulario de Registro de Usuarios.
</h2>
<p>
  Diseña un formulario de registro de usuarios en la primera vista.
  Asegúrate de que sea intuitivo, funcional y aplica reglas para validar
  los datos. Además, incorpora buenas prácticas de desarrollo para
  mantener un código limpio, organizado y <strong>reutilizable</strong>.
  En este caso nos gustaría evitar librerías tipo VeeValidate o Vuelidate
  para la validación.
</p>`,
  2: `<h2 class="text-lg font-bold mb-4">
  Reto Técnico 2: Vista de Datos del Usuario.
</h2>
<p>
  La segunda vista se centra en presentar datos de usuarios de manera
  clara y legible. Debes asegurarte de que la vista sea completamente
  <strong>responsive</strong> y cumpla con buenas prácticas.
</p>
`,
  3: `<h2 class="text-lg font-bold mb-4">
  Reto Técnico 3: Calendario de Eventos.
</h2>
<p >
  En la tercera vista, tu desafío consiste en arreglar un sistema de
  registro de eventos.
  <strong>La vista, por defecto, no funcionará.</strong> Estamos
  proporcionando una serie de datos que no conseguimos mostrar, ¿puedes
  ayudarnos con ello?
</p>`,
}
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
