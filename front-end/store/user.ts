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
      if(localStorage.getItem(STORAGE.RE_USER)) {
        const local: any  = localStorage.getItem(STORAGE.RE_USER);
        
        return JSON.parse(local);
      } else {
      this.user = [];
      }
    },

    clearUserStorage() {
      this.user = [];
    },
  }
})