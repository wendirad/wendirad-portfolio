<template>
    <swiper
    :slidesPerView="1"
    :breakpoints="breakpoints"
    :spaceBetween="30"
    :pagination="{
        clickable: true,
    }"
    :loop="true"
    :autoplay="{
        delay:5000,
        disableOnInteraction: false,
    }"
    :keyboard="{
        enabled: true,
    }"
    :modules="modules"
    class="m-10 h-auto"
    >
    <swiper-slide class="w-30 h-20 bg-black rounded-md">
    </swiper-slide>
    </swiper>
</template>
<script>
import {Swiper,SwiperSlide} from 'swiper/vue';
import { Pagination,Autoplay,Keyboard } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
export default {
    name:"MyServices",
    components: {
        Swiper,
        SwiperSlide,
    },
    setup(){
        return{
            modules:[Pagination,Autoplay,Keyboard],
            breakpoints: {
                640: {
                    slidesPerView: 2,
                },
                1028: {
                    slidesPerView: 3,
                },
            },
        } 
    },
};
</script>