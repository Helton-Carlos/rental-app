<script setup lang="ts">
import {
  residentialSteps,
  residentialTitles,
} from '../../../utils/contract-fields';

definePageMeta({ layout: 'dashboard', middleware: 'auth' });

const { token } = useAuth();
const { post } = useApi();
const router = useRouter();
const saving = ref(false);

async function handleComplete(data: Record<number, string[]>) {
  saving.value = true;

  await post(
    '/api/contracts',
    {
      title: `Residencial - ${data[2]?.[0] || 'Novo contrato'}`,
      category: 'residential',
      data,
    },
    { headers: { Authorization: `Bearer ${token.value}` } },
  );

  router.push('/dashboard/contracts/residential');
}
</script>

<template>
  <ContractForm
    :steps="residentialSteps"
    :titles="residentialTitles"
    category="residential"
    @complete="handleComplete"
  >
    <template #save-button>
      <button
        class="flex-1 btn-primary py-3"
        :disabled="saving"
        @click="handleComplete({})"
      >
        {{ saving ? 'Salvando...' : 'Salvar contrato' }}
      </button>
    </template>
  </ContractForm>
</template>
