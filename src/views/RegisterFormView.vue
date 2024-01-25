<template>
  <MainLayout>
    <form
      class="bg-white p-10 rounded-lg shadow-lg min-w-full"
      @submit.prevent="submit"
    >
      <div>
        <div class="font-semibold block my-3 text-md" for="username">
          Username
        </div>
        <input
          id="username"
          class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
          type="text"
          name="username"
          placeholder="username"
        />
      </div>
      <div>
        <div class="font-semibold block my-3 text-md" for="email">Email</div>
        <input
          id="email"
          class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outlsine-none"
          type="text"
          name="email"
          placeholder="@email"
        />
      </div>
      <div>
        <div class="font-semibold block my-3 text-md" for="password">
          Password
        </div>
        <input
          id="password"
          class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
          type="text"
          name="password"
          placeholder="password"
        />
      </div>
      <div>
        <div class="font-semibold block my-3 text-md" for="confirm">
          Confirm password
        </div>
        <input
          id="confirm"
          class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
          type="text"
          name="confirm"
          placeholder="confirm password"
        />
      </div>
      <button
        type="submit"
        class="bg-primary w-full mt-6 rounded-lg px-4 py-2 text-lg text-white font-semibold font-sans"
      >
        Register
      </button>
    </form>
  </MainLayout>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue'

import MainLayout from '@/layouts/MainLayout.vue'
import type { Form } from '@/types'

/*
Reto 1: Validación de formularios

En este formulario de registro, vamos a pedir a los usuarios que nos proporcionen
un nombre, un email y una contraseña (dos veces). Las validaciones serán las siguientes:

  Nombre                Requerido | Máximo 64 letras
  Email                 Requerido | Formato Email
  Contraseña            Requerido | 8 caracteres alfanuméricos, un número y un caracter especial
  Repetir Contraseña    Requerido | Misma contraseña que la anterior

Siéntete libre de modificar tanto código como sea necesario, recuerda que el código proporcionado es sólo un ejemplo.
*/
const formIsValid = ref<boolean>(false)

const form = reactive<Form>({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
})

const submit = () => {
  /*
  No es necesario integrar ningún cliente http. Simplemente valida que los datos son válidos
  antes de pintar el payload por consola mediante console.log(), Por ejemplo:
  */
  if (formIsValid.value) {
    console.log(form)
  }
}
</script>
