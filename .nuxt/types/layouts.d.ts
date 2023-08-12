import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default" | "facility" | "page"
declare module "/Users/m71/Project/us/uplbspaces-web/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}