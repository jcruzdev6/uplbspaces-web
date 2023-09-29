<template>
     <div>
        <PageBreadcrumbs page_name="My Bookings" />
        <div class="container-fluid" id="innerpage">
            <div class="container-lg" id="innerpageBody">
                <div id="innerpageBodyContentBookings">
                    <div class="bookingsPageTable">
                        <div class="bookingsPageTableHead">
                            <div>
                                My Bookings
                            </div>
                            <div>
                                <label for="selectBookings" id="selectBookingsLabel">Showing:</label>
                                <div class="customSelect" id="customSelectBookings">
                                <select id="selectBookings" name="selectBookings" @change="filterBookings($event)">
                                    <option value="all">All Bookings</option>
                                    <option value="active">Active Bookings</option>
                                    <option value="completed">Completed Bookings</option>
                                    <option value="cancelled">Cancelled Bookings</option>
                                </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-if="attentionCount > 0" class="bookingsPageMsg">
                        You have <span class="calBadge">{{ attentionCount }}</span> bookings that need your immediate attention.
                    </div>
                    <div class="bookingsPageTable">
                        <div class="bookingsPageTableColHead">
                        <div>#</div>
                        <div>Booking Details</div>
                        <div>Booking ID</div>
                        <div>Space - Event</div>
                        <div>Booking Date</div>
                        <div>Cost</div>
                        <div>Status <button type="button" class="bookingsPageHelpBtn" data-bs-toggle="modal" data-bs-target="#modalBookingsStatusHelp"><i class="fa-solid fa-circle-question"></i></button></div>
                        <div><span class="bookingsPageTableColHeadText">Actions</span><i class="fa-solid fa-check bookingsPageTableColHeadIcon"></i><button type="button" class="bookingsPageHelpBtn" data-bs-toggle="modal" data-bs-target="#modalBookingsActionsHelp"><i class="fa-solid fa-circle-question"></i></button></div>
                        </div>
                    </div>
                    <div class="bookingsPageTable" id="bookingsPageTableBookingsList">
                        <div v-for="(booking, index) in bookings"
                                    :key="index"  :class="(booking.status=='Approved for Payment' || booking.status=='Confirmed') ? 'bookingsPageTableRowAttn bookingsPageTableRow' : 
                                        (booking.status=='Cancelled by Admin') ? 'bookingsPageTableRowCancelledByAdmin bookingsPageTableRow' : 
                                        (booking.status=='Completed') ? 'bookingsPageTableRowCompleted bookingsPageTableRow' : 
                                        (booking.status=='Cancelled by User') ? 'bookingsPageTableRowCancelledByUser bookingsPageTableRow' :
                                        'bookingsPageTableRow'"> 
                            <div class="bookingsPageBookingsCounter"></div>
                            <div>{{ booking.booking_no }}</div>
                            <div><div class="fw-bold">{{ booking.facility_name }}</div><div>{{ booking.event_title }}</div></div>
                            <div>
                                <div  v-for="(booking_date, index) in booking.booking_dates"
                                    :key="index">{{ booking_date.date }}<br>{{ booking_date.start_time }} - {{ booking_date.end_time }}</div>
                            </div>
                            <div>₱{{ currency.format(booking.cost) }}</div>
                            <div><a href="#" data-bs-toggle="modal" data-bs-target="#modalBookingStatus2" :class="(booking.status=='Cancelled by User') ? 'cancelledStatus text-uppercase' : 'text-uppercase'">{{ booking.status }}</a></div>
                            <div>
                                <div v-if="booking.status == 'Approved for Payment'" class="bookingsPageActionBtnContainer">
                                    <button class="bookingsPageActionBtn bookingsPageBtnDownloadPay">
                                        <IconsFileArrowDown />
                                    </button>
                                    <span class="bookingBtnTooltip">Download Payment Details</span>
                                </div>
                                <div v-if="booking.status == 'Approved for Payment'" class="bookingsPageActionBtnContainer">
                                    <button class="bookingsPageActionBtn bookingsPageBtnUploadPOP" data-bs-toggle="modal" data-bs-target="#modalProofOfPayment">
                                        <IconsUpload />
                                    </button>
                                    <span class="bookingBtnTooltip">Upload Proof Of Payment</span>
                                </div>
                                <div v-if="booking.status == 'Confirmed'" class="bookingsPageActionBtnContainer">
                                    <button class="bookingsPageActionBtn bookingsPageBtnDownloadPass">
                                        <IconsDownload />
                                    </button>
                                    <span class="bookingBtnTooltip">Download Booking Pass</span>
                                </div>
                                <div v-if="booking.status == 'Cancelled by Admin'" class="bookingsPageActionBtnContainer">
                                    <button class="bookingsPageActionBtn bookingsPageBtnResched">
                                        <IconsCalendarDays />
                                    </button>
                                    <span class="bookingBtnTooltip">Reschedule</span>
                                </div>
                                <div v-if="booking.status == 'Completed'" class="bookingsPageActionBtnContainer">
                                    <button class="bookingsPageActionBtn bookingsPageBtnRebook">
                                        <IconsRepeat />
                                    </button>
                                    <span class="bookingBtnTooltip">Book Again</span>
                                </div>
                                <div v-if="booking.status == 'Approved for Payment' || booking.status == 'Confirmed' || booking.status == 'Submitted' || 
                                            booking.status == 'Pre-approved' || booking.status == 'For Verification' || booking.status == 'Payment Verified'" class="bookingsPageActionBtnContainer">
                                    <button class="bookingsPageActionBtn bookingsPageBtnCancel">
                                        <IconsSquareXMark />
                                    </button>
                                    <span class="bookingBtnTooltip">Cancel Booking</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    </div>    
</template>
<script setup>
definePageMeta({
  middleware: 'auth'
})

const currency = new Intl.NumberFormat('en-US');
const bookingStore = useBookingStore();
const bookings = ref();
await bookingStore.fetchBookings();

bookings.value = bookingStore.bookings;
    
const attentionCount = computed(() => {
    if (bookingStore.bookings != null)
        return bookingStore.attentionCount;
    else
        return 0;
});

function filterBookings(event) {
    bookingStore.view = event.target.value;
    console.log('view:'+bookingStore.view)
    bookings.value = bookingStore.filterBookings;
}
</script>