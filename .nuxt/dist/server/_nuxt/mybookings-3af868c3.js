import { _ as __nuxt_component_0 } from "./Breadcrumbs-b5006b9c.js";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import "./nuxt-link-149f0ed2.js";
import "ufo";
import "hookable";
import "../server.mjs";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "vue-router";
import "h3";
import "@vue/devtools-api";
import "destr";
import "devalue";
import "klona";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "ohash";
import "cookie-es";
import "defu";
import "./CaretRight-2b7e89f4.js";
import "./PageStore-37947abb.js";
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
      _push(`<h3 class="mainTitle">My Bookings</h3><p></p><p> </p></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/mybookings.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=mybookings-3af868c3.js.map
