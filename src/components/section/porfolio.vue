<template>
  <section id="portfolio" class="text-center sm:pb-24 md:pb-12">
    <h2 class="text-center sm:mb-8 md:mb-18 lg:mb-20">Портфоліо</h2>
    <div class="inline-block px-10 container navigation-controls">
      <div class="container px-0 slider">
        <swiper
          :modules="modules"
          :space-between="0"
          :loop="true"
          navigation
          :pagination="{ clickable: true }"
          :scrollbar="{ draggable: true }"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          :breakpoints="{
            '640': {
              slidesPerView: 1,
            },
            '768': {
              slidesPerView: 3,
            },
            '1024': {
              slidesPerView: 3,
            },
          }"
          class="pt-5 portfolio"
        >
          <swiper-slide
            v-for="{ img, index } in swiperTextBase"
            :key="index"
            class="portfolio-slide"
          >
            <img :src="img" alt="" class="min-w-full" />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<script>
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ref } from "vue";
import slide1 from "../../../src/assets/imgs/slide1.jpg";
import slide2 from "../../../src/assets/imgs/slide2.jpg";
import slide3 from "../../../src/assets/imgs/slide3.jpg";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    const swiperTextBase = ref([
      {
        img: slide1,
      },
      {
        img: slide2,
      },
      {
        img: slide3,
      },
      {
        img: slide1,
      },
      {
        img: slide2,
      },
      {
        img: slide3,
      },
    ]);
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, A11y],
      swiperTextBase,
    };
  },
};
</script>


<style scoped>
@screen sm {
  section {
    padding-top: 60px;
  }
}
@screen md {
  section {
    padding-top: 80px;
  }
}
@screen lg {
  section {
    padding-top: 120px;
  }
}
.swiper {
  padding-bottom: 70px;
  transition: 0.6s;
}
.navigation-controls {
  transform: translate(0, 0);
}
.slider {
  max-width: 90vw;
}
</style>>
