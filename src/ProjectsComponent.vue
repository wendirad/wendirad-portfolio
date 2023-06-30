<template>
        <div data-aos="zoom-in-right" data-aos-duration="1000" class="relative max-w-xs mt-10 overflow-hidden bg-cover bg-no-repeat rounded-md shadow-lg shadow-black">
            <img :src="data.image" class="max-w-xs" alt="">
            <div 
        class="projects-cover">
            <h1 class="font-experience-title font-bold">{{ data.title }}</h1>
            <p>{{ data.description }}</p>
            </div>
        </div>
</template>
<script>
import AOS from 'aos'
export default {
    props: {
        data: {
            type: Object,
            required:true,
        }
    },
    mounted() {
        AOS.init();
    },
}
</script>
