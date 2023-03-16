import { defineStore } from 'pinia';

// 语言
export const useLangStore = defineStore('lang', {
  state: () => {
    return {
      lang: '',
    };
  },
  actions: {
    setLangStore(val: string) {
      this.lang = val;
    },
  },
});

export const usePageData = defineStore('edit-data', {
  state: () => {
    return {
      pageData: [],
    };
  },
  actions: {
    setPageData(data: any) {
      this.pageData = data;
    },
  },
});
