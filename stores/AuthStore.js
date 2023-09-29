import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        user: null,
        profile: null,
    }),
    persist: {
      storage: persistedState.sessionStorage,
    },
    getters: {
        isLoggedIn(state) {
            //console.log('isLoggedIn called')
            //if (state.user != null) console.log('state:'.state)
            return state.user != null;
        },
    }, 
    actions: {
        async logout() {            
            await useApiFetch("/api/auth/signout", { method: "POST" });
            this.user = null;
            navigateTo("/");
        },
        async fetchUser() {
            console.log('fetchUser called')
            const { data, error } = await useApiFetch("/api/user");
            if (data.value) {
                this.user = data.value.data;
                await this.fetchUserProfile();
            }
            console.log('user = ')
            console.log(this.user)
        },
        async fetchUserProfile() {
            console.log('fetchUserProfile called')
            const { data, error } = await useApiFetch("/api/user/profile");
            if (data.value) this.profile = data.value.data;
            console.log('profile = ')
            console.log(this.profile)
        },
        async signin(credentials) {
            await useApiFetch("/sanctum/csrf-cookie");
            
            const { data, error } = await useApiFetch("/api/auth/signin", {
                method: "POST",
                body: credentials,
            });
            console.log('signin called')
            console.log('data:')
            console.log(data.value)
            console.log('error:')
            console.log(error.value)

            await this.fetchUser();

            return { data, error };
        },
        async signup(info) {
            await useApiFetch("/sanctum/csrf-cookie");
        
            const signup = await useApiFetch("/api/auth/signup", {
                method: "POST",
                body: info,
            });
        
            await this.fetchUser();
        
            return signup;
        },
        async verify(email, token) {
            console.log('verify called');
            const API_PATH = useRuntimeConfig().public.jsonApiPath;
            const { data, error } = await useFetch(API_PATH+'/auth/verify?email='+email+'&token='+token, {
                method: "POST",
                body: { 'email':email, 'token':token },
            })
            console.log('data:');
            console.log(data);
            return { data, error };
        },  
        async updateProfile(formData) {
            await useApiFetch("/sanctum/csrf-cookie");
        
            const API_PATH = useRuntimeConfig().public.jsonApiPath;
            const { data, error } = await useApiFetch("/api/user/profile", {
                method: "POST",                
                body: formData,
            });
        
            return { data, error };
        },
    },
});