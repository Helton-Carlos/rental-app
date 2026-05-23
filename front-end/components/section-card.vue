<script setup lang="ts">
interface ISection {
  icons: string;
  title: string;
  context: string;
}
const { info } = defineProps<{
  info: ISection[];
}>();
</script>

<template>
  <section
    class="bg-gray mx-auto my-5 px-5 py-8 lg:w-3/4 lg:my-12 lg:mx-auto rounded-lg"
  >
    <h2 class="text-white text-xl my-1 font-bold">Como funciona</h2>
    <p class="text-white/70 text-sm mb-4">
      Três passos simples para ter seu contrato em mãos.
    </p>

    <div class="block mt-2 md:flex md:justify-between md:gap-6">
      <div
        class="flex gap-3 mx-auto mt-4 md:mt-0"
        v-for="(card, index) in info"
        :key="index"
      >
        <div class="flex-shrink-0">
          <div
            class="bg-black w-[44px] h-[44px] p-2 rounded-md flex items-center justify-center"
          >
            <img :src="card.icons" :alt="card.title" />
          </div>
        </div>

        <div class="pr-4">
          <p class="text-white font-semibold text-lg capitalize">
            <span class="text-purple-300 mr-1">{{ index + 1 }}.</span>
            {{ card.title }}
          </p>

          <span class="text-white/80 text-sm">
            {{ card.context }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
