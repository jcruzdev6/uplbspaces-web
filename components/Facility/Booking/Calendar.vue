<template>
  <div class="calContainer" id="calendar">
    <div class="calHead" id="calendarHead">
      <span class="calendarPrevNext" id="prevMonth"><i class="arrow left"></i></span>
      <h3 class="calTitle" id="calendarTitle"></h3>
      <span class="calendarPrevNext" id="nextMonth"><i class="arrow right"></i></span>
    </div>
    <div class="calMsgContainer">
      <div class="calMsg">Click on the date you want to book.</div>
    </div>
    <div class="calGrid" id="calendarWeeks"></div>
    <div class="calGrid" id="calendarDays"></div>
    <div class="calFoot">
      <!-- <div class="legendTitle">LEGEND:</div> -->
      <div id="legend">
        <div><IconsSquare class="l-vacant" /> Vacant</div>
        <div><IconsSquare class="l-partial" /><i class="fa-solid fa-square "></i> Partially Booked</div>
        <div><IconsSquare class="l-full" /> Fully Booked</div>
      </div>
    </div>
  </div>
</template>
<script setup>
const facilityStore = useFacilityStore();
const bookingStore = useBookingStore();
//const facility = computed(() => facilityStore.activeFacility);
//const facilityBookings = computed(() => bookingStore.activeFacilityBookings);
const facility = facilityStore.activeFacility;
const facilityBookings = bookingStore.activeFacilityBookings;

console.log('Calendar > facility:')
    console.log(facility)
    console.log('Calendar > bookings:')
    console.log(facilityBookings)

//useBookingDateVacancy(facility, facilityBookings)

const partial = []
const full = []
console.log('facilityBookings');
console.log(facilityBookings)

useCalendar(partial, full);
</script>
