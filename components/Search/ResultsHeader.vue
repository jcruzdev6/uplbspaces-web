<template>
    <div class="searchResults">
        <div class="searchResultsCount">Found {{ resultsCount }} search results</div>
        <div class="searchTermsList">
            <span v-for="(value, key) in searchStore.filters">
                <span v-if="value !=null && value != ''" class="searchTerm rounded-pill text-dark">
                    <span v-if="key == 'college' && deptStore.department_units != null">{{ key }}: {{ deptStore.getDepartmentUnitById(value).name }}</span>
                    <span v-if="key == 'category' && facilityTypeStore.facility_types != null">{{ key }}: {{ facilityTypeStore.getFacilityTypeById(value).name }}</span>
                    <span v-else>{{ key }}: {{ value }}</span>
                    <a @click="search(key)" class="searchTermDelete text-dark">x</a>
                </span>
            </span>
        </div>
    </div>
</template>
<script setup>
import { computed } from 'vue';

const facilityTypeStore = useFacilityTypeStore();
const deptStore = useDepartmentUnitStore();
const searchStore = useSearchStore();
const activeFilters = computed(() => searchStore.filters);

const resultsCount = (searchStore.results) ? computed(() => searchStore.results.length) : 0;
const componentKey = ref(0);

console.log('count:'+searchStore.results.length)

const search = async (key) => {
    searchStore.filters[key] = '';
    await searchStore.search();
}
</script>