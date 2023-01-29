<template>
    <ProductDescription/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ProductDescription from '@/components/ProductDescription.vue'
export default defineComponent({
    name: "EachProduct",
    components: {
        ProductDescription,
    }
})
</script>
