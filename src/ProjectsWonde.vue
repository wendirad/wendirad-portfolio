<template>
    <swiper
    :slidesPerView="1"
    :breakpoints="breakpoints"
    :spaceBetween="30"
    :pagination="{
        clickable: true,
    }"
    :keyboard="{
        enabled: true,
    }"
    :modules="modules"
    class="m-10"
    >
    <swiper-slide class="bg-secondary-light rounded-md  text-primary-light p-10 dark:bg-secondary-dark text-pri" v-for="(slide,index) in slides" :key="index">
    <h1>{{slide.name}}</h1>
        <p class="text-clip">{{ slide.description}}</p>
        
    </swiper-slide>

</swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import {  Keyboard, Pagination, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

let projects = require('./projects.json')
export default {
    name: 'ProjectsWonde',
    components: { Swiper, SwiperSlide },
    data() {
        return {
            slides: projects,
        }
    },
    setup() {
        return {
            modules: [Pagination, Autoplay, Keyboard],
            breakpoints: {
                640: {
                    slidesPerView:2,
                },
                1028: {
                    slidesPerView:3,
                },
            }
        }
    }
}
</script>