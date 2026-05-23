<script setup lang="ts">
definePageMeta({ layout: 'dashboard', middleware: 'auth' });

const { isPremium } = useAuth();

const categories = computed(() => {
  const base = [
    {
      value: 'new-residential',
      label: 'Locação Residencial',
      icon: '🏠',
      desc: 'Casas, apartamentos, kitnets',
    },
    {
      value: 'new-commercial',
      label: 'Locação Comercial',
      icon: '🏢',
      desc: 'Salas, lojas, galpões',
    },
    {
      value: 'new-party-space',
      label: 'Espaço de Festa',
      icon: '🎉',
      desc: 'Chácaras, clubes, salões',
    },
  ];

  if (isPremium.value) {
    base.push(
      {
        value: 'new-vehicle',
        label: 'Veículo',
        icon: '🚗',
        desc: 'Carros, motos, caminhões',
      },
      {
        value: 'new-product',
        label: 'Produto / Máquina',
        icon: '⚙️',
        desc: 'Equipamentos, ferramentas',
      },
    );
  }

  return base;
});
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold mb-2">Novo Contrato</h1>
    <p class="text-gray text-base mb-6">
      Selecione o tipo de contrato que deseja criar.
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <nuxt-link
        v-for="cat in categories"
        :key="cat.value"
        :to="`/dashboard/contracts/${cat.value}`"
        class="bg-white rounded-lg border-2 border-gray-light p-5 hover:border-purple transition-colors group"
      >
        <span class="text-2xl">{{ cat.icon }}</span>
        <p class="font-semibold text-base mt-2 group-hover:text-purple">
          {{ cat.label }}
        </p>
        <p class="text-sm text-gray mt-1">{{ cat.desc }}</p>
      </nuxt-link>
    </div>

    <div
      v-if="!isPremium"
      class="mt-6 bg-gray-light rounded-lg p-4 text-sm text-gray"
    >
      🔒 Veículos e Produtos disponíveis no plano Premium.
    </div>
  </div>
</template>
