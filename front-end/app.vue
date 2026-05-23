<template>
  <div class="flex flex-col min-h-screen overflow-x-hidden">
    <NuxtPwaManifest />
    <NuxtLoadingIndicator />
    <HeaderApp />

    <div class="flex-1 w-full max-w-[1450px] mx-auto overflow-x-hidden">
      <div>
        <NuxtPage />
      </div>
    </div>

    <LazyFooterApp />
  </div>
</template>
