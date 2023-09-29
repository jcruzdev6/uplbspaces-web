import { defineStore } from "pinia";

export const useBookingStore = defineStore("booking", {
    state: () => ({
        activeFacilityBookings: null,
        bookings: null,
        booking: null,
        bookingCart: null,
        view:'active'
    }),
    persist: {
      storage: persistedState.sessionStorage,
    },
    getters: {
        filterBookings(state) {
            let filteredBookings = state.bookings;
            switch(state.view)  {
                case 'completed':
                    filteredBookings = state.bookings.filter((item) => {
                        return item['status'] == 'Completed'      
                    });
                    break;
                case 'cancelled':
                    filteredBookings = state.bookings.filter((item) => {
                        return item['status'] == 'Cancelled by Admin' || item['status'] == 'Cancelled by User'      
                    });
                    break;
                case 'active':
                    filteredBookings = state.bookings.filter((item) => {
                        return item['status'] == 'Submitted' || item['status'] == 'Pre-approved' || item['status'] == 'Approved for Payment' || item['status'] == 'For Verification' || item['status'] == 'Payment Verified' || item['status'] == 'Confirmed'    
                    });
                    break;
                case 'all':
                default:
                    filteredBookings = state.bookings;
                    break;
            }           
            return filteredBookings;
        },
        attentionCount(state) {
            return state.bookings.filter(booking => booking.status == 'Approved for Payment' || booking.status == 'Confirmed' || booking.status == 'Cancelled by Admin').length;
        }
    },
    actions: {
        async fetchBookings() {
            /*await useApiFetch("/sanctum/csrf-cookie");
            
            const { data, error } = await useApiFetch("/api/bookings");
            if (data.value) this.bookings = data.value.data;*/

            const API_URL = useRuntimeConfig().public.jsonApiUrl;
            const WEB_URL = useRuntimeConfig().public.webUrl;
            let headers = {
              accept: "application/json",
              referer: WEB_URL
            };
          
            const token = useCookie('XSRF-TOKEN');
          
            if (token.value) {
              headers['X-XSRF-TOKEN'] = token.value;
            }
          
            if (process.server) {
              headers = {
                ...headers,
                ...useRequestHeaders(["cookie"]),
              };
            }
          
            useFetch(API_URL + "/sanctum/csrf-cookie", {
              credentials: "include",
              watch: false,
              headers: {
                ...headers
              }
            });

            
            
            const { data, error } = useFetch(API_URL + "/api/mybookings", {
                credentials: "include",
                watch: false,
                headers: {
                  ...headers
                }
              });
              if (data.value) this.bookings = data.value.data;
        },
        async fetchAllBookingsByFacility(facility_id) {
          const API_PATH = useRuntimeConfig().public.jsonApiPath;
          const results = await $fetch(API_PATH+'/bookings/'+facility_id)
          
          this.activeFacilityBookings = results.data;
      },  
    },
});