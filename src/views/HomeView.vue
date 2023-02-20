<script lang="ts">
import HelloWorld from '@/components/HelloWorld.vue';
import { RouterLink, RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue';
import Navside from '@/components/Navside.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components:{
    HelloWorld,
    Navbar,
    Navside,
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
  <main class="flex">
    <div class="w-1/6">
      <Navside />
    </div>
    <div class="w-5/6">
      <RouterView />
    </div>
    
  </main>
</template>
