<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <div class="w-[470px] mt-2 px-4 py-2 mx-auto text-center md:text-left md:mt-8">  
    <h3 class="text-xl font-bold md:my-2 md:text-2xl"> 
      Quais são as informações do proprietário(a)?
    </h3>
    
    <div class="flex flex-col">
      <label 
        for="residential " 
        class="font-semibold"
      >
        O proprietário(a) é
      </label>
      
      <input 
        class="w-full bg-gray-light py-2 px-2 border-gray rounded-sm focus:ring-purple" 
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
        class="font-semibold"
      >
        Nome completo
      </label>
      
      <input 
        class="w-full bg-gray-light py-2 px-2 border-gray rounded-sm focus:ring-purple" 
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
        class="font-semibold"
      >
        Nacionalidade
      </label>
      
      <input 
        class="w-full bg-gray-light py-2 px-2 border-gray rounded-sm focus:ring-purple" 
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
        class="font-semibold"
      >
      Profissão
      </label>
      
      <input 
        class="w-full bg-gray-light py-2 px-2 border-gray rounded-sm focus:ring-purple" 
        type="text" 
        name="residential"
        id="residential"
        placeholder="Ex: Gerente, Mecânico, Atendente..."
        v-model="picked"
      /> 
    </div>
      
    <button 
      class="btn-primary mt-3"
      type="submit"
    >
     Avançar
    </button>
  </div>
</template>
