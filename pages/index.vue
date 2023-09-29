<template>
    <div class="container-fluid" id="home">
        <div class="container-lg" id="homeContent">
            <div id="homeGrid">
                <SearchBasicForm />
                <FacilityType v-for="(facility_type, index) in facilityTypeStore.facility_types"
                    :key="index"
                    :facility_type="facility_type" />
            </div>
        </div>
    </div>
</template>
  
<script setup>
const auth = useAuthStore();
const facilityTypeStore = useFacilityTypeStore();
//if (auth.user != null)
//    console.log('HOME:auth.isLoggedIn:'.auth.user);
</script>
  
<style lang="scss" scoped></style>
  