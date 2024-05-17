<script setup lang="ts">
import positive from 'public/image/positive.svg';
import Logo from 'public/image/logo.svg';

const path = ref([
  { name: 'dashboard', path: 'dashboard', icon: positive },
  { name: 'residencial', path: 'residential-edition', icon: positive },
  { name: 'comércio', path: 'busion-edition', icon: positive },
  { name: 'veicular', path: 'vehicle-edition', icon: positive },
  { name: 'máquinas', path: 'machine-edition', icon: positive },
  { name: 'evento', path: 'event-edition', icon: positive },
]);
</script>

<template>
  <div class="bg-white w-[350px] h-full">
    <div class="mx-auto flex justify-between py-4 md:w-9/12">
      <nuxt-link to="/">
        <img 
          class="cursor-pointer"
          :src="Logo"  
          alt="logo retalDoc"  
        />
      </nuxt-link>

      <nav>
        <ul class="text-white font-medium">
          <nuxt-link rel="noopener noreferrer" to="/information">
            <li class="cursor-pointer hover:text-purple">- Informação</li>
          </nuxt-link>
        </ul>
      </nav>
    </div>

    <div class="text-center text-white mt-2">
      <hr />

      <p class="mt-2 py-1">Helton Brito - 2024</p> 
    </div>
  </div>
</template>
