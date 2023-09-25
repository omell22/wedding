<template>
  <section>
    <div class="container relative">
      <h2>Відгуки</h2>
    </div>

    <swiper :space-between="0" :loop="true" :slidesPerView="1" class="pt-5">
      <swiper-slide
        class="pb-9"
        v-for="{ img, index, author, text, insta } in swiperTextBase"
        :key="index"
      >
        <img :src="img" alt="" />
        <div
          class="wrapper-comment container absolute z-20 -bottom-0 min-w-full"
        >
          <div class="flex flex-col gap-8 comment text-center z-200 w-2/5">
            <p class="text-lg">{{ author }}</p>
            <p class="text-left">{{ text }}</p>
            <p>{{ insta }}</p>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"></div>
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
        author: "АНДРІЙ І НАТАЛЯ",
        text: "Фото просто чудові! Отримали перші знімки, як і обіцяли у день весілля. Дуже задоволені якістю і процесом зйомки. Можемо сміливо рекомендувати цього супер фотографа.",
        insta: "@andrew",
      },
      {
        img: "../../../src/assets/imgs/fullslide1.jpg",
        author: "АНДРІЙ І НАТАЛЯ",
        text: "Фото просто чудові! Отримали перші знімки, як і обіцяли у день весілля. Дуже задоволені якістю і процесом зйомки. Можемо сміливо рекомендувати цього супер фотографа.",
        insta: "@andrew",
      },
      {
        img: "../../../src/assets/imgs/fullslide1.jpg",
        author: "АНДРІЙ І НАТАЛЯ",
        text: "Фото просто чудові! Отримали перші знімки, як і обіцяли у день весілля. Дуже задоволені якістю і процесом зйомки. Можемо сміливо рекомендувати цього супер фотографа.",
        insta: "@andrew",
      },
      {
        img: "../../../src/assets/imgs/fullslide1.jpg",
        author: "АНДРІЙ І НАТАЛЯ",
        text: "Фото просто чудові! Отримали перші знімки, як і обіцяли у день весілля. Дуже задоволені якістю і процесом зйомки. Можемо сміливо рекомендувати цього супер фотографа.",
        insta: "@andrew",
      },
      {
        img: "../../../src/assets/imgs/fullslide1.jpg",
        author: "АНДРІЙ І НАТАЛЯ",
        text: "Фото просто чудові! Отримали перші знімки, як і обіцяли у день весілля. Дуже задоволені якістю і процесом зйомки. Можемо сміливо рекомендувати цього супер фотографа.",
        insta: "@andrew",
      },
      {
        img: "../../../src/assets/imgs/fullslide1.jpg",
        author: "АНДРІЙ І НАТАЛЯ",
        text: "Фото просто чудові! Отримали перші знімки, як і обіцяли у день весілля. Дуже задоволені якістю і процесом зйомки. Можемо сміливо рекомендувати цього супер фотографа.",
        insta: "@andrew",
      },
    ]);
    const swiperOptions = {
      spaceBetween: 0,
      loop: true,
      slidesPerView: 1,
      pagination: {
        el: ".swiper-pagination", // CSS селектор для вставки пагінації
      },
    };
    return { swiperTextBase, swiperOptions };
  },
};
</script>

<style scoped>
p:nth-child(1) {
  font-family: KiyvBold;
}
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
.comment {
  background: #f0e2bf;
  padding: 3rem;
  border: 1px solid #000;
  border-radius: 4px;
}
</style>>
