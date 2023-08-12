import { _ as __nuxt_component_0 } from "./Breadcrumbs-b5006b9c.js";
import { u as usePageStore } from "./PageStore-37947abb.js";
import { u as useImage } from "./useImage-d261a3dd.js";
import { mergeProps, unref, useSSRContext, withAsyncContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import "hookable";
import { a as useRoute } from "../server.mjs";
import "destr";
import "devalue";
import "klona";
import "./nuxt-link-149f0ed2.js";
import "ufo";
import "./CaretRight-2b7e89f4.js";
import "./7-9-2a16786c.js";
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
const _imports_0 = "" + __buildAssetsURL("uplbspaces_mono_dark_275.d6ad26f1.png");
const _sfc_main$1 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const pageStore = usePageStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "innerpageImgContainer" }, _attrs))}><img${ssrRenderAttr("src", ("useImage" in _ctx ? _ctx.useImage : unref(useImage))("page", unref(pageStore).page.id))}><div class="innerpageImgText"><p>${ssrInterpolate(unref(pageStore).page.name)}</p><img class="innerpageImgTextLogo"${ssrRenderAttr("src", _imports_0)}></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Page/Header.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$1;
const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const pageStore = usePageStore();
    [__temp, __restore] = withAsyncContext(() => pageStore.fetchPage(route.params.id)), await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageBreadcrumbs = __nuxt_component_0;
      const _component_PageHeader = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_PageBreadcrumbs, null, null, _parent));
      _push(`<div class="container-fluid" id="innerpage"><div class="container-lg" id="innerpageBody">`);
      _push(ssrRenderComponent(_component_PageHeader, null, null, _parent));
      _push(`<div id="innerpageBodyContent">${ssrInterpolate(unref(pageStore).page.content)} <p> </p></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/pages/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_id_-01fdc761.js.map
