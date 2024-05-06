<script setup lang="ts">
import { ref } from 'vue';
import contract from '../public/image/contract.png';
import doc from '../public/image/icon-doc.svg';
import print from '../public/image/icon-print.svg';
import signature from '../public/image/icon-signature.svg';

const router = useRouter();

const section = [
  {  
    icons: doc,
    title: "Crie seu documento",
    context: "Responda algumas perguntas para criar seu documento em minutos."
  },
  {  
    icons: print,
    title: "Salve e baixe",
    context: "O seu documento será disponibilizado nos formatos Word e PDF."
  },
  {  
    icons: signature,
    title: "Imprima e assine",
    context: "Você também pode optar por assinar digitalmente."
  },
];

const picked = ref<string>('')

function init() {
  if(picked.value) {
    router.push({ name: picked.value })
  }
}
</script>

<template>
  <div>  
    <div class="mt-8 mx-8 flex justify-between items-center lg:w-3/4 lg:my-12 lg:mx-auto">
      <div class="w-[470px] mt-2 py-2 mx-auto text-center md:text-left md:mt-8">
        <h2 class="text-2xl font-bold md:my-2 md:text-3xl">
          Contrato de Locação Residencial e Comercial
          Selecione o modelo:
        </h2>
        
        <div class="flex flex-col gap-1 mt-2">
          <span class="text-gray">
            Selecione o modelo:
          </span>

          <form 
            @submit.prevent="init" 
            class="flex flex-col gap-2"
          >
            <div class="bg-gray-light px-2 py-3 flex items-center rounded-lg">
              <input 
                class="w-4 h-4 text-purple bg-purple border-gray focus:ring-purple" 
                type="radio" 
                name="residential" 
                id="residential"
                value="residential"
                v-model="picked"
              > 
              <label 
                for="residential" 
                class="pl-1 font-semibold"
              >
                Locação Residencial
              </label>
            </div>

            <div class="bg-gray-light px-3 py-3 flex items-center rounded-lg">
              <input 
                class="w-4 h-4 text-purple bg-purple border-gray focus:ring-purple" 
                type="radio" 
                name="business" 
                id="business"
                value="business"
                v-model="picked"
              > 
              <label 
                for="business" 
                class="pl-1 font-semibold"
              >
                Locação Comercial
              </label>
            </div>

            <button 
              class="btn-primary mt-3"
              type="submit"
            >
              Avançar
            </button>
          </form>
        </div>
      </div>

      <div>
        <img 
          class="hidden md:block"
          :src="contract" 
          alt="imagem de contrato" 
        />
      </div>
    </div>
 
    <section-card
      :info="section"
    />

    <information />
  </div>
</template>
