import { defineStore } from 'pinia';

export const useInfoPrint = defineStore('infoPrint', {
  state: () => ({
    RE_OWNERS_1: 'RE-OWNERS-1',
    RE_OWNERS_2: 'RE-OWNERS-2',
    RE_TENANT_1: 'RE-TENANT-1',
    RE_TENANT_2: 'RE-TENANT-2',
  }),

  getters: {
    getStorageInfo() {
      let owners_1 = localStorage.getItem(this.RE_OWNERS_1);
      let owners_2 = localStorage.getItem(this.RE_OWNERS_2);
      let tenant_1 = localStorage.getItem(this.RE_TENANT_1);
      let tenant_2 = localStorage.getItem(this.RE_TENANT_2);

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
    deleteStorageUser(nameLocalStorage: any) {
      let getLocal = localStorage.getItem(nameLocalStorage);

      if(getLocal) {
        localStorage.removeItem(nameLocalStorage);
      }
    },
  }
})