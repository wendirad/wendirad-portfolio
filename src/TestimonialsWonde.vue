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
        delay: 2000,
        disableOnInteraction: false,
      }"
      :keyboard="{
        enabled:true,
      }"
      :modules="modules"
      class="m-10 h-auto"
    >
      <swiper-slide class='text-center p-50 dark:text-primary-dark bg-slate-300  rounded-md mb-12' v-for="(slide,index) in slides" :key="index">
        <p class="h-52 pt-6 p-6 mb-10 font-testimonials font-bold text-sm text-center" style="word-wrap: break-word;">
              "{{ slide.testimonial }}"
            </p>
        <div class="text-end relative pr-10">
        <h1 class="text-lg font-bold font-primary">{{ slide.name }}</h1> 
        <p class="font-extralight text-sm mb-5 font-primary text-blue-600 text-bold ">{{ slide.jobTitle }}</p> 
        <img :src="slide.image" class="w-12 h-12 absolute rounded-full right-1 top-10 border-blue-500 border-x-2 border-y-2">
      </div>
      </swiper-slide>
    </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import {Autoplay,Keyboard,Pagination} from 'swiper'
import 'swiper/css';
import 'swiper/css/pagination';
let testimonials = require('./testimonials.json')

export default {
  name: 'TestimonialsWonde',
  components: { Swiper, SwiperSlide },
  data() {
    return {
      slides: testimonials,
    }
  },
  setup(){
    return {
      modules: [Pagination, Autoplay, Keyboard],
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        1028: {
          slidesPerView: 3,
        },
      }
    }
  }
}
</script>
<style>
.swiper-pagination-bullet {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #595858;
  opacity: 0.9;
  transition: opacity 0.2s ease-out;
}

.swiper-pagination-bullet-active {
  background-color: #100707;
}

.swiper-pagination-bullet-active::after {
  content: '';
  display: block;
  width: 8px;
  height: 8px;
  transform: rotate(45deg);
  background-color: #000;
}
.swiper-slide-active{
  background: red;
}
</style>