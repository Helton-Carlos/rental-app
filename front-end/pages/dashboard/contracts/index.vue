<script setup lang="ts">
import type { IContract } from '../../../utils/interface';

definePageMeta({
  layout: 'dashboard',
  middleware: 'auth',
});

const { token } = useAuth();
const { get, del } = useApi();

const contracts = ref<IContract[]>([]);
const loading = ref(true);
const filter = ref('all');

const categoryLabels: Record<string, string> = {
  residential: 'Residencial',
  commercial: 'Comercial',
  party_space: 'Espaço de Festa',
  vehicle: 'Veículo',
  product: 'Produto',
};

const statusLabels: Record<string, string> = {
  active: 'Ativo',
  pending: 'Pendente',
  expired: 'Expirado',
  cancelled: 'Cancelado',
};

const filteredContracts = computed(() => {
  if (filter.value === 'all') return contracts.value;
  return contracts.value.filter((c) => c.status === filter.value);
});

async function loadContracts() {
  loading.value = true;
  const { data } = await get('/api/contracts', {
    headers: { Authorization: `Bearer ${token.value}` },
  });

  if (data) {
    contracts.value = (data as { contracts: IContract[] }).contracts;
  }
  loading.value = false;
}

async function deleteContract(id: string) {
  if (!confirm('Tem certeza que deseja excluir este contrato?')) return;

  await del(`/api/contracts/${id}`, {
    headers: { Authorization: `Bearer ${token.value}` },
  });

  contracts.value = contracts.value.filter((c) => c.id !== id);
}

onMounted(() => {
  loadContracts();
});
</script>

<template>
  <div>
    <div class="flex items-center justify-between mb-6">
      <h1 class="text-2xl font-bold">Meus Contratos</h1>
      <nuxt-link to="/dashboard/contracts/new" class="btn-primary py-2 px-4">
        + Novo contrato
      </nuxt-link>
    </div>

    <div class="flex gap-2 mb-4">
      <button
        v-for="f in ['all', 'active', 'pending', 'expired']"
        :key="f"
        @click="filter = f"
        class="px-3 py-1 rounded-full text-sm font-medium transition-colors"
        :class="
          filter === f
            ? 'bg-purple text-white'
            : 'bg-white border border-gray-light text-gray hover:bg-gray-light'
        "
      >
        {{ f === 'all' ? 'Todos' : statusLabels[f] }}
      </button>
    </div>

    <div v-if="loading" class="text-center py-12 text-gray">
      Carregando contratos...
    </div>

    <div
      v-else-if="filteredContracts.length === 0"
      class="text-center py-12 bg-white rounded-lg border border-gray-light"
    >
      <p class="text-gray text-base">Nenhum contrato encontrado.</p>
    </div>

    <div v-else class="grid gap-3">
      <div
        v-for="contract in filteredContracts"
        :key="contract.id"
        class="bg-white rounded-lg border border-gray-light p-4 flex items-center justify-between"
      >
        <div>
          <p class="font-semibold text-base">{{ contract.title }}</p>
          <div class="flex items-center gap-2 mt-1">
            <span class="text-sm text-gray">{{
              categoryLabels[contract.category]
            }}</span>
            <span class="text-sm text-gray">•</span>
            <span class="text-sm text-gray">{{
              new Date(contract.created_at).toLocaleDateString('pt-BR')
            }}</span>
          </div>
        </div>

        <div class="flex items-center gap-3">
          <span
            class="text-sm font-semibold px-2 py-0.5 rounded-full"
            :class="{
              'bg-green/10 text-green': contract.status === 'active',
              'bg-purple-light text-purple': contract.status === 'pending',
              'bg-gray-light text-gray': contract.status === 'expired',
              'bg-red-light text-red': contract.status === 'cancelled',
            }"
          >
            {{ statusLabels[contract.status] }}
          </span>

          <button
            @click="deleteContract(contract.id)"
            class="text-sm text-red hover:underline"
          >
            Excluir
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
