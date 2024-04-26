<script setup lang="ts">
interface ISection {
  icons: string,
  title: string,
  context: string
}
const { info } = defineProps<{
  info: ISection[]
}>();

</script>

<template>
  <section class="bg-gray mx-auto my-12 px-5 py-5 md:w-3/4">
    <h3 class="text-white text-xl my-1 font-bold">
      O que fazemos?
    </h3>

    <div class="block mt-2 md:flex">
      <div 
        class="flex gap-2 mx-auto mt-2"
        v-for="(card, index) in info" 
        :key="index"
      >
        <img 
          class="bg-black w-[40px] h-[40px] p-1 rounded-sm"
          :src="card.icons" 
          :alt="card.title" 
        />

        <div class="pr-4">
          <p class="text-white font-medium text-xl capitalize mb">
            {{ card.title }}
          </p>

          <span class="text-white">
            {{ card.context }}
          </span>
        </div> 
      </div>
    </div>
  </section>
</template>
