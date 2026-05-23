<script setup lang="ts">
import faceDoc from '../public/image/face-doc.svg';
import girlHouse from '../public/image/girl-house.svg';
</script>

<template>
  <section class="my-5 px-5 py-5 md:mx-auto lg:w-4/5 md:my-12">
    <div class="flex items-center md:justify-between">
      <div>
        <img
          class="hidden md:block"
          :src="faceDoc"
          alt="Ilustração de pessoa com documento"
        />
      </div>

      <div>
        <h2 class="text-2xl my-1 font-bold">
          Por que você precisa de um contrato?
        </h2>

        <div class="block mt-2 md:w-[450px]">
          <p class="text-lg text-gray-700 leading-relaxed">
            Um contrato bem feito protege quem aluga e quem é dono do imóvel.
            Ele define direitos, deveres e evita dores de cabeça no futuro. Para
            formalizar, você vai precisar de:
          </p>

          <ul class="pt-3 space-y-1 text-gray-600">
            <li class="flex items-center gap-2">
              <span class="w-1.5 h-1.5 bg-purple rounded-full"></span>
              CPF e RG de ambas as partes
            </li>
            <li class="flex items-center gap-2">
              <span class="w-1.5 h-1.5 bg-purple rounded-full"></span>
              Comprovante de residência
            </li>
            <li class="flex items-center gap-2">
              <span class="w-1.5 h-1.5 bg-purple rounded-full"></span>
              Comprovante de renda
            </li>
            <li class="flex items-center gap-2">
              <span class="w-1.5 h-1.5 bg-purple rounded-full"></span>
              Referências pessoais
            </li>
            <li class="flex items-center gap-2">
              <span class="w-1.5 h-1.5 bg-purple rounded-full"></span>
              Ficha cadastral preenchida
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="flex items-center md:justify-between mt-12">
      <div>
        <h2 class="text-2xl my-1 font-bold">
          O Retal simplifica tudo isso pra você
        </h2>

        <div class="block mt-2 md:w-[450px]">
          <p class="text-lg text-gray-700 leading-relaxed">
            Você não precisa entender de juridiquês. O Retal gera contratos com
            cláusulas atualizadas conforme a legislação vigente, e você pode
            personalizar conforme sua necessidade.
          </p>

          <ul class="pt-3 space-y-1 text-gray-600">
            <li class="flex items-center gap-2">
              <span class="w-1.5 h-1.5 bg-purple rounded-full"></span>
              Edite cláusulas com facilidade
            </li>
            <li class="flex items-center gap-2">
              <span class="w-1.5 h-1.5 bg-purple rounded-full"></span>
              Documentação sempre atualizada
            </li>
            <li class="flex items-center gap-2">
              <span class="w-1.5 h-1.5 bg-purple rounded-full"></span>
              Download imediato em PDF
            </li>
          </ul>
        </div>
      </div>

      <div>
        <img
          class="hidden md:block"
          :src="girlHouse"
          alt="Ilustração de mulher em casa"
        />
      </div>
    </div>
  </section>
</template>
