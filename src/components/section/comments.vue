<template>
  <section class="relative">
    <swiper :space-between="0" :loop="true" :slidesPerView="1" class="pt-5">
      <swiper-slide
        class="pb-9"
        v-for="{ img, index, author, text, insta } in swiperTextBase"
        :key="index"
      >
        <div class="h-wrapper container sm:top-14 sm:absolute text-center">
          <div class="sm:text-center container relative">
            <h2 class="block sm:min-w-full lg:min-w-0">Відгуки</h2>
          </div>
        </div>

        <img :src="img" alt="" class="sm:filter brightness-50" />
        <div
          class="wrapper-comment lg:container lg:absolute z-20 lg:-bottom-0 lg:left-1/2 lg:-translate-x-2/4"
        >
          <div class="flex flex-col gap-8 comment text-center z-200">
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
@screen sm {
  section {
    margin-top: 60px;
  }
  .comment {
    background: #f0e2bf;
    padding: 2rem;
    border: 1px solid #000;
    border-radius: 4px;
    max-width: none;
  }
}
@screen md {
  section {
    margin-top: 80px;
  }
  .comment {
    background: #f0e2bf;
    padding: 2rem;
    border: 1px solid #000;
    border-radius: 4px;
    max-width: none;
  }
}
@screen lg {
  section {
    margin-top: 120px;
  }
  .comment {
    max-width: 30rem;
  }
}
p:nth-child(1) {
  font-family: KiyvBold;
}

h2 {
  /* transform: translate(-20%, 90%); */
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
