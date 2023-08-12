import "vue";
import "hookable";
import { f as defineNuxtRouteMiddleware, b as useAuthStore, n as navigateTo } from "../server.mjs";
import "destr";
import "devalue";
import "klona";
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
import "ohash";
import "cookie-es";
import "vue/server-renderer";
import "defu";
const auth = /* @__PURE__ */ defineNuxtRouteMiddleware((to, from) => {
  const auth2 = useAuthStore();
  if (!auth2.isLoggedIn) {
    return navigateTo("/signin", { replace: true });
  }
});
export {
  auth as default
};
//# sourceMappingURL=auth-d01ffa9f.js.map
