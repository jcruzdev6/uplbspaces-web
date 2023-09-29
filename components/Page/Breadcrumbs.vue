<template>
    <div class="container-fluid" id="innerpageHeader">
        <div class="container-lg" id="innerpageHeaderContent">
            <div class="spacesBreadcrumbs">
                <NuxtLink to="/">Home</NuxtLink> <span>
                    <IconsCaretRight />
                </span>&nbsp;{{ pageName }}
            </div>
        </div>
    </div>
</template>

<script setup>
const pageStore = usePageStore();
const props = defineProps({
    page_name: String,
});
const pageName = (props.page_name != null) ? props.page_name : pageStore.page.name;
</script>
