import { d as defineStore, e as useRuntimeConfig } from "../server.mjs";
import "vue";
import "destr";
import "devalue";
import "klona";
const usePageStore = defineStore("page", {
  state: () => ({
    pages: null,
    page: null
  }),
  actions: {
    async fetchPages() {
      const API_PATH = useRuntimeConfig().public.jsonApiPath;
      const results = await $fetch(API_PATH + "/pages");
      this.pages = await results.data;
    },
    async fetchPage(id) {
      const API_PATH = useRuntimeConfig().public.jsonApiPath;
      const results = await $fetch(API_PATH + "/pages/" + id);
      this.page = await results.data;
    }
  }
});
export {
  usePageStore as u
};
//# sourceMappingURL=PageStore-37947abb.js.map
