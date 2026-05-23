<script setup lang="ts">
import {
  commercialSteps,
  commercialTitles,
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
      title: `Comercial - ${data[2]?.[0] || 'Novo contrato'}`,
      category: 'commercial',
      data,
    },
    { headers: { Authorization: `Bearer ${token.value}` } },
  );

  router.push('/dashboard/contracts/commercial');
}
</script>

<template>
  <ContractForm
    :steps="commercialSteps"
    :titles="commercialTitles"
    category="commercial"
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
