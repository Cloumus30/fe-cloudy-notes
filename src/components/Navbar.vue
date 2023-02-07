<script setup lang="ts">
  import {RouterLink} from 'vue-router'
  import IconBell from './icons/navbar/IconBell.vue';
  import IconUser from './icons/navbar/IconUser.vue';
  import IconLogin from './icons/navbar/IconLogin.vue';
  import IconDoc from './icons/navbar/IconDoc.vue';
</script>

<template>
    <nav class="flex m-0 top-0 justify-between w-screen items-center h-14 text-slate-300 bg-slate-800">
        <div class="font-bold text-2xl">
          <p>Cloudy Notes</p>
        </div>
        <div class="flex mr-8">
          <button class="mx-3 hover:text-white">
            <IconBell/>
          </button>
          <div class="group">
            <button class="mx-3 border hover:text-white border-white rounded-full">
              <IconUser />
            </button>
            <ul class="absolute hidden pt-2 bg-slate-800 text-slate-300 right-2 group-hover:block hover:block">
              <li class="py-4 pr-4 pl-2 flex hover:text-white hover:cursor-pointer"> 
                <IconLogin class="mx-2" /> Login
              </li>
              <li class="py-4 pr-4 pl-2 flex hover:text-white hover:cursor-pointer"> 
                <IconDoc class="mx-2" /> Register
              </li>
            </ul>
          </div>
          
          <!-- <RouterLink class="p-2" to="/about">About</RouterLink> -->
        </div>
    </nav>
</template>