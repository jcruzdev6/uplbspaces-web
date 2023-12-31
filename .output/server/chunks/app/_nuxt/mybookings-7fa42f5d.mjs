import { _ as __nuxt_component_0 } from './Breadcrumbs-a7e0e9c7.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import './nuxt-link-24bdb615.mjs';
import 'ufo';
import '../server.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'vue-router';
import 'h3';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
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
import './CaretRight-2b7e89f4.mjs';
import './PageStore-eb644c05.mjs';

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
//# sourceMappingURL=mybookings-7fa42f5d.mjs.map
