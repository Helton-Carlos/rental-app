<script setup lang="ts">
import { ref } from 'vue';
import { useHtmlToPaper } from '../composables/useHtmlToPaper';

const { print } = useHtmlToPaper();

const contentToPrint = ref(null);

function handlePrint() {
  if (contentToPrint.value) {
    print(contentToPrint.value);
  }
};
</script>

<template>
  <div class="w-[580px] bg-white my-2 px-4 py-4 mx-auto">
    <div ref="contentToPrint">
     <p class="font-bold">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ad nemo qui 
      numquam sapiente animi sit voluptas labore repellendus aspernatur perferendis 
      praesentium, quaerat quos ipsum accusantium iusto eius aut. Totam.
     </p>
    </div>

    <button 
      class="w-full btn-primary mt-3"
      @click="handlePrint"
    >
     Imprimir
    </button>
  </div>
</template>

<style>
@media print {
  @page {
    size: landscape
  }
}
</style>
