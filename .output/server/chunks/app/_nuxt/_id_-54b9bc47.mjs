import { u as useFacilityStore, _ as __nuxt_component_0$1, a as __nuxt_component_0$2 } from './nuxt-img-0e67bf36.mjs';
import { withAsyncContext, unref, useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import { u as useFetchImages } from './useFetchImages-b1a9a8ea.mjs';
import { b as useRoute, d as useHead, _ as _export_sfc } from '../server.mjs';
import { u as useFacilityTypeStore } from './FacilityTypeStore-e7e4a162.mjs';
import './nuxt-link-24bdb615.mjs';
import 'ufo';
import './CaretRight-2b7e89f4.mjs';
import 'unhead';
import './composables-63f493d0.mjs';
import 'defu';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'h3';
import 'devalue';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'klona';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'ipx';
import 'http-graceful-shutdown';
import 'unctx';
import 'vue-router';
import '@unhead/ssr';
import '@unhead/shared';

const _sfc_main$8 = {
  __name: "RateAvailability",
  __ssrInlineRender: true,
  setup(__props) {
    const facilityStore = useFacilityStore();
    const currency = new Intl.NumberFormat("en-US");
    const facility = facilityStore.facility;
    const rate = facilityStore.rate;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "col-md-5 col-lg-4 p-0",
        id: "spaceHeaderRightCol"
      }, _attrs))}><div class="stripedTable"><div class="row1 label">U.P. Rate: </div><div class="row1 value"><div class="spacesTitleRatesText"> \u20B1${ssrInterpolate(unref(currency).format(unref(rate).up_rate) + " per " + unref(rate).type)}<small style="${ssrRenderStyle(unref(rate).with_aircon ? null : { display: "none" })}"> (with aircon)</small><small style="${ssrRenderStyle(!unref(rate).with_aircon ? null : { display: "none" })}"> (w/o aircon)</small></div></div><div class="row2 label">Non-U.P. Rate: </div><div class="row2 value"><div class="spacesTitleRatesText"> \u20B1${ssrInterpolate(unref(currency).format(unref(rate).nonup_rate) + " per " + unref(rate).type)}<small style="${ssrRenderStyle(unref(rate).with_aircon ? null : { display: "none" })}"> (with aircon)</small><small style="${ssrRenderStyle(!unref(rate).with_aircon ? null : { display: "none" })}"> (w/o aircon)</small></div></div><div class="row1 label">Availability:</div><div class="row1 value">${ssrInterpolate(unref(facility).available_days_grp + ", " + unref(facility).available_hrs)}</div></div></div>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Facility/RateAvailability.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_1$1 = _sfc_main$8;
const _sfc_main$7 = {
  __name: "ImageCarousel",
  __ssrInlineRender: true,
  setup(__props) {
    const facilityStore = useFacilityStore();
    const images = useFetchImages("facility", facilityStore.facility.id, facilityStore.facility.facility_type_id);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_img = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "carouselExample",
        class: "carousel slide"
      }, _attrs))}><div class="carousel-inner"><!--[-->`);
      ssrRenderList(unref(images), (image, index) => {
        _push(`<div class="${ssrRenderClass([index == 0 ? "active" : "", "carousel-item"])}"><div id="spaceImgContainer">`);
        _push(ssrRenderComponent(_component_nuxt_img, { src: image }, null, _parent));
        _push(`</div></div>`);
      });
      _push(`<!--]--></div><button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Previous</span></button><button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next</span></button></div>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Facility/ImageCarousel.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_2$1 = _sfc_main$7;
function useFacilityCapacity(min, max) {
  if (max == null)
    return "> " + min + " pax";
  else if (min == null)
    return "< " + max + " pax";
  else
    return min + " - " + max + " pax";
}
const _sfc_main$6 = {
  __name: "Details",
  __ssrInlineRender: true,
  setup(__props) {
    const facilityStore = useFacilityStore();
    const facility = facilityStore.facility;
    const currency = new Intl.NumberFormat("en-US");
    const rates = facilityStore.rates;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "spaceDetails" }, _attrs))}><div class="spacesTileTable"><div class="row2 label">Address:</div><div class="row2">${ssrInterpolate(unref(facility).address)}</div><div class="row1 label">Capacity:</div><div class="row1">${ssrInterpolate(("useFacilityCapacity" in _ctx ? _ctx.useFacilityCapacity : unref(useFacilityCapacity))(unref(facility).min_capacity, unref(facility).max_capacity))}</div><div class="row2 label">Availability:</div><div class="row2">${ssrInterpolate(unref(facility).available_days_grp + ", " + unref(facility).available_hrs)}</div><div class="row1 label">U.P. Rate:</div><div class="row1"><!--[-->`);
      ssrRenderList(unref(rates), (rate) => {
        _push(`<span><div> \u20B1${ssrInterpolate(unref(currency).format(rate.up_rate) + " per " + rate.type)}<small style="${ssrRenderStyle(rate.with_aircon ? null : { display: "none" })}"> (with aircon)</small><small style="${ssrRenderStyle(!rate.with_aircon ? null : { display: "none" })}"> (w/o aircon)</small></div></span>`);
      });
      _push(`<!--]--></div><div class="row2 label">Non-U.P. Rate:</div><div class="row2"><!--[-->`);
      ssrRenderList(unref(rates), (rate) => {
        _push(`<span><div> \u20B1${ssrInterpolate(unref(currency).format(rate.nonup_rate) + " per " + rate.type)}<small style="${ssrRenderStyle(rate.with_aircon ? null : { display: "none" })}"> (with aircon)</small><small style="${ssrRenderStyle(!rate.with_aircon ? null : { display: "none" })}"> (w/o aircon)</small></div></span>`);
      });
      _push(`<!--]--></div></div><p>${ssrInterpolate(unref(facility).description)}</p></div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Facility/Details.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_3$1 = _sfc_main$6;
function useTimeSelection(time) {
  const times = [];
  const arr = time.split("-");
  if (arr.length != 2)
    return times;
  const start = arr[0].trim();
  const end = arr[1].trim();
  let start_hr = start.split(":")[0];
  let start_min = start.split(":")[1].replace("AM", "").replace("PM", "");
  if (start.toLowerCase().includes("pm"))
    start_hr = 12 + Number(start_hr);
  let end_hr = end.split(":")[0];
  let end_min = end.split(":")[1].replace("AM", "").replace("PM", "");
  if (end.toLowerCase().includes("pm"))
    end_hr = 12 + Number(end_hr);
  if (start_hr > end_hr)
    return times;
  for (let i = start_hr; i < end_hr; i++) {
    let curr_shr = i == 12 ? "12:00PM" : i > 12 ? i - 12 + ":" + start_min + "PM" : i + ":" + start_min + "AM";
    let j = Number(i) + 1;
    let curr_ehr = j == 12 ? "12:00PM" : j > 12 ? j - 12 + ":" + end_min + "PM" : Number(i) + 1 + ":" + end_min + "AM";
    let curr_time = curr_shr + " - " + curr_ehr;
    times.push(curr_time);
  }
  return times;
}
const _sfc_main$5 = {
  __name: "TimeSelector",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    const facilityStore = useFacilityStore();
    const times = useTimeSelection(facilityStore.facility.available_hrs);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "calContainer",
        id: "timeslots",
        "data-status": "hide"
      }, _attrs))}><div class="calHead" id="timeslotsHead"><div id="timeslotsDate"><div id="timeslotsMonth">mmm</div><div id="timeslotsDay">dd</div><div id="timeslotsYear">yyy</div></div><h3 class="calTitle" id="timeslotsTitle">Available Timeslots</h3><button type="button" id="closeTimeslotsBtn" class="closeCalContainerBtn"><i class="fa-solid fa-xmark"></i></button></div><div class="calMsgContainer"><div class="calMsg" id="timeslotsMsg">Click on the time to select.</div></div><div class="calListClip"><div id="timeslotsList"><form id="selectTimeList"><!--[-->`);
      ssrRenderList(unref(times), (time, index) => {
        _push(`<div class="selectTimeItem"><input type="checkbox"${ssrRenderAttr("id", "selectTime-time" + index)}${ssrRenderAttr("value", time)}><label for="selectTime-time1">${ssrInterpolate(time)}</label><span class="selectTimeItemCheck"><i class="fa-solid fa-check"></i></span></div>`);
      });
      _push(`<!--]--></form></div></div><div class="calFoot"><button type="submit" id="continueBookingBtn" class="calBtn">Continue Booking</button></div></div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Facility/Booking/TimeSelector.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$5;
const _sfc_main$4 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "calContainer border",
    id: "bookings",
    "data-status": "hide"
  }, _attrs))}><div class="calHead" id="bookingsHead"><h3 class="calTitle" id="bookingsTitle">Bookings</h3><button type="button" id="closeBookingsBtn" class="closeCalContainerBtn"><i class="fa-solid fa-xmark"></i></button></div><div class="calMsgContainer"><div class="calMsg">You selected <span class="calBadge">4</span> dates.</div></div><div class="calListClip"><div id="bookingsList"><div><div class="bookingsGrid"><div class="bookingsLabel">Place: </div><div class="bookingsPlace">NCAS Auditorium</div><div class="bookingsLabel">Date: </div><div class="bookingsDate">Aug-7-2023 </div><div class="bookingsLabel">Time: </div><div class="bookingsTime">7:00AM - 12:00PM</div></div><div class="bookingsEditDel"><button type="button" class="bookingsEditDelBtn bookingsEditBtn"><i class="fa-solid fa-pen-to-square"></i><span class="tooltip" id="editBookingTooltip">Edit</span></button><button type="button" class="bookingsEditDelBtn bookingsDelBtn"><i class="fa-solid fa-rectangle-xmark"></i><span class="tooltip" id="delBookingTooltip">Delete</span></button></div></div><div><div class="bookingsGrid"><div class="bookingsLabel">Place: </div><div class="bookingsPlace">NCAS Auditorium</div><div class="bookingsLabel">Date: </div><div class="bookingsDate">Aug-8-2023 </div><div class="bookingsLabel">Time: </div><div class="bookingsTime">7:00AM - 12:00PM</div></div><div class="bookingsEditDel"><button type="button" class="bookingsEditDelBtn bookingsEditBtn"><i class="fa-solid fa-pen-to-square"></i><span class="tooltip" id="editBookingTooltip">Edit</span></button><button type="button" class="bookingsEditDelBtn bookingsDelBtn"><i class="fa-solid fa-rectangle-xmark"></i><span class="tooltip" id="delBookingTooltip">Delete</span></button></div></div><div><div class="bookingsGrid"><div class="bookingsLabel">Place: </div><div class="bookingsPlace">NCAS Auditorium</div><div class="bookingsLabel">Date: </div><div class="bookingsDate">Aug-9-2023 </div><div class="bookingsLabel">Time: </div><div class="bookingsTime">7:00AM - 12:00PM</div></div><div class="bookingsEditDel"><button type="button" class="bookingsEditDelBtn bookingsEditBtn"><i class="fa-solid fa-pen-to-square"></i><span class="tooltip" id="editBookingTooltip">Edit</span></button><button type="button" class="bookingsEditDelBtn bookingsDelBtn"><i class="fa-solid fa-rectangle-xmark"></i><span class="tooltip" id="delBookingTooltip">Delete</span></button></div></div><div><div class="bookingsGrid"><div class="bookingsLabel">Place: </div><div class="bookingsPlace">NCAS Auditorium</div><div class="bookingsLabel">Date: </div><div class="bookingsDate">Aug-10-2023 </div><div class="bookingsLabel">Time: </div><div class="bookingsTime">7:00AM - 12:00PM</div></div><div class="bookingsEditDel"><button type="button" class="bookingsEditDelBtn bookingsEditBtn"><i class="fa-solid fa-pen-to-square"></i><span class="tooltip" id="editBookingTooltip">Edit</span></button><button type="button" class="bookingsEditDelBtn bookingsDelBtn"><i class="fa-solid fa-rectangle-xmark"></i><span class="tooltip" id="delBookingTooltip">Delete</span></button></div></div></div></div><div class="calFoot"><button type="submit" id="finishBookingBtn2" class="calBtn">Finish Booking</button><button type="submit" id="addDateBtn" class="calBtn">Add Another Date</button></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Facility/Booking/FirstSelectedDates.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$3 = {
  __name: "Calendar",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "calContainer",
        id: "calendar"
      }, _attrs))}><div class="calHead" id="calendarHead"><span class="calendarPrevNext" id="prevMonth"><i class="arrow left"></i></span><h3 class="calTitle" id="calendarTitle"></h3><span class="calendarPrevNext" id="nextMonth"><i class="arrow right"></i></span></div><div class="calMsgContainer"><div class="calMsg">Click on the date you want to book.</div></div><div class="calGrid" id="calendarWeeks"></div><div class="calGrid" id="calendarDays"></div><div class="calFoot"><div id="legend"><div><i class="fa-regular fa-square"></i> Vacant</div><div><i class="fa-solid fa-square partial"></i> Partially Booked</div><div><i class="fa-solid fa-square full"></i> Fully Booked</div></div></div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Facility/Booking/Calendar.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$3;
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "calContainer",
    id: "bookings2"
  }, _attrs))}><div class="calHead" id="bookingsHead"><h3 class="calTitle" id="bookingsTitle">Bookings</h3></div><div class="calMsgContainer"><div class="calMsg">You selected <span class="calBadge">4</span> dates.</div></div><div class="calListClip"><div id="bookingsList"><div><div class="bookingsGrid"><div class="bookingsLabel">Place: </div><div class="bookingsPlace">NCAS Auditorium</div><div class="bookingsLabel">Date: </div><div class="bookingsDate">Aug-7-2023 </div><div class="bookingsLabel">Time: </div><div class="bookingsTime">7:00AM - 12:00PM</div></div><div class="bookingsEditDel"><button type="button" class="bookingsEditDelBtn bookingsEditBtn"><i class="fa-solid fa-pen-to-square"></i><span class="tooltip" id="editBookingTooltip">Edit</span></button><button type="button" class="bookingsEditDelBtn bookingsDelBtn"><i class="fa-solid fa-rectangle-xmark"></i><span class="tooltip" id="delBookingTooltip">Delete</span></button></div></div><div><div class="bookingsGrid"><div class="bookingsLabel">Place: </div><div class="bookingsPlace">NCAS Auditorium</div><div class="bookingsLabel">Date: </div><div class="bookingsDate">Aug-8-2023 </div><div class="bookingsLabel">Time: </div><div class="bookingsTime">7:00AM - 12:00PM</div></div><div class="bookingsEditDel"><button type="button" class="bookingsEditDelBtn bookingsEditBtn"><i class="fa-solid fa-pen-to-square"></i><span class="tooltip" id="editBookingTooltip">Edit</span></button><button type="button" class="bookingsEditDelBtn bookingsDelBtn"><i class="fa-solid fa-rectangle-xmark"></i><span class="tooltip" id="delBookingTooltip">Delete</span></button></div></div><div><div class="bookingsGrid"><div class="bookingsLabel">Place: </div><div class="bookingsPlace">NCAS Auditorium</div><div class="bookingsLabel">Date: </div><div class="bookingsDate">Aug-9-2023 </div><div class="bookingsLabel">Time: </div><div class="bookingsTime">7:00AM - 12:00PM</div></div><div class="bookingsEditDel"><button type="button" class="bookingsEditDelBtn bookingsEditBtn"><i class="fa-solid fa-pen-to-square"></i><span class="tooltip" id="editBookingTooltip">Edit</span></button><button type="button" class="bookingsEditDelBtn bookingsDelBtn"><i class="fa-solid fa-rectangle-xmark"></i><span class="tooltip" id="delBookingTooltip">Delete</span></button></div></div><div><div class="bookingsGrid"><div class="bookingsLabel">Place: </div><div class="bookingsPlace">NCAS Auditorium</div><div class="bookingsLabel">Date: </div><div class="bookingsDate">Aug-10-2023 </div><div class="bookingsLabel">Time: </div><div class="bookingsTime">7:00AM - 12:00PM</div></div><div class="bookingsEditDel"><button type="button" class="bookingsEditDelBtn bookingsEditBtn"><i class="fa-solid fa-pen-to-square"></i><span class="tooltip" id="editBookingTooltip">Edit</span></button><button type="button" class="bookingsEditDelBtn bookingsDelBtn"><i class="fa-solid fa-rectangle-xmark"></i><span class="tooltip" id="delBookingTooltip">Delete</span></button></div></div></div></div><div class="calFoot"><button type="submit" id="finishBookingBtn" class="calBtn">Finish Booking</button></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Facility/Booking/SelectedDates.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_FacilityBookingTimeSelector = __nuxt_component_0;
  const _component_FacilityBookingFirstSelectedDates = __nuxt_component_1;
  const _component_FacilityBookingCalendar = __nuxt_component_2;
  const _component_FacilityBookingSelectedDates = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(mergeProps({ id: "spaceBodyRightColContent" }, _attrs))}><h4 class="spaceBodyRightColTitle"> BOOK THIS SPACE </h4><div><div id="allCalContainers">`);
  _push(ssrRenderComponent(_component_FacilityBookingTimeSelector, null, null, _parent));
  _push(ssrRenderComponent(_component_FacilityBookingFirstSelectedDates, null, null, _parent));
  _push(ssrRenderComponent(_component_FacilityBookingCalendar, null, null, _parent));
  _push(ssrRenderComponent(_component_FacilityBookingSelectedDates, null, null, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Facility/Booking/PageBookNow.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const facilityStore = useFacilityStore();
    const facilityTypeStore = useFacilityTypeStore();
    [__temp, __restore] = withAsyncContext(() => facilityStore.fetchFacility(route.params.id)), await __temp, __restore();
    [__temp, __restore] = withAsyncContext(() => facilityTypeStore.fetchFacilityType(facilityStore.facility.facility_type_id)), await __temp, __restore();
    useHead({
      //script: { src: "/js/calendar.js", body: true },
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FacilityBreadcrumbs = __nuxt_component_0$1;
      const _component_FacilityRateAvailability = __nuxt_component_1$1;
      const _component_FacilityImageCarousel = __nuxt_component_2$1;
      const _component_FacilityDetails = __nuxt_component_3$1;
      const _component_FacilityBookingPageBookNow = __nuxt_component_4;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="container-fluid" id="spaceHeader"><div class="container-lg" id="spaceHeaderContent"><div class="row"><div class="col-md-7 col-lg-8 p-0" id="spaceHeaderLeftCol">`);
      _push(ssrRenderComponent(_component_FacilityBreadcrumbs, null, null, _parent));
      _push(`<h3 class="spacesTitle">${ssrInterpolate(unref(facilityStore).facility.name)}</h3></div>`);
      _push(ssrRenderComponent(_component_FacilityRateAvailability, null, null, _parent));
      _push(`</div></div></div><div class="container-fluid" id="spaceBody"><div class="container-lg" id="spaceBodyContent"><div class="row"><div class="col-lg-8 p-0 order-last order-lg-first" id="spaceBodyLeftCol"><div id="spaceBodyLeftColContent">`);
      _push(ssrRenderComponent(_component_FacilityImageCarousel, null, null, _parent));
      _push(ssrRenderComponent(_component_FacilityDetails, null, null, _parent));
      _push(`</div></div><div class="col-lg-4 p-0" id="spaceBodyRightCol">`);
      _push(ssrRenderComponent(_component_FacilityBookingPageBookNow, null, null, _parent));
      _push(`</div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/spaces/space/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-54b9bc47.mjs.map
