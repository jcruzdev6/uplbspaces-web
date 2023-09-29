<template>
     <div class="searchTermsList">
        Found {{ resultsCount }} search results.<br>
        
        <span v-for="(value, key) in searchStore.filters" v-show="value != ''" class="searchTerm rounded-pill text-dark">
            {{ value }} <a href="#" class="searchTermDelete text-dark">x</a>
        </span>
    </div>
</template>
<script setup>
import { computed } from 'vue';

const searchStore = useSearchStore();
const activeFilters = computed(() => searchStore.filters);
const componentKey = ref(0);

// Watch for changes in activeFilters and trigger a re-render
watchEffect(() => {
  componentKey.value += 1;
});
</script>