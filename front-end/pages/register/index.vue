<script setup lang="ts">
import { ref } from 'vue';
import error from 'public/image/error.svg';
import positive from 'public/image/positive.svg';
import type { IMessage } from '../../useful/interface';
import { useStore } from '../../store/user';
import arrowLeft from '../public/image/arrow-left.svg';
import userIcon from '../public/image/user-icon.svg'

const router = useRouter();
const { addUserStore } = useStore();

const name = ref<string>('');
const email = ref<string>('');
const password = ref<string>('');
const message = ref<IMessage>();

async function submit (){
  if(name.value && email.value && password.value) {
    const user = {
      name: name.value,
      email: email.value,
      password: password.value
    }

    addUserStore(user);

    message.value = {
      status: true,
      title: 'Salvo!',
    } 
  } else {
    name.value = '';
    email.value = '';
    password.value = '';
    
    message.value = {
      status: false,
      title: 'Preencha as informações!',
    }  
  }

  setTimeout(() => {
    message.value = undefined
  }, 5000);
}

function back() {
  router.push({ name: 'login'})
}
</script>

<template>
 <div>
  <h2 class="text-2xl mt-10 mx-5 font-bold md:my-2 md:text-3xl">
    Cadastrar 
  </h2>
  
  <form 
    @submit.prevent="submit"
    class="w-full h-full mx-auto bg-gray-light my-2 px-4 py-4 lg:max-w-[450px] lg:min-w-[340px] lg:text-left lg:my-8"
  >
    <h3 class="text-xl text-gray font-bold my-5 md:text-2xl"> 
      Preencha o Formulário
    </h3>

    <label class="font-medium" for="email">Nome:</label>
    <input
      class="w-full bg-white mb-1 mt-1 py-2 px-2 border-gray rounded-sm focus:border-x-purple focus:ring-pborder-x-purple focus:outline-none focus:ring focus:ring-opacity-40" 
      type="text" 
      name="name" 
      id="name"
      placeholder="Ex: João Souza "
      v-model="name"
    />

    <label class="font-medium" for="email">E-mail:</label>
    <input
      class="w-full bg-white mb-1 mt-1 py-2 px-2 border-gray rounded-sm focus:border-x-purple focus:ring-pborder-x-purple focus:outline-none focus:ring focus:ring-opacity-40" 
      type="email" 
      name="email" 
      id="email"
      placeholder="Ex: john@gmail.com"
      v-model="email"
    />

    <label class="font-medium" for="password">Senha:</label>
    <input
      class="w-full bg-white mb-1 mt-1 py-2 px-2 border-gray rounded-sm focus:border-x-purple focus:ring-pborder-x-purple focus:outline-none focus:ring focus:ring-opacity-40" 
      type="password" 
      name="password" 
      id="password"
      placeholder="*******"
      v-model="password"
    />

    <div v-if="message" class="flex items-center justify-center py-2 gap-1 font-normal">
      <img 
        :src="message?.status ? positive : error" 
        :alt="message?.title" 
      />

      <span :class="message?.status ? 'text-green' : 'text-red'">
        {{ message?.title }}
      </span>
    </div>

    <div class="flex items-center gap-4">
      <button 
        @click="back()"
        class="w-full btn-gray mt-3"
      >
        <div class="flex justify-center items-center">
          <img :src="arrowLeft" alt="seta para voltar" />
          <span class="pl-1">Voltar</span>
        </div>
      </button> 
      
      <button 
        type="submit"
        class="w-full btn-primary mt-3"
      >
        <div class="flex justify-center items-center">
          <img :src="userIcon" alt="login" />
          <span class="pl-1">Salvar</span>
        </div>
      </button>
    </div>
  </form>
 </div>
</template>
