<template>
    <CardGroupComponent/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CardGroupComponent  from '@/components/CardGroupComponent.vue'

export default defineComponent({
    name: "ProductsView",
    components: {
    CardGroupComponent,
    
    }
})
</script>
