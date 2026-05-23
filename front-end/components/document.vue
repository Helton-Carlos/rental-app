<script setup lang="ts">
import { computed, watch } from 'vue';
import { form } from '../utils/info';
import { useInfoPrint } from '../store/infoPrint';

const store = useInfoPrint();
const { submitStorageUser } = store;

const page = ref<number>(0);
const route = useRoute();
const router = useRouter();

function submit(data: (string | number)[]) {
  submitStorageUser(page.value, data);
  more();
}

function more() {
  page.value++;
}

function back() {
  page.value--;
}

function clear() {
  page.value = 0;
}

function goHome() {
  router.push('/');
}

const info = computed(() => {
  return form[page.value];
});

const title = computed(() => {
  if (page.value < 2) return 'Informações do proprietário(a)';
  if (page.value <= 3) return 'Informações do inquilino(a)';
  if (page.value === 4) return 'Informações da propriedade';
  if (page.value === 5) return 'Informações do contrato';
});

const totalSteps = 6;

watch(
  () => info.value,
  (fields) => {
    if (!fields || page.value >= totalSteps) return;
    const data = fields.map((item) => item.model) as never[];
    submitStorageUser(page.value, data);
  },
  { deep: true },
);
</script>

<template>
  <div
    class="flex flex-col lg:flex-row lg:gap-6 p-4 lg:p-8 max-w-[1200px] mx-auto"
  >
    <div class="w-full lg:w-[400px] flex-shrink-0">
      <div class="sticky top-8">
        <button
          @click="goHome"
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
          Voltar para início
        </button>

        <div class="mb-4" v-if="page < totalSteps">
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

        <Form
          :title="title"
          :page="page"
          :info="info"
          @submit="submit"
          @back="back"
          @return="clear"
        />
      </div>
    </div>

    <div class="flex-1 min-w-0">
      <PageResidential v-if="route.name === 'residential'" />
      <PageBusiness v-else />
    </div>
  </div>
</template>
