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
      :class="mediaClass(mediaType)"
    >
      <swiper-slide v-for="(media, index) in medias" :key="index">
        <template v-if="mediaType === 'video'">
          <!-- <video
            autoplay
            muted
            :src="`/src/assets/videos/${media}`"
            class="swiper-video"
          ></video> -->
          <img :src="`/src/assets/images/${media}`" alt="Image" />
        </template>
        <template v-else-if="mediaType === 'photo'">
          <img :src="`/src/assets/images/${media}`" alt="Image" />
        </template>
        <template v-else>
          <p class="my-4 text-center text-gray-600 uppercase">Media type <span class="font-bold">{{ mediaType }}</span> is not supported.</p>
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
      mediaType: {
        type: String,
        required: true,
        default: 'photo',
      },
    },
    components: {
      Swiper,
      SwiperSlide,
    },
    setup(props) {
      const { medias, mediaType } = props;
      const mediaClass = () => {
        if(mediaType === 'video') return 'videos'
        else if(mediaType === 'photo')  return 'photos'
      }
      return {
        medias,
        mediaType,
        mediaClass,
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