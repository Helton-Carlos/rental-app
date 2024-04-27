<script setup lang="ts">
import {ref} from 'vue';

const picked = ref<string>('')
</script>

<template>
   <div class="w-[470px] bg-gray-light my-2 px-4 py-4 mx-auto text-center md:text-left md:my-8">  
    <h3 class="text-xl font-bold md:my-2 md:text-2xl"> 
      Quais são as informações do proprietário(a)?
    </h3>
    
    <div class="flex flex-col">
      <label 
        for="residential " 
        class="font-semibold py-1"
      >
        O proprietário(a) é:
      </label>
      
      <input 
        class="w-full bg-white mb-1 py-2 px-2 border-gray rounded-sm focus:ring-purple" 
        type="text" 
        name="residential" 
        id="residential"
        placeholder="Pessoa Física (CPF)"
        v-model="picked"
      /> 
    </div>

    <div class="flex flex-col">
      <label 
        for="residential" 
        class="font-semibold pb-2"
      >
        Nome completo:
      </label>
      
      <input 
        class="w-full bg-white mb-1 py-2 px-2 border-gray rounded-sm focus:ring-purple" 
        type="text" 
        name="residential" 
        id="residential"
        placeholder="Ex: João da Silva"
        v-model="picked"
      /> 
    </div>

    <div class="flex flex-col">
      <label 
        for="residential" 
        class="font-semibold pb-2"
      >
        Nacionalidade:
      </label>
      
      <input 
        class="w-full bg-white mb-1 py-2 px-2 border-gray rounded-sm focus:ring-purple" 
        type="text" 
        name="residential" 
        id="residential"
        placeholder="Ex: Brasileiro"
        v-model="picked"
      /> 
    </div>
              
    <div>
      <label 
        for="residential" 
        class="font-semibold pb-2"
      >
      Profissão:
      </label>
      
      <input 
        class="w-full bg-white mb-1 py-2 px-2 border-gray rounded-sm focus:ring-purple" 
        type="text" 
        name="residential"
        id="residential"
        placeholder="Ex: Gerente, Mecânico, Atendente..."
        v-model="picked"
      /> 
    </div>
      
    <button 
      class="w-full btn-primary mt-3"
      type="submit"
    >
     Avançar
    </button>
  </div>
</template>