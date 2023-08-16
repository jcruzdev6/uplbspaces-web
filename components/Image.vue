<template>
    <span v-if="isLoading">Loading</span>
    <img v-else :src="props.src" />
</template>
<script setup>
import { useImage } from '@vueuse/core'
const props = defineProps({
    src: {
        type: String,
        required: true
    }
})
const { isLoading } = useImage({ src: props.src })
</script>