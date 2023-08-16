import { _ as __nuxt_component_2 } from "./nuxt-link-24bdb615.js";
import { _ as __nuxt_component_1 } from "./CaretRight-2b7e89f4.js";
import { mergeProps, withCtx, createTextVNode, unref, toDisplayString, useSSRContext, computed, defineComponent, ref, h } from "vue";
import "hookable";
import { e as defineStore, u as useRuntimeConfig, b as useRoute, d as useHead, a as useNuxtApp } from "../server.mjs";
import "destr";
import "devalue";
import "klona";
import { u as useFacilityTypeStore } from "./FacilityTypeStore-e7e4a162.js";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { composableNames } from "unhead";
import { p as parseSize, u as useImage, a as prerenderStaticImages } from "./composables-63f493d0.js";
const coreComposableNames = [
  "injectHead"
];
({
  "@unhead/vue": [...coreComposableNames, ...composableNames]
});
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
      const _component_NuxtLink = __nuxt_component_2;
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
        _push(`<span>${ssrInterpolate(unref(type_name))}</span>`);
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
const __nuxt_component_0$1 = _sfc_main;
const baseImageProps = {
  // input source
  src: { type: String, required: true },
  // modifiers
  format: { type: String, default: void 0 },
  quality: { type: [Number, String], default: void 0 },
  background: { type: String, default: void 0 },
  fit: { type: String, default: void 0 },
  modifiers: { type: Object, default: void 0 },
  // options
  preset: { type: String, default: void 0 },
  provider: { type: String, default: void 0 },
  sizes: { type: [Object, String], default: void 0 },
  densities: { type: String, default: void 0 },
  preload: { type: Boolean, default: void 0 },
  // <img> attributes
  width: { type: [String, Number], default: void 0 },
  height: { type: [String, Number], default: void 0 },
  alt: { type: String, default: void 0 },
  referrerpolicy: { type: String, default: void 0 },
  usemap: { type: String, default: void 0 },
  longdesc: { type: String, default: void 0 },
  ismap: { type: Boolean, default: void 0 },
  loading: { type: String, default: void 0 },
  crossorigin: {
    type: [Boolean, String],
    default: void 0,
    validator: (val) => ["anonymous", "use-credentials", "", true, false].includes(val)
  },
  decoding: {
    type: String,
    default: void 0,
    validator: (val) => ["async", "auto", "sync"].includes(val)
  }
};
const useBaseImage = (props) => {
  const options = computed(() => {
    return {
      provider: props.provider,
      preset: props.preset
    };
  });
  const attrs = computed(() => {
    return {
      width: parseSize(props.width),
      height: parseSize(props.height),
      alt: props.alt,
      referrerpolicy: props.referrerpolicy,
      usemap: props.usemap,
      longdesc: props.longdesc,
      ismap: props.ismap,
      crossorigin: props.crossorigin === true ? "anonymous" : props.crossorigin || void 0,
      loading: props.loading,
      decoding: props.decoding
    };
  });
  const $img = useImage();
  const modifiers = computed(() => {
    return {
      ...props.modifiers,
      width: parseSize(props.width),
      height: parseSize(props.height),
      format: props.format,
      quality: props.quality || $img.options.quality,
      background: props.background,
      fit: props.fit
    };
  });
  return {
    options,
    attrs,
    modifiers
  };
};
const imgProps = {
  ...baseImageProps,
  placeholder: { type: [Boolean, String, Number, Array], default: void 0 }
};
const __nuxt_component_0 = /* @__PURE__ */ defineComponent({
  name: "NuxtImg",
  props: imgProps,
  emits: ["load", "error"],
  setup: (props, ctx) => {
    const $img = useImage();
    const _base = useBaseImage(props);
    const placeholderLoaded = ref(false);
    const sizes = computed(() => $img.getSizes(props.src, {
      ..._base.options.value,
      sizes: props.sizes,
      densities: props.densities,
      modifiers: {
        ..._base.modifiers.value,
        width: parseSize(props.width),
        height: parseSize(props.height)
      }
    }));
    const attrs = computed(() => {
      const attrs2 = { ..._base.attrs.value, "data-nuxt-img": "" };
      if (!props.placeholder || placeholderLoaded.value) {
        attrs2.sizes = sizes.value.sizes;
        attrs2.srcset = sizes.value.srcset;
      }
      return attrs2;
    });
    const placeholder = computed(() => {
      let placeholder2 = props.placeholder;
      if (placeholder2 === "") {
        placeholder2 = true;
      }
      if (!placeholder2 || placeholderLoaded.value) {
        return false;
      }
      if (typeof placeholder2 === "string") {
        return placeholder2;
      }
      const size = Array.isArray(placeholder2) ? placeholder2 : typeof placeholder2 === "number" ? [placeholder2, placeholder2] : [10, 10];
      return $img(props.src, {
        ..._base.modifiers.value,
        width: size[0],
        height: size[1],
        quality: size[2] || 50
      }, _base.options.value);
    });
    const mainSrc = computed(
      () => props.sizes ? sizes.value.src : $img(props.src, _base.modifiers.value, _base.options.value)
    );
    const src = computed(() => placeholder.value ? placeholder.value : mainSrc.value);
    if (props.preload) {
      const isResponsive = Object.values(sizes.value).every((v) => v);
      useHead({
        link: [{
          rel: "preload",
          as: "image",
          ...!isResponsive ? { href: src.value } : {
            href: sizes.value.src,
            imagesizes: sizes.value.sizes,
            imagesrcset: sizes.value.srcset
          }
        }]
      });
    }
    if (process.env.prerender) {
      prerenderStaticImages(src.value, sizes.value.srcset);
    }
    const imgEl = ref();
    const nuxtApp = useNuxtApp();
    nuxtApp.isHydrating;
    return () => h("img", {
      ref: imgEl,
      src: src.value,
      ...{ onerror: "this.setAttribute('data-error', 1)" },
      ...attrs.value,
      ...ctx.attrs
    });
  }
});
export {
  __nuxt_component_0 as _,
  __nuxt_component_0$1 as a,
  useFacilityStore as u
};
//# sourceMappingURL=nuxt-img-0e67bf36.js.map
