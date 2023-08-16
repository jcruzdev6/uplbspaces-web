import { _ as __nuxt_component_0$1, a as __nuxt_component_1$1, b as __nuxt_component_2, c as __nuxt_component_3$1, d as __nuxt_component_4$1, e as __nuxt_component_5$1, f as __nuxt_component_6$1 } from './UploadPayment-4fb7394c.mjs';
import { _ as __nuxt_component_3, a as __nuxt_component_4, b as __nuxt_component_5, c as __nuxt_component_6, d as __nuxt_component_7, e as __nuxt_component_8 } from './UploadPayment-b52e95ab.mjs';
import { u as useAuthStore } from './AuthStore-37ecd788.mjs';
import { u as useFacilityTypeStore } from './FacilityTypeStore-e7e4a162.mjs';
import { u as usePageStore } from './PageStore-eb644c05.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'h3';
import 'devalue';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'klona';
import 'defu';
import 'ohash';
import 'ufo';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'ipx';
import 'http-graceful-shutdown';
import '../server.mjs';
import 'unctx';
import 'vue-router';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import './nuxt-link-24bdb615.mjs';
import './google-logo-0f67db4b.mjs';
import 'vee-validate';
import 'yup';
import './useApiFetch-591f0d5e.mjs';
import 'cookie-es';

const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    useAuthStore();
    const facilityTypeStore = useFacilityTypeStore();
    const pageStore = usePageStore();
    facilityTypeStore.fetchFacilityTypes();
    pageStore.fetchPages();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Header = __nuxt_component_0$1;
      const _component_TopNav = __nuxt_component_1$1;
      const _component_Footer = __nuxt_component_2;
      const _component_SidebarNav = __nuxt_component_3;
      const _component_SidebarSearch = __nuxt_component_4;
      const _component_SidebarSignIn = __nuxt_component_5;
      const _component_SidebarSignUp = __nuxt_component_6;
      const _component_SidebarForgotPassword = __nuxt_component_7;
      const _component_SidebarUploadPayment = __nuxt_component_8;
      const _component_ModalSignIn = __nuxt_component_3$1;
      const _component_ModalSignUp = __nuxt_component_4$1;
      const _component_ModalForgotPassword = __nuxt_component_5$1;
      const _component_ModalUploadPayment = __nuxt_component_6$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Header, null, null, _parent));
      _push(ssrRenderComponent(_component_TopNav, null, null, _parent));
      _push(`<div id="mainBg">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_SidebarNav, null, null, _parent));
      _push(ssrRenderComponent(_component_SidebarSearch, null, null, _parent));
      _push(ssrRenderComponent(_component_SidebarSignIn, null, null, _parent));
      _push(ssrRenderComponent(_component_SidebarSignUp, null, null, _parent));
      _push(ssrRenderComponent(_component_SidebarForgotPassword, null, null, _parent));
      _push(ssrRenderComponent(_component_SidebarUploadPayment, null, null, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-0ff99c8e.mjs.map
