<script setup lang="ts">
import type { IContract, IContractStats } from '../../utils/interface';

definePageMeta({
  layout: 'dashboard',
  middleware: 'auth',
});

const { user, token, isPremium, loadAuth } = useAuth();
const { get } = useApi();

const stats = ref<IContractStats>({ total: 0, active: 0, pending: 0 });
const recentContracts = ref<IContract[]>([]);
const loading = ref(true);

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

async function loadDashboard() {
  loading.value = true;
  loadAuth();

  const headers = { Authorization: `Bearer ${token.value}` };

  const [statsRes, contractsRes] = await Promise.all([
    get('/api/contracts/stats', { headers }),
    get('/api/contracts', { headers }),
  ]);

  if (statsRes.data) {
    stats.value = (statsRes.data as { stats: IContractStats }).stats;
  }

  if (contractsRes.data) {
    recentContracts.value = (
      contractsRes.data as { contracts: IContract[] }
    ).contracts.slice(0, 5);
  }

  loading.value = false;
}

onMounted(() => {
  loadDashboard();
});
</script>

<template>
  <div>
    <div class="mb-6">
      <h1 class="text-2xl font-bold">Olá, {{ user?.email?.split('@')[0] }}</h1>
      <p class="text-gray text-base mt-1">
        Aqui está o resumo dos seus contratos.
      </p>
    </div>

    <!-- Stats -->
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
      <div class="bg-white rounded-lg border border-gray-light p-4">
        <p class="text-sm text-gray">Total</p>
        <p class="text-2xl font-bold mt-1">{{ stats.total }}</p>
      </div>
      <div class="bg-white rounded-lg border border-gray-light p-4">
        <p class="text-sm text-gray">Ativos</p>
        <p class="text-2xl font-bold mt-1 text-green">{{ stats.active }}</p>
      </div>
      <div class="bg-white rounded-lg border border-gray-light p-4">
        <p class="text-sm text-gray">Pendentes</p>
        <p class="text-2xl font-bold mt-1 text-purple">{{ stats.pending }}</p>
      </div>
    </div>

    <!-- Contratos recentes -->
    <div class="bg-white rounded-lg border border-gray-light p-5">
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-xl font-bold">Contratos recentes</h2>
        <nuxt-link
          to="/dashboard/contracts"
          class="text-sm text-purple font-semibold hover:underline"
        >
          Ver todos →
        </nuxt-link>
      </div>

      <div v-if="loading" class="py-8 text-center text-gray">Carregando...</div>

      <div v-else-if="recentContracts.length === 0" class="py-8 text-center">
        <p class="text-gray text-base mb-3">
          Você ainda não criou nenhum contrato.
        </p>
        <nuxt-link
          to="/dashboard/contracts/new"
          class="btn-primary inline-block py-2 px-4"
        >
          Criar primeiro contrato
        </nuxt-link>
      </div>

      <ul v-else class="divide-y divide-gray-light">
        <li
          v-for="contract in recentContracts"
          :key="contract.id"
          class="py-3 flex items-center justify-between"
        >
          <div>
            <p class="font-medium text-base">{{ contract.title }}</p>
            <p class="text-sm text-gray">
              {{ categoryLabels[contract.category] }} •
              {{ new Date(contract.created_at).toLocaleDateString('pt-BR') }}
            </p>
          </div>
          <span
            class="text-sm font-semibold px-2 py-0.5 rounded-full whitespace-nowrap"
            :class="{
              'bg-green/10 text-green': contract.status === 'active',
              'bg-purple-light text-purple': contract.status === 'pending',
              'bg-gray-light text-gray': contract.status === 'expired',
              'bg-red-light text-red': contract.status === 'cancelled',
            }"
          >
            {{ statusLabels[contract.status] }}
          </span>
        </li>
      </ul>
    </div>

    <!-- Upgrade banner -->
    <div
      v-if="!isPremium"
      class="mt-6 bg-purple-light rounded-lg p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
    >
      <div>
        <p class="font-bold text-base">Quer mais categorias?</p>
        <p class="text-sm text-gray">
          Veículos e produtos disponíveis no plano Premium.
        </p>
      </div>
      <nuxt-link to="/" class="btn-primary py-2 px-4 text-sm whitespace-nowrap">
        Fazer upgrade
      </nuxt-link>
    </div>
  </div>
</template>
