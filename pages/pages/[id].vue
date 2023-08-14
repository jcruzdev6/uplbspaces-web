<template>
    <div>
        <PageBreadcrumbs />
        <div class="container-fluid" id="innerpage">
            <div class="container-lg" id="innerpageBody">
                <PageHeader />
                <PageContent v-if="pageStore.page.name.toLowerCase() != 'contact us' && pageStore.page.name.toLowerCase() != 'faqs'" />
                <PageContact v-if="pageStore.page.name.toLowerCase() == 'contact us'" />
                <PageFAQs v-if="pageStore.page.name.toLowerCase() == 'faqs'" />
            </div>
        </div>
    </div>
</template>

<script setup>
const route = useRoute();
const pageStore = usePageStore();

await pageStore.fetchPage(route.params.id);
console.log(pageStore.page.name.toLowerCase())

</script>