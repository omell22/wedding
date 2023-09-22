<template>
  <section class="container">
    <h2 class="text-center mb-20">Портфоліо</h2>
    <swiper
      :space-between="0"
      :loop="true"
      :slidesPerView="3"
      class="container pt-5"
    >
      <swiper-slide v-for="{ img, index } in swiperTextBase" :key="index">
        <img :src="img" alt="" />
      </swiper-slide>
    </swiper>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { ref } from "vue";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
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
    return { swiperTextBase };
  },
};
</script>

<style scoped>
section {
  padding-top: 120px;
}
.swiper-slide-next {
  transform: translate(0, -20px);
  transition: 0.6s;
}
.swiper-slide-prev {
  transition: 0.6s;
}
.swiper-slide-active {
  transition: 0.6s;
}

.swiper {
  padding-top: 20px;
  transition: 0.6s;
}
</style>>
