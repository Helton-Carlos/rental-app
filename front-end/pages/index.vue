<script setup lang="ts">
import contract from '../public/image/contract.png'
</script>

<template>
  <div class="max-w-[900px] mt-8 flex justify-between items-center mx-auto">
    <div class="w-[470px] mt-8 px-4 py-2 text-left">
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
        :src="contract" 
        alt="imagem de contrato" 
      />
    </div>
  </div>

  <section-card />
</template>
