<template>
    <div v-for="(result, index) in searchStore.results"
                :key="index" class="searchPageRow">
        <NuxtLink :to="'/spaces/space/'+result.id" class="searchPageResult">
            <img :src="useImage('facility', result.id, result.facility_type_id)" class="searchPageResultThumbail" />
            <div>
                <span class="searchPageResultTitle">{{ result.name }}</span>
                <span class="searchPageResultLoc">{{ result.address }}</span>
                <span class="searchPageResultDesc">Availability: <b>{{ result.available_days_grp }}</b></span>
                <span class="searchPageResultRate">UP Rate: 
                    <span v-for="(rate, index) in result.facility_rates" :key="index" >
                        <span v-if="index == 0 && rate.up_rate" :key="index">
                        <b>₱{{ currency.format(rate.up_rate) + ' per ' + rate.type }}</b>
                        </span>
                    </span>
                | 
                Non-UP Rate: 
                    <span v-for="(rate, index) in result.facility_rates" :key="index" >
                        <span v-if="index == 0 && rate.nonup_rate" :key="index">
                        <b>₱{{ currency.format(rate.nonup_rate) + ' per ' + rate.type }}</b>
                        </span>
                    </span>
                </span>
            </div>
        </NuxtLink>
    </div>
</template>

<script setup>
const searchStore = useSearchStore();
const currency = new Intl.NumberFormat('en-US');
</script>