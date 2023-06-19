<template>
        <div data-aos="zoom-in-right" data-aos-duration="1000" class="bg-secondary-light overflow-hidden flex flex-col lg:flex-row md:mb-0  dark:bg-secondary-dark text-primary-light md:h-90 md:w-30 rounded-lg">
            <img :src="data.image" class="lg:w-2/5 rounded left-0" alt="">
            <div class="flex flex-col justify-center"><h1 class="block font-bold">{{ data.title }}</h1>
            <p class="text-sm mb-10 font-testimonials ">{{ data.description }}</p></div>
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