<script setup lang="ts">
import { computed } from 'vue'
import { form } from '../useful/info';
import { useStorage } from '@vueuse/core';

const page = ref<number>(0);
const MODEL_OWNERS_1 = ref<(string | number)[]>([]);
const MODEL_OWNERS_2 = ref<(string | number)[]>([]);

const MODEL_TENANT_1 = ref<(string | number)[]>([]);
const MODEL_TENANT_2 = ref<(string | number)[]>([]);

useStorage('RE-OWNERS-1', MODEL_OWNERS_1);
useStorage('RE-OWNERS-2', MODEL_OWNERS_2);

useStorage('RE-TENANT-1', MODEL_TENANT_1);
useStorage('RE-TENANT-2', MODEL_TENANT_2);

function submit(data: (string | number)[]) {
  if( page.value === 0) MODEL_OWNERS_1.value = data;
  if( page.value === 1) MODEL_OWNERS_2.value = data;

  if( page.value === 2) MODEL_TENANT_1.value = data;
  if( page.value === 3) MODEL_TENANT_2.value = data;

  page.value++
}

function back() {
  page.value--
}

const info = computed(()=>{
  return page.value >=1 ? form[page.value] : form[page.value];
})

const title = computed(()=>{
  return page.value >=1 ? 
    "Quais são as informações do inquilino(a)?" : 
    "Quais são as informações do proprietário(a)?";
})

</script>

<template>
  <div class="flex justify-between">

    <Form
      :title="title"
      :page="page"
      :info="info"
      @back="back"
      @submit="submit"
    />
  
    <Page />
  </div>
</template>