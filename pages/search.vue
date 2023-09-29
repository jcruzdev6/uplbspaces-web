<template>
    <div>
        <PageBreadcrumbs page_name="Search" />
        <div class="container-fluid" id="innerpage">
            <div class="container-lg" id="innerpageBody">
                <div id="searchPageContent">
                    <div class="searchPageHead">
                        Search
                    </div>
                    <div class="searchPageMainKeywords">
                        <SearchAdvanceForm />
                    </div>
                    <SearchResultsHeader />
                    <div class="searchPageResults">
                        <SearchResults />
                    </div>                
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
</script>