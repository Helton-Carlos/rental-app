<script setup lang="ts">
import userIcon from '../public/image/user-icon.svg';
import Logo from '../public/image/logo.svg';
</script>

<template>
  <header class="bg-black px-5 py-2">
    <div class="flex justify-between items-center mx-auto md:w-9/12">
      <div>
        <nuxt-link to="/">
          <img 
            class="cursor-pointer" 
            :src="Logo" 
            alt="logo retalDoc"
          />
        </nuxt-link>
      </div>

      <div>
        <nuxt-link to="/login">
          <button class="w-full btn-primary">
            <div class="flex justify-center items-center">
              <span class="hidden pr-1 md:block">Área do Usuário</span>
              <img 
                :src="userIcon" 
                alt="seta para avançar"
              />
            </div>
          </button> 
        </nuxt-link>
      </div>
    </div>
  </header>
</template>
