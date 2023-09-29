export default function useBookingDateVacancy(facility, bookings) {
    console.log('useBookingDateVacancy called.')

    /*const facilityStore = useFacilityStore();
    const bookingStore = useBookingStore();
    facility = computed(() => facilityStore.activeFacility);
    bookings = computed(() => bookingStore.activeFacilityBookings);*/
    
    console.log('useBookingDateVacancy > facility:')
    console.log(facility)
    console.log('useBookingDateVacancy > bookings:')
    console.log(bookings)

    if (facility) {
        console.log('useBookingDateVacancy > facility not null.')
        let arrDates = [];
        let arrAvailability = [];
        let arrTimes = [];
        let arrAvailableTime = (facility.available_hrs) ? facility.available_hrs.split(' - ') : ['8:00','17:00'];
        let startTime = 0;
        let endTime = 0;
        let arrHrs = 0;
        arrHrs = arrAvailableTime[0].split(':');
        if (arrAvailableTime[0].includes('PM')) {
            startTime = parseInt(arrHrs[0])+12 
        } else {
            startTime = parseInt(arrHrs[0])
        }
        arrHrs = arrAvailableTime[1].split(':');
        if (arrAvailableTime[1].includes('PM')) {
            endTime = parseInt(arrHrs[0])+12 
        } else {
            endTime = parseInt(arrHrs[0])
        }
        for (let i = startTime; i <= endTime; i++) {
            arrTimes[i] = '0';
        }
        console.log('arrTimes:')
        console.log(arrTimes)
        
        if (bookings && Object.keys(bookings)) {
            console.log('useBookingDateVacancy > bookings not null.')
            for (let b = 0; b < bookings.length; b++) {
                let booking = bookings[b];
                console.log('useBookingDateVacancy > bookings:  ')
                console.log(booking)
                if (booking.booking_dates) {
                    console.log('useBookingDateVacancy > booking_dates not null.')
                    let vacancy = 0;
                    for (let d = 0; d < booking.booking_dates.length; d++) {
                        let bookingDate = booking.booking_dates[d];
                        arrAvailability[bookingDate.date_raw] = 'vacant';
                        arrDates[bookingDate.date_raw] = {};
                        for (let i = startTime; i < endTime; i++) {
                            arrDates[bookingDate.date_raw][i] = '0';
                        }        
                        vacancy = 0;
                        for (let j = parseInt(bookingDate.start_time_raw); j < parseInt(bookingDate.end_time_raw); j++) {
                            vacancy++;
                            arrDates[bookingDate.date_raw][j] = '1';
                        }
                        console.log('vacancy:'+vacancy)
                        console.log('arrDates[bookingDate.date_raw]:')
                        console.log(arrDates[bookingDate.date_raw])
                        let arrDataCounte = Object.keys(arrDates[bookingDate.date_raw]).length
                        if (vacancy == arrDataCounte) {
                            arrAvailability[bookingDate.date_raw] = 'full';
                            console.log('full')
                        } else if(vacancy > 0 && vacancy < arrDataCounte) {
                            arrAvailability[bookingDate.date_raw] = 'partial';
                            console.log('partial')
                        }
                    }
                }
            }
            console.log('arrAvailability:')
            console.log(arrAvailability)
        }
        console.log('arrDates:')
        console.log(arrDates)
    }
}