<script setup lang="ts">
import { computed } from 'vue';
import { form } from '../useful/info';
import { useInfoPrint } from '../store/infoPrint';

const { submitStorageUser } = useInfoPrint();

const page = ref<number>(0);

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
  return page.value > 1 ? form[page.value] : form[page.value];
})

const title = computed(()=>{
  return page.value > 1 ? 
    "Quais são as informações do inquilino(a)?" : 
    "Quais são as informações do proprietário(a)?";
})

</script>

<template>
  <div class="block sm:flex sm:justify-between">
    <Form
      :title="title"
      :page="page"
      :info="info"
      @submit="submit"
      @back="back"
      @return="clear"
    />
  
    <Page  />
  </div>
</template>