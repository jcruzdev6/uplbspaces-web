import { _ as __nuxt_component_0, a as __nuxt_component_1, b as __nuxt_component_2, c as __nuxt_component_3, d as __nuxt_component_4, e as __nuxt_component_5, f as __nuxt_component_6 } from "./UploadPayment-4fb7394c.js";
import { u as useAuthStore } from "./AuthStore-37ecd788.js";
import { u as useFacilityTypeStore } from "./FacilityTypeStore-e7e4a162.js";
import { u as usePageStore } from "./PageStore-eb644c05.js";
import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import "../server.mjs";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "vue-router";
import "h3";
import "ufo";
import "@vue/devtools-api";
import "destr";
import "devalue";
import "klona";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "defu";
import "./nuxt-link-24bdb615.js";
import "./google-logo-0f67db4b.js";
import "vee-validate";
import "yup";
import "./useApiFetch-591f0d5e.js";
import "ohash";
import "./ssr-133d1c6e.js";
import "cookie-es";
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
      const _component_Header = __nuxt_component_0;
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
export {
  _sfc_main as default
};
//# sourceMappingURL=page-a12b3f5b.js.map
