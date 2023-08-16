import { _ as __nuxt_component_2 } from "./nuxt-link-24bdb615.js";
import { _ as __nuxt_component_1 } from "./CaretRight-2b7e89f4.js";
import { u as usePageStore } from "./PageStore-eb644c05.js";
import { mergeProps, withCtx, createTextVNode, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = {
  __name: "Breadcrumbs",
  __ssrInlineRender: true,
  props: {
    page_name: String
  },
  setup(__props) {
    const pageStore = usePageStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_2;
      const _component_IconsCaretRight = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "container-fluid",
        id: "innerpageHeader"
      }, _attrs))}><div class="container-lg" id="innerpageHeaderContent"><div class="spacesBreadcrumbs">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Home`);
          } else {
            return [
              createTextVNode("Home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` <span>`);
      _push(ssrRenderComponent(_component_IconsCaretRight, null, null, _parent));
      _push(`</span> ${ssrInterpolate(unref(pageStore).page.name)}</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Page/Breadcrumbs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main;
export {
  __nuxt_component_0 as _
};
//# sourceMappingURL=Breadcrumbs-a7e0e9c7.js.map
