<template>
  <div class="flex flex-col min-h-screen">
    <NuxtPwaManifest />
    <HeaderApp /> 

    <div class="flex-1 lg:w-3/4 lg:mx-auto">
      <NuxtPage />
    </div>

    <FooterApp />
  </div>
</template>