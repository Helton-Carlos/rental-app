<script setup lang="ts">
</script>

<template>
  <header class="bg-black px-5 pt-2 py-4">
    <div class="w-full mx-auto flex justify-between py-4 md:w-9/12">
      <nuxt-link to="/">
        <NuxtImg 
          src="../public/image/logo.svg"  
          alt="logo retalDoc"
        />
      </nuxt-link>

      <nav>
        <ul class="text-white font-medium">
          <nuxt-link to="/information">
            <li class="cursor-pointer hover:text-purple">- Informação</li>
          </nuxt-link>
          <nuxt-link to="/contact-us">
            <li class="cursor-pointer hover:text-purple">- Fale conosco</li>
          </nuxt-link>
        </ul>
      </nav>
    </div>

    <div class="text-center text-white mt-2">
      <hr />

      <p class="mt-2 py-1">Helton Brito - 2024</p> 
    </div>
  </header>
</template>
