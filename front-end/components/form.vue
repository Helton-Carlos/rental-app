<script setup lang="ts">
import arrowLeft from '../public/image/arrow-left.svg';
import arrowRight from '../public/image/arrow-right.svg';
import { applyMask, getMaskForField, type MaskType } from '../utils/mask';

interface IInfo {
  label: string;
  placeholder?: string;
  model: number | string;
  select?: boolean;
  option?: string[];
  name?: string;
  type?: string;
  max?: number;
}

const emit = defineEmits<{
  (e: 'submit', info: (string | number)[]): void;
  (e: 'back'): void;
  (e: 'return'): void;
}>();

const prop = defineProps<{
  title: string | any;
  page: number;
  info: IInfo[];
}>();

function getInfos() {
  const info = prop.info.map((item) => item.model);
  emit('submit', info);
}

function handleMaskedInput(event: Event, field: IInfo) {
  const input = event.target as HTMLInputElement;
  const maskType = getMaskForField(field.name || '');

  if (maskType !== 'none') {
    const masked = applyMask(input.value, maskType);
    field.model = masked;
    input.value = masked;
  }
}
</script>

<template>
  <div class="bg-white rounded-lg border border-gray-light shadow-sm p-5">
    <div v-if="page < 6">
      <h3 class="text-xl font-bold mb-4">
        {{ title }}
      </h3>

      <div class="flex flex-col gap-3">
        <div
          class="flex flex-col gap-1"
          v-for="infos in info"
          :key="infos.name"
        >
          <label :for="infos.name" class="text-sm font-medium">
            {{ infos.label }}
          </label>

          <select
            v-if="infos.select"
            v-model="infos.model"
            :id="infos.name"
            class="w-full bg-gray-light px-3 py-2 rounded-lg text-base outline-none border-2 border-transparent focus:border-purple focus:bg-white transition-colors"
          >
            <option disabled value="">{{ infos.placeholder }}</option>
            <option v-for="options in infos.option" :key="options">
              {{ options }}
            </option>
          </select>

          <input
            v-else
            class="w-full bg-gray-light px-3 py-2 rounded-lg text-base outline-none border-2 border-transparent focus:border-purple focus:bg-white transition-colors"
            :type="
              getMaskForField(infos.name || '') !== 'none' ? 'text' : infos.type
            "
            :name="infos.name"
            :id="infos.name"
            :placeholder="infos.placeholder"
            :maxlength="infos.max"
            v-model="infos.model"
            @input="handleMaskedInput($event, infos)"
          />
        </div>
      </div>

      <div class="flex gap-3 mt-5">
        <button
          v-if="page > 0"
          @click="$emit('back')"
          class="w-full btn-gray py-3"
        >
          <div class="flex justify-center items-center gap-1">
            <img :src="arrowLeft" alt="Voltar" class="w-4 h-4" />
            <span>Voltar</span>
          </div>
        </button>

        <button class="w-full btn-primary py-3" @click.prevent="getInfos">
          <div class="flex justify-center items-center gap-1">
            <span>Avançar</span>
            <img :src="arrowRight" alt="Avançar" class="w-4 h-4" />
          </div>
        </button>
      </div>
    </div>

    <div v-else class="text-center py-6">
      <div class="mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-12 h-12 text-green mx-auto"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <h3 class="text-xl font-bold mb-2">Contrato pronto!</h3>
      <p class="text-gray text-base mb-4">
        Seu documento está disponível para impressão ao lado.
      </p>

      <button @click="$emit('return')" class="w-full btn-primary py-3">
        Editar novamente
      </button>
    </div>
  </div>
</template>
