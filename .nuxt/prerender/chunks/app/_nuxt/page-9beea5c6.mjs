import { _ as __nuxt_component_0$1, a as __nuxt_component_1, b as __nuxt_component_2, c as __nuxt_component_3, d as __nuxt_component_4, e as __nuxt_component_5, f as __nuxt_component_6 } from './UploadPayment-5330e7c8.mjs';
import { b as useAuthStore } from '../server.mjs';
import { u as useFacilityTypeStore } from './FacilityTypeStore-4b052b88.mjs';
import { u as usePageStore } from './PageStore-37947abb.mjs';
import { resolveComponent, useSSRContext } from 'file:///Users/m71/Project/us/uplbspaces-web/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'file:///Users/m71/Project/us/uplbspaces-web/node_modules/vue/server-renderer/index.mjs';
import '../../renderer.mjs';
import 'file:///Users/m71/Project/us/uplbspaces-web/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/m71/Project/us/uplbspaces-web/node_modules/h3/dist/index.mjs';
import 'file:///Users/m71/Project/us/uplbspaces-web/node_modules/devalue/index.js';
import 'file:///Users/m71/Project/us/uplbspaces-web/node_modules/ufo/dist/index.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///Users/m71/Project/us/uplbspaces-web/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///Users/m71/Project/us/uplbspaces-web/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/m71/Project/us/uplbspaces-web/node_modules/destr/dist/index.mjs';
import 'file:///Users/m71/Project/us/uplbspaces-web/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/m71/Project/us/uplbspaces-web/node_modules/hookable/dist/index.mjs';
import 'file:///Users/m71/Project/us/uplbspaces-web/node_modules/scule/dist/index.mjs';
import 'file:///Users/m71/Project/us/uplbspaces-web/node_modules/klona/dist/index.mjs';
import 'file:///Users/m71/Project/us/uplbspaces-web/node_modules/defu/dist/defu.mjs';
import 'file:///Users/m71/Project/us/uplbspaces-web/node_modules/ohash/dist/index.mjs';
import 'file:///Users/m71/Project/us/uplbspaces-web/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/m71/Project/us/uplbspaces-web/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/m71/Project/us/uplbspaces-web/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/m71/Project/us/uplbspaces-web/node_modules/pathe/dist/index.mjs';
import './nuxt-link-149f0ed2.mjs';
import './google-logo-0f67db4b.mjs';
import 'file:///Users/m71/Project/us/uplbspaces-web/node_modules/vee-validate/dist/vee-validate.js';
import 'file:///Users/m71/Project/us/uplbspaces-web/node_modules/yup/index.js';
import 'file:///Users/m71/Project/us/uplbspaces-web/node_modules/unctx/dist/index.mjs';
import 'file:///Users/m71/Project/us/uplbspaces-web/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/m71/Project/us/uplbspaces-web/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///Users/m71/Project/us/uplbspaces-web/node_modules/unhead/dist/index.mjs';
import 'file:///Users/m71/Project/us/uplbspaces-web/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/m71/Project/us/uplbspaces-web/node_modules/cookie-es/dist/index.mjs';

const _sfc_main = {
  __name: "page",
  __ssrInlineRender: true,
  setup(__props) {
    useAuthStore();
    const facilityTypeStore = useFacilityTypeStore();
    const pageStore = usePageStore();
    facilityTypeStore.fetchFacilityTypes();
    pageStore.fetchPages();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Header = __nuxt_component_0$1;
      const _component_TopNav = __nuxt_component_1;
      const _component_Footer = __nuxt_component_2;
      const _component_SideNav = resolveComponent("SideNav");
      const _component_SideSearch = resolveComponent("SideSearch");
      const _component_SideSignIn = resolveComponent("SideSignIn");
      const _component_SideSignUp = resolveComponent("SideSignUp");
      const _component_SideForgotPassword = resolveComponent("SideForgotPassword");
      const _component_SideUploadPayment = resolveComponent("SideUploadPayment");
      const _component_ModalSignIn = __nuxt_component_3;
      const _component_ModalSignUp = __nuxt_component_4;
      const _component_ModalForgotPassword = __nuxt_component_5;
      const _component_ModalUploadPayment = __nuxt_component_6;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Header, null, null, _parent));
      _push(ssrRenderComponent(_component_TopNav, null, null, _parent));
      _push(`<div id="mainBg">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_SideNav, null, null, _parent));
      _push(ssrRenderComponent(_component_SideSearch, null, null, _parent));
      _push(ssrRenderComponent(_component_SideSignIn, null, null, _parent));
      _push(ssrRenderComponent(_component_SideSignUp, null, null, _parent));
      _push(ssrRenderComponent(_component_SideForgotPassword, null, null, _parent));
      _push(ssrRenderComponent(_component_SideUploadPayment, null, null, _parent));
      _push(ssrRenderComponent(_component_ModalSignIn, null, null, _parent));
      _push(ssrRenderComponent(_component_ModalSignUp, null, null, _parent));
      _push(ssrRenderComponent(_component_ModalForgotPassword, null, null, _parent));
      _push(ssrRenderComponent(_component_ModalUploadPayment, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/page.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=page-9beea5c6.mjs.map
