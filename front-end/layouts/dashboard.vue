<script setup lang="ts">
import Logo from '../public/image/logo.svg';
import userIcon from '../public/image/user-icon.svg';

const { user, logout, isPremium } = useAuth();
const router = useRouter();
const route = useRoute();

const menuOpen = ref(false);

const navigation = computed(() => {
  const items = [
    { name: 'Dashboard', path: '/dashboard', icon: '📊' },
    { name: 'Meus contratos', path: '/dashboard/contracts', icon: '📄' },
  ];

  return items;
});

const contractTypes = computed(() => {
  const items = [
    {
      name: 'Residencial',
      path: '/dashboard/contracts/residential',
      icon: '🏠',
    },
    { name: 'Comercial', path: '/dashboard/contracts/commercial', icon: '🏢' },
    {
      name: 'Espaço de Festa',
      path: '/dashboard/contracts/party-space',
      icon: '🎉',
    },
  ];

  if (isPremium.value) {
    items.push(
      { name: 'Veículos', path: '/dashboard/contracts/vehicle', icon: '🚗' },
      { name: 'Produtos', path: '/dashboard/contracts/product', icon: '⚙️' },
    );
  }

  return items;
});

function handleLogout() {
  logout();
  router.push('/login');
}

function isActive(path: string) {
  return route.path === path;
}
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <!-- Header -->
    <header class="bg-black px-5 py-2">
      <div class="flex justify-between items-center mx-auto md:w-9/12">
        <nuxt-link to="/">
          <img class="cursor-pointer" :src="Logo" alt="Retal" />
        </nuxt-link>

        <div class="flex items-center gap-3">
          <span class="text-white text-sm hidden md:block">{{
            user?.email
          }}</span>
          <span
            class="text-sm font-semibold px-2 py-0.5 rounded-full"
            :class="{
              'bg-purple-light text-purple': user?.role === 'premium',
              'bg-gray-light text-gray': user?.role === 'basic',
              'bg-red-light text-red': user?.role === 'admin',
            }"
          >
            {{
              user?.role === 'admin'
                ? 'Admin'
                : user?.role === 'premium'
                  ? 'Premium'
                  : 'Básico'
            }}
          </span>
        </div>
      </div>
    </header>

    <!-- Body -->
    <div class="flex-1 flex">
      <!-- Sidebar fixa -->
      <aside
        class="hidden lg:flex flex-col w-[240px] bg-white border-r border-gray-light p-4"
      >
        <nav class="flex flex-col flex-1">
          <!-- Menu principal -->
          <p
            class="text-sm text-gray font-semibold uppercase tracking-wide mb-2 px-3"
          >
            Menu
          </p>
          <ul class="space-y-1">
            <li v-for="item in navigation" :key="item.path">
              <nuxt-link
                :to="item.path"
                class="flex items-center gap-2 px-3 py-2 rounded-lg text-base font-medium transition-colors"
                :class="
                  isActive(item.path)
                    ? 'bg-purple text-white'
                    : 'hover:bg-gray-light'
                "
              >
                <span>{{ item.icon }}</span>
                <span>{{ item.name }}</span>
              </nuxt-link>
            </li>
          </ul>

          <!-- Tipos de contrato -->
          <p
            class="text-sm text-gray font-semibold uppercase tracking-wide mt-6 mb-2 px-3"
          >
            Contratos
          </p>
          <ul class="space-y-1">
            <li v-for="item in contractTypes" :key="item.path">
              <nuxt-link
                :to="item.path"
                class="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                :class="
                  isActive(item.path)
                    ? 'bg-purple text-white'
                    : 'hover:bg-gray-light'
                "
              >
                <span>{{ item.icon }}</span>
                <span>{{ item.name }}</span>
              </nuxt-link>
            </li>
          </ul>

          <!-- Novo contrato -->
          <nuxt-link
            to="/dashboard/contracts/new"
            class="flex items-center gap-2 px-3 py-2 mt-4 rounded-lg text-base font-semibold bg-purple text-white hover:bg-black transition-colors"
          >
            <span>＋</span>
            <span>Novo contrato</span>
          </nuxt-link>

          <!-- Spacer -->
          <div class="flex-1"></div>

          <!-- Sair -->
          <button
            @click="handleLogout"
            class="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-base font-medium text-red hover:bg-red-light transition-colors mt-4"
          >
            <span>🚪</span>
            <span>Sair</span>
          </button>
        </nav>
      </aside>

      <!-- Mobile menu toggle -->
      <div class="lg:hidden fixed bottom-4 right-4 z-50">
        <button
          @click="menuOpen = !menuOpen"
          class="bg-purple text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile sidebar overlay -->
      <div v-if="menuOpen" class="lg:hidden fixed inset-0 z-40 flex">
        <div
          class="absolute inset-0 bg-black/40"
          @click="menuOpen = false"
        ></div>
        <div class="relative w-[260px] bg-white h-full p-4 overflow-y-auto">
          <p
            class="text-sm text-gray font-semibold uppercase tracking-wide mb-2 px-3"
          >
            Menu
          </p>
          <ul class="space-y-1">
            <li v-for="item in navigation" :key="item.path">
              <nuxt-link
                :to="item.path"
                class="flex items-center gap-2 px-3 py-2 rounded-lg text-base font-medium transition-colors"
                :class="
                  isActive(item.path)
                    ? 'bg-purple text-white'
                    : 'hover:bg-gray-light'
                "
                @click="menuOpen = false"
              >
                <span>{{ item.icon }}</span>
                <span>{{ item.name }}</span>
              </nuxt-link>
            </li>
          </ul>

          <p
            class="text-sm text-gray font-semibold uppercase tracking-wide mt-6 mb-2 px-3"
          >
            Contratos
          </p>
          <ul class="space-y-1">
            <li v-for="item in contractTypes" :key="item.path">
              <nuxt-link
                :to="item.path"
                class="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                :class="
                  isActive(item.path)
                    ? 'bg-purple text-white'
                    : 'hover:bg-gray-light'
                "
                @click="menuOpen = false"
              >
                <span>{{ item.icon }}</span>
                <span>{{ item.name }}</span>
              </nuxt-link>
            </li>
          </ul>

          <nuxt-link
            to="/dashboard/contracts/new"
            class="flex items-center gap-2 px-3 py-2 mt-4 rounded-lg text-base font-semibold bg-purple text-white"
            @click="menuOpen = false"
          >
            <span>＋</span>
            <span>Novo contrato</span>
          </nuxt-link>

          <button
            @click="handleLogout"
            class="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-base font-medium text-red hover:bg-red-light transition-colors mt-6"
          >
            <span>🚪</span>
            <span>Sair</span>
          </button>
        </div>
      </div>

      <!-- Conteúdo principal -->
      <main class="flex-1 p-6 lg:p-8 mt-8 overflow-auto">
        <div class="max-w-[900px] mx-auto">
          <slot />
        </div>
      </main>
    </div>
  </div>
</template>
