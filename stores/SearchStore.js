import { defineStore } from "pinia";

export const useSearchStore = defineStore("search", {
    state: () => ({
        results: null,
        error: null,
        filters: {
            keyword: '',
            category: '',
            capacity: '',
            college: '',
            start_date: '',
            end_date: ''
        }
    }),
    persist: true,
    getters: {
        getSearchFilters(state) {
            return state.filters;
        },
    }, 
    actions: {
        async search(searchTerms = null) {
            if (searchTerms != null) this.filters = searchTerms;
            const API_PATH = useRuntimeConfig().public.jsonApiPath;
            const { data, error } = await useFetch(API_PATH+'/search', {
                method: "GET",                
                params: this.filters,
            })
            if (data.value != null) this.results = data.value.data;
            this.error = error;
        },
        resetFilters(filters) {
            this.filters = {
                keyword: '',
                category: '',
                capacity: '',
                college: '',
                start_date: '',
                end_date: ''
            };
        },
        resetResults() {
            this.results = [];
        }       

    },
});