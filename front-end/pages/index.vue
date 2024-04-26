<script setup lang="ts">
import contract from '../public/image/contract.png';
import doc from '../public/image/icon-doc.svg'
import print from '../public/image/icon-print.svg'
import signature from '../public/image/icon-signature.svg'

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
]
</script>

<template>
  <div>  
    <div class="max-w-[900px] mt-8 flex justify-between items-center mx-auto">
      <div class="w-[470px] mt-8 px-4 py-2 mx-auto text-center md:text-left">
        <h2 class="text-3xl font-bold my-2">
          Contrato de Locação Residencial e Comercial
          Selecione o modelo:
        </h2>
        
        <div class="flex flex-col gap-1 mt-2">
          <span class="text-gray">
            Selecione o modelo:
          </span>

          <div class="bg-gray-light px-3 py-3 flex items-center rounded-lg">
            <input 
              class="w-4 h-4 text-purple bg-purple border-gray focus:ring-purple" 
              type="radio" 
              name="residencial" 
              id="residencial"
            > 
            <span class="pl-1 font-semibold">Locação Residencial</span>
          </div>

          <div class="bg-gray-light px-3 py-3 flex items-center rounded-lg">
            <input 
              class="w-4 h-4 text-purple bg-purple border-gray focus:ring-purple" 
              type="radio" 
              name="comercio" 
              id="comercio"
            > 
            <span class="pl-1 font-semibold">Locação  Comercial</span>
          </div>

          <button class="btn-primary mt-3">Avançar</button>
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

    <div>
      <section-card
        :info="section"
      />
    </div>

    <information />
  </div>
</template>
