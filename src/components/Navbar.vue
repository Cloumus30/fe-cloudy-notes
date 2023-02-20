<script lang="ts">
  import {RouterLink} from 'vue-router'
  import IconBell from './icons/navbar/IconBell.vue';
  import IconUser from './icons/navbar/IconUser.vue';
  import IconLogin from './icons/navbar/IconLogin.vue';
  import IconDoc from './icons/navbar/IconDoc.vue';
  import NotifCard from './partial/notifCard.vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components:{
      IconBell, IconUser, IconLogin, IconDoc, RouterLink, NotifCard
    },
    data(){
      return {
        bodyNotif:"Notif Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate sit quis soluta ipsam est earum voluptates hic provident numquam excepturi.",
        isNotifClicked: false
      }
    },
    
    methods:{
      
    }
  })  
</script>

<template>
    <nav class="flex m-0 top-0 justify-between w-screen items-center h-14 text-font-navbar bg-navbar">
        <div class="font-bold text-2xl">
          <p>Cloudy Notes</p>
        </div>
        <div class="flex mr-8">
          <div>
            <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="mx-3 hover:text-white">
              <IconBell/>
            </button>
            <ul id="dropdown" class=" hidden absolute mt-4 bg-slate-800 drop-shadow rounded-md text-slate-300 right-10 md:w-1/3 2xs:w-full " aria-labelledby="dropdownDefaultButton">
              <li class="py-4 pr-4 pl-2 flex hover:text-white hover:cursor-pointer"> 
                 <NotifCard :body-notif="bodyNotif"/>
              </li>
              <li class="py-4 pr-4 pl-2 flex hover:text-white hover:cursor-pointer"> 
                <NotifCard :body-notif="bodyNotif" />
              </li>
            </ul>
          </div>
          

          <!-- Dropdown Profile -->
          <div class="group">
            <button id="dropdownUserButton" data-dropdown-toggle="dropdownUser" class="mx-3 hover:text-white">
              <IconUser />
            </button>
            <ul id="dropdownUser" class=" hidden absolute mt-4 bg-slate-800 drop-shadow rounded-md text-slate-300 right-10 w-40 md:w-40 2xs:w-1/2" aria-labelledby="dropdownUserButton">
              <li class="py-4 pr-4 pl-2 flex hover:text-white hover:cursor-pointer"> 
                <IconLogin class="mx-2" /> Login
              </li>
              <li class="py-4 pr-4 pl-2 flex hover:text-white hover:cursor-pointer"> 
                <IconDoc class="mx-2" /> Register
              </li>
            </ul>
          </div>
          <!-- DropDown Profile -->
          
          <!-- <RouterLink class="p-2" to="/about">About</RouterLink> -->
        </div>
    </nav>
</template>