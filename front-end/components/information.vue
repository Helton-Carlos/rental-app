<script setup lang="ts">
import faceDoc from 'public/image/face-doc.svg';
import girlHouse from 'public/image/girl-house.svg';

</script>

<template>
  <section class="mx-auto my-5 px-5 py-5 md:w-3/4 md:my-12">
    <div class="flex items-center">
      <div>
        <img 
          class="hidden md:block"
          :src="faceDoc" 
          alt="imagem ilustrativa, tela de celular com homem." 
        />
      </div>

      <div>
        <h3 class="text-2xl my-1 font-bold">
          Como funciona?
        </h3>

        <div class="block mt-2 font-semibold md:w-[450px]">
          <p class="text-xl">
            Alugar uma casa ou um espaço comercial envolve a apresentação de diversos documentos 
            para assegurar tanto ao locador quanto ao locatário que ambas as partes estarão protegidas
            durante o período de locação. Os documentos necessários incluem:
          </p>

          <ul class="pt-2">
            <li>- CPF e RG;</li>
            <li>- Comprovante de Residência;</li>
            <li>- Comprovante de Renda;</li>
            <li>- Referências;</li>
            <li>- Ficha Cadastral.</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="flex items-center">
      <div>
        <h3 class="text-2xl my-1 font-bold">
          Iremos te ajudar!
        </h3>

        <div class="block mt-2 font-semibold md:w-[450px]">
          <p class="text-xl">
            Com o Retal, é possível editar seu documento e garantir que todo seu 
            patrimônio esteja seguro e bem estruturado, com cláusulas no contrato.
            O Retal também auxilia em todas as etapas do processo e atualiza 
            conforme mudanças nas normas de aluguel.
          </p>

          <ul class="pt-2">
            <li>- Edição;</li>
            <li>- Documentação;</li>
            <li>- Download.</li>
          </ul>
        </div>
      </div>

      <div>
        <img 
          class="hidden md:block"
          :src="girlHouse" 
          alt="imagem ilustrativa, mulher em casa com plantas." 
        />
      </div>
    </div>
  </section>
</template>
