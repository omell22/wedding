<template>
  <section>
    <div class="container relative">
      <h2>Відгуки</h2>
    </div>

    <swiper :space-between="0" :loop="true" :slidesPerView="1" class="pt-5">
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
        img: "../../../src/assets/imgs/fullslide1.jpg",
      },
      {
        img: "../../../src/assets/imgs/fullslide1.jpg",
      },
      {
        img: "../../../src/assets/imgs/fullslide1.jpg",
      },
      {
        img: "../../../src/assets/imgs/fullslide1.jpg",
      },
      {
        img: "../../../src/assets/imgs/fullslide1.jpg",
      },
      {
        img: "../../../src/assets/imgs/fullslide1.jpg",
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
h2 {
  transform: translate(-20%, 90%);
  line-height: 100%;
  z-index: 100;
  right: 0;
  position: absolute;
  color: #fff;
}
img {
  min-width: 100%;
}
</style>>
