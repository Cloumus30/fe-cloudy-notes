<script lang="ts">
import { Delta, QuillEditor } from '@vueup/vue-quill';
import { defineComponent } from 'vue';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import '@vueup/vue-quill/dist/vue-quill.bubble.css';
import ImageUploader from 'quill-image-uploader';
import BlotFormatter from 'quill-blot-formatter';

export default defineComponent({
    components:{
        QuillEditor
    },

    data: () => {
        return {
           quillDat: "",
        }
    },

    setup: ()=>{
        const modules = [
            {
                name: 'imageUploader',
                module: ImageUploader,
                options:{
                    upload: (file:any) => {
                        return new Promise((resolve, reject) => {
                            const formData = new FormData();
                            formData.append("image", file);

                            console.log(formData);

                            setTimeout(() => {
                                resolve(
                                "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/480px-JavaScript-logo.png"
                                );
                            }, 3500);
                        })
                    }
                }, 
            },
            {
                name: 'blotFormatter',
                module: BlotFormatter,
                options:{
                }
            }
        ]
        return {modules};
    },
    watch:{
        // quillDat(current:any, old:any){
        //     console.log(current.match(/<img([\w\W]+?)>/g));
        // }
    },
    methods:{
        handleClick() {
            this.getImageSrcs();
        },
        getImageSrcs(){
            const image = this.quillDat.match(/<img([\w\W]+?)>/g);
            let srcs:any[] = [];
            image?.forEach((el)=>{
                const src =  el.match(/<img.*?src=['"](.*?)['"]/);
                if(src){
                    srcs.push(src[1])
                }
            });
            return srcs;
        },
    }
})

</script>


<template>
    <QuillEditor theme="snow" class="h-5/6" toolbar="full" 
        :modules="modules" 
        v-model:content="quillDat" 
        content-type="html"
         />
    <button @click="handleClick()">Klik Dinisi</button>
</template>