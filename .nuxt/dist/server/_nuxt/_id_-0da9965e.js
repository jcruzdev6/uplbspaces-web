import { u as useFacilityStore, _ as __nuxt_component_0$1 } from "./Breadcrumbs-43ad8507.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-149f0ed2.js";
import { u as useImage } from "./useImage-d261a3dd.js";
import { unref, useSSRContext, withAsyncContext, mergeProps } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import "hookable";
import { a as useRoute } from "../server.mjs";
import "destr";
import "devalue";
import "klona";
import { u as useFacilityTypeStore } from "./FacilityTypeStore-4b052b88.js";
import "./CaretRight-2b7e89f4.js";
import "ufo";
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
      const _component_NuxtLink = __nuxt_component_0;
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
      const _component_FacilityBreadcrumbs = __nuxt_component_0$1;
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
export {
  _sfc_main as default
};
//# sourceMappingURL=_id_-0da9965e.js.map
