<script setup lang="ts">
import { useStore } from '../../store/user';

const { getUserStore } = useStore();
const store =  getUserStore();
</script>

<template>
 <div class="mx-5 md:mx-2">
    <h2 class="text-2xl mt-10 font-bold md:my-2 md:text-3xl">
      Dashboard
    </h2>  

    <p class="pb-1 text-xl">Seja bem-vindo(a), <strong>{{ store?.name }}</strong></p>
    <p>Plano: <span class="bg-purple rounded-lg py px-2 text-white">Básico</span></p>
  </div>
</template>
