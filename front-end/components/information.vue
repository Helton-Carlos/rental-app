<script setup lang="ts">
import contract from 'public/image/contract.png';
</script>

<template>
  <section class="mx-auto flex items-center my-12 px-5 py-5 md:w-3/4">
    <div>
      <img 
        :src="contract" 
        alt="imagem ilustrativa" 
      />
    </div>

    <div>
      <h3 class="text-xl my-1 font-bold">
        Como funciona?
      </h3>

      <div class="block mt-2 font-semibold md:w-[450px]">
        <p class="text-xl">
          Alugar uma casa ou um espaço comercial envolve a apresentação de diversos documentos 
          para assegurar tanto ao locador quanto ao locatário que ambas as partes estarão protegidas
          durante o período de locação. Os documentos necessários incluem:
        </p>

        <ul class="pt-2">
          <li>- CPF e RG</li>
          <li>- Comprovante de Residência</li>
          <li>- Comprovante de Renda</li>
          <li>- Referências</li>
          <li>- Ficha Cadastral</li>
        </ul>
      </div>
    </div>
  </section>
</template>
