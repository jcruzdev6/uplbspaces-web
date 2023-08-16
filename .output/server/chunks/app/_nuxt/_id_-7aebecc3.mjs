import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { _ as __nuxt_component_0$2 } from './Breadcrumbs-a7e0e9c7.mjs';
import { u as usePageStore } from './PageStore-eb644c05.mjs';
import { u as useImage } from './composables-63f493d0.mjs';
import { useSSRContext, withAsyncContext, unref, defineComponent, mergeProps, ref, withCtx, createVNode, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderStyle, ssrRenderClass, ssrRenderList } from 'vue/server-renderer';
import { u as useFetchImages } from './useFetchImages-b1a9a8ea.mjs';
import { b as useRoute, u as useRuntimeConfig, a as useNuxtApp, _ as _export_sfc } from '../server.mjs';
import { useReCaptcha, VueReCaptcha } from 'vue-recaptcha-v3';
import { u as useApiFetch } from './useApiFetch-591f0d5e.mjs';
import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';
import { _ as __nuxt_component_1$3 } from './CaretRight-2b7e89f4.mjs';
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
import './nuxt-link-24bdb615.mjs';
import 'unctx';
import 'vue-router';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'cookie-es';

const _imports_0 = "" + buildAssetsURL("uplbspaces_mono_dark_275.d6ad26f1.png");
const _sfc_main$d = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const pageStore = usePageStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "innerpageImgContainer" }, _attrs))}><img${ssrRenderAttr("src", ("useImage" in _ctx ? _ctx.useImage : unref(useImage))("page", unref(pageStore).page.id))}><div class="innerpageImgText"><p>${ssrInterpolate(unref(pageStore).page.name)}</p><img class="innerpageImgTextLogo"${ssrRenderAttr("src", _imports_0)}></div></div>`);
    };
  }
};
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Page/Header.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const __nuxt_component_1$2 = _sfc_main$d;
const _sfc_main$c = {
  __name: "ImageCards",
  __ssrInlineRender: true,
  setup(__props) {
    const pageStore = usePageStore();
    const images = useFetchImages("page", pageStore.page.id);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      ssrRenderList(unref(images), (image, index) => {
        _push(`<div class="pageCardPhoto"${ssrRenderAttr("id", "pagePhoto" + (index + 1))}><img${ssrRenderAttr("src", image)}></div>`);
      });
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Page/ImageCards.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __nuxt_component_0$1 = _sfc_main$c;
const _sfc_main$b = {
  __name: "Content",
  __ssrInlineRender: true,
  setup(__props) {
    const pageStore = usePageStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageImageCards = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "innerpageBodyContentContainer" }, _attrs))}><div class="row"><div class="col-lg-7" id="innerpageBodyContentLeft"><div>${unref(pageStore).page.content}</div></div><div class="col-lg-5" id="innerpageBodyContentRight">`);
      _push(ssrRenderComponent(_component_PageImageCards, null, null, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Page/Content.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __nuxt_component_2$1 = _sfc_main$b;
const _sfc_main$a = {
  name: "Fa6SolidAt"
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 512"
  }, _attrs))}><path fill="currentColor" d="M256 64C150 64 64 150 64 256s86 192 192 192c17.7 0 32 14.3 32 32s-14.3 32-32 32C114.6 512 0 397.4 0 256S114.6 0 256 0s256 114.6 256 256v32c0 53-43 96-96 96c-29.3 0-55.6-13.2-73.2-33.9c-22.8 21-53.3 33.9-86.8 33.9c-70.7 0-128-57.3-128-128s57.3-128 128-128c27.9 0 53.7 8.9 74.7 24.1c5.7-5 13.1-8.1 21.3-8.1c17.7 0 32 14.3 32 32v112c0 17.7 14.3 32 32 32s32-14.3 32-32v-32c0-106-86-192-192-192zm64 192a64 64 0 1 0-128 0a64 64 0 1 0 128 0z"></path></svg>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/At.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$9 = {
  name: "Fa6SolidMobileScreenButton"
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "0.75em",
    height: "1em",
    viewBox: "0 0 384 512"
  }, _attrs))}><path fill="currentColor" d="M16 64C16 28.7 44.7 0 80 0h224c35.3 0 64 28.7 64 64v384c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zm208 384a32 32 0 1 0-64 0a32 32 0 1 0 64 0zm80-384H80v320h224V64z"></path></svg>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/MobileScreenButton.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$8 = {
  name: "Fa6SolidLocationDot"
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "0.75em",
    height: "1em",
    viewBox: "0 0 384 512"
  }, _attrs))}><path fill="currentColor" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128a64 64 0 1 1 0-128z"></path></svg>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/LocationDot.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$7 = {
  name: "Fa6SolidClock"
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 512"
  }, _attrs))}><path fill="currentColor" d="M256 0a256 256 0 1 1 0 512a256 256 0 1 1 0-512zm-24 120v136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"></path></svg>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/Clock.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_3$1 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$6 = {
  name: "Fa6SolidPenNib"
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 512"
  }, _attrs))}><path fill="currentColor" d="m368.4 18.3l-55.7 55.8l125.2 125.2l55.7-55.7c21.9-21.9 21.9-57.3 0-79.2l-46-46.1c-21.9-21.9-57.3-21.9-79.2 0zM288 94.6l-9.2 2.8l-144.1 43.2c-19.9 6-35.7 21.2-42.3 41L3.8 445.8c-3.8 11.3-1 23.9 7.3 32.4l153.6-153.5c-3-6.3-4.7-13.3-4.7-20.7c0-26.5 21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48c-7.4 0-14.4-1.7-20.7-4.7L33.7 500.9c8.6 8.3 21.1 11.2 32.4 7.3l264.3-88.6c19.7-6.6 35-22.4 41-42.3l43.2-144.1l2.8-9.2L288 94.6z"></path></svg>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/PenNib.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_4$1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  setup() {
    const recaptchaInstance = useReCaptcha();
    const recaptcha = async () => {
      await (recaptchaInstance == null ? void 0 : recaptchaInstance.recaptchaLoaded());
      const token = await (recaptchaInstance == null ? void 0 : recaptchaInstance.executeRecaptcha("yourActionHere"));
      return token;
    };
    return {
      recaptcha
    };
  }
});
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Recaptcha.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "modal fade",
    id: "modalContactMsgSent",
    tabindex: "-1",
    "aria-labelledby": "modalContactMsgSent",
    "aria-hidden": "true"
  }, _attrs))}><div class="modal-dialog modal-dialog-centered"><div class="modal-content"><button type="button" class="toggleBtnDark ms-auto mt-2 me-2" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-xmark"></i></button><div class="modalContainer"><div class="modalTitleContainer"><h3 class="modalTitle" id="modalContactMsgSentLabel">Your Message Has Been Sent</h3></div><label for="modalContactMsgSentForm-file">Thank you.</label></div></div></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Modal/ContactUsMessage.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$3 = {
  __name: "Contact",
  __ssrInlineRender: true,
  setup(__props) {
    const pageStore = usePageStore();
    const objContact = JSON.parse(pageStore.page.content);
    const message = ref("");
    const schema = Yup.object().shape({
      name: Yup.string().min(3, "Name must be at least 3 characters").required("Name is required"),
      email: Yup.string().email("Email is invalid"),
      message: Yup.string().min(10, "Message must be at least 10 characters")
      //.required('Message is required')
    });
    const { vueApp } = useNuxtApp();
    const token = ref("");
    vueApp.use(VueReCaptcha, {
      siteKey: useRuntimeConfig().public.recaptchaKey,
      loaderOptions: {
        autoHideBadge: true
      }
    });
    async function submitContactUs(values) {
      const data = {
        name: values.name,
        email: values.email,
        phone: values.phone,
        message: values.message,
        token
      };
      console.log("submitContactUs called");
      console.log("token" + token);
      console.log(data);
      const API_URL = useRuntimeConfig().public.jsonApiPath + "/contactus";
      const { res, error } = await useApiFetch(API_URL, {
        method: "POST",
        body: data
      });
      console.log("results:");
      console.log(res);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconsAt = __nuxt_component_0;
      const _component_IconsMobileScreenButton = __nuxt_component_1$1;
      const _component_IconsLocationDot = __nuxt_component_2;
      const _component_IconsClock = __nuxt_component_3$1;
      const _component_IconsPenNib = __nuxt_component_4$1;
      const _component_Recaptcha = __nuxt_component_5;
      const _component_ModalContactUsMessage = __nuxt_component_6;
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "innerpageBodyContentContact" }, _attrs))}><div class="row"><div class="col-lg-6 order-last order-lg-first" id="innerpageBodyContentContactLeft"><div>${unref(objContact).content}</div><ul class="contactList"><li style="${ssrRenderStyle(unref(objContact).email ? null : { display: "none" })}">`);
      _push(ssrRenderComponent(_component_IconsAt, { class: "contactIcon" }, null, _parent));
      _push(`<a${ssrRenderAttr("href", "mailto:" + unref(objContact).email)}>${ssrInterpolate(unref(objContact).email)}</a></li><li style="${ssrRenderStyle(unref(objContact).phone ? null : { display: "none" })}">`);
      _push(ssrRenderComponent(_component_IconsMobileScreenButton, { class: "contactIcon" }, null, _parent));
      _push(`<a${ssrRenderAttr("href", "tel:" + unref(objContact).phone)}>${ssrInterpolate(unref(objContact).phone)}</a></li><li style="${ssrRenderStyle(unref(objContact).address ? null : { display: "none" })}">`);
      _push(ssrRenderComponent(_component_IconsLocationDot, { class: "contactIcon" }, null, _parent));
      _push(`<address>${unref(objContact).address}</address></li><li style="${ssrRenderStyle(unref(objContact).workhours ? null : { display: "none" })}">`);
      _push(ssrRenderComponent(_component_IconsClock, { class: "contactIcon" }, null, _parent));
      _push(`${ssrInterpolate(unref(objContact).workhours)}</li></ul></div><div class="col-lg-6" id="innerpageBodyContentContactRight">`);
      _push(ssrRenderComponent(unref(Form), {
        onSubmit: submitContactUs,
        "validation-schema": unref(schema),
        method: "post",
        class: "form-control",
        id: "contactForm"
      }, {
        default: withCtx(({ errors }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="contactFormHead"${_scopeId}><span class="contactHeading"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_IconsPenNib, { class: "contactFormIcon" }, null, _parent2, _scopeId));
            _push2(`Send Us A Message</span></div><div class="msgError"${_scopeId}>${ssrInterpolate(unref(message))}</div><label for="contactForm-name" class="form-label"${_scopeId}>Name:</label>`);
            _push2(ssrRenderComponent(unref(Field), {
              name: "name",
              type: "text",
              id: "contactForm-name",
              class: [{ "is-invalid": errors.name }, "form-control form-control-sm"],
              placeholder: "Name"
            }, null, _parent2, _scopeId));
            _push2(`<div class="msgError"${_scopeId}>${ssrInterpolate(errors.name)}</div><label for="contactForm-email"${_scopeId}>Email:</label>`);
            _push2(ssrRenderComponent(unref(Field), {
              name: "emil",
              type: "email",
              id: "contactForm-email",
              class: [{ "is-invalid": errors.email }, "form-control form-control-sm"],
              placeholder: "Email"
            }, null, _parent2, _scopeId));
            _push2(`<div class="msgError"${_scopeId}>${ssrInterpolate(errors.email)}</div><label for="contactForm-contact"${_scopeId}>Contact:</label>`);
            _push2(ssrRenderComponent(unref(Field), {
              name: "phone",
              type: "tel",
              id: "contactForm-contact",
              class: "form-control form-control-sm",
              placeholder: "Phone"
            }, null, _parent2, _scopeId));
            _push2(`<label for="contactForm-feedback"${_scopeId}>Message:</label><textarea name="message" id="contactForm-message" class="${ssrRenderClass([{ "is-invalid": errors.message }, "form-control"])}"${_scopeId}></textarea><div class="msgError"${_scopeId}>${ssrInterpolate(errors.message)}</div><div class="d-flex p-2"${_scopeId}><button type="reset" class="btn btn-secondary" formtarget="contactForm"${_scopeId}>Clear</button><button type="submit" class="btn btn-success" formtarget="contactForm"${_scopeId}>Send</button></div>`);
          } else {
            return [
              createVNode("div", { class: "contactFormHead" }, [
                createVNode("span", { class: "contactHeading" }, [
                  createVNode(_component_IconsPenNib, { class: "contactFormIcon" }),
                  createTextVNode("Send Us A Message")
                ])
              ]),
              createVNode("div", { class: "msgError" }, toDisplayString(unref(message)), 1),
              createVNode("label", {
                for: "contactForm-name",
                class: "form-label"
              }, "Name:"),
              createVNode(unref(Field), {
                name: "name",
                type: "text",
                id: "contactForm-name",
                class: [{ "is-invalid": errors.name }, "form-control form-control-sm"],
                placeholder: "Name"
              }, null, 8, ["class"]),
              createVNode("div", { class: "msgError" }, toDisplayString(errors.name), 1),
              createVNode("label", { for: "contactForm-email" }, "Email:"),
              createVNode(unref(Field), {
                name: "emil",
                type: "email",
                id: "contactForm-email",
                class: [{ "is-invalid": errors.email }, "form-control form-control-sm"],
                placeholder: "Email"
              }, null, 8, ["class"]),
              createVNode("div", { class: "msgError" }, toDisplayString(errors.email), 1),
              createVNode("label", { for: "contactForm-contact" }, "Contact:"),
              createVNode(unref(Field), {
                name: "phone",
                type: "tel",
                id: "contactForm-contact",
                class: "form-control form-control-sm",
                placeholder: "Phone"
              }),
              createVNode("label", { for: "contactForm-feedback" }, "Message:"),
              createVNode("textarea", {
                name: "message",
                class: ["form-control", { "is-invalid": errors.message }],
                id: "contactForm-message"
              }, null, 2),
              createVNode("div", { class: "msgError" }, toDisplayString(errors.message), 1),
              createVNode("div", { class: "d-flex p-2" }, [
                createVNode("button", {
                  type: "reset",
                  class: "btn btn-secondary",
                  formtarget: "contactForm"
                }, "Clear"),
                createVNode("button", {
                  type: "submit",
                  class: "btn btn-success",
                  formtarget: "contactForm"
                }, "Send")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_Recaptcha, null, null, _parent));
      _push(ssrRenderComponent(_component_ModalContactUsMessage, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Page/Contact.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_3 = _sfc_main$3;
const _sfc_main$2 = {
  name: "Fa6SolidCaretLeft"
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "0.5em",
    height: "1em",
    viewBox: "0 0 256 512"
  }, _attrs))}><path fill="currentColor" d="M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6v256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z"></path></svg>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/CaretLeft.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = {
  __name: "FAQs",
  __ssrInlineRender: true,
  setup(__props) {
    const pageStore = usePageStore();
    pageStore.fetchFAQs();
    const images = useFetchImages("page", pageStore.page.id);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconsCaretRight = __nuxt_component_1$3;
      const _component_IconsCaretLeft = __nuxt_component_1;
      _push(`<!--[--><div id="innerpageBodyContentFaq"><div class="faqAnswerBox"></div><div class="faqGroup"><!--[-->`);
      ssrRenderList(unref(pageStore).faqs, (faq, index) => {
        _push(`<div><div class="${ssrRenderClass(index == 0 ? "faqQuestion active" : "faqQuestion")}"${ssrRenderAttr("id", `faqQ${index}`)}>`);
        _push(ssrRenderComponent(_component_IconsCaretRight, { class: "faqArrow" }, null, _parent));
        _push(`<div class="faqQ">${ssrInterpolate(faq.question)}</div></div><div class="${ssrRenderClass(index == 0 ? "faqAnswer active" : "faqAnswer")}"${ssrRenderAttr("id", `faqA${index}`)}><div class="faqImg"><img${ssrRenderAttr("src", unref(images)[index])}></div><div class="faqQAContainer"><h4 class="question">${ssrInterpolate(faq.question)}</h4><p class="answer">${ssrInterpolate(faq.answer)}</p></div><div class="faqPrevNext"${ssrRenderAttr("id", `faq${index}PrevNext`)}><a style="${ssrRenderStyle(index > 0 ? null : { display: "none" })}" href="#" class="faqPrev">`);
        _push(ssrRenderComponent(_component_IconsCaretLeft, null, null, _parent));
        _push(` Previous</a><a style="${ssrRenderStyle(index == unref(pageStore).faqs.length ? null : { display: "none" })}" href="#" class="faqNext">Next `);
        _push(ssrRenderComponent(_component_IconsCaretRight, null, null, _parent));
        _push(`</a></div></div></div>`);
      });
      _push(`<!--]--></div></div><div${ssrRenderAttr("v-html", unref(pageStore).page.content)} class="faqMore"></div><!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Page/FAQs.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = _sfc_main$1;
const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const pageStore = usePageStore();
    [__temp, __restore] = withAsyncContext(() => pageStore.fetchPage(route.params.id)), await __temp, __restore();
    console.log(pageStore.page.name.toLowerCase());
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageBreadcrumbs = __nuxt_component_0$2;
      const _component_PageHeader = __nuxt_component_1$2;
      const _component_PageContent = __nuxt_component_2$1;
      const _component_PageContact = __nuxt_component_3;
      const _component_PageFAQs = __nuxt_component_4;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_PageBreadcrumbs, null, null, _parent));
      _push(`<div class="container-fluid" id="innerpage"><div class="container-lg" id="innerpageBody">`);
      _push(ssrRenderComponent(_component_PageHeader, null, null, _parent));
      if (unref(pageStore).page.name.toLowerCase() != "contact us" && unref(pageStore).page.name.toLowerCase() != "faqs") {
        _push(ssrRenderComponent(_component_PageContent, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(pageStore).page.name.toLowerCase() == "contact us") {
        _push(ssrRenderComponent(_component_PageContact, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(pageStore).page.name.toLowerCase() == "faqs") {
        _push(ssrRenderComponent(_component_PageFAQs, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/pages/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-7aebecc3.mjs.map
