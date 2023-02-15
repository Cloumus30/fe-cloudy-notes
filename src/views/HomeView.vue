<script lang="ts">
import HelloWorld from '@/components/HelloWorld.vue';
import Navbar from '@/components/Navbar.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components:{
    HelloWorld,
    Navbar
},

  mounted(){
    document.title = 'Home Page';
  }
})

</script>

<template>
  <header>
      <Navbar />
  </header>
  <main>
    <HelloWorld />
  </main>
</template>
