<script lang="ts">
import Navbar from '@/components/Navbar.vue';
import { defineComponent } from 'vue';


export default defineComponent({
    mounted() {
        document.title = "About Page";
    },
    components: { Navbar }
})
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
