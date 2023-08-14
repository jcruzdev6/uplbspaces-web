<template>
    <div id="innerpageBodyContentContainer">
        <div class="row">
            <div class="col-lg-7" id="innerpageBodyContentLeft">
                <div v-html="pageStore.page.content"></div>
            </div>
            <div class="col-lg-5" id="innerpageBodyContentRight">
                <PageImageCards />
            </div>
        </div>
    </div>
</template>

<script setup>
const pageStore = usePageStore();
</script>