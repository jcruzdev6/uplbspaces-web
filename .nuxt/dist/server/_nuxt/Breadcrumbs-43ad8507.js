import { _ as __nuxt_component_0$1 } from "./nuxt-link-149f0ed2.js";
import { _ as __nuxt_component_1 } from "./CaretRight-2b7e89f4.js";
import { mergeProps, withCtx, createTextVNode, unref, toDisplayString, useSSRContext } from "vue";
import "hookable";
import { d as defineStore, e as useRuntimeConfig, a as useRoute } from "../server.mjs";
import "destr";
import "devalue";
import "klona";
import { u as useFacilityTypeStore } from "./FacilityTypeStore-4b052b88.js";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
const useFacilityStore = defineStore("facility", {
  state: () => ({
    facilities: null,
    facility: null
  }),
  getters: {
    rates(state) {
      if (state.facility != null) {
        const rates = state.facility.facility_rates.filter((item) => {
          return item["category"] == "facility";
        });
        return rates;
      }
      return "";
    },
    rate(state) {
      if (state.facility != null) {
        const rates = state.facility.facility_rates.filter((item) => {
          return item["category"] == "facility";
        });
        if (rates.length > 0)
          return rates[0];
        else
          return [];
      }
      return "";
    }
  },
  actions: {
    async fetchFacilitiesByType(type_id) {
      const API_PATH = useRuntimeConfig().public.jsonApiPath;
      const results = await $fetch(API_PATH + "/facilities/type/" + type_id);
      this.facilities = results.data;
    },
    async fetchFacility(id) {
      const API_PATH = useRuntimeConfig().public.jsonApiPath;
      const results = await $fetch(API_PATH + "/facilities/" + id);
      this.facility = results.data;
    }
  }
});
const _sfc_main = {
  __name: "Breadcrumbs",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const facilityStore = useFacilityStore();
    const facilityTypeStore = useFacilityTypeStore();
    let type_id = "";
    let type_name = "";
    let facility_name = "";
    if (facilityTypeStore.facility_type) {
      type_name = facilityTypeStore.facility_type.name;
      type_id = facilityTypeStore.facility_type.id;
    }
    if (route.name == "spaces-space-id" && facilityStore.facility)
      facility_name = facilityStore.facility.name;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_IconsCaretRight = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "spacesBreadcrumbs" }, _attrs))}>`);
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
      _push(`</span> `);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/spaces" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Spaces`);
          } else {
            return [
              createTextVNode("Spaces")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`  <span>`);
      _push(ssrRenderComponent(_component_IconsCaretRight, null, null, _parent));
      _push(`</span>  `);
      if (unref(route).name == "spaces-id") {
        _push(`<span>${ssrInterpolate(_ctx.facility_type)}</span>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(route).name == "spaces-space-id") {
        _push(`<span>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/spaces/" + unref(type_id)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(type_name))}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(type_name)), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`  <span>`);
        _push(ssrRenderComponent(_component_IconsCaretRight, null, null, _parent));
        _push(`</span> ${ssrInterpolate(unref(facility_name))}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Facility/Breadcrumbs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main;
export {
  __nuxt_component_0 as _,
  useFacilityStore as u
};
//# sourceMappingURL=Breadcrumbs-43ad8507.js.map
