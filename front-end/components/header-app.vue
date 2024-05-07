<script setup lang="ts">
import faceDoc from 'public/image/logo.svg';
import userIcon from 'public/image/user-icon.svg';

</script>

<template>
  <header class="bg-black px-5 py-2">
    <div class="flex justify-between items-center mx-auto md:w-9/12">
      <div>
        <nuxt-link to="/">
          <img class=" cursor-pointer" :src="faceDoc" alt="logo retalDoc" />
        </nuxt-link>
      </div>

      <div>
        <nuxt-link to="/">
          <button class="w-full btn-primary">
            <div class="flex justify-center items-center">
              <span class="pr-1">Área do Usuário</span>
            
              <img :src="userIcon" alt="seta para avançar" />
            </div>
          </button> 
        </nuxt-link>
      </div>
    </div>
  </header>
</template>
