<script setup lang="ts">
const route = useRoute();

const isDashboard = computed(() => {
  return route.path.startsWith('/dashboard');
});
</script>

<template>
  <div class="flex flex-col min-h-screen overflow-x-hidden">
    <NuxtPwaManifest />
    <NuxtLoadingIndicator />

    <template v-if="isDashboard">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </template>

    <template v-else>
      <HeaderApp />
      <div class="flex-1 w-full max-w-[1450px] mx-auto overflow-x-hidden">
        <NuxtPage />
      </div>
      <LazyFooterApp />
    </template>
  </div>
</template>
