<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
  middleware: 'auth',
});

const { token, isPremium } = useAuth();
const { post } = useApi();
const router = useRouter();

const title = ref('');
const category = ref('');
const loading = ref(false);
const error = ref('');

const categories = computed(() => {
  const base = [
    { value: 'residential', label: 'Locação Residencial', icon: '🏠' },
    { value: 'commercial', label: 'Locação Comercial', icon: '🏢' },
    { value: 'party_space', label: 'Espaço de Festa / Chácara', icon: '🎉' },
  ];

  if (isPremium.value) {
    base.push(
      { value: 'vehicle', label: 'Veículo', icon: '🚗' },
      { value: 'product', label: 'Produto / Máquina', icon: '⚙️' },
    );
  }

  return base;
});

async function createContract() {
  if (!title.value || !category.value) {
    error.value = 'Preencha o título e selecione uma categoria.';
    setTimeout(() => {
      error.value = '';
    }, 4000);
    return;
  }

  loading.value = true;

  const { data, error: apiError } = await post(
    '/api/contracts',
    {
      title: title.value,
      category: category.value,
      data: {},
    },
    {
      headers: { Authorization: `Bearer ${token.value}` },
    },
  );

  if (data) {
    router.push('/dashboard/contracts');
  } else {
    error.value = apiError || 'Erro ao criar contrato.';
  }

  loading.value = false;
}
</script>

<template>
  <div class="max-w-[500px]">
    <h1 class="text-2xl font-bold mb-6">Novo Contrato</h1>

    <div class="bg-white rounded-lg border border-gray-light p-5">
      <div
        v-if="error"
        class="bg-red-light text-red text-sm font-medium px-3 py-2 rounded-lg mb-4"
      >
        {{ error }}
      </div>

      <form @submit.prevent="createContract" class="flex flex-col gap-4">
        <div class="flex flex-col gap-1">
          <label class="text-sm font-medium" for="title"
            >Título do contrato</label
          >
          <input
            class="w-full bg-gray-light px-3 py-2 rounded-lg text-base outline-none border-2 border-transparent focus:border-purple focus:bg-white transition-colors"
            type="text"
            id="title"
            placeholder="Ex: Aluguel Apt 302 - João Silva"
            v-model="title"
            maxlength="100"
          />
        </div>

        <div class="flex flex-col gap-2">
          <label class="text-sm font-medium">Categoria</label>
          <div class="grid grid-cols-1 gap-2">
            <label
              v-for="cat in categories"
              :key="cat.value"
              :for="cat.value"
              class="flex items-center gap-2 px-3 py-3 rounded-lg cursor-pointer border-2 transition-colors"
              :class="
                category === cat.value
                  ? 'border-purple bg-purple-light/30'
                  : 'border-gray-light hover:border-purple/30'
              "
            >
              <input
                type="radio"
                :id="cat.value"
                :value="cat.value"
                v-model="category"
                class="hidden"
              />
              <span class="text-xl">{{ cat.icon }}</span>
              <span class="font-medium text-base">{{ cat.label }}</span>
            </label>
          </div>
        </div>

        <div
          v-if="!isPremium"
          class="bg-gray-light rounded-lg p-3 text-sm text-gray"
        >
          🔒 Veículos e Produtos disponíveis no plano Premium.
        </div>

        <button
          type="submit"
          class="btn-primary w-full py-3 mt-2 disabled:opacity-60"
          :disabled="loading"
        >
          {{ loading ? 'Criando...' : 'Criar contrato' }}
        </button>
      </form>
    </div>
  </div>
</template>
