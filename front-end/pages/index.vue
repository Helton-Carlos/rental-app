<script setup lang="ts">
import { ref } from 'vue';
import doc from '../public/image/icon-doc.svg';
import print from '../public/image/icon-print.svg';
import signature from '../public/image/icon-signature.svg';
import arrowRight from '../public/image/arrow-right.svg';
import Contract from '../public/image/contract.png';

const router = useRouter();

const section = [
  {
    icons: doc,
    title: 'Preencha os dados',
    context:
      'Responda perguntas simples e seu contrato fica pronto em minutos.',
  },
  {
    icons: print,
    title: 'Baixe em PDF',
    context:
      'Seu documento formatado e pronto para uso, disponível para download imediato.',
  },
  {
    icons: signature,
    title: 'Assine e formalize',
    context: 'Imprima para assinatura física ou utilize assinatura digital.',
  },
];

const picked = ref<string>('');
const showError = ref(false);

function init() {
  if (picked.value) {
    showError.value = false;
    router.push({ name: picked.value });
  } else {
    showError.value = true;
  }
}
</script>

<template>
  <div>
    <div
      class="mt-8 mx-4 flex flex-col md:flex-row justify-between items-center lg:w-3/4 lg:my-12 lg:mx-auto gap-4"
    >
      <div
        class="w-full md:max-w-[470px] mt-2 py-2 mx-auto text-center md:text-left md:mt-8"
      >
        <h1 class="text-2xl font-bold md:my-2 md:text-3xl leading-tight">
          Seu contrato de locação pronto em minutos
        </h1>

        <p class="text-gray mt-2 text-base">
          Gere contratos residenciais ou comerciais com cláusulas atualizadas e
          prontos para assinar.
        </p>

        <div class="flex flex-col gap-1 mt-4">
          <span class="text-sm text-gray font-medium">
            Qual tipo de contrato você precisa?
          </span>

          <form @submit.prevent="init" class="flex flex-col gap-2">
            <label
              for="residential"
              class="bg-gray-light px-3 py-3 flex items-center rounded-lg cursor-pointer hover:bg-gray-200 transition-colors"
              :class="{ 'ring-2 ring-purple': picked === 'residential' }"
            >
              <input
                class="w-4 h-4 accent-purple"
                type="radio"
                name="contract-type"
                id="residential"
                value="residential"
                v-model="picked"
              />
              <span class="pl-2 font-semibold">Locação Residencial</span>
            </label>

            <label
              for="business"
              class="bg-gray-light px-3 py-3 flex items-center rounded-lg cursor-pointer hover:bg-gray-200 transition-colors"
              :class="{ 'ring-2 ring-purple': picked === 'business' }"
            >
              <input
                class="w-4 h-4 accent-purple"
                type="radio"
                name="contract-type"
                id="business"
                value="business"
                v-model="picked"
              />
              <span class="pl-2 font-semibold">Locação Comercial</span>
            </label>

            <p v-if="showError" class="text-red text-sm mt-1">
              Selecione um tipo de contrato para continuar.
            </p>

            <button class="btn-primary mt-3" type="submit">
              <div class="flex justify-center items-center">
                <span class="pr-1">Criar meu contrato</span>

                <img class="cursor-pointer" :src="arrowRight" alt="Avançar" />
              </div>
            </button>
          </form>
        </div>
      </div>

      <div class="hidden md:block flex-shrink-0 max-w-[350px]">
        <img
          class="w-full h-auto"
          :src="Contract"
          alt="Ilustração de um contrato de locação"
        />
      </div>
    </div>

    <section-card :info="section" />

    <information />

    <price />
  </div>
</template>
