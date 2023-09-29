<template>
    <div>
        <div class="spacesTileCard">
            <div class="spacesTileClip">
                <div class="spacesTileImg">
                    <img :src="useImage('facility', props.facility.id, props.facility.facility_type_id)" />
                    <NuxtLink :to="'/spaces/space/'+props.facility.id" class="spacesTileTint"></NuxtLink>
                </div>
            </div>
            <div class="spacesTileDescriptionBox">
                <div class="spacesTileTitleClip">
                    <h4 class="spacesTileTitle"><NuxtLink :to="'/spaces/space/'+props.facility.id">{{ props.facility.name }}</NuxtLink></h4>
                </div>
                <div class="spacesTileText">
                    <address>{{ props.facility.address }}</address>
                    <div class="spacesTileTable">
                        <div class="row1 label">Capacity:</div>
                        <div class="row1">{{ useFacilityCapacity(props.facility.min_capacity, props.facility.max_capacity) }}</div>
                        <div class="row2 label">Availability:</div>
                        <div class="row2">{{ props.facility.available_days_grp }},<br>{{ props.facility.available_hrs }}</div>
                        <div class="row1 label">U.P. Rate:</div>
                        <div class="row1">
                            <span v-for="(rate, index) in props.facility.facility_rates" :key="index" >
                                <div v-if="index == 0" :key="index">
                                ₱{{ currency.format(rate.up_rate) + ' per ' + rate.type }}
                                </div>
                            </span>
                        </div>
                        <div class="row2 label">Non-U.P. Rate:</div>
                        <div class="row2">
                            <span v-for="(rate, index) in props.facility.facility_rates" :key="index">
                                <div v-if="index == 0">
                                ₱{{ currency.format(rate.nonup_rate) + ' per ' + rate.type }}
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="spacesTileBtnContainer">
                    <button type="button" class="btn btn-success btn-sm rounded-3 spacesTileBtn" data-bs-toggle="modal"
                        data-bs-target="#modalBookNow" data-facilityid="props.facility.id" @click="getFacilityBookings(props.facility.id)" aria-controls="modalBookNow">Book Now</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const currency = new Intl.NumberFormat('en-US');
const props = defineProps({
    facility: {
        type: Object,
    },
});
const bookingStore = useBookingStore();
const facilityStore = useFacilityStore();

console.log(props.facility.facility_rates[0])

const getFacilityBookings = async (facilityId) => {
    console.log('getFacilityBookings called. facilityId:'+facilityId)
    await facilityStore.fetchFacility(facilityId)
    await facilityStore.setActiveFacility(facilityId);
    await bookingStore.fetchAllBookingsByFacility(facilityId);
    
    let facilityBookings = computed(() => bookingStore.activeFacilityBookings);
    console.log('facilityBookings:')
    console.log(facilityBookings)

    useBookingDateVacancy(facilityStore.activeFacility, bookingStore.activeFacilityBookings)
}

</script>
