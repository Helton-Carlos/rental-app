<script setup lang="ts">
import { ref } from 'vue';
import error from 'public/image/error.svg';
import positive from 'public/image/positive.svg';
import logo from '../public/image/logo.svg';
import userIcon from '../public/image/user-icon.svg';

interface IMessage {
  status: boolean;
  title: string;
}

const router = useRouter();

const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const message = ref<IMessage>();
const showPassword = ref(false);
const isLoading = ref(false);

function validate(): string | null {
  if (!email.value || !password.value || !confirmPassword.value) {
    return 'Preencha todos os campos para continuar.';
  }

  if (password.value.length < 6) {
    return 'A senha deve ter no mínimo 6 caracteres.';
  }

  if (password.value !== confirmPassword.value) {
    return 'As senhas não coincidem. Verifique e tente novamente.';
  }

  return null;
}

async function submit() {
  const validationError = validate();

  if (validationError) {
    message.value = { status: false, title: validationError };
    setTimeout(() => {
      message.value = undefined;
    }, 4000);
    return;
  }

  isLoading.value = true;

  try {
    const response = await fetch('http://localhost:3000/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      message.value = {
        status: true,
        title: 'Conta criada! Redirecionando para o login...',
      };

      setTimeout(() => {
        router.push({ name: 'login' });
      }, 1500);
    } else {
      message.value = {
        status: false,
        title: data.error || 'Erro ao criar conta. Tente novamente.',
      };
    }
  } catch (err) {
    message.value = {
      status: false,
      title: 'Não foi possível conectar ao servidor.',
    };
  } finally {
    isLoading.value = false;
    setTimeout(() => {
      message.value = undefined;
    }, 5000);
  }
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center px-4 py-8">
    <div class="w-full max-w-[420px]">
      <!-- Logo -->
      <div class="flex justify-center mb-5">
        <img :src="logo" alt="Retal" class="h-[36px]" />
      </div>

      <!-- Card -->
      <div
        class="bg-white rounded-lg shadow-lg px-5 py-6 border border-gray-light"
      >
        <div class="text-center mb-4">
          <h1 class="text-2xl font-bold">Crie sua conta</h1>
          <p class="text-gray text-sm mt-1">
            Cadastre-se para gerar seus contratos de locação.
          </p>
        </div>

        <!-- Mensagem de feedback -->
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
          <!-- E-mail -->
          <div class="flex flex-col gap-1">
            <label class="text-sm font-medium" for="email">E-mail</label>
            <input
              class="w-full bg-gray-light px-3 py-2 rounded-lg text-base outline-none border-2 border-transparent focus:border-purple focus:bg-white transition-colors"
              type="email"
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
              id="password"
              placeholder="Mínimo 6 caracteres"
              v-model="password"
              autocomplete="new-password"
            />
          </div>

          <!-- Confirmar Senha -->
          <div class="flex flex-col gap-1">
            <label class="text-sm font-medium" for="confirmPassword"
              >Confirmar senha</label
            >
            <input
              class="w-full bg-gray-light px-3 py-2 rounded-lg text-base outline-none border-2 border-transparent focus:border-purple focus:bg-white transition-colors"
              :type="showPassword ? 'text' : 'password'"
              id="confirmPassword"
              placeholder="Repita a senha"
              v-model="confirmPassword"
              autocomplete="new-password"
            />
          </div>

          <!-- Botão -->
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
            <span>{{ isLoading ? 'Criando conta...' : 'Criar conta' }}</span>
          </button>
        </form>

        <!-- Link para login -->
        <div class="text-center mt-4 pt-3 border-t border-gray-light">
          <p class="text-sm text-gray">
            Já tem uma conta?
            <nuxt-link
              class="text-purple font-semibold hover:underline"
              to="/login"
            >
              Entrar
            </nuxt-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
