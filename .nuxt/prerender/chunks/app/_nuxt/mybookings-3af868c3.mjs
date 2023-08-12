import { _ as __nuxt_component_0 } from './Breadcrumbs-b5006b9c.mjs';
import { mergeProps, useSSRContext } from 'file:///Users/m71/Project/us/uplbspaces-web/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file:///Users/m71/Project/us/uplbspaces-web/node_modules/vue/server-renderer/index.mjs';
import './nuxt-link-149f0ed2.mjs';
import 'file:///Users/m71/Project/us/uplbspaces-web/node_modules/ufo/dist/index.mjs';
import '../server.mjs';
import 'file:///Users/m71/Project/us/uplbspaces-web/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/m71/Project/us/uplbspaces-web/node_modules/hookable/dist/index.mjs';
import 'file:///Users/m71/Project/us/uplbspaces-web/node_modules/unctx/dist/index.mjs';
import 'file:///Users/m71/Project/us/uplbspaces-web/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/m71/Project/us/uplbspaces-web/node_modules/h3/dist/index.mjs';
import 'file:///Users/m71/Project/us/uplbspaces-web/node_modules/destr/dist/index.mjs';
import 'file:///Users/m71/Project/us/uplbspaces-web/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///Users/m71/Project/us/uplbspaces-web/node_modules/unhead/dist/index.mjs';
import 'file:///Users/m71/Project/us/uplbspaces-web/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/m71/Project/us/uplbspaces-web/node_modules/ohash/dist/index.mjs';
import 'file:///Users/m71/Project/us/uplbspaces-web/node_modules/cookie-es/dist/index.mjs';
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
import './CaretRight-2b7e89f4.mjs';
import './PageStore-37947abb.mjs';

const _sfc_main = {
  __name: "mybookings",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageBreadcrumbs = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "container-fluid px-lg-3",
        id: "main"
      }, _attrs))}><div class="container-lg" id="mainContent"><div id="mainGrid"><div id="mainGridMainCol" class="mainGridBox">`);
      _push(ssrRenderComponent(_component_PageBreadcrumbs, { page_name: "My Bookings" }, null, _parent));
      _push(`<h3 class="mainTitle">My Bookings</h3><p></p><p>\xA0</p></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/mybookings.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=mybookings-3af868c3.mjs.map
