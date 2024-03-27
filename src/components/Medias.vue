<template>
    <swiper
      :navigation="true"
      :modules="modules"
      :slides-per-view="3"
      :space-between="10"
      :speed="500"
      :pagination="{
        clickable: true,
      }"
      :breakpoints="{
        480: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20
        },
      }"
      :class="hasVideo ? 'videos': 'photos'"
    >
      <swiper-slide v-for="(media, index) in medias" :key="index">
        <template v-if="hasVideo">
          <!-- <video
            autoplay
            muted
            :src="`/src/assets/videos/${media}`"
            class="swiper-video"
          ></video> -->
          <img :src="`/src/assets/images/${media}`" alt="Image" />
        </template>
        <template v-else>
          <img :src="`/src/assets/images/${media}`" alt="Image" />
        </template>
      </swiper-slide>
    </swiper>
  </template>
  <script>
  import { Swiper, SwiperSlide } from "swiper/vue";
  import { Pagination } from "swiper/modules";
  
  import "swiper/css";
  import "swiper/css/navigation";
  import "swiper/css/pagination";
  import { Navigation } from "swiper/modules";
  
  export default {
    props: {
      medias: {
        type: Array,
        required: true,
      },
      hasVideo: {
        type: Boolean,
        required: false,
        default: false,
      },
    },
    components: {
      Swiper,
      SwiperSlide,
    },
    setup(props) {
      const { medias, hasVideo } = props;
      return {
        medias,
        hasVideo,
        modules: [Navigation, Pagination],
      };
    },
  };
  </script>
  
  <style>
  .videos {
    width: 100%;
    height: auto;
  }
  
  .photos {
    width: 100%;
    height: 250px;
  }
  
  .swiper-slide img {
    width: 100%;
    height: 100%;
  }
  
  .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    background-color: #fff;
    opacity: 1;
  }
  
  .swiper-pagination-bullet-active {
    background-color: aqua;
  }
  
  .swiper-video {
    width: 100%;
    height: auto;
  }
  </style>