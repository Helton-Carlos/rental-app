import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';
import { STORAGE } from '../useful/enuns';

export const useInfoPrint = defineStore('infoPrint', {
  state: () => ({
    owners1: useStorage(STORAGE.RE_OWNERS_1, []),
    owners2: useStorage(STORAGE.RE_OWNERS_2, []),
    tenant1: useStorage(STORAGE.RE_TENANT_1, []),
    tenant2: useStorage(STORAGE.RE_TENANT_2, []),
    property: useStorage(STORAGE.RE_PROPERTY, []),
    agreement: useStorage(STORAGE.RE_AGREEMENTY, []),
  }),

  actions: {
    submitStorageUser(page: number, data: any) {
      if(page === 0) this.owners1 = data;
      if(page === 1) this.owners2 = data;
    
      if(page === 2) this.tenant1 = data;
      if(page === 3) this.tenant2 = data;

      if(page === 4) this.property = data;
      if(page === 5) this.agreement = data;
    },

    clearStorage() {
      this.owners1 = [];
      this.owners2 =  [];
    
      this.tenant1 = [];
      this.tenant2 = [];

      this.property = [];
      this.agreement = [];
    },
  }
})