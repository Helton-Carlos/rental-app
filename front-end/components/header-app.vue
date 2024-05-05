<script setup lang="ts">
import faceDoc from 'public/image/logo.svg';
</script>

<template>
  <header class="bg-black px-5 py-2">
    <div class="mx-auto md:w-9/12">
      <nuxt-link to="/">
        <img class=" cursor-pointer" :src="faceDoc" alt="logo retalDoc" />
      </nuxt-link>
    </div>
  </header>
</template>
