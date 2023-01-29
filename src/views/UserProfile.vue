<template>
        <profileComponent/>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import profileComponent from '@/components/profileComponent.vue';
export default defineComponent({
    name:"UserProfile",
    components:{
        profileComponent,
    }

})
</script>
