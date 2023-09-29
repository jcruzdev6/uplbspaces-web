<template>
    <div class="modal fade in" id="modalBookNow" tabindex="-1" aria-labelledby="modalBookNowLabel" aria-hidden="false">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <button type="button" class="toggleBtnDark ms-auto mt-2 me-2" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-xmark"></i></button>
        
                <div class="modalContainer">
                    <div class="modalTitleContainer">
                        <div v-if="facility">
                            <h3 class="modalTitle" id="modalBookNowLabel">Book {{ facility.name }}</h3>
                            <address>{{ facility.address }}</address>
                        </div>
                    </div>

                    <div class="row">
                        <FacilityBookingCalendarForm />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';

const facilityStore = useFacilityStore();
const bookingStore = useBookingStore();
const currency = new Intl.NumberFormat('en-US');

let facility = {
    'name':'',
    'min_capacity':'',
    'max_capacity':'',
    'available_days_grp': '',
    'available_hrs':'',
    'facility_rates': [{
        'up_rate':'',
        'nonup_rate':'',
        'type':''
    }]
}
let facilityBookings = {
    'id': '',
    'booking_no': '',
    'facility_id': '',
    'facility_name': '',
    'contact_person': '',
    'event_title': '',
    'sponsors': '',
    'cost': '',
    'amount_paid': '',
    'status': '',
    'booking_dates': [
        {
            'id': '',
            'booking_id': '',
            'date': '',
            'start_time': '',
            'end_time': ''
        }
    ]
}
facility = computed(() => facilityStore.facility);
facilityBookings = computed(() => bookingStore.activeFacilityBookings);
</script>