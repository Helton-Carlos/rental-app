import { useState } from '#app';
import type { IUser } from '../utils/interface';

export function useAuth() {
  const user = useState<IUser | null>('auth-user', () => null);
  const token = useState<string | null>('auth-token', () => null);

  function setAuth(userData: IUser, tokenValue: string) {
    user.value = userData;
    token.value = tokenValue;

    if (import.meta.client) {
      localStorage.setItem('token', tokenValue);
      localStorage.setItem('user', JSON.stringify(userData));
    }
  }

  function loadAuth() {
    if (import.meta.client) {
      const savedToken = localStorage.getItem('token');
      const savedUser = localStorage.getItem('user');

      if (savedToken && savedUser) {
        token.value = savedToken;
        user.value = JSON.parse(savedUser);
      }
    }
  }

  function logout() {
    user.value = null;
    token.value = null;

    if (import.meta.client) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    }
  }

  const isAuthenticated = computed(() => !!token.value);
  const isAdmin = computed(() => user.value?.role === 'admin');
  const isPremium = computed(
    () => user.value?.role === 'premium' || user.value?.role === 'admin',
  );

  return {
    user,
    token,
    setAuth,
    loadAuth,
    logout,
    isAuthenticated,
    isAdmin,
    isPremium,
  };
}
