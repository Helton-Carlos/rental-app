<script setup lang="ts">
import faceDoc from '../public/image/face-doc.svg';
import girlHouse from '../public/image/girl-house.svg';
</script>

<template>
  <section class="my-5 px-4 py-5 md:mx-auto lg:w-3/4 md:my-12 overflow-hidden">
    <div
      class="flex flex-col md:flex-row items-center md:justify-between gap-4"
    >
      <div class="hidden md:block flex-shrink-0 max-w-[250px]">
        <img
          class="w-full h-auto"
          :src="faceDoc"
          alt="Ilustração de pessoa com documento"
        />
      </div>

      <div class="flex-1">
        <h2 class="text-2xl my-1 font-bold">
          Por que você precisa de um contrato?
        </h2>

        <div class="block mt-2">
          <p class="text-base text-gray leading-relaxed">
            Um contrato bem feito protege quem aluga e quem é dono do imóvel.
            Ele define direitos, deveres e evita dores de cabeça no futuro. Para
            formalizar, você vai precisar de:
          </p>

          <ul class="pt-3 space-y-1">
            <li class="flex items-center gap-2 text-base">
              <span
                class="w-[6px] h-[6px] bg-purple rounded-full flex-shrink-0"
              ></span>
              CPF e RG de ambas as partes
            </li>
            <li class="flex items-center gap-2 text-base">
              <span
                class="w-[6px] h-[6px] bg-purple rounded-full flex-shrink-0"
              ></span>
              Comprovante de residência
            </li>
            <li class="flex items-center gap-2 text-base">
              <span
                class="w-[6px] h-[6px] bg-purple rounded-full flex-shrink-0"
              ></span>
              Comprovante de renda
            </li>
            <li class="flex items-center gap-2 text-base">
              <span
                class="w-[6px] h-[6px] bg-purple rounded-full flex-shrink-0"
              ></span>
              Referências pessoais
            </li>
            <li class="flex items-center gap-2 text-base">
              <span
                class="w-[6px] h-[6px] bg-purple rounded-full flex-shrink-0"
              ></span>
              Ficha cadastral preenchida
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div
      class="flex flex-col md:flex-row items-center md:justify-between gap-4 mt-12"
    >
      <div class="flex-1">
        <h2 class="text-2xl my-1 font-bold">
          O Retal simplifica tudo isso pra você
        </h2>

        <div class="block mt-2">
          <p class="text-base text-gray leading-relaxed">
            Você não precisa entender de juridiquês. O Retal gera contratos com
            cláusulas atualizadas conforme a legislação vigente, e você pode
            personalizar conforme sua necessidade.
          </p>

          <ul class="pt-3 space-y-1">
            <li class="flex items-center gap-2 text-base">
              <span
                class="w-[6px] h-[6px] bg-purple rounded-full flex-shrink-0"
              ></span>
              Edite cláusulas com facilidade
            </li>
            <li class="flex items-center gap-2 text-base">
              <span
                class="w-[6px] h-[6px] bg-purple rounded-full flex-shrink-0"
              ></span>
              Documentação sempre atualizada
            </li>
            <li class="flex items-center gap-2 text-base">
              <span
                class="w-[6px] h-[6px] bg-purple rounded-full flex-shrink-0"
              ></span>
              Download imediato em PDF
            </li>
          </ul>
        </div>
      </div>

      <div class="hidden md:block flex-shrink-0 max-w-[250px]">
        <img
          class="w-full h-auto"
          :src="girlHouse"
          alt="Ilustração de mulher em casa"
        />
      </div>
    </div>
  </section>
</template>
