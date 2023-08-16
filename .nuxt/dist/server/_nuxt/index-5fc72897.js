import { mergeProps, useSSRContext, resolveComponent, unref, withCtx, createVNode, toDisplayString } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import { _ as __nuxt_component_2 } from "./nuxt-link-24bdb615.js";
import { u as useImage } from "./composables-63f493d0.js";
import { u as useFacilityTypeStore } from "./FacilityTypeStore-e7e4a162.js";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "vue-router";
import "h3";
import "ufo";
import "@vue/devtools-api";
import "destr";
import "devalue";
import "klona";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "defu";
import "./ssr-133d1c6e.js";
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "tile",
    id: "homeGridOneBg"
  }, _attrs))}><div id="homeGridOne"><div id="homeGridOneContent"><div id="homeGridOneLeftCol"><h1 id="homeGridOneTitle">Rent a facility in U.P. Los Baños</h1><p>Just fill up the form or choose a category</p></div><div class="d-grid" id="homeGridOneRightCol"><label for="homeSearchForm-search">Which space do you need?</label><input type="text" id="homeSearchForm-search" class="form-control form-control-sm rounded" placeholder="ex. Umali Hall"><label for="homeSearchForm-cap">For how many persons?</label><div class="d-flex"><input type="number" id="homeSearchForm-cap-min" class="form-control form-control-sm rounded me-1" placeholder="min"></div><label for="homeSearchForm-date">When do you need it?</label><input type="date" id="homeSearchForm-date" class="form-control form-control-sm rounded" placeholder="no. of persons"><button type="submit" class="btn btn-success btn-sm mt-2 mb-2 rounded">Search</button></div></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BookingForm.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = {
  __name: "Type",
  __ssrInlineRender: true,
  props: {
    facility_type: {
      type: Object
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_image = resolveComponent("nuxt-image");
      const _component_NuxtLink = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "tileClip" }, _attrs))}><div class="tile">`);
      _push(ssrRenderComponent(_component_nuxt_image, {
        src: ("useImage" in _ctx ? _ctx.useImage : unref(useImage))("facility_type", props.facility_type.id)
      }, null, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/spaces/" + props.facility_type.id,
        class: "tileTint"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="tileContent"${_scopeId}><h3 class="tileTitle"${_scopeId}>${ssrInterpolate(props.facility_type.name)}</h3><p${_scopeId}>description here ${ssrInterpolate(props.facility_type.description)}</p></div>`);
          } else {
            return [
              createVNode("div", { class: "tileContent" }, [
                createVNode("h3", { class: "tileTitle" }, toDisplayString(props.facility_type.name), 1),
                createVNode("p", null, "description here " + toDisplayString(props.facility_type.description), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Facility/Type.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$1;
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const facilityTypeStore = useFacilityTypeStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BookingForm = __nuxt_component_0;
      const _component_FacilityType = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "container-fluid",
        id: "home"
      }, _attrs))}><div class="container-lg" id="homeContent"><div id="homeGrid">`);
      _push(ssrRenderComponent(_component_BookingForm, null, null, _parent));
      _push(`<!--[-->`);
      ssrRenderList(unref(facilityTypeStore).facility_types, (facility_type, index) => {
        _push(ssrRenderComponent(_component_FacilityType, {
          key: index,
          facility_type
        }, null, _parent));
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-5fc72897.js.map
