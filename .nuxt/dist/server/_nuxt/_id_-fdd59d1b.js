import { u as useFacilityStore, _ as __nuxt_component_0$1 } from "./Breadcrumbs-43ad8507.js";
import { mergeProps, unref, useSSRContext, withAsyncContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { _ as __vite_glob_0_0, a as __vite_glob_0_1, b as __vite_glob_0_2, c as __vite_glob_0_3, d as __vite_glob_0_4, e as __vite_glob_0_5, f as __vite_glob_0_6, g as __vite_glob_0_7, h as __vite_glob_0_8, i as __vite_glob_0_9, j as __vite_glob_0_10, k as __vite_glob_0_11, l as __vite_glob_0_12, m as __vite_glob_0_13, n as __vite_glob_0_14, o as __vite_glob_0_15, p as __vite_glob_0_16, q as __vite_glob_0_17, r as __vite_glob_0_18, s as __vite_glob_0_19, t as __vite_glob_0_20, u as __vite_glob_0_21, v as __vite_glob_0_22, w as __vite_glob_0_23, x as __vite_glob_0_24, y as __vite_glob_0_25, z as __vite_glob_0_26, A as __vite_glob_0_27, B as __vite_glob_0_28, C as __vite_glob_0_29, D as __vite_glob_0_30, E as __vite_glob_0_31, F as __vite_glob_0_32, G as __vite_glob_0_33, H as __vite_glob_0_34, I as __vite_glob_0_35, J as __vite_glob_0_36, K as __vite_glob_0_37, L as __vite_glob_0_38, M as __vite_glob_0_39, N as __vite_glob_0_40, O as __vite_glob_0_41, P as __vite_glob_0_42, Q as __vite_glob_0_43, R as __vite_glob_0_44, S as __vite_glob_0_45, T as __vite_glob_0_46, U as __vite_glob_0_47, V as __vite_glob_0_48, W as __vite_glob_0_49, X as __vite_glob_0_50, Y as __vite_glob_0_51, Z as __vite_glob_0_52, $ as __vite_glob_0_53, a0 as __vite_glob_0_54, a1 as __vite_glob_0_55, a2 as __vite_glob_0_56 } from "./7-9-2a16786c.js";
import "hookable";
import { a as useRoute, _ as _export_sfc, u as useHead } from "../server.mjs";
import "destr";
import "devalue";
import "klona";
import "./index-e12b288f.js";
import { u as useFacilityTypeStore } from "./FacilityTypeStore-4b052b88.js";
import "./nuxt-link-149f0ed2.js";
import "ufo";
import "./CaretRight-2b7e89f4.js";
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
      }, _attrs))}><div class="stripedTable"><div class="row1 label">U.P. Rate: </div><div class="row1 value"><div class="spacesTitleRatesText"> ₱${ssrInterpolate(unref(currency).format(unref(rate).up_rate) + " per " + unref(rate).type)}<small style="${ssrRenderStyle(unref(rate).with_aircon ? null : { display: "none" })}"> (with aircon)</small><small style="${ssrRenderStyle(!unref(rate).with_aircon ? null : { display: "none" })}"> (w/o aircon)</small></div></div><div class="row2 label">Non-U.P. Rate: </div><div class="row2 value"><div class="spacesTitleRatesText"> ₱${ssrInterpolate(unref(currency).format(unref(rate).nonup_rate) + " per " + unref(rate).type)}<small style="${ssrRenderStyle(unref(rate).with_aircon ? null : { display: "none" })}"> (with aircon)</small><small style="${ssrRenderStyle(!unref(rate).with_aircon ? null : { display: "none" })}"> (w/o aircon)</small></div></div><div class="row1 label">Availability:</div><div class="row1 value">${ssrInterpolate(unref(facility).available_days_grp + ", " + unref(facility).available_hrs)}</div></div></div>`);
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
function useFetchFacilityImages(id, type_id) {
  const folderPath = "/assets/images/facilities/" + type_id + "/" + id + "/";
  const allImages = /* @__PURE__ */ Object.assign({ "/assets/images/facilities/1/1/1-1.jpg": __vite_glob_0_0, "/assets/images/facilities/1/1/1-2.jpg": __vite_glob_0_1, "/assets/images/facilities/1/1/1-3.jpg": __vite_glob_0_2, "/assets/images/facilities/1/1/1-4.jpg": __vite_glob_0_3, "/assets/images/facilities/1/1/1-5.jpg": __vite_glob_0_4, "/assets/images/facilities/1/2/2-1.jpg": __vite_glob_0_5, "/assets/images/facilities/1/2/2-2.jpg": __vite_glob_0_6, "/assets/images/facilities/1/2/2-3.jpg": __vite_glob_0_7, "/assets/images/facilities/1/2/2-4.jpg": __vite_glob_0_8, "/assets/images/facilities/1/2/2-5.jpg": __vite_glob_0_9, "/assets/images/facilities/1/3/3-1.jpg": __vite_glob_0_10, "/assets/images/facilities/1/3/3-2.jpg": __vite_glob_0_11, "/assets/images/facilities/1/3/3-3.jpg": __vite_glob_0_12, "/assets/images/facilities/1/3/3-4.jpg": __vite_glob_0_13, "/assets/images/facilities/1/3/3-5.jpg": __vite_glob_0_14, "/assets/images/facilities/1/4/4-1.jpg": __vite_glob_0_15, "/assets/images/facilities/1/4/4-10.jpg": __vite_glob_0_16, "/assets/images/facilities/1/4/4-2.jpg": __vite_glob_0_17, "/assets/images/facilities/1/4/4-3.jpg": __vite_glob_0_18, "/assets/images/facilities/1/4/4-4.jpg": __vite_glob_0_19, "/assets/images/facilities/1/4/4-5.jpg": __vite_glob_0_20, "/assets/images/facilities/1/4/4-6.jpg": __vite_glob_0_21, "/assets/images/facilities/1/4/4-7.jpg": __vite_glob_0_22, "/assets/images/facilities/1/4/4-8.jpg": __vite_glob_0_23, "/assets/images/facilities/1/4/4-9.jpg": __vite_glob_0_24, "/assets/images/facilities/1/5/5-1.jpg": __vite_glob_0_25, "/assets/images/facilities/1/5/5-10.jpg": __vite_glob_0_26, "/assets/images/facilities/1/5/5-11.jpg": __vite_glob_0_27, "/assets/images/facilities/1/5/5-12.jpg": __vite_glob_0_28, "/assets/images/facilities/1/5/5-13.jpg": __vite_glob_0_29, "/assets/images/facilities/1/5/5-14.jpg": __vite_glob_0_30, "/assets/images/facilities/1/5/5-2.jpg": __vite_glob_0_31, "/assets/images/facilities/1/5/5-3.jpg": __vite_glob_0_32, "/assets/images/facilities/1/5/5-4.jpg": __vite_glob_0_33, "/assets/images/facilities/1/5/5-5.jpg": __vite_glob_0_34, "/assets/images/facilities/1/5/5-6.jpg": __vite_glob_0_35, "/assets/images/facilities/1/5/5-7.jpg": __vite_glob_0_36, "/assets/images/facilities/1/5/5-8.jpg": __vite_glob_0_37, "/assets/images/facilities/1/5/5-9.jpg": __vite_glob_0_38, "/assets/images/facilities/1/6/6-1.jpg": __vite_glob_0_39, "/assets/images/facilities/1/6/6-2.jpg": __vite_glob_0_40, "/assets/images/facilities/1/6/6-3.jpg": __vite_glob_0_41, "/assets/images/facilities/1/6/6-4.jpg": __vite_glob_0_42, "/assets/images/facilities/1/6/6-5.jpg": __vite_glob_0_43, "/assets/images/facilities/1/7/7-1.jpg": __vite_glob_0_44, "/assets/images/facilities/1/7/7-10.jpg": __vite_glob_0_45, "/assets/images/facilities/1/7/7-11.jpg": __vite_glob_0_46, "/assets/images/facilities/1/7/7-12.jpg": __vite_glob_0_47, "/assets/images/facilities/1/7/7-13.jpg": __vite_glob_0_48, "/assets/images/facilities/1/7/7-2.jpg": __vite_glob_0_49, "/assets/images/facilities/1/7/7-3.jpg": __vite_glob_0_50, "/assets/images/facilities/1/7/7-4.jpg": __vite_glob_0_51, "/assets/images/facilities/1/7/7-5.jpg": __vite_glob_0_52, "/assets/images/facilities/1/7/7-6.jpg": __vite_glob_0_53, "/assets/images/facilities/1/7/7-7.jpg": __vite_glob_0_54, "/assets/images/facilities/1/7/7-8.jpg": __vite_glob_0_55, "/assets/images/facilities/1/7/7-9.jpg": __vite_glob_0_56 });
  let images = [];
  for (const key in allImages) {
    if (key.includes(folderPath)) {
      images.push(allImages[key]["default"]);
    }
  }
  return images;
}
const _sfc_main$7 = {
  __name: "ImageCarousel",
  __ssrInlineRender: true,
  setup(__props) {
    const facilityStore = useFacilityStore();
    const images = useFetchFacilityImages(facilityStore.facility.id, facilityStore.facility.facility_type_id);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "carouselExample",
        class: "carousel slide"
      }, _attrs))}><div class="carousel-inner"><!--[-->`);
      ssrRenderList(unref(images), (image, index) => {
        _push(`<div class="${ssrRenderClass([index == 0 ? "active" : "", "carousel-item"])}"><div id="spaceImgContainer"><img${ssrRenderAttr("src", image)}></div></div>`);
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
        _push(`<span><div> ₱${ssrInterpolate(unref(currency).format(rate.up_rate) + " per " + rate.type)}<small style="${ssrRenderStyle(rate.with_aircon ? null : { display: "none" })}"> (with aircon)</small><small style="${ssrRenderStyle(!rate.with_aircon ? null : { display: "none" })}"> (w/o aircon)</small></div></span>`);
      });
      _push(`<!--]--></div><div class="row2 label">Non-U.P. Rate:</div><div class="row2"><!--[-->`);
      ssrRenderList(unref(rates), (rate) => {
        _push(`<span><div> ₱${ssrInterpolate(unref(currency).format(rate.nonup_rate) + " per " + rate.type)}<small style="${ssrRenderStyle(rate.with_aircon ? null : { display: "none" })}"> (with aircon)</small><small style="${ssrRenderStyle(!rate.with_aircon ? null : { display: "none" })}"> (w/o aircon)</small></div></span>`);
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
export {
  _sfc_main as default
};
//# sourceMappingURL=_id_-fdd59d1b.js.map
