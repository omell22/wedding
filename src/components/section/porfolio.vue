<template>
  <section class="container">
    <h2 class="text-center mb-20">Портфоліо</h2>
    <swiper
      :modules="modules"
      :space-between="0"
      :loop="true"
      :pagination="{ clickable: true }"
      :scrollbar="{ draggable: true }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      :slidesPerView="3"
      class="container pt-5"
    >
      <swiper-slide v-for="{ img, index } in swiperTextBase" :key="index">
        <img :src="img" alt="" class="min-w-full" />
      </swiper-slide>
    </swiper>
  </section>
</template>

<script>
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ref } from "vue";
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
        img: "../../../src/assets/imgs/slide1.jpg",
      },
      {
        img: "../../../src/assets/imgs/slide2.jpg",
      },
      {
        img: "../../../src/assets/imgs/slide3.jpg",
      },
      {
        img: "../../../src/assets/imgs/slide1.jpg",
      },
      {
        img: "../../../src/assets/imgs/slide2.jpg",
      },
      {
        img: "../../../src/assets/imgs/slide3.jpg",
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
section {
  padding-top: 120px;
}

.swiper {
  padding-bottom: 70px;

  transition: 0.6s;
}
</style>>
