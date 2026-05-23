<script setup lang="ts">
import type { IContract } from '../../../utils/interface';

definePageMeta({
  layout: 'dashboard',
  middleware: 'auth',
});

const { token } = useAuth();
const { get } = useApi();

const contracts = ref<IContract[]>([]);
const loading = ref(true);

async function loadContracts() {
  loading.value = true;
  const { data } = await get('/api/contracts', {
    headers: { Authorization: `Bearer ${token.value}` },
  });

  if (data) {
    contracts.value = (data as { contracts: IContract[] }).contracts.filter(
      (c) => c.category === 'vehicle',
    );
  }
  loading.value = false;
}

onMounted(() => loadContracts());
</script>

<template>
  <div>
    <div class="flex items-center justify-between mb-6">
      <div>
        <h1 class="text-2xl font-bold">🚗 Veículos</h1>
        <p class="text-gray text-sm mt-1">Contratos de locação de veículos.</p>
      </div>
      <nuxt-link
        to="/dashboard/contracts/new-vehicle"
        class="btn-primary py-2 px-4"
      >
        + Novo
      </nuxt-link>
    </div>

    <div v-if="loading" class="text-center py-12 text-gray">Carregando...</div>

    <div
      v-else-if="contracts.length === 0"
      class="text-center py-12 bg-white rounded-lg border border-gray-light"
    >
      <p class="text-gray text-base mb-3">Nenhum contrato de veículo criado.</p>
      <nuxt-link
        to="/dashboard/contracts/new"
        class="text-purple font-semibold hover:underline"
      >
        Criar primeiro contrato
      </nuxt-link>
    </div>

    <div v-else class="grid gap-3">
      <div
        v-for="contract in contracts"
        :key="contract.id"
        class="bg-white rounded-lg border border-gray-light p-4 flex items-center justify-between"
      >
        <div>
          <p class="font-semibold text-base">{{ contract.title }}</p>
          <p class="text-sm text-gray mt-1">
            {{ new Date(contract.created_at).toLocaleDateString('pt-BR') }}
          </p>
        </div>
        <span
          class="text-sm font-semibold px-2 py-0.5 rounded-full"
          :class="{
            'bg-green/10 text-green': contract.status === 'active',
            'bg-purple-light text-purple': contract.status === 'pending',
            'bg-gray-light text-gray': contract.status === 'expired',
          }"
        >
          {{
            contract.status === 'active'
              ? 'Ativo'
              : contract.status === 'pending'
                ? 'Pendente'
                : 'Expirado'
          }}
        </span>
      </div>
    </div>
  </div>
</template>
