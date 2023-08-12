import { _ as _imports_0, a as _imports_1, b as __nuxt_component_0 } from "./google-logo-0f67db4b.js";
import { ref, mergeProps, unref, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from "vue";
import "hookable";
import { b as useAuthStore, n as navigateTo } from "../server.mjs";
import "destr";
import "devalue";
import "klona";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { Form, Field } from "vee-validate";
import * as Yup from "yup";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "vue-router";
import "h3";
import "ufo";
import "@vue/devtools-api";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "ohash";
import "cookie-es";
import "defu";
const _sfc_main = {
  __name: "signin",
  __ssrInlineRender: true,
  setup(__props) {
    const auth = useAuthStore();
    const message = ref("");
    const schema = Yup.object().shape({
      email: Yup.string().required("Email is required").email("Email is invalid"),
      password: Yup.string().min(8, "Password must be at least 8 characters").required("Password is required")
    });
    const signinModal = ref(null);
    const handleLogin = async (values) => {
      if (auth.isLoggedIn) {
        return navigateTo("/");
      }
      const { data, error } = await auth.signin(values);
      if (!error.value) {
        console.log("login successful");
        signinModal.hide();
        navigateTo("/");
      } else {
        message.value = error.value.data.message;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconsXMark = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "pageSignin",
        tabindex: "-1"
      }, _attrs))}>`);
      _push(ssrRenderComponent(unref(Form), {
        onSubmit: handleLogin,
        "validation-schema": unref(schema)
      }, {
        default: withCtx(({ errors }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="modal-dialog modal-dialog-centered"${_scopeId}><div class="modal-content"${_scopeId}><button type="button" class="toggleBtnDark ms-auto mt-2 me-2" data-bs-dismiss="modal" aria-label="Close"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_IconsXMark, null, null, _parent2, _scopeId));
            _push2(`</button><div class="modalContainer"${_scopeId}><div class="modalTitleContainer"${_scopeId}><h3 class="modalTitle" id="modalSigninLabel"${_scopeId}>Sign In</h3></div><div class="msgError"${_scopeId}>${ssrInterpolate(unref(message))}</div><label for="modalSigninForm-username"${_scopeId}>Enter your email</label>`);
            _push2(ssrRenderComponent(unref(Field), {
              name: "email",
              type: "email",
              id: "modalSigninForm-username",
              class: [{ "is-invalid": errors.email }, "form-control form-control-sm rounded"],
              placeholder: "email"
            }, null, _parent2, _scopeId));
            _push2(`<div class="msgError"${_scopeId}>${ssrInterpolate(errors.email)}</div><label for="modalSigninForm-password"${_scopeId}>Enter your password</label>`);
            _push2(ssrRenderComponent(unref(Field), {
              name: "password",
              type: "password",
              id: "modalSigninForm-password",
              class: [{ "is-invalid": errors.email }, "form-control form-control-sm rounded"],
              placeholder: "password"
            }, null, _parent2, _scopeId));
            _push2(`<div class="msgError"${_scopeId}>${ssrInterpolate(errors.password)}</div><div class="d-flex"${_scopeId}><a href="#" data-bs-target="#modalForgot" data-bs-toggle="modal" class="ms-auto my-1"${_scopeId}>Forgot Password?</a></div><div class="d-grid"${_scopeId}><button type="submit" class="btn btn-success btn-sm mt-2 mb-2 rounded"${_scopeId}>Sign In </button></div><a href="#modalSignup" data-bs-target="#modalSignup" data-bs-toggle="modal"${_scopeId}>Not yet a member? Sign up</a><div class="my-3"${_scopeId}><strong${_scopeId}>or</strong></div><div class="d-grid"${_scopeId}><button type="button" class="socialBtn"${_scopeId}><div${_scopeId}><img${ssrRenderAttr("src", _imports_0)} width="30" height="30" class="me-3"${_scopeId}>Continue with Facebook</div></button><button type="button" class="socialBtn"${_scopeId}><div${_scopeId}><img${ssrRenderAttr("src", _imports_1)} width="27" height="27" class="me-3"${_scopeId}>Continue with Google</div></button></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "modal-dialog modal-dialog-centered" }, [
                createVNode("div", { class: "modal-content" }, [
                  createVNode("button", {
                    type: "button",
                    class: "toggleBtnDark ms-auto mt-2 me-2",
                    "data-bs-dismiss": "modal",
                    "aria-label": "Close"
                  }, [
                    createVNode(_component_IconsXMark)
                  ]),
                  createVNode("div", { class: "modalContainer" }, [
                    createVNode("div", { class: "modalTitleContainer" }, [
                      createVNode("h3", {
                        class: "modalTitle",
                        id: "modalSigninLabel"
                      }, "Sign In")
                    ]),
                    createVNode("div", { class: "msgError" }, toDisplayString(unref(message)), 1),
                    createVNode("label", { for: "modalSigninForm-username" }, "Enter your email"),
                    createVNode(unref(Field), {
                      name: "email",
                      type: "email",
                      id: "modalSigninForm-username",
                      class: [{ "is-invalid": errors.email }, "form-control form-control-sm rounded"],
                      placeholder: "email"
                    }, null, 8, ["class"]),
                    createVNode("div", { class: "msgError" }, toDisplayString(errors.email), 1),
                    createVNode("label", { for: "modalSigninForm-password" }, "Enter your password"),
                    createVNode(unref(Field), {
                      name: "password",
                      type: "password",
                      id: "modalSigninForm-password",
                      class: [{ "is-invalid": errors.email }, "form-control form-control-sm rounded"],
                      placeholder: "password"
                    }, null, 8, ["class"]),
                    createVNode("div", { class: "msgError" }, toDisplayString(errors.password), 1),
                    createVNode("div", { class: "d-flex" }, [
                      createVNode("a", {
                        href: "#",
                        "data-bs-target": "#modalForgot",
                        "data-bs-toggle": "modal",
                        class: "ms-auto my-1"
                      }, "Forgot Password?")
                    ]),
                    createVNode("div", { class: "d-grid" }, [
                      createVNode("button", {
                        type: "submit",
                        class: "btn btn-success btn-sm mt-2 mb-2 rounded"
                      }, "Sign In ")
                    ]),
                    createVNode("a", {
                      href: "#modalSignup",
                      "data-bs-target": "#modalSignup",
                      "data-bs-toggle": "modal"
                    }, "Not yet a member? Sign up"),
                    createVNode("div", { class: "my-3" }, [
                      createVNode("strong", null, "or")
                    ]),
                    createVNode("div", { class: "d-grid" }, [
                      createVNode("button", {
                        type: "button",
                        class: "socialBtn"
                      }, [
                        createVNode("div", null, [
                          createVNode("img", {
                            src: _imports_0,
                            width: "30",
                            height: "30",
                            class: "me-3"
                          }),
                          createTextVNode("Continue with Facebook")
                        ])
                      ]),
                      createVNode("button", {
                        type: "button",
                        class: "socialBtn"
                      }, [
                        createVNode("div", null, [
                          createVNode("img", {
                            src: _imports_1,
                            width: "27",
                            height: "27",
                            class: "me-3"
                          }),
                          createTextVNode("Continue with Google")
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/signin.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=signin-ce64d15d.js.map
