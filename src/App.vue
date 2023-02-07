<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import { initDropdowns } from 'flowbite'
import { onMounted } from 'vue';

onMounted(()=>{
  initDropdowns();
})
</script>

<template>
  <header>
      <Navbar />

  </header>

  <RouterView />
</template>

