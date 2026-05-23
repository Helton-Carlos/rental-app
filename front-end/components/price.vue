<script setup lang="ts">
const router = useRouter();

function buy() {
  router.push({ name: 'login' });
}
</script>

<template>
  <section
    class="bg-purple mx-auto mt-2 px-1 py-5 md:my-2 lg:w-3/4 lg:my-12 lg:mx-auto rounded-lg"
  >
    <div
      class="text-center text-white lg:h-[400px] h-[300px] lg:pt-[80px] pt-[20px]"
    >
      <h2 class="mb-2 text-center text-3xl font-bold">Escolha seu plano</h2>
      <p class="text-white/80 text-base max-w-md mx-auto">
        Comece grátis ou desbloqueie recursos avançados para personalizar seus
        contratos.
      </p>
    </div>

    <div
      class="grid px-2 md:px-2 lg:grid-cols-3 xl:px-2"
      style="margin-top: -200px"
    >
      <!-- Plano Básico -->
      <div class="p-0 py-12">
        <div
          class="block h-full rounded-lg bg-white shadow-md lg:rounded-tr-none lg:rounded-br-none"
        >
          <div class="border-b-2 border-neutral-100 p-6 text-center">
            <p class="mb-4 text-sm uppercase tracking-wide text-gray-500">
              <strong>Básico</strong>
            </p>
            <h3 class="mb-2 text-3xl font-bold">Grátis</h3>
            <p class="text-sm text-gray-400 mb-4">Para sempre</p>

            <span class="text-purple font-semibold text-sm"> Plano atual </span>
          </div>
          <div class="p-6">
            <p
              class="text-xs text-gray-400 uppercase tracking-wide mb-3 font-medium"
            >
              Inclui:
            </p>
            <ol class="list-inside">
              <li class="mb-4 flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="mr-3 h-5 w-5 text-green-500 flex-shrink-0"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                Contrato de Locação Residencial
              </li>
              <li class="mb-4 flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="mr-3 h-5 w-5 text-green-500 flex-shrink-0"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                Contrato de Locação Comercial
              </li>
            </ol>
          </div>
        </div>
      </div>

      <!-- Plano Pessoa Física (destaque) -->
      <div>
        <div
          class="block h-full rounded-lg bg-white shadow-xl ring-2 ring-purple"
          style="z-index: 1"
        >
          <div class="border-b-2 border-neutral-100 p-6 text-center">
            <p class="mb-4 text-sm uppercase tracking-wide text-gray-500">
              <strong>Pessoa Física</strong>
            </p>
            <h3 class="mb-2 text-3xl font-bold">R$ 49,99</h3>
            <p class="text-sm text-gray-400 mb-4">por ano</p>

            <button type="button" class="btn-primary" @click="buy">
              Começar agora
            </button>
          </div>
          <div class="p-6">
            <p
              class="text-xs text-gray-400 uppercase tracking-wide mb-3 font-medium"
            >
              Tudo do Básico, mais:
            </p>
            <ol class="list-inside">
              <li class="mb-4 flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="mr-3 h-5 w-5 text-green-500 flex-shrink-0"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                Remover cláusulas do contrato
              </li>
              <li class="mb-4 flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="mr-3 h-5 w-5 text-green-500 flex-shrink-0"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                Adicionar cláusulas personalizadas
              </li>
            </ol>
          </div>
        </div>
      </div>

      <!-- Plano Empresarial -->
      <div class="py-12">
        <div
          class="block h-full rounded-lg bg-white shadow-md lg:rounded-tl-none lg:rounded-bl-none"
        >
          <div class="border-b-2 border-neutral-100 p-6 text-center">
            <p class="mb-4 text-sm uppercase tracking-wide text-gray-500">
              <strong>Empresarial</strong>
            </p>
            <h3 class="mb-2 text-3xl font-bold">R$ 99,99</h3>
            <p class="text-sm text-gray-400 mb-4">por ano</p>

            <button type="button" class="btn-primary" @click="buy">
              Começar agora
            </button>
          </div>
          <div class="p-6">
            <p
              class="text-xs text-gray-400 uppercase tracking-wide mb-3 font-medium"
            >
              Tudo do Pessoa Física, mais:
            </p>
            <ol class="list-inside">
              <li class="mb-4 flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="mr-3 h-5 w-5 text-green-500 flex-shrink-0"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                Múltiplos contratos simultâneos
              </li>
              <li class="mb-4 flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="mr-3 h-5 w-5 text-green-500 flex-shrink-0"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                Suporte prioritário
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
