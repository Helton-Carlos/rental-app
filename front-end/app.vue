<script setup lang="ts">

</script>

<template>
  <div class="flex flex-col min-h-screen">
    <NuxtPwaManifest />
    <HeaderApp /> 

    <div class="flex-1 lg:w-[1450px] lg:mx-auto">
      <div>
        <NuxtPage />
      </div>
    </div>

    <FooterApp />
  </div>
</template>