<template>
  <NavBar/>
  <router-view/>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from "@/components/NavBar.vue";
export default defineComponent({
 name: 'AppComponent',
 components: {
  NavBar,
 }
})


</script>

<style scoped>

</style>

