<template>
  <div class="flex flex-col min-h-screen">
    <NuxtPwaManifest />
    <NuxtLoadingIndicator />
    <HeaderApp /> 

    <div class="flex-1 lg:w-[1450px] lg:mx-auto">
      <div>
        <NuxtPage />
      </div>
    </div>

    <LazyFooterApp />
  </div>
</template>