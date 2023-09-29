<template>
    <div class="tile" id="homeGridOneBg">
        <div id="homeGridOne">
            <div id="homeGridOneContent">
                <form id="accountForm" @submit.prevent="search">
                    <div id="homeGridOneLeftCol">
                        <h1 id="homeGridOneTitle">Rent a facility in U.P. Los Baños</h1>
                        <p>Just fill up the form or choose a category</p>
                    </div>
                    <div class="d-grid" id="homeGridOneRightCol">
                        <label for="homeSearchForm-search">Which space do you need?</label>
                        <input type="text" v-model="searchTerms.keyword" id="homeSearchForm-search" class="form-control form-control-sm rounded"
                            placeholder="ex. Umali Hall">

                        <label for="homeSearchForm-cap">For how many persons?</label>
                        <div class="d-flex">
                            <input type="number" v-model="searchTerms.capacity" id="homeSearchForm-cap-min" class="form-control form-control-sm rounded me-1"
                                placeholder="min">
                        </div>

                        <label for="homeSearchForm-date">When do you need it?</label>
                        <input type="date" v-model="searchTerms.date" id="homeSearchForm-date" class="form-control form-control-sm rounded"
                            placeholder="no. of persons">

                        <button type="submit" class="btn btn-success btn-sm mt-2 mb-2 rounded">Search</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const searchTerms = ref({
    keyword: '',
    capacity: '',
    date: ''
});

function search(values){
    router.push({path: '/search', query:searchTerms.value})
    //route.$router.push({path: '/search', query:searchTerms.value})
}
</script>