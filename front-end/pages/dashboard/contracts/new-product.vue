<script setup lang="ts">
import { productSteps, productTitles } from '../../../utils/contract-fields';

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
      title: `Produto - ${data[2]?.[1] || 'Novo contrato'}`,
      category: 'product',
      data,
    },
    { headers: { Authorization: `Bearer ${token.value}` } },
  );

  router.push('/dashboard/contracts/product');
}
</script>

<template>
  <ContractForm
    :steps="productSteps"
    :titles="productTitles"
    category="product"
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
