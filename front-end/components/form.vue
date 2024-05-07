<script setup lang="ts">
import arrowRight from '../public/image/arrow-right.svg'
import arrowLeft from '../public/image/arrow-left.svg';

interface IInfo {
  label: string,
  placeholder?: string,
  model: number | string,
  select?: boolean,
  option?: string[],
  name?: string,
  type?: string,
  max?: number
} [];

const emit = defineEmits<{
  (e: 'submit', info: (string | number)[] ): void;
  (e: 'back'): void; 
  (e: 'return'): void;
}>();

const prop = defineProps<{
  title: string | any,
  page: number,
  info: IInfo[];
}>();

function getInfos() {
  const info = prop.info.map( item => item.model );

  emit('submit', info)
}
</script>

<template>
  <div class="w-full h-full mx-auto bg-gray-light my-2 px-4 py-4 text-center lg:max-w-[450px] lg:min-w-[340px] lg:text-left lg:my-8">
    <div v-if="page < 6">   
      <h3 class="text-xl font-bold md:my-2 md:text-2xl"> 
        {{ title }}
      </h3>

      <div class="flex flex-col" v-for="infos in info">
      <label 
        for="person" 
        class="font-semibold py-1"
      >
        {{ infos.label }}
      </label>

      <select 
        v-if="infos.select"
        v-model="infos.model"
        class="w-full bg-white mb-1 py-2 px-2 border-gray rounded-sm focus:border-x-purple focus:ring-pborder-x-purple focus:outline-none focus:ring focus:ring-opacity-40">
        <option disabled value="">{{ infos.placeholder }}</option>
        <option v-for="options in infos.option">{{ options }}</option>
      </select>

      <input 
        v-else
        class="w-full bg-white mb-1 py-2 px-2 border-gray rounded-sm focus:border-x-purple focus:ring-pborder-x-purple focus:outline-none focus:ring focus:ring-opacity-40" 
        :type="infos.type" 
        :name="infos.name" 
        :id="infos.name"
        :placeholder="infos.placeholder"
        :max="infos.max"
        v-model="infos.model"
      /> 
      </div>

      <div class="flex gap-4">
        <button 
          v-if="page > 0"
          @click="$emit('back')"
          class="w-full btn-gray mt-3"
        >
          <div class="flex justify-center items-center">
            <img :src="arrowLeft" alt="seta para voltar" />
            <span class="pl-1">Voltar</span>
          </div>
        </button> 

        <button 
          class="w-full btn-primary mt-3"
          @click.prevent="getInfos"
        >
          <div class="flex justify-center items-center">
            <span class="pr-1">Avançar</span>
          
            <img :src="arrowRight" alt="seta para avançar" />
          </div>
        </button>
      </div>
    </div>

    <div v-else>
      <h3 class="text-xl text-center font-bold md:my-2 md:text-2xl"> 
        Você já pode imprimir
      </h3>

      <button 
        @click="$emit('return')"
        class="w-full btn-primary mt-3"
      >
        retornar formulário
      </button>
    </div>
  </div>
</template>