import { _ as __nuxt_component_0, a as __nuxt_component_1, b as __nuxt_component_2, c as __nuxt_component_3$1, d as __nuxt_component_4$1, e as __nuxt_component_5$1, f as __nuxt_component_6$1 } from "./UploadPayment-5330e7c8.js";
import { _ as __nuxt_component_3, a as __nuxt_component_4, b as __nuxt_component_5, c as __nuxt_component_6, d as __nuxt_component_7, e as __nuxt_component_8 } from "./UploadPayment-d294b7ae.js";
import { b as useAuthStore } from "../server.mjs";
import { u as useFacilityTypeStore } from "./FacilityTypeStore-4b052b88.js";
import { u as usePageStore } from "./PageStore-37947abb.js";
import { useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import "./nuxt-link-149f0ed2.js";
import "ufo";
import "hookable";
import "./google-logo-0f67db4b.js";
import "destr";
import "devalue";
import "klona";
import "vee-validate";
import "yup";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "vue-router";
import "h3";
import "@vue/devtools-api";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "ohash";
import "cookie-es";
import "defu";
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
      const _component_Header = __nuxt_component_0;
      const _component_TopNav = __nuxt_component_1;
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
export {
  _sfc_main as default
};
//# sourceMappingURL=default-d5bea28c.js.map
