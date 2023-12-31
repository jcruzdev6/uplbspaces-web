import { u as useApiFetch } from './useApiFetch-591f0d5e.mjs';
import { e as defineStore, n as navigateTo } from '../server.mjs';

const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null
  }),
  getters: {
    isLoggedIn(state) {
      return state.user != null;
    }
  },
  actions: {
    async logout() {
      await useApiFetch("/api/auth/signout", { method: "POST" });
      this.user = null;
      navigateTo("/");
    },
    async fetchUser() {
      console.log("fetchUser called");
      const { data, error } = await useApiFetch("/api/user");
      console.log("data:");
      console.log(data.value);
      console.log("error:");
      console.log(error.value);
      if (data.value)
        this.user = data.value;
    },
    async signin(credentials) {
      await useApiFetch("/sanctum/csrf-cookie");
      const { data, error } = await useApiFetch("/api/auth/signin", {
        method: "POST",
        body: credentials
      });
      console.log("signin called");
      console.log("data:");
      console.log(data.value);
      console.log("error:");
      console.log(error.value);
      await this.fetchUser();
      return { data, error };
    },
    async signup(info) {
      await useApiFetch("/sanctum/csrf-cookie");
      const signup = await useApiFetch("/auth/signup", {
        method: "POST",
        body: info
      });
      await this.fetchUser();
      return signup;
    }
  }
});

export { useAuthStore as u };
//# sourceMappingURL=AuthStore-37ecd788.mjs.map
