<script setup lang="ts">
</script>

<template>
  <section class="bg-purple mx-auto mt-2 px-1 py-5 md:my-2 lg:w-3/4 lg:my-12 lg:mx-auto">
    <div class="text-center text-white lg:h-[400px] h-[300px] lg:pt-[80px] pt-[20px]">
      <h2 class="mb-2 text-center text-3xl font-bold">Planos</h2>
    </div>

    <div class="grid px-2 md:px-2 lg:grid-cols-3 xl:px-2" style="margin-top: -200px">
      <div class="p-0 py-12">
        <div
          class="block h-full rounded-lg bg-white shadow-md dark:bg-neutral-700 lg:rounded-tr-none lg:rounded-br-none">
          <div class="border-b-2 border-neutral-100 border-opacity-100 p-6 text-center dark:border-opacity-10">
            <p class="mb-4 text-sm uppercase">
              <strong>Básico</strong>
            </p>
            <h3 class="mb-6 text-3xl">
              <strong>Free</strong>
            </h3>

            <a 
              class="text-purple underline font-bold"
            >
              Padrão
            </a>
          </div>
          <div class="p-6">
            <ol class="list-inside">
              <li class="mb-4 flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                  stroke="currentColor" class="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  Documento de Locação Residencial
              </li>
              <li class="mb-4 flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                  stroke="currentColor" class="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  Documento de Locação Comercial
              </li>
            </ol>
          </div>
        </div>
      </div>

      <div>
        <div
          class="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
          style="z-index: 1">
          <div class="border-b-2 border-neutral-100 border-opacity-100 p-6 text-center dark:border-opacity-10">
            <p class="mb-4 text-sm uppercase">
              <strong>Usuário pessoa fisica</strong>
            </p>
            <h3 class="mb-6 text-3xl">
              <strong>R$ 49,99</strong>
              <small class="text-base text-neutral-500 dark:text-neutral-300">/Anual</small>
            </h3>

            <button 
              type="button"
              class="btn-primary"
            >
              Comprar
            </button>
          </div>
          <div class="p-6">
            <ol class="list-inside">
              <li class="mb-4 flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                  stroke="currentColor" class="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  Documento de Locação Residencial
              </li>
              <li class="mb-4 flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                  stroke="currentColor" class="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  Documento de Locação Comercial
              </li>
              <li class="mb-4 flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                  stroke="currentColor" class="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  Remoção de clausura
              </li>
              <li class="mb-4 flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                  stroke="currentColor" class="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  Adicionar cláusula 
              </li>
            </ol>
          </div>
        </div>
      </div>

      <div class="py-12">
        <div
          class="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 lg:rounded-tl-none lg:rounded-bl-none">
          <div class="border-b-2 border-neutral-100 border-opacity-100 p-6 text-center dark:border-opacity-10">
            <p class="mb-4 text-sm uppercase">
              <strong>Plano empresarial</strong>
            </p>
            <h3 class="mb-6 text-3xl">
              <strong>R$ 99,99</strong>
              <small class="text-base text-neutral-500 dark:text-neutral-300">/Anual</small>
            </h3>

            <button 
              type="button"
              class="btn-primary"
            >
              Comprar
            </button>
          </div>
          <div class="p-6">
            <ol class="list-inside">
              <li class="mb-4 flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                  stroke="currentColor" class="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  Documento de Locação Residencial
              </li>
              <li class="mb-4 flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                  stroke="currentColor" class="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  Documento de Locação Comercial
              </li>
              <li class="mb-4 flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                  stroke="currentColor" class="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  Remoção de clausura
              </li>
              <li class="mb-4 flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                  stroke="currentColor" class="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  Adicionar cláusula 
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
