<script setup lang="ts">
import { ref } from 'vue'
import doc from '../public/image/icon-doc.svg'
import print from '../public/image/icon-print.svg'
import signature from '../public/image/icon-signature.svg'

const name = ref<string>('teste')
</script>

<template>
  <section class="w-3/4 bg-gray mx-auto my-12 px-5 py-5">
    <h3 class="text-white text-1xl font-bold">
      Como funciona?
    </h3>

    <div class="flex mt-2">
      <div>
        <div class="flex gap-1">
          <img 
            class="bg-black p-1 rounded-sm"
            :src="doc" 
            :alt="name" 
          />
          <p class="text-white font-medium text-xl capitalize">
            {{ name }}
          </p>
        </div>

        <span class="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Assumenda iure excepturi, deserunt consequuntur sed enim.
        </span>
      </div>

      <div>
        <div class="flex gap-1">
          <img 
            class="bg-black p-1 rounded-sm"
            :src="print" 
            :alt="name" 
          />
          <p class="text-white font-medium text-xl capitalize">
            {{ name }}
          </p>
        </div>

        <span class="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Assumenda iure excepturi, deserunt consequuntur sed enim.
        </span>
      </div>

      <div>
        <div class="flex gap-1">
          <img 
            class="bg-black p-1 rounded-sm"
            :src="signature" 
            :alt="name" 
          />
          <p class="text-white font-medium text-xl capitalize">
            {{ name }}
          </p>
        </div>

        <span class="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Assumenda iure excepturi, deserunt consequuntur sed enim.
        </span>
      </div>
    </div>
  </section>
</template>
