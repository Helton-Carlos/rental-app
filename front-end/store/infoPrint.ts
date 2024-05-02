import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';
import { STORAGE } from '../useful/enuns';

export const useInfoPrint = defineStore('infoPrint', {
  state: () => ({
   
  }),

  getters: {
    getStorageInfo() {
      let owners_1 = localStorage.getItem(STORAGE.RE_OWNERS_1);
      let owners_2 = localStorage.getItem(STORAGE.RE_OWNERS_2);
      let tenant_1 = localStorage.getItem(STORAGE.RE_TENANT_1);
      let tenant_2 = localStorage.getItem(STORAGE.RE_TENANT_2);

      if(owners_1 && owners_2 && tenant_1 && tenant_2) {
        let owners1 = JSON.parse(owners_1);
        let owners2 = JSON.parse(owners_2);
        let tenant1 = JSON.parse(tenant_1);
        let tenant2 = JSON.parse(tenant_2);

        return {owners1, owners2, tenant1, tenant2};
      }
    },
  },

  actions: {
    submitStorageUser(page: number, data: (string | number)[]) {
      console.log(page);
      console.log(data);
      
      if(page === 0) useStorage(STORAGE.RE_OWNERS_1, data);
      if(page === 1) useStorage(STORAGE.RE_OWNERS_2, data);
    
      if(page === 2) useStorage(STORAGE.RE_TENANT_1, data);
      if(page === 3) useStorage(STORAGE.RE_TENANT_2, data);
    },

    deleteStorageUser(nameLocalStorage: any) {
      let getLocal = localStorage.getItem(nameLocalStorage);

      if(getLocal) {
        localStorage.removeItem(nameLocalStorage);
      }
    },
  }
})