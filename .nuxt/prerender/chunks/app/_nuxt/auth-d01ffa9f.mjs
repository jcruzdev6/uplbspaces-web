import { f as defineNuxtRouteMiddleware, b as useAuthStore, n as navigateTo } from '../server.mjs';
import 'file:///Users/m71/Project/us/uplbspaces-web/node_modules/vue/index.mjs';
import 'file:///Users/m71/Project/us/uplbspaces-web/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/m71/Project/us/uplbspaces-web/node_modules/hookable/dist/index.mjs';
import 'file:///Users/m71/Project/us/uplbspaces-web/node_modules/unctx/dist/index.mjs';
import 'file:///Users/m71/Project/us/uplbspaces-web/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/m71/Project/us/uplbspaces-web/node_modules/h3/dist/index.mjs';
import 'file:///Users/m71/Project/us/uplbspaces-web/node_modules/ufo/dist/index.mjs';
import 'file:///Users/m71/Project/us/uplbspaces-web/node_modules/destr/dist/index.mjs';
import 'file:///Users/m71/Project/us/uplbspaces-web/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///Users/m71/Project/us/uplbspaces-web/node_modules/unhead/dist/index.mjs';
import 'file:///Users/m71/Project/us/uplbspaces-web/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/m71/Project/us/uplbspaces-web/node_modules/ohash/dist/index.mjs';
import 'file:///Users/m71/Project/us/uplbspaces-web/node_modules/cookie-es/dist/index.mjs';
import 'file:///Users/m71/Project/us/uplbspaces-web/node_modules/vue/server-renderer/index.mjs';
import 'file:///Users/m71/Project/us/uplbspaces-web/node_modules/defu/dist/defu.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///Users/m71/Project/us/uplbspaces-web/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///Users/m71/Project/us/uplbspaces-web/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/m71/Project/us/uplbspaces-web/node_modules/scule/dist/index.mjs';
import 'file:///Users/m71/Project/us/uplbspaces-web/node_modules/klona/dist/index.mjs';
import 'file:///Users/m71/Project/us/uplbspaces-web/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/m71/Project/us/uplbspaces-web/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/m71/Project/us/uplbspaces-web/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/m71/Project/us/uplbspaces-web/node_modules/pathe/dist/index.mjs';

const auth = /* @__PURE__ */ defineNuxtRouteMiddleware((to, from) => {
  const auth2 = useAuthStore();
  if (!auth2.isLoggedIn) {
    return navigateTo("/signin", { replace: true });
  }
});

export { auth as default };
//# sourceMappingURL=auth-d01ffa9f.mjs.map
