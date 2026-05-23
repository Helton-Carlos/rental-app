<script setup lang="ts">
const router = useRouter();

function buy() {
  router.push({ name: 'login' });
}
</script>

<template>
  <section class="mx-4 my-8 lg:w-3/4 lg:my-12 lg:mx-auto">
    <div class="text-center mb-6">
      <h2 class="text-3xl font-bold">Escolha seu plano</h2>
      <p class="text-gray text-xl mt-2 max-w-md mx-auto">
        Comece grátis ou desbloqueie recursos avançados para personalizar seus
        contratos.
      </p>
    </div>

    <div class="grid gap-4 md:grid-cols-3 md:items-center">
      <!-- Plano Básico -->
      <div
        class="bg-white rounded-lg border border-gray-light p-5 flex flex-col h-full"
      >
        <div class="text-center pb-4 border-b border-gray-light">
          <p
            class="text-base uppercase tracking-wide text-gray font-semibold mb-2"
          >
            Básico
          </p>
          <h3 class="text-3xl font-bold">Grátis</h3>
          <p class="text-base text-gray mt-1">Para sempre</p>
        </div>

        <div class="pt-4 flex-1">
          <p class="text-base text-gray font-medium mb-3">Inclui:</p>
          <ul class="space-y-3">
            <li class="flex items-center gap-2 text-base">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2.5"
                stroke="currentColor"
                class="w-5 h-5 text-green flex-shrink-0"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              Contrato de Locação Residencial
            </li>
            <li class="flex items-center gap-2 text-base">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2.5"
                stroke="currentColor"
                class="w-5 h-5 text-green flex-shrink-0"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              Contrato de Locação Comercial
            </li>
          </ul>
        </div>

        <div class="mt-5">
          <span
            class="block w-full text-center py-3 text-purple font-semibold text-base border-2 border-purple rounded"
          >
            Plano atual
          </span>
        </div>
      </div>

      <!-- Plano Pessoa Física (destaque) -->
      <div
        class="bg-purple rounded-lg p-5 flex flex-col h-full md:py-8 md:scale-105 shadow-lg"
      >
        <div class="text-center pb-4 border-b border-white/20">
          <span
            class="inline-block bg-white text-purple text-sm font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-3"
          >
            Mais popular
          </span>
          <p
            class="text-base uppercase tracking-wide text-white/70 font-semibold mb-2"
          >
            Pessoa Física
          </p>
          <h3 class="text-3xl font-bold text-white">R$ 49,99</h3>
          <p class="text-base text-white/60 mt-1">por ano</p>
        </div>

        <div class="pt-4 flex-1">
          <p class="text-base text-white/70 font-medium mb-3">
            Tudo do Básico, mais:
          </p>
          <ul class="space-y-3">
            <li class="flex items-center gap-2 text-base text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2.5"
                stroke="currentColor"
                class="w-5 h-5 text-green flex-shrink-0"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              Remover cláusulas do contrato
            </li>
            <li class="flex items-center gap-2 text-base text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2.5"
                stroke="currentColor"
                class="w-5 h-5 text-green flex-shrink-0"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              Adicionar cláusulas personalizadas
            </li>
            <li class="flex items-center gap-2 text-base text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2.5"
                stroke="currentColor"
                class="w-5 h-5 text-green flex-shrink-0"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              Edição ilimitada
            </li>
          </ul>
        </div>

        <div class="mt-5">
          <button
            type="button"
            class="w-full bg-white text-purple font-semibold py-3 rounded text-base hover:bg-gray-light transition-colors"
            @click="buy"
          >
            Começar agora
          </button>
        </div>
      </div>

      <!-- Plano Empresarial -->
      <div
        class="bg-white rounded-lg border border-gray-light p-5 flex flex-col h-full"
      >
        <div class="text-center pb-4 border-b border-gray-light">
          <p
            class="text-base uppercase tracking-wide text-gray font-semibold mb-2"
          >
            Empresarial
          </p>
          <h3 class="text-3xl font-bold">R$ 99,99</h3>
          <p class="text-base text-gray mt-1">por ano</p>
        </div>

        <div class="pt-4 flex-1">
          <p class="text-base text-gray font-medium mb-3">
            Tudo do Pessoa Física, mais:
          </p>
          <ul class="space-y-3">
            <li class="flex items-center gap-2 text-base">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2.5"
                stroke="currentColor"
                class="w-5 h-5 text-green flex-shrink-0"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              Múltiplos contratos simultâneos
            </li>
            <li class="flex items-center gap-2 text-base">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2.5"
                stroke="currentColor"
                class="w-5 h-5 text-green flex-shrink-0"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              Suporte prioritário
            </li>
            <li class="flex items-center gap-2 text-base">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2.5"
                stroke="currentColor"
                class="w-5 h-5 text-green flex-shrink-0"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              Gestão de múltiplos usuários
            </li>
          </ul>
        </div>

        <div class="mt-5">
          <button
            type="button"
            class="btn-primary w-full py-3 text-base"
            @click="buy"
          >
            Começar agora
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
