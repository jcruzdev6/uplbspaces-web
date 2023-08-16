import { mergeProps, useSSRContext, resolveComponent, withCtx, createVNode, defineComponent, ref, createElementBlock, unref, createTextVNode, toDisplayString } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc, n as navigateTo } from "../server.mjs";
import { _ as __nuxt_component_2$3 } from "./nuxt-link-24bdb615.js";
import { u as useFacilityTypeStore } from "./FacilityTypeStore-e7e4a162.js";
import { u as usePageStore } from "./PageStore-eb644c05.js";
import { u as useAuthStore } from "./AuthStore-37ecd788.js";
import { _ as _imports_0$1, a as _imports_1, b as __nuxt_component_0$3 } from "./google-logo-0f67db4b.js";
import "hookable";
import "destr";
import "devalue";
import "klona";
import { Form, Field } from "vee-validate";
import * as Yup from "yup";
const _sfc_main$f = {
  name: "Fa6SolidBars"
};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "0.88em",
    height: "1em",
    viewBox: "0 0 448 512"
  }, _attrs))}><path fill="currentColor" d="M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z"></path></svg>`);
}
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/Bars.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const __nuxt_component_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["ssrRender", _sfc_ssrRender$c]]);
const _sfc_main$e = {
  name: "Fa6SolidMagnifyingGlass"
};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 512"
  }, _attrs))}><path fill="currentColor" d="M416 208c0 45.9-14.9 88.3-40 122.7l126.6 126.7c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208zM208 352a144 144 0 1 0 0-288a144 144 0 1 0 0 288z"></path></svg>`);
}
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/MagnifyingGlass.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const __nuxt_component_2$2 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["ssrRender", _sfc_ssrRender$b]]);
const _imports_0 = "" + __buildAssetsURL("upSeal40.d1b21dc6.png");
const _sfc_main$d = {};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs) {
  const _component_IconsBars = __nuxt_component_0$2;
  const _component_NuxtLink = __nuxt_component_2$3;
  const _component_nuxt_image = resolveComponent("nuxt-image");
  const _component_IconsMagnifyingGlass = __nuxt_component_2$2;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "container-fluid",
    id: "head"
  }, _attrs))}><div class="container-lg" id="headContent"><button type="button" class="toggleBtn d-lg-none" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNav" aria-controls="offcanvasNav">`);
  _push(ssrRenderComponent(_component_IconsBars, null, null, _parent));
  _push(`</button><div class="mx-auto mx-lg-0 me-lg-auto">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_nuxt_image, {
          src: "@/assets/images/default/uplbspacesDark275.png",
          width: "165"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_nuxt_image, {
            src: "@/assets/images/default/uplbspacesDark275.png",
            width: "165"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="d-none d-lg-inline ms-1"><small>Your online booking system for</small><img${ssrRenderAttr("src", _imports_0)} class="mx-1"><small> U.P. Los Baños Spaces.</small></div></div><div class="d-none d-lg-flex"><input type="text" id="headSearch" class="form-control form-control-sm rounded-start rounded-end-0" style="${ssrRenderStyle({ "width": "200px" })}" placeholder="search"><button type="button" class="btn btn-sm btn-success rounded-start-0 rounded-end">`);
  _push(ssrRenderComponent(_component_IconsMagnifyingGlass, null, null, _parent));
  _push(`</button></div><button type="button" class="toggleBtn d-lg-none" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSearch" aria-controls="offcanvasSearch">`);
  _push(ssrRenderComponent(_component_IconsMagnifyingGlass, null, null, _parent));
  _push(`</button></div></div>`);
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$a]]);
const _sfc_main$c = {
  name: "Fa6SolidCaretDown"
};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "0.63em",
    height: "1em",
    viewBox: "0 0 320 512"
  }, _attrs))}><path fill="currentColor" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9S301 191.9 288 191.9L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"></path></svg>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/CaretDown.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __nuxt_component_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$9]]);
const __nuxt_component_1$3 = /* @__PURE__ */ defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  // eslint-disable-next-line vue/require-prop-types
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots, attrs }) {
    const mounted = ref(false);
    return (props) => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const _sfc_main$b = {
  name: "FaSolidFolder"
};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 512"
  }, _attrs))}><path fill="currentColor" d="M464 128H272l-64-64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48z"></path></svg>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/Folder.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __nuxt_component_3$1 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$8]]);
const _sfc_main$a = {
  name: "Fa6SolidImagePortrait"
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "0.75em",
    height: "1em",
    viewBox: "0 0 384 512"
  }, _attrs))}><path fill="currentColor" d="M384 64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V64zM128 192a64 64 0 1 1 128 0a64 64 0 1 1-128 0zM80 356.6c0-37.9 30.7-68.6 68.6-68.6h86.9c37.9 0 68.6 30.7 68.6 68.6c0 15.1-12.3 27.4-27.4 27.4H107.4C92.3 384 80 371.7 80 356.6z"></path></svg>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/ImagePortrait.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_4$1 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$9 = {
  name: "Fa6SolidSquareXmark"
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "0.88em",
    height: "1em",
    viewBox: "0 0 448 512"
  }, _attrs))}><path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm79 143c9.4-9.4 24.6-9.4 33.9 0l47 47l47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47l47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47l-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47l-47-47c-9.4-9.4-9.4-24.6 0-33.9z"></path></svg>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/SquareXMark.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_5$1 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$8 = {
  name: "Fa6SolidCircleUser"
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 512"
  }, _attrs))}><path fill="currentColor" d="M399 384.2c-22.1-38.4-63.6-64.2-111-64.2h-64c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0a256 256 0 1 1-512 0zm256 16a72 72 0 1 0 0-144a72 72 0 1 0 0 144z"></path></svg>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/CircleUser.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_1$2 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$7 = {
  __name: "TopNav",
  __ssrInlineRender: true,
  setup(__props) {
    useFacilityTypeStore();
    usePageStore();
    const auth = useAuthStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconsCaretDown = __nuxt_component_2$1;
      const _component_client_only = __nuxt_component_1$3;
      const _component_NuxtLink = __nuxt_component_2$3;
      const _component_IconsFolder = __nuxt_component_3$1;
      const _component_IconsImagePortrait = __nuxt_component_4$1;
      const _component_IconsSquareXMark = __nuxt_component_5$1;
      const _component_IconsCircleUser = __nuxt_component_1$2;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "container-fluid",
        id: "nav"
      }, _attrs))}><div class="container-lg d-lg-none" id="navTagline"> Your online reservation system for U.P. Los Baños Facilities. </div><nav class="container-lg d-none d-lg-flex" id="navContent"><ul id="navMenu" class="me-auto"><li><a href="#" class="navMenuLink" data-bs-toggle="dropdown" aria-expanded="false">Spaces `);
      _push(ssrRenderComponent(_component_IconsCaretDown, {
        class: "ms-2",
        style: { "font-size": ".6em" }
      }, null, _parent));
      _push(`</a><ul class="dropdown-menu">`);
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(`</ul></li>`);
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(`</ul><ul style="${ssrRenderStyle(unref(auth).isLoggedIn ? null : { display: "none" })}" id="navUserMenu"><li class="navUserMenuItem">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/auth/mybookings",
        class: "navUserMenuLink"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_IconsFolder, null, null, _parent2, _scopeId));
            _push2(` My Bookings`);
          } else {
            return [
              createVNode(_component_IconsFolder),
              createTextVNode(" My Bookings")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li style="${ssrRenderStyle({ "width": "1px" })}"></li><li class="navUserMenuItem">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/auth/myaccount",
        class: "navUserMenuLink"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_IconsImagePortrait, null, null, _parent2, _scopeId));
            _push2(` My Account`);
          } else {
            return [
              createVNode(_component_IconsImagePortrait),
              createTextVNode(" My Account")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li style="${ssrRenderStyle({ "width": "1px" })}"></li><li class="navUserMenuItem"><button class="navUserMenuLink">`);
      _push(ssrRenderComponent(_component_IconsSquareXMark, null, null, _parent));
      _push(` Sign Out</button></li></ul><a style="${ssrRenderStyle(!unref(auth).isLoggedIn ? null : { display: "none" })}" href="#" class="navMenuLink" data-bs-toggle="modal" data-bs-target="#modalSignin">Sign In `);
      _push(ssrRenderComponent(_component_IconsCircleUser, { class: "fs-5 ms-1" }, null, _parent));
      _push(`</a><a style="${ssrRenderStyle(!unref(auth).isLoggedIn ? null : { display: "none" })}" href="#" class="navUserMenuLink" data-bs-toggle="modal" data-bs-target="#modalSignup">Sign Up</a></nav></div>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TopNav.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_1$1 = _sfc_main$7;
const _sfc_main$6 = {
  name: "Fa6SolidPhone"
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 512"
  }, _attrs))}><path fill="currentColor" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64c0 247.4 200.6 448 448 448c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368c-70.4-33.3-127.4-90.3-160.7-160.7l49.3-40.3c13.7-11.2 18.4-30 11.6-46.3l-40-96z"></path></svg>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/Phone.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$5 = {
  name: "Fa6SolidEnvelope"
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 512"
  }, _attrs))}><path fill="currentColor" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4l217.6 163.2c11.4 8.5 27 8.5 38.4 0l217.6-163.2c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176v208c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V176L294.4 339.2a63.9 63.9 0 0 1-76.8 0L0 176z"></path></svg>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/Envelope.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_IconsPhone = __nuxt_component_0;
  const _component_IconsEnvelope = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "container-fluid",
    id: "footer"
  }, _attrs))}><div class="container-lg" id="footerContent"><div><address> Office of the Vice Chancellor for Administration<br> University Library of the Philippines<br>Los Baños, Laguna<br><br>`);
  _push(ssrRenderComponent(_component_IconsPhone, { class: "me-1" }, null, _parent));
  _push(`+63 2 8536 2354<br><br><a class="link link-light" href="mailto:uplbspaces@up.edu.ph">`);
  _push(ssrRenderComponent(_component_IconsEnvelope, { class: "me-1" }, null, _parent));
  _push(`uplbpspaces@up.edu.ph</a></address><br><br> © 2023 by University of the Philippines.<br class="d-md-none"> All rights reserved. </div></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2]]);
function useModalDisplay(ele, hide = true, backdrop = "modal-backdrop") {
  let modal;
  let modal_backdrops;
  modal = document.getElementById(ele);
  modal_backdrops = document.querySelectorAll("." + backdrop);
  let display = hide ? "none" : "block";
  modal.style.display = display;
  modal_backdrops.forEach((el) => {
    el.style.display = display;
  });
}
const _sfc_main$3 = {
  __name: "SignIn",
  __ssrInlineRender: true,
  setup(__props) {
    const auth = useAuthStore();
    const message = ref("");
    const schema = Yup.object().shape({
      email: Yup.string().required("Email is required").email("Email is invalid"),
      password: Yup.string().min(8, "Password must be at least 8 characters").required("Password is required")
    });
    const handleLogin = async (values) => {
      if (auth.isLoggedIn) {
        useModalDisplay("modalSignin");
        return navigateTo("/");
      }
      const { data, error } = await auth.signin(values);
      if (!error.value) {
        useModalDisplay("modalSignin");
        navigateTo("/");
      } else {
        message.value = error.value.data.message;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconsXMark = __nuxt_component_0$3;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "modal fade",
        id: "modalSignin",
        tabindex: "-1",
        "aria-labelledby": "modalSigninLabel",
        "aria-hidden": "true"
      }, _attrs))}>`);
      _push(ssrRenderComponent(unref(Form), {
        onSubmit: handleLogin,
        "validation-schema": unref(schema)
      }, {
        default: withCtx(({ errors }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="modal-dialog modal-dialog-centered"${_scopeId}><div class="modal-content"${_scopeId}><button type="button" class="toggleBtnDark ms-auto mt-2 me-2" data-bs-dismiss="modal" aria-label="Close"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_IconsXMark, null, null, _parent2, _scopeId));
            _push2(`</button><div class="modalContainer"${_scopeId}><div class="modalTitleContainer"${_scopeId}><h3 class="modalTitle" id="modalSigninLabel"${_scopeId}>Sign In</h3></div><div class="msgError"${_scopeId}>${ssrInterpolate(unref(message))}</div><label for="modalSigninForm-username"${_scopeId}>Enter your email</label>`);
            _push2(ssrRenderComponent(unref(Field), {
              name: "email",
              type: "email",
              id: "modalSigninForm-username",
              class: [{ "is-invalid": errors.email }, "form-control form-control-sm rounded"],
              placeholder: "email"
            }, null, _parent2, _scopeId));
            _push2(`<div class="msgError"${_scopeId}>${ssrInterpolate(errors.email)}</div><label for="modalSigninForm-password"${_scopeId}>Enter your password</label>`);
            _push2(ssrRenderComponent(unref(Field), {
              name: "password",
              type: "password",
              id: "modalSigninForm-password",
              class: [{ "is-invalid": errors.email }, "form-control form-control-sm rounded"],
              placeholder: "password"
            }, null, _parent2, _scopeId));
            _push2(`<div class="msgError"${_scopeId}>${ssrInterpolate(errors.password)}</div><div class="d-flex"${_scopeId}><a href="#" data-bs-target="#modalForgot" data-bs-toggle="modal" class="ms-auto my-1"${_scopeId}>Forgot Password?</a></div><div class="d-grid"${_scopeId}><button type="submit" class="btn btn-success btn-sm mt-2 mb-2 rounded"${_scopeId}>Sign In </button></div><a href="#modalSignup" data-bs-target="#modalSignup" data-bs-toggle="modal"${_scopeId}>Not yet a member? Sign up</a><div class="my-3"${_scopeId}><strong${_scopeId}>or</strong></div><div class="d-grid"${_scopeId}><button type="button" class="socialBtn"${_scopeId}><div${_scopeId}><img${ssrRenderAttr("src", _imports_0$1)} width="30" height="30" class="me-3"${_scopeId}>Continue with Facebook</div></button><button type="button" class="socialBtn"${_scopeId}><div${_scopeId}><img${ssrRenderAttr("src", _imports_1)} width="27" height="27" class="me-3"${_scopeId}>Continue with Google</div></button></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "modal-dialog modal-dialog-centered" }, [
                createVNode("div", { class: "modal-content" }, [
                  createVNode("button", {
                    type: "button",
                    class: "toggleBtnDark ms-auto mt-2 me-2",
                    "data-bs-dismiss": "modal",
                    "aria-label": "Close"
                  }, [
                    createVNode(_component_IconsXMark)
                  ]),
                  createVNode("div", { class: "modalContainer" }, [
                    createVNode("div", { class: "modalTitleContainer" }, [
                      createVNode("h3", {
                        class: "modalTitle",
                        id: "modalSigninLabel"
                      }, "Sign In")
                    ]),
                    createVNode("div", { class: "msgError" }, toDisplayString(unref(message)), 1),
                    createVNode("label", { for: "modalSigninForm-username" }, "Enter your email"),
                    createVNode(unref(Field), {
                      name: "email",
                      type: "email",
                      id: "modalSigninForm-username",
                      class: [{ "is-invalid": errors.email }, "form-control form-control-sm rounded"],
                      placeholder: "email"
                    }, null, 8, ["class"]),
                    createVNode("div", { class: "msgError" }, toDisplayString(errors.email), 1),
                    createVNode("label", { for: "modalSigninForm-password" }, "Enter your password"),
                    createVNode(unref(Field), {
                      name: "password",
                      type: "password",
                      id: "modalSigninForm-password",
                      class: [{ "is-invalid": errors.email }, "form-control form-control-sm rounded"],
                      placeholder: "password"
                    }, null, 8, ["class"]),
                    createVNode("div", { class: "msgError" }, toDisplayString(errors.password), 1),
                    createVNode("div", { class: "d-flex" }, [
                      createVNode("a", {
                        href: "#",
                        "data-bs-target": "#modalForgot",
                        "data-bs-toggle": "modal",
                        class: "ms-auto my-1"
                      }, "Forgot Password?")
                    ]),
                    createVNode("div", { class: "d-grid" }, [
                      createVNode("button", {
                        type: "submit",
                        class: "btn btn-success btn-sm mt-2 mb-2 rounded"
                      }, "Sign In ")
                    ]),
                    createVNode("a", {
                      href: "#modalSignup",
                      "data-bs-target": "#modalSignup",
                      "data-bs-toggle": "modal"
                    }, "Not yet a member? Sign up"),
                    createVNode("div", { class: "my-3" }, [
                      createVNode("strong", null, "or")
                    ]),
                    createVNode("div", { class: "d-grid" }, [
                      createVNode("button", {
                        type: "button",
                        class: "socialBtn"
                      }, [
                        createVNode("div", null, [
                          createVNode("img", {
                            src: _imports_0$1,
                            width: "30",
                            height: "30",
                            class: "me-3"
                          }),
                          createTextVNode("Continue with Facebook")
                        ])
                      ]),
                      createVNode("button", {
                        type: "button",
                        class: "socialBtn"
                      }, [
                        createVNode("div", null, [
                          createVNode("img", {
                            src: _imports_1,
                            width: "27",
                            height: "27",
                            class: "me-3"
                          }),
                          createTextVNode("Continue with Google")
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Modal/SignIn.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_3 = _sfc_main$3;
const _sfc_main$2 = {
  __name: "SignUp",
  __ssrInlineRender: true,
  setup(__props) {
    const auth = useAuthStore();
    const message = ref("");
    const schema = Yup.object().shape({
      email: Yup.string().required("Email is required").email("Email is invalid"),
      password: Yup.string().min(8, "Password must be at least 8 characters").required("Password is required")
    });
    const handleRegister = async (values) => {
      const { data, error } = await auth.register(form.value);
      if (!error.value) {
        console.log("login successful");
        navigateTo("/");
      } else {
        message.value = error.value.data.message;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconsXMark = __nuxt_component_0$3;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "modal fade",
        id: "modalSignup",
        tabindex: "-1",
        "aria-labelledby": "modalSignupLabel",
        "aria-hidden": "true"
      }, _attrs))}>`);
      _push(ssrRenderComponent(unref(Form), {
        onSubmit: handleRegister,
        "validation-schema": unref(schema)
      }, {
        default: withCtx(({ errors }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="modal-dialog modal-dialog-centered"${_scopeId}><div class="modal-content"${_scopeId}><button type="button" class="toggleBtnDark ms-auto mt-2 me-2" data-bs-dismiss="modal" aria-label="Close"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_IconsXMark, null, null, _parent2, _scopeId));
            _push2(`</button><div class="modalContainer"${_scopeId}><div class="modalTitleContainer"${_scopeId}><h3 class="modalTitle" id="modalSignupLabel"${_scopeId}>Sign Up</h3></div><div class="msgError"${_scopeId}>${ssrInterpolate(unref(message))}</div><label for="modalSignupForm-email"${_scopeId}>Enter email</label>`);
            _push2(ssrRenderComponent(unref(Field), {
              type: "email",
              name: "email",
              id: "modalSignupForm-email",
              class: "form-control form-control-sm rounded",
              placeholder: "email"
            }, null, _parent2, _scopeId));
            _push2(`<div class="msgError"${_scopeId}>${ssrInterpolate(errors.email)}</div><label for="modalSignupForm-password"${_scopeId}>Enter password</label>`);
            _push2(ssrRenderComponent(unref(Field), {
              type: "password",
              name: "password",
              id: "modalSignupForm-password",
              class: "form-control form-control-sm rounded",
              placeholder: "password"
            }, null, _parent2, _scopeId));
            _push2(`<div class="msgError"${_scopeId}>${ssrInterpolate(errors.password)}</div><label for="modalSignupForm-password2"${_scopeId}>Re-enter password</label>`);
            _push2(ssrRenderComponent(unref(Field), {
              type: "password",
              name: "password_confirmation",
              id: "modalSignupForm-password2",
              class: "form-control form-control-sm rounded",
              placeholder: "confirm password"
            }, null, _parent2, _scopeId));
            _push2(`<div class="msgError"${_scopeId}>${ssrInterpolate(errors.password_confirmation)}</div><div class="d-flex" style="${ssrRenderStyle({ "align-items": "center" })}"${_scopeId}><input class="form-check-input me-1" type="checkbox" value="" id="flexCheckDefault"${_scopeId}><label class="form-check-label" for="flexCheckDefault"${_scopeId}>Agree to <a href="terms.html"${_scopeId}>Terms &amp; Conditions</a></label></div><div class="d-grid"${_scopeId}><button type="submit" class="btn btn-success btn-sm mt-2 mb-2 rounded"${_scopeId}>Sign Up </button></div><a href="#modalSignin" data-bs-target="#modalSignin" data-bs-toggle="modal"${_scopeId}>Already a member? Sign In</a><div class="my-3"${_scopeId}><strong${_scopeId}>or</strong></div><div class="d-grid"${_scopeId}><button type="button" class="socialBtn"${_scopeId}><div${_scopeId}><img${ssrRenderAttr("src", _imports_0$1)} width="30" height="30" class="me-3"${_scopeId}>Continue with Facebook</div></button><button type="button" class="socialBtn"${_scopeId}><div${_scopeId}><img${ssrRenderAttr("src", _imports_1)} width="27" height="27" class="me-3"${_scopeId}>Continue with Google</div></button></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "modal-dialog modal-dialog-centered" }, [
                createVNode("div", { class: "modal-content" }, [
                  createVNode("button", {
                    type: "button",
                    class: "toggleBtnDark ms-auto mt-2 me-2",
                    "data-bs-dismiss": "modal",
                    "aria-label": "Close"
                  }, [
                    createVNode(_component_IconsXMark)
                  ]),
                  createVNode("div", { class: "modalContainer" }, [
                    createVNode("div", { class: "modalTitleContainer" }, [
                      createVNode("h3", {
                        class: "modalTitle",
                        id: "modalSignupLabel"
                      }, "Sign Up")
                    ]),
                    createVNode("div", { class: "msgError" }, toDisplayString(unref(message)), 1),
                    createVNode("label", { for: "modalSignupForm-email" }, "Enter email"),
                    createVNode(unref(Field), {
                      type: "email",
                      name: "email",
                      id: "modalSignupForm-email",
                      class: "form-control form-control-sm rounded",
                      placeholder: "email"
                    }),
                    createVNode("div", { class: "msgError" }, toDisplayString(errors.email), 1),
                    createVNode("label", { for: "modalSignupForm-password" }, "Enter password"),
                    createVNode(unref(Field), {
                      type: "password",
                      name: "password",
                      id: "modalSignupForm-password",
                      class: "form-control form-control-sm rounded",
                      placeholder: "password"
                    }),
                    createVNode("div", { class: "msgError" }, toDisplayString(errors.password), 1),
                    createVNode("label", { for: "modalSignupForm-password2" }, "Re-enter password"),
                    createVNode(unref(Field), {
                      type: "password",
                      name: "password_confirmation",
                      id: "modalSignupForm-password2",
                      class: "form-control form-control-sm rounded",
                      placeholder: "confirm password"
                    }),
                    createVNode("div", { class: "msgError" }, toDisplayString(errors.password_confirmation), 1),
                    createVNode("div", {
                      class: "d-flex",
                      style: { "align-items": "center" }
                    }, [
                      createVNode("input", {
                        class: "form-check-input me-1",
                        type: "checkbox",
                        value: "",
                        id: "flexCheckDefault"
                      }),
                      createVNode("label", {
                        class: "form-check-label",
                        for: "flexCheckDefault"
                      }, [
                        createTextVNode("Agree to "),
                        createVNode("a", { href: "terms.html" }, "Terms & Conditions")
                      ])
                    ]),
                    createVNode("div", { class: "d-grid" }, [
                      createVNode("button", {
                        type: "submit",
                        class: "btn btn-success btn-sm mt-2 mb-2 rounded"
                      }, "Sign Up ")
                    ]),
                    createVNode("a", {
                      href: "#modalSignin",
                      "data-bs-target": "#modalSignin",
                      "data-bs-toggle": "modal"
                    }, "Already a member? Sign In"),
                    createVNode("div", { class: "my-3" }, [
                      createVNode("strong", null, "or")
                    ]),
                    createVNode("div", { class: "d-grid" }, [
                      createVNode("button", {
                        type: "button",
                        class: "socialBtn"
                      }, [
                        createVNode("div", null, [
                          createVNode("img", {
                            src: _imports_0$1,
                            width: "30",
                            height: "30",
                            class: "me-3"
                          }),
                          createTextVNode("Continue with Facebook")
                        ])
                      ]),
                      createVNode("button", {
                        type: "button",
                        class: "socialBtn"
                      }, [
                        createVNode("div", null, [
                          createVNode("img", {
                            src: _imports_1,
                            width: "27",
                            height: "27",
                            class: "me-3"
                          }),
                          createTextVNode("Continue with Google")
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Modal/SignUp.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_4 = _sfc_main$2;
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_IconsXMark = __nuxt_component_0$3;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "modal fade",
    id: "modalForgot",
    tabindex: "-1",
    "aria-labelledby": "modalForgotLabel",
    "aria-hidden": "true"
  }, _attrs))}><div class="modal-dialog modal-dialog-centered"><div class="modal-content"><button type="button" class="toggleBtnDark ms-auto mt-2 me-2" data-bs-dismiss="modal" aria-label="Close">`);
  _push(ssrRenderComponent(_component_IconsXMark, null, null, _parent));
  _push(`</button><div class="modalContainer"><div class="modalTitleContainer"><h3 class="modalTitle" id="modalForgotLabel">Forgot Password</h3></div><label for="modalForgotForm-email">Enter your email address</label><input type="email" id="modalForgotForm-email" class="form-control form-control-sm rounded" placeholder="email"><div class="d-grid"><button type="submit" class="btn btn-success btn-sm mt-2 mb-2 rounded">Submit</button></div></div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Modal/ForgotPassword.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_IconsXMark = __nuxt_component_0$3;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "modal fade",
    id: "modalProofOfPayment",
    tabindex: "-1",
    "aria-labelledby": "modalProofOfPaymentLabel",
    "aria-hidden": "true"
  }, _attrs))}><div class="modal-dialog modal-dialog-centered"><div class="modal-content"><button type="button" class="toggleBtnDark ms-auto mt-2 me-2" data-bs-dismiss="modal" aria-label="Close">`);
  _push(ssrRenderComponent(_component_IconsXMark, null, null, _parent));
  _push(`</button><div class="modalContainer"><div class="modalTitleContainer"><h3 class="modalTitle" id="modalProofOfPaymentLabel">Proof of Payment</h3></div><label for="modalProofOfPaymentForm-file">Upload proof of payment</label><input type="file" id="modalProofOfPaymentForm-file" class="form-control form-control-sm rounded" placeholder="file"><div class="d-grid"><button type="submit" class="btn btn-success btn-sm mt-2 mb-2 rounded">Upload</button></div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Modal/UploadPayment.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __nuxt_component_0$1 as _,
  __nuxt_component_1$1 as a,
  __nuxt_component_2 as b,
  __nuxt_component_3 as c,
  __nuxt_component_4 as d,
  __nuxt_component_5 as e,
  __nuxt_component_6 as f,
  __nuxt_component_1$2 as g,
  __nuxt_component_2$1 as h
};
//# sourceMappingURL=UploadPayment-4fb7394c.js.map
