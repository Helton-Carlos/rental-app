<script setup lang="ts">
import arrowLeft from '../public/image/arrow-left.svg';
import arrowRight from '../public/image/arrow-right.svg';
import { applyMask, getMaskForField } from '../utils/mask';

interface IField {
  label: string;
  placeholder?: string;
  model: string;
  select?: boolean;
  option?: string[];
  name?: string;
  type?: string;
  max?: number;
}

const props = defineProps<{
  steps: IField[][];
  titles: string[];
  category: string;
}>();

const emit = defineEmits<{
  (e: 'complete', data: Record<number, string[]>): void;
}>();

const router = useRouter();
const page = ref(0);
const formData = ref<Record<number, string[]>>({});

const totalSteps = computed(() => props.steps.length);
const currentFields = computed(() => props.steps[page.value]);
const currentTitle = computed(() => props.titles[page.value]);
const isComplete = computed(() => page.value >= totalSteps.value);

function next() {
  const data = currentFields.value.map((f) => f.model);
  formData.value[page.value] = data;
  page.value++;

  if (isComplete.value) {
    emit('complete', formData.value);
  }
}

function back() {
  if (page.value > 0) page.value--;
}

function reset() {
  page.value = 0;
}

function goBack() {
  router.push('/dashboard/contracts');
}

function handleMaskedInput(event: Event, field: IField) {
  const input = event.target as HTMLInputElement;
  const maskType = getMaskForField(field.name || '');
  if (maskType !== 'none') {
    const masked = applyMask(input.value, maskType);
    field.model = masked;
    input.value = masked;
  }
}

watch(
  currentFields,
  (fields) => {
    if (!fields || isComplete.value) return;
    formData.value[page.value] = fields.map((f) => f.model);
  },
  { deep: true },
);
</script>

<template>
  <div>
    <button
      @click="goBack"
      class="flex items-center gap-1 text-sm text-gray font-semibold hover:text-purple mb-4 transition-colors"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        class="w-4 h-4"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5"
        />
      </svg>
      Voltar para contratos
    </button>

    <!-- Progress -->
    <div class="mb-4" v-if="!isComplete">
      <div class="flex items-center justify-between mb-2">
        <span class="text-sm text-gray"
          >Etapa {{ page + 1 }} de {{ totalSteps }}</span
        >
      </div>
      <div class="w-full h-2 bg-gray-light rounded-full overflow-hidden">
        <div
          class="h-full bg-purple rounded-full transition-all duration-300"
          :style="{ width: `${((page + 1) / totalSteps) * 100}%` }"
        ></div>
      </div>
    </div>

    <!-- Form -->
    <div class="bg-white rounded-lg border border-gray-light shadow-sm p-5">
      <div v-if="!isComplete">
        <h3 class="text-xl font-bold mb-4">{{ currentTitle }}</h3>

        <div class="flex flex-col gap-3">
          <div
            class="flex flex-col gap-1"
            v-for="field in currentFields"
            :key="field.name"
          >
            <label :for="field.name" class="text-sm font-medium">{{
              field.label
            }}</label>

            <select
              v-if="field.select"
              v-model="field.model"
              :id="field.name"
              class="w-full bg-gray-light px-3 py-2 rounded-lg text-base outline-none border-2 border-transparent focus:border-purple focus:bg-white transition-colors"
            >
              <option disabled value="">{{ field.placeholder }}</option>
              <option v-for="opt in field.option" :key="opt">{{ opt }}</option>
            </select>

            <input
              v-else
              class="w-full bg-gray-light px-3 py-2 rounded-lg text-base outline-none border-2 border-transparent focus:border-purple focus:bg-white transition-colors"
              :type="
                getMaskForField(field.name || '') !== 'none'
                  ? 'text'
                  : field.type
              "
              :name="field.name"
              :id="field.name"
              :placeholder="field.placeholder"
              :maxlength="field.max"
              v-model="field.model"
              @input="handleMaskedInput($event, field)"
            />
          </div>
        </div>

        <div class="flex gap-3 mt-5">
          <button v-if="page > 0" @click="back" class="w-full btn-gray py-3">
            <div class="flex justify-center items-center gap-1">
              <img :src="arrowLeft" alt="Voltar" class="w-4 h-4" />
              <span>Voltar</span>
            </div>
          </button>

          <button @click="next" class="w-full btn-primary py-3">
            <div class="flex justify-center items-center gap-1">
              <span>{{
                page === totalSteps - 1 ? 'Finalizar' : 'Avançar'
              }}</span>
              <img :src="arrowRight" alt="Avançar" class="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>

      <!-- Completo -->
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
        <h3 class="text-xl font-bold mb-2">Contrato preenchido!</h3>
        <p class="text-gray text-base mb-4">
          Revise os dados e salve o contrato.
        </p>

        <div class="flex gap-3">
          <button @click="reset" class="flex-1 btn-gray py-3">
            Editar novamente
          </button>
          <slot name="save-button"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
