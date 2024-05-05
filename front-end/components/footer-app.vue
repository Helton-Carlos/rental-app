<script setup lang="ts">
import faceDoc from 'public/image/logo.svg';
</script>

<template>
  <header class="bg-black px-5 pt-2">
    <div class="w-full mx-auto flex justify-between py-2 md:w-9/12">
      <nuxt-link to="/">
        <img class=" cursor-pointer" :src="faceDoc" alt="logo retalDoc" />
      </nuxt-link>

      <nav>
        <ul class="text-white">
          <li>- Documentação</li>
          <li>- Fale conosco</li>
        </ul>
      </nav>
    </div>

    <div class="text-center text-white mt-2">
      <hr />

      <p class=" py-1">Helton Brito</p> 
    </div>
  </header>
</template>
