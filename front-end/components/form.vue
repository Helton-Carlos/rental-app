<script setup lang="ts">
interface IInfo {
  label: string,
  placeholder: string,
  model: number | string,
  select?: boolean,
  option?: string[],
  name?: string,
  type?: string
} [];

const emit = defineEmits<{
  (e: 'submit', info: (string | number)[] ): void;
  (e: 'back'): void
}>();

const prop = defineProps<{
  title: string,
  page: number,
  info: IInfo[];
}>();

function getInfos() {
  const info = prop.info.map( item => item.model );

  emit('submit', info)
}
</script>

<template>
  <form 
    class="w-[550px] h-full bg-gray-light my-2 px-4 py-4 text-center md:text-left md:my-8"
    @submit.prevent="getInfos"
  >   
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
      class="w-full bg-white mb-1 py-2 px-2 border-gray rounded-sm">
      <option disabled value="">{{ infos.placeholder }}</option>
      <option v-for="options in infos.option">{{ options }}</option>
    </select>

    <input 
      v-else
      class="w-full bg-white mb-1 py-2 px-2 border-gray rounded-sm" 
      :type="infos.type" 
      :name="infos.name" 
      :id="infos.name"
      :placeholder="infos.placeholder"
      v-model="infos.model"
    /> 
    </div>

    <div class="flex gap-4">
    <button 
      v-if="page >= 1"
      @click="$emit('back')"
      class="w-full btn-gray mt-3"
      type="submit"
    >
      Voltar
    </button> 

    <button 
      class="w-full btn-primary mt-3"
      type="submit"
    >
      Avançar
    </button>
    </div>
  </form>
</template>