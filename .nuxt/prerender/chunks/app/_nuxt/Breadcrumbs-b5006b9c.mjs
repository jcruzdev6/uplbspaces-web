import { _ as __nuxt_component_0$1 } from './nuxt-link-149f0ed2.mjs';
import { _ as __nuxt_component_1 } from './CaretRight-2b7e89f4.mjs';
import { u as usePageStore } from './PageStore-37947abb.mjs';
import { useSSRContext, mergeProps, withCtx, createTextVNode, unref } from 'file:///Users/m71/Project/us/uplbspaces-web/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'file:///Users/m71/Project/us/uplbspaces-web/node_modules/vue/server-renderer/index.mjs';

const _sfc_main = {
  __name: "Breadcrumbs",
  __ssrInlineRender: true,
  props: {
    page_name: String
  },
  setup(__props) {
    const pageStore = usePageStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
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
      _push(`</span>\xA0${ssrInterpolate(unref(pageStore).page.name)}</div></div></div>`);
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

export { __nuxt_component_0 as _ };
//# sourceMappingURL=Breadcrumbs-b5006b9c.mjs.map
