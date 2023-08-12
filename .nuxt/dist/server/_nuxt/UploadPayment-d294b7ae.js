import { b as __nuxt_component_0, _ as _imports_0, a as _imports_1 } from "./google-logo-0f67db4b.js";
import { g as __nuxt_component_1, h as __nuxt_component_2 } from "./UploadPayment-5330e7c8.js";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const _sfc_main$5 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  const _component_IconsXMark = __nuxt_component_0;
  const _component_IconsCircleUser = __nuxt_component_1;
  const _component_IconsCaretDown = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "offcanvas offcanvas-start d-lg-none",
    "data-bs-scroll": "true",
    "data-bs-backdrop": "false",
    tabindex: "-1",
    id: "offcanvasNav"
  }, _attrs))}><button type="button" class="toggleBtn ms-auto mt-2 me-2" data-bs-dismiss="offcanvas" aria-label="Close">`);
  _push(ssrRenderComponent(_component_IconsXMark, null, null, _parent));
  _push(`</button><div class="offcanvas-header"><a href="#" class="offcanvasTitleAnchor" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSignin" aria-controls="offcanvasSignin">`);
  _push(ssrRenderComponent(_component_IconsCircleUser, { class: "fs-5 me-1" }, null, _parent));
  _push(`Sign In</a><a href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSignup" aria-controls="offcanvasSignup">Not yet a member? Sign Up</a></div><div class="offcanvas-body"><div><ul id="sideMenu"><li><a class="sideMenuLink" data-bs-toggle="collapse" data-bs-target="#menu2SpacesSub" aria-expanded="false">Spaces `);
  _push(ssrRenderComponent(_component_IconsCaretDown, {
    class: "ms-2",
    style: { "font-size": ".6em" }
  }, null, _parent));
  _push(`</a><ul class="sideMenuSub collapse" id="menu2SpacesSub"><li><a href="auditoriums.html" class="sideMenuLink sideMenuSubLink">Auditoriums</a></li><li><a href="events.html" class="sideMenuLink sideMenuSubLink">Event Halls</a></li><li><a href="lectures.html" class="sideMenuLink sideMenuSubLink">Lecture Halls</a></li><li><a href="classrooms.html" class="sideMenuLink sideMenuSubLink">Classrooms &amp; Meeting Rooms</a></li><li><a href="fields.html" class="sideMenuLink sideMenuSubLink">Fields &amp; Sports Facilities</a></li><li><a href="hostels.html" class="sideMenuLink sideMenuSubLink">Hostels &amp; Accomodations</a></li></ul></li><li><a href="rates.html" class="sideMenuLink">Rates</a></li><li><a href="faqs.html" class="sideMenuLink">FAQs</a></li><li><a href="about.html" class="sideMenuLink">About</a></li><li><a href="contact.html" class="sideMenuLink">Contact</a></li></ul></div></div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Sidebar/Nav.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  const _component_IconsXMark = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "offcanvas offcanvas-start d-lg-none",
    "data-bs-scroll": "true",
    "data-bs-backdrop": "false",
    tabindex: "-1",
    id: "offcanvasSearch"
  }, _attrs))}><button type="button" class="toggleBtn ms-auto mt-2 me-2" data-bs-dismiss="offcanvas" aria-label="Close">`);
  _push(ssrRenderComponent(_component_IconsXMark, null, null, _parent));
  _push(`</button><div class="offcanvas-header"><h3 class="offcanvasTitle">Search</h3></div><div class="offcanvas-body"><div class="offcanvasContainer"><label for="offcanvasSearchForm-search">Which space do you need?</label><input type="text" id="offcanvasSearchForm-search" class="form-control form-control-sm rounded" placeholder="ex. Umali Hall"><label for="offcanvasSearchForm-cap">For how many persons?</label><div class="d-flex"><input type="number" id="offcanvasSearchForm-cap-min" class="form-control form-control-sm rounded me-1" placeholder="min">- <input type="number" id="offcanvasSearchForm-cap-max" class="form-control form-control-sm rounded ms-1" placeholder="max"></div><label for="offcanvasSearchForm-date">When do you need it?</label><input type="date" id="offcanvasSearchForm-date" class="form-control form-control-sm rounded" placeholder="no. of persons"><div class="d-grid"><button type="submit" class="btn btn-success btn-sm mt-2 mb-2 rounded">Search</button></div></div></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Sidebar/Search.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "offcanvas offcanvas-start d-lg-none",
    "data-bs-scroll": "true",
    "data-bs-backdrop": "false",
    tabindex: "-1",
    id: "offcanvasSignin"
  }, _attrs))}><div class="offcanvas-header"><h3 class="offcanvasTitle">Sign In</h3></div><div class="offcanvas-body"><div class="offcanvasContainer"><label for="offcanvasSigninForm-username">Enter your username</label><input type="text" id="offcanvasSigninForm-username" class="form-control form-control-sm rounded" placeholder="username"><label for="offcanvasSigninForm-password">Enter your password</label><input type="password" id="offcanvasSigninForm-password" class="form-control form-control-sm rounded" placeholder="password"><div class="d-flex"><a href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvasForgot" class="ms-auto my-1">Forgot Password?</a></div><div class="d-grid"><button type="submit" class="btn btn-success btn-sm mt-2 mb-2 rounded">Sign In </button></div><a href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSignup" aria-controls="offcanvasSignup">Not yet a member? Sign up</a><div class="my-5"><strong>or</strong></div><div class="d-grid"><button type="button" class="socialBtn"><div><img${ssrRenderAttr("src", _imports_0)} width="30" height="30" class="me-3">Continue with Facebook </div></button><button type="button" class="socialBtn"><div><img${ssrRenderAttr("src", _imports_1)} width="27" height="27" class="me-3">Continue with Google </div></button></div></div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Sidebar/SignIn.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_IconsXMark = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "offcanvas offcanvas-start d-lg-none",
    "data-bs-scroll": "true",
    "data-bs-backdrop": "false",
    tabindex: "-1",
    id: "offcanvasSignup"
  }, _attrs))}><button type="button" class="toggleBtn ms-auto mt-2 me-2" data-bs-dismiss="offcanvas" aria-label="Close">`);
  _push(ssrRenderComponent(_component_IconsXMark, null, null, _parent));
  _push(`</button><div class="offcanvas-header"><h3 class="offcanvasTitle">Sign Up</h3></div><div class="offcanvas-body"><div class="offcanvasContainer"><label for="offcanvasSignupForm-username">Enter username</label><input type="text" id="offcanvasSignupForm-username" class="form-control form-control-sm rounded" placeholder="username"><label for="offcanvasSignupForm-password">Enter password</label><input type="password" id="offcanvasSignupForm-password" class="form-control form-control-sm rounded" placeholder="password"><label for="offcanvasSignupForm-password2">Re-enter password</label><input type="password" id="offcanvasSignupForm-password2" class="form-control form-control-sm rounded" placeholder="password2"><div class="d-flex" style="${ssrRenderStyle({ "align-items": "center" })}"><input class="form-check-input me-1" type="checkbox" value="" id="flexCheckDefault"><label class="form-check-label" for="flexCheckDefault">Agree to <a href="terms.html">Terms &amp; Conditions</a></label></div><div class="d-grid"><button type="submit" class="btn btn-success btn-sm mt-2 mb-2 rounded">Sign Up </button></div><a href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSignin" aria-controls="offcanvasSignin">Already a member? Sign In</a><div class="my-5"><strong>or</strong></div><div class="d-grid"><button type="button" class="socialBtn"><div><img${ssrRenderAttr("src", _imports_0)} width="30" height="30" class="me-3">Continue with Facebook</div></button><button type="button" class="socialBtn"><div><img${ssrRenderAttr("src", _imports_1)} width="27" height="27" class="me-3">Continue with Google</div></button></div></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Sidebar/SignUp.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_IconsXMark = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "offcanvas offcanvas-start d-lg-none",
    "data-bs-scroll": "true",
    "data-bs-backdrop": "false",
    tabindex: "-1",
    id: "offcanvasForgot"
  }, _attrs))}><button type="button" class="toggleBtn ms-auto mt-2 me-2" data-bs-dismiss="offcanvas" aria-label="Close">`);
  _push(ssrRenderComponent(_component_IconsXMark, null, null, _parent));
  _push(`</button><div class="offcanvas-header"><h3 class="offcanvasTitle">Forgot Password</h3></div><div class="offcanvas-body"><div class="offcanvasContainer"><label for="offcanvasForgotForm-email">Enter your email address</label><input type="email" id="offcanvasForgotForm-email" class="form-control form-control-sm rounded" placeholder="email"><div class="d-grid"><button type="submit" class="btn btn-success btn-sm mt-2 mb-2 rounded">Submit</button></div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Sidebar/ForgotPassword.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_IconsXMark = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "offcanvas offcanvas-start d-lg-none",
    "data-bs-scroll": "true",
    "data-bs-backdrop": "false",
    tabindex: "-1",
    id: "offcanvasProofOfPayment"
  }, _attrs))}><button type="button" class="toggleBtn ms-auto mt-2 me-2" data-bs-dismiss="offcanvas" aria-label="Close">`);
  _push(ssrRenderComponent(_component_IconsXMark, null, null, _parent));
  _push(`</button><div class="offcanvas-header"><h3 class="offcanvasTitle">Proof of Payment</h3></div><div class="offcanvas-body"><div class="offcanvasContainer"><label for="offcanvasProofOfPaymentForm-file">Upload proof of payment</label><input type="file" id="offcanvasProofOfPaymentForm-file" class="form-control form-control-sm rounded" placeholder="file"><div class="d-grid"><button type="submit" class="btn btn-success btn-sm mt-2 mb-2 rounded">Upload</button></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Sidebar/UploadPayment.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_8 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __nuxt_component_3 as _,
  __nuxt_component_4 as a,
  __nuxt_component_5 as b,
  __nuxt_component_6 as c,
  __nuxt_component_7 as d,
  __nuxt_component_8 as e
};
//# sourceMappingURL=UploadPayment-d294b7ae.js.map
