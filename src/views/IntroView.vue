<template>
  <MainLayout>
    <div class="bg-white rounded-lg shadow-lg p-6 my-4 text-sm">
      <p class="mb-6">
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
        la invitación al repo a tech.interview@ambarpartners.com.
        <br />
        <br />
        ¡Buena suerte!
      </p>

      <h2 class="text-lg font-bold mb-4">
        Reto Técnico 1: Formulario de Registro de Usuarios.
      </h2>
      <p class="mb-6">
        Diseña un formulario de registro de usuarios en la primera vista.
        Asegúrate de que sea intuitivo, funcional y aplica reglas para validar
        los datos. Además, incorpora buenas prácticas de desarrollo para
        mantener un código limpio, organizado y <strong>reutilizable</strong>.
        En este caso nos gustaría evitar librerías tipo VeeValidate o Vuelidate
        para la validación.
      </p>

      <h2 class="text-lg font-bold mb-4">
        Reto Técnico 2: Vista de Datos del Usuario.
      </h2>
      <p class="mb-6">
        La segunda vista se centra en presentar datos de usuarios de manera
        clara y legible. Debes asegurarte de que la vista sea completamente
        <strong>responsive</strong> y cumpla con buenas prácticas.
      </p>

      <h2 class="text-lg font-bold mb-4">
        Reto Técnico 3: Calendario de Eventos.
      </h2>
      <p class="mb-6">
        En la tercera vista, tu desafío consiste en arreglar un sistema de
        registro de eventos.
        <strong>La vista, por defecto, no funcionará.</strong> Estamos
        proporcionando una serie de datos que no conseguimos mostrar, ¿puedes
        ayudarnos con ello?
      </p>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from '@/layouts/MainLayout.vue'
</script>
