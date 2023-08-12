import { b as buildAssetsURL } from '../../renderer.mjs';
import { _ as __nuxt_component_0 } from './Breadcrumbs-b5006b9c.mjs';
import { u as usePageStore } from './PageStore-37947abb.mjs';
import { u as useImage } from './useImage-d261a3dd.mjs';
import { withAsyncContext, unref, useSSRContext, mergeProps } from 'file:///Users/m71/Project/us/uplbspaces-web/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'file:///Users/m71/Project/us/uplbspaces-web/node_modules/vue/server-renderer/index.mjs';
import { a as useRoute } from '../server.mjs';
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
import './CaretRight-2b7e89f4.mjs';
import './7-9-2a16786c.mjs';
import 'file:///Users/m71/Project/us/uplbspaces-web/node_modules/unctx/dist/index.mjs';
import 'file:///Users/m71/Project/us/uplbspaces-web/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/m71/Project/us/uplbspaces-web/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///Users/m71/Project/us/uplbspaces-web/node_modules/unhead/dist/index.mjs';
import 'file:///Users/m71/Project/us/uplbspaces-web/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/m71/Project/us/uplbspaces-web/node_modules/cookie-es/dist/index.mjs';

const _imports_0 = "" + buildAssetsURL("uplbspaces_mono_dark_275.d6ad26f1.png");
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
      _push(`<div id="innerpageBodyContent">${ssrInterpolate(unref(pageStore).page.content)} <p>\xA0</p></div></div></div></div>`);
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
//# sourceMappingURL=_id_-01fdc761.mjs.map
