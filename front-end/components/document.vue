<script setup lang="ts">
import { computed } from 'vue';
import { form } from '../useful/info';
import { useInfoPrint } from '../store/infoPrint';

const { submitStorageUser } = useInfoPrint();

const page = ref<number>(0);
const route = useRoute();

function submit(data: (string | number)[]) { 
  submitStorageUser(page.value, data)

  more()
}

function more() {
  page.value++
}

function back() {
  page.value--
}

function clear() {
  page.value = 0
}

const info = computed(()=>{
 return form[page.value]
})

const title = computed(()=>{
   if(page.value < 2) return "Quais são as informações do proprietário(a)?"
   if(page.value <= 3) return "Quais são as informações do inquilino(a)?" 
   if(page.value === 4) return "Quais são as informações da propridade?" 
   if(page.value === 5) return "Quais são as informações do contrato?" 
})
</script>

<template>
  <div class="block lg:flex lg:justify-between">
    <Form
      :title="title"
      :page="page"
      :info="info"
      @submit="submit"
      @back="back"
      @return="clear"
    />
  
    <PageResidential v-if="route.name === 'residential'" />
    <PageBusiness v-else />
  </div>
</template>