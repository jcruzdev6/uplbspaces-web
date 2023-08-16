<template>
    <div v-for="(image, index) in images"
        :key="index" class="pageCardPhoto" :id="'pagePhoto' + (index+1)">
        <img :src="image" />
    </div>
</template>
<script setup>
const pageStore = usePageStore();
const images = useFetchImages('page', pageStore.page.id);
</script>