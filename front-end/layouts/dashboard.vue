<script setup lang="ts">
import Logo from '../public/image/logo.svg';

const { user, logout, isPremium } = useAuth();
const router = useRouter();
const route = useRoute();

const menuOpen = ref(false);

const navigation = computed(() => {
  const items = [
    { name: 'Dashboard', path: '/dashboard', icon: '📊' },
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

    <!-- Container principal -->
    <div
      class="flex-1 mx-auto w-full md:w-9/12 flex flex-col lg:flex-row py-6 px-4 md:px-0 gap-6"
    >
      <!-- Sidebar -->
      <aside class="w-full lg:w-[220px] flex-shrink-0">
        <div class="lg:sticky lg:top-6">
          <!-- Toggle mobile -->
          <button
            class="lg:hidden flex items-center gap-2 text-base font-semibold mb-3"
            @click="menuOpen = !menuOpen"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            Menu
          </button>

          <nav :class="{ hidden: !menuOpen, 'lg:block': true }">
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

            <hr class="my-4 border-gray-light" />

            <nuxt-link
              to="/dashboard/contracts/new"
              class="flex items-center gap-2 px-3 py-2 rounded-lg text-base font-semibold text-purple hover:bg-purple-light transition-colors"
            >
              <span>＋</span>
              <span>Novo contrato</span>
            </nuxt-link>

            <button
              @click="handleLogout"
              class="w-full mt-2 flex items-center gap-2 px-3 py-2 rounded-lg text-base font-medium text-red hover:bg-red-light transition-colors"
            >
              <span>🚪</span>
              <span>Sair</span>
            </button>
          </nav>
        </div>
      </aside>

      <!-- Conteúdo -->
      <main class="flex-1 min-w-0">
        <slot />
      </main>
    </div>
  </div>
</template>
