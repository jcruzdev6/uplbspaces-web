import "vue";
import "hookable";
import { f as defineNuxtRouteMiddleware, n as navigateTo } from "../server.mjs";
import "destr";
import "devalue";
import "klona";
import { u as useAuthStore } from "./AuthStore-37ecd788.js";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "vue-router";
import "h3";
import "ufo";
import "@vue/devtools-api";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "vue/server-renderer";
import "defu";
import "./useApiFetch-591f0d5e.js";
import "ohash";
import "./ssr-133d1c6e.js";
import "cookie-es";
const auth = /* @__PURE__ */ defineNuxtRouteMiddleware((to, from) => {
  const auth2 = useAuthStore();
  if (!auth2.isLoggedIn) {
    return navigateTo("/signin", { replace: true });
  }
});
export {
  auth as default
};
//# sourceMappingURL=auth-1aa3238f.js.map
