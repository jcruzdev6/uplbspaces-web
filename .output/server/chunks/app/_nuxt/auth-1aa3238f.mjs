import { f as defineNuxtRouteMiddleware, n as navigateTo } from '../server.mjs';
import { u as useAuthStore } from './AuthStore-37ecd788.mjs';
import 'vue';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'vue-router';
import 'h3';
import 'ufo';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue/server-renderer';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'klona';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'ipx';
import 'http-graceful-shutdown';
import './useApiFetch-591f0d5e.mjs';
import 'cookie-es';

const auth = /* @__PURE__ */ defineNuxtRouteMiddleware((to, from) => {
  const auth2 = useAuthStore();
  if (!auth2.isLoggedIn) {
    return navigateTo("/signin", { replace: true });
  }
});

export { auth as default };
//# sourceMappingURL=auth-1aa3238f.mjs.map
