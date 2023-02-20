<script lang="ts">
import { defineComponent } from 'vue';
import IconHome from '@/components/icons/navside/IconHome.vue';
import IconDoc from '@/components/icons/navside/IconDocument.vue';

export default defineComponent({
    components:{
        IconHome, IconDoc
    }
})

</script>

<template>
    <nav class="flex flex-row text-font-navbar bg-slate-900 h-screen">
        <ul class="m-6">
            <li class="mb-6">
                <a class="hover:text-white flex flex-row" href=""> <IconHome class="mr-7 text-sm" /> Dashboard</a>
            </li>
            <li class="mb-6">
                <a class="hover:text-white flex flex-row" href=""> <IconDoc class="mr-7 text-sm" /> List Notes</a>
            </li>
        </ul>
    </nav>
</template>