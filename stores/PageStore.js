import { defineStore } from "pinia";

export const usePageStore = defineStore("page", {
    state: () => ({
        pages: null,
        navs: null,
        page: null,
        faqs: null,
    }),
    actions: {
        async fetchPages() {
            const API_PATH = useRuntimeConfig().public.jsonApiPath;
            const results = await $fetch(API_PATH+'/pages')
            
            this.pages = (await results.data);
            if (this.pages != null) {
                this.navs = this.pages.filter((item) => {
                    return item['show_nav'];  
                });
            }
        },
        async fetchPage(id) {
            const API_PATH = useRuntimeConfig().public.jsonApiPath;
            const results = await $fetch(API_PATH+'/pages/'+id);

            this.page = (await results.data);
        },          
        async fetchFAQs() {
            const API_PATH = useRuntimeConfig().public.jsonApiPath;
            const results = await $fetch(API_PATH+'/faqs')
            
            this.faqs = (await results.data);
        },
    },
});