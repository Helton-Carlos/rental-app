<script setup lang="ts">
import { ref } from 'vue';
import error from 'public/image/error.svg';
import positive from 'public/image/positive.svg';
import type { IMessage } from '../../utils/interface';
import { useStore } from '../../store/user';
import userIcon from '../public/image/user-icon.svg';

const router = useRouter();

const email = ref<string>('');
const password = ref<string>('');
const message = ref<IMessage>();
const showPassword = ref(false);
const isLoading = ref(false);

async function submit() {
  if (!email.value || !password.value) {
    message.value = {
      status: false,
      title: 'Preencha todos os campos para continuar.',
    };
    setTimeout(() => {
      message.value = undefined;
    }, 4000);
    return;
  }

  isLoading.value = true;

  const { getUserStore } = useStore();
  const store = getUserStore();
  l;
  await new Promise((resolve) => setTimeout(resolve, 600));

  if (store?.email === email.value && store?.password === password.value) {
    message.value = {
      status: true,
      title: 'Login realizado! Redirecionando...',
    };

    setTimeout(() => {
      router.push({ name: 'dashboard' });
    }, 800);
  } else {
    email.value = '';
    password.value = '';

    message.value = {
      status: false,
      title: 'E-mail ou senha incorretos. Tente novamente.',
    };
  }

  isLoading.value = false;

  setTimeout(() => {
    message.value = undefined;
  }, 5000);
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center px-4 py-8">
    <div class="w-full max-w-[420px]">
      <div
        class="bg-white rounded-lg shadow-lg px-5 py-6 border border-gray-light"
      >
        <div class="text-center mb-4">
          <h1 class="text-2xl font-bold">Bem-vindo de volta</h1>
          <p class="text-gray text-sm mt-1">
            Entre na sua conta para acessar seus contratos.
          </p>
        </div>

        <div
          v-if="message"
          class="flex items-center gap-2 px-3 py-2 rounded-lg mb-3 transition-all"
          :class="message.status ? 'bg-green/10' : 'bg-red-light'"
        >
          <img
            :src="message.status ? positive : error"
            :alt="message.title"
            class="w-[18px] h-[18px]"
          />
          <span
            class="text-sm font-medium"
            :class="message.status ? 'text-green' : 'text-red'"
          >
            {{ message.title }}
          </span>
        </div>

        <form @submit.prevent="submit" class="flex flex-col gap-3">
          <div class="flex flex-col gap-1">
            <label class="text-sm font-medium" for="email">E-mail</label>
            <input
              class="w-full bg-gray-light px-3 py-2 rounded-lg text-base outline-none border-2 border-transparent focus:border-purple focus:bg-white transition-colors"
              type="email"
              name="email"
              id="email"
              placeholder="seu@email.com"
              v-model="email"
              autocomplete="email"
            />
          </div>

          <!-- Senha -->
          <div class="flex flex-col gap-1">
            <div class="flex justify-between items-center">
              <label class="text-sm font-medium" for="password">Senha</label>
              <button
                type="button"
                class="text-sm text-purple font-medium hover:underline"
                @click="showPassword = !showPassword"
              >
                {{ showPassword ? 'Ocultar' : 'Mostrar' }}
              </button>
            </div>
            <input
              class="w-full bg-gray-light px-3 py-2 rounded-lg text-base outline-none border-2 border-transparent focus:border-purple focus:bg-white transition-colors"
              :type="showPassword ? 'text' : 'password'"
              name="password"
              id="password"
              placeholder="Digite sua senha"
              v-model="password"
              autocomplete="current-password"
            />
          </div>

          <button
            type="submit"
            class="btn-primary mt-2 w-full py-3 flex justify-center items-center gap-2 disabled:opacity-60"
            :disabled="isLoading"
          >
            <svg
              v-if="isLoading"
              class="animate-spin h-4 w-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              ></path>
            </svg>
            <img v-else :src="userIcon" alt="" class="w-[18px] h-[18px]" />
            <span>{{ isLoading ? 'Entrando...' : 'Entrar' }}</span>
          </button>
        </form>

        <div class="text-center mt-4 pt-3 border-t border-gray-light">
          <p class="text-sm text-gray">
            Não tem uma conta?
            <nuxt-link
              class="text-purple font-semibold hover:underline"
              to="/register"
            >
              Criar conta
            </nuxt-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
