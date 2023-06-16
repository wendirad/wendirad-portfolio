<template>
    <swiper 
      :slidesPerView="1"
      :breakpoints="breakpoints"
      :spaceBetween="30"
      :pagination="{
        clickable: true,
      }"
      :autoplay="{
        delay: 2000,
        disableOnInteraction: false,
      }"
      :keyboard="{
        enabled:true,
      }"
      :modules="modules"
      class="m-10"
    >
      <swiper-slide class='text-center bg-slate-300 p-5 rounded-md mb-10' v-for="(slide,index) in slides" :key="index">
        <p>
              {{ slide.description }}
            </p>
        <div class="text-end mt-3"><h1 class="text-lg font-bold">
            {{ slide.author }}
          </h1> 
        <p class="font-extralight text-sm">{{ slide.profession }}</p> 
        <img :src="slide.img" class="w-12 h-12 absolute rounded-full right-3"></div>
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
  name: 'App',
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
        780: {
          slidesPerView: 3,
        },
      }
    }
  }
}
</script>
<style>
.swiper-pagination-bullet {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #656161;
  opacity: 0.5;
  transition: opacity 0.2s ease-out;
}

.swiper-pagination-bullet-active {
  opacity: 1;
  background-color: #000;
}

.swiper-pagination-bullet-active::after {
  content: '';
  display: block;
  width: 10px;
  height: 10px;
  transform: rotate(45deg);
  background-color: #000;
}
</style>