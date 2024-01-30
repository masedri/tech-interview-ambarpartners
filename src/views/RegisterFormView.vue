<template>
  <MainLayout>
    <form
      class="bg-white p-10 rounded-lg shadow-lg min-w-full"
      @submit.prevent="submit"
    >
      <InputAP
        id="username"
        v-model="form.name"
        :error-message="VALID_MESSAGES.name"
        label="Username*"
        :maxlength="64"
        name="username"
        placeholder="username"
        required
        type="text"
        :validation="isValidName"
      />
      <InputAP
        id="email"
        v-model="form.email"
        :error-message="VALID_MESSAGES.email"
        label="Email*"
        name="email"
        placeholder="@email"
        required
        type="text"
        :validation="isValidEmail"
      />
      <InputAP
        id="password"
        v-model="form.password"
        :error-message="VALID_MESSAGES.password"
        label="Password*"
        placeholder="password"
        required
        type="password"
        :validation="isPasswordValid"
      />
      <InputAP
        id="confirmPassword"
        v-model="confirmPassword"
        :error-message="VALID_MESSAGES.confirmPassword"
        label="Confirm Password*"
        placeholder="fconfirm password"
        required
        type="password"
        :validation="isPasswordMatch"
      />
      <button
        class="bg-primary w-full mt-6 rounded-lg px-4 py-2 text-lg text-white font-semibold font-sans"
        :class="{ 'bg-gray-500': !isValidForm }"
        :disabled="!isValidForm"
        type="submit"
      >
        Register
      </button>
    </form>
  </MainLayout>
</template>
<script setup lang="ts">
import InputAP from '@/components/InputAP.vue'
import { composableRegister } from '@/composables/register'
import MainLayout from '@/layouts/MainLayout.vue'
import type { ValidMessage } from '@/types'
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

const { form, confirmPassword, isValidName, isValidEmail, isPasswordValid, isPasswordMatch, isValidForm } = composableRegister()

const VALID_MESSAGES: ValidMessage = {
  name: 'Name is required and must have a maximum of 64 letters.',
  email: 'Please enter a valid email address.',
  password: 'Password must have at least 8 characters, including a mix of letters, numbers, and special characters.',
  confirmPassword: 'Passwords do not match.',
}

const submit = () => {
  /*
  No es necesario integrar ningún cliente http. Simplemente valida que los datos son válidos
  antes de pintar el payload por consola mediante console.log(), Por ejemplo:
  */
  if (isValidForm) {
    console.log(form)
  }
}
</script>
