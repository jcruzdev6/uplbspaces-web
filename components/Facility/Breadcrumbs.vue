<template>
    <div class="spacesBreadcrumbs">
        <NuxtLink to="/">Home</NuxtLink> <span><IconsCaretRight /></span> <a href="#">Spaces</a>&nbsp;
        <span><IconsCaretRight /></span>&nbsp;
        <span v-if="route.name == 'spaces-id'">{{ type_name }}</span>        
        
        <span v-if="route.name == 'spaces-space-id'">
        <NuxtLink :to="'/spaces/'+type_id">{{ type_name }}</NuxtLink>&nbsp;
        <span><IconsCaretRight /></span> {{ facility_name }}
        </span>
    </div>
</template>

<script setup>
const route = useRoute();
const facilityStore = useFacilityStore();
const facilityTypeStore = useFacilityTypeStore();

let type_id = '';
let type_name = '';
let facility_name = '';
if (facilityTypeStore.facility_type) {
    type_name = facilityTypeStore.facility_type.name;
    type_id = facilityTypeStore.facility_type.id;
}
if (route.name == 'spaces-space-id' && facilityStore.facility)
    facility_name = facilityStore.facility.name;

</script>