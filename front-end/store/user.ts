import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';
import { STORAGE } from '../useful/enuns';

export const useStore = defineStore('useStore', {
  state: () => ({
    user: useStorage(STORAGE.RE_USER, []),
  }),

  actions: {
    addUserStore(user: any) {
      if(user) {
        this.user = user;
      };
    },

    getUserStore() {
      const userExistsInStorage = this.user && this.user.length > 0;
      const reUserFromLocalStorage = localStorage.getItem(STORAGE.RE_USER);

      if (userExistsInStorage || reUserFromLocalStorage) {
        if (reUserFromLocalStorage) {
            try {
                const parsedUser = JSON.parse(reUserFromLocalStorage);
                return parsedUser;
            } catch (error) {
                this.clearUserStorage();
            }
        } else {
            return this.user;
          }
      } else {
        this.clearUserStorage();
      }
    },

    clearUserStorage() {
      this.user = [];
    },
  }
})