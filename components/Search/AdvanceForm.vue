<template>
    <form id="searchForm" @submit.prevent="search">
        <div class="inputGroup">
            <label for="searchpage-search">Keyword:</label>
            <input type="text" v-model="searchTerms.keyword" id="searchpage-search" class="inputsearchfield">
        </div>
        <div class="inputGroup">
            <label for="searchpage-category">Category:</label>
            <select v-model="searchTerms.category" id="searchpage-category">
                <option value="">Select Category</option>
                <option v-for="(facility_type, index) in facilityTypeStore.facility_types"
                    :key="index" :value="facility_type.id">{{ facility_type.name }}</option>                                
            </select>
        </div>
        <div class="inputGroup">
            <label for="searchpage-capacity">Capacity:</label>
            <input type="number" v-model="searchTerms.capacity" id="searchpage-capacity" class="inputsearchfield">
        </div>
        <div class="inputGroup">
            <label for="searchpage-capacity">College:</label>
            <select v-model="searchTerms.college" id="searchpage-college">
                <option value="">Select College</option>
                <option v-for="(dept_unit, index) in deptStore.department_units"
                    :key="index" :value="dept_unit.id">{{ (dept_unit.parent_id) ? dept_unit.parent_name + ' > ' + dept_unit.name : dept_unit.name }}</option>                                
            </select>
        </div>
        <div class="inputGroup">
            <label for="searchpage-date">Target Date:</label>
            <input type="date" v-model="searchTerms.start_date" :min="minDate" class="searchpage-date">
            <span class="searchpage-to">to</span>
            <input type="date" v-model="searchTerms.end_date" class="searchpage-date">
        </div>
        <div>
            <button type="submit" id="searchpage-submit">Search</button>
        </div>
    </form>
</template>
<script setup>
const route = useRoute();
const searchStore = useSearchStore();
const deptStore = useDepartmentUnitStore();
const facilityTypeStore = useFacilityTypeStore();
const minDate = new Date().toISOString().split('T')[0];

let searchTermsBlank = {
    keyword: route.query.keyword,
    category: '',
    capacity: route.query.capacity,
    college: '',
    start_date: route.query.date,
    end_date: route.query.date
};

let searchTermsStore = searchStore.searchFilters;
searchStore.resetResults();
searchStore.resetFilters();
let searchTerms = searchTermsBlank;

await deptStore.fetchDepartmentUnits();

onMounted(  () => {
    if (route.query.keyword) search();
});

const search = async () => {
    await searchStore.search(searchTerms);
}
</script>