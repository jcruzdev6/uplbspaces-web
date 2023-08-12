import { u as useFacilityStore, _ as __nuxt_component_0 } from './Breadcrumbs-43ad8507.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-149f0ed2.mjs';
import { u as useImage } from './useImage-d261a3dd.mjs';
import { withAsyncContext, mergeProps, unref, useSSRContext } from 'file:///Users/m71/Project/us/uplbspaces-web/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'file:///Users/m71/Project/us/uplbspaces-web/node_modules/vue/server-renderer/index.mjs';
import { a as useRoute } from '../server.mjs';
import { u as useFacilityTypeStore } from './FacilityTypeStore-4b052b88.mjs';
import './CaretRight-2b7e89f4.mjs';
import 'file:///Users/m71/Project/us/uplbspaces-web/node_modules/ufo/dist/index.mjs';
import '../../renderer.mjs';
import 'file:///Users/m71/Project/us/uplbspaces-web/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/m71/Project/us/uplbspaces-web/node_modules/h3/dist/index.mjs';
import 'file:///Users/m71/Project/us/uplbspaces-web/node_modules/devalue/index.js';
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
import './7-9-2a16786c.mjs';
import 'file:///Users/m71/Project/us/uplbspaces-web/node_modules/unctx/dist/index.mjs';
import 'file:///Users/m71/Project/us/uplbspaces-web/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/m71/Project/us/uplbspaces-web/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///Users/m71/Project/us/uplbspaces-web/node_modules/unhead/dist/index.mjs';
import 'file:///Users/m71/Project/us/uplbspaces-web/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/m71/Project/us/uplbspaces-web/node_modules/cookie-es/dist/index.mjs';

const _sfc_main$1 = {
  __name: "ListCard",
  __ssrInlineRender: true,
  props: {
    facility: {
      type: Object
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="spacesTileCard"><div class="spacesTileClip"><div class="spacesTileImg"><img${ssrRenderAttr("src", ("useImage" in _ctx ? _ctx.useImage : unref(useImage))("facility", props.facility.id, props.facility.facility_type_id))}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/spaces/space/" + props.facility.id,
        class: "spacesTileTint"
      }, null, _parent));
      _push(`</div></div><div class="spacesTileDescriptionBox"><div class="spacesTileTitleClip"><h4 class="spacesTileTitle"><a href="ncas.html">${ssrInterpolate(props.facility.name)}</a></h4></div><div class="spacesTileText"><address>${ssrInterpolate(props.facility.address)}</address><div class="spacesTileTable"><div class="row1 label">Capacity:</div><div class="row1">${ssrInterpolate(props.facility.min_capacity)} - ${ssrInterpolate(props.facility.max_capacity)}</div><div class="row2 label">Availability:</div><div class="row2">${ssrInterpolate(props.facility.available_days_grp)}, ${ssrInterpolate(props.facility.available_hrs)}</div><div class="row1 label">U.P. Rate:</div><div class="row1">Php 1,000.00 / hr</div><div class="row2 label">Non-U.P. Rate:</div><div class="row2">Php 1,600.00 / hr</div></div></div><div class="spacesTileBtnContainer"><button type="button" class="btn btn-success btn-sm rounded-3 spacesTileBtn" data-bs-toggle="modal" data-bs-target="#modalBookNow" aria-controls="modalBookNow">Book Now</button></div></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Facility/ListCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$1;
const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const facilityStore = useFacilityStore();
    const facilityTypeStore = useFacilityTypeStore();
    [__temp, __restore] = withAsyncContext(() => facilityStore.fetchFacilitiesByType(route.params.id)), await __temp, __restore();
    [__temp, __restore] = withAsyncContext(() => facilityTypeStore.fetchFacilityType(route.params.id)), await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FacilityBreadcrumbs = __nuxt_component_0;
      const _component_FacilityListCard = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "container-fluid px-lg-3",
        id: "spaces"
      }, _attrs))}><div class="container-lg" id="spacesContent"><div class="spacesHeader"><div>`);
      _push(ssrRenderComponent(_component_FacilityBreadcrumbs, null, null, _parent));
      _push(`<h3 class="spacesTitle">${ssrInterpolate(unref(facilityTypeStore).facility_type.name)}</h3></div></div><div id="spacesGrid"><!--[-->`);
      ssrRenderList(unref(facilityStore).facilities, (facility, index) => {
        _push(ssrRenderComponent(_component_FacilityListCard, {
          key: index,
          facility
        }, null, _parent));
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/spaces/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-0da9965e.mjs.map
