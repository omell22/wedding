<template>
  <section class="relative">
    <swiper
      :modules="modules"
      :space-between="0"
      :loop="true"
      navigation
      :slidesPerView="1"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      class="pt-5 comments-swiper"
    >
      <swiper-slide
        class="pb-9"
        v-for="{ img, index, author, text, insta } in swiperTextBase"
        :key="index"
      >
        <div class="relative">
          <h2
            class="block container lg:text-right lg:left-1/2 lg:-translate-x-1/2 sm:text-center sm:top-1/2 sm:-translate-y-1/2 lg:top-0 lg:translate-y-20"
          >
            Відгуки
          </h2>
          <img :src="img" alt="" class="sm:filter brightness-50" />
        </div>

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
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import slide from "../../../src/assets/imgs/fullslide1.jpg";
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
        img: slide,
        author: "АНДРІЙ І НАТАЛЯ",
        text: "Фото просто чудові! Отримали перші знімки, як і обіцяли у день весілля. Дуже задоволені якістю і процесом зйомки. Можемо сміливо рекомендувати цього супер фотографа.",
        insta: "@andrew",
      },
      {
        img: slide,
        author: "АНДРІЙ І НАТАЛЯ",
        text: "Фото просто чудові! Отримали перші знімки, як і обіцяли у день весілля. Дуже задоволені якістю і процесом зйомки. Можемо сміливо рекомендувати цього супер фотографа.",
        insta: "@andrew",
      },
      {
        img: slide,
        author: "АНДРІЙ І НАТАЛЯ",
        text: "Фото просто чудові! Отримали перші знімки, як і обіцяли у день весілля. Дуже задоволені якістю і процесом зйомки. Можемо сміливо рекомендувати цього супер фотографа.",
        insta: "@andrew",
      },
      {
        img: slide,
        author: "АНДРІЙ І НАТАЛЯ",
        text: "Фото просто чудові! Отримали перші знімки, як і обіцяли у день весілля. Дуже задоволені якістю і процесом зйомки. Можемо сміливо рекомендувати цього супер фотографа.",
        insta: "@andrew",
      },
      {
        img: slide,
        author: "АНДРІЙ І НАТАЛЯ",
        text: "Фото просто чудові! Отримали перші знімки, як і обіцяли у день весілля. Дуже задоволені якістю і процесом зйомки. Можемо сміливо рекомендувати цього супер фотографа.",
        insta: "@andrew",
      },
      {
        img: slide,
        author: "АНДРІЙ І НАТАЛЯ",
        text: "Фото просто чудові! Отримали перші знімки, як і обіцяли у день весілля. Дуже задоволені якістю і процесом зйомки. Можемо сміливо рекомендувати цього супер фотографа.",
        insta: "@andrew",
      },
    ]);

    return {
      swiperTextBase,
      // swiperOptions,
      modules: [Navigation, Pagination, A11y],
      onSwiper,
      onSlideChange,
    };
  },
};
</script>

<style scoped>
.swiper {
  padding-bottom: 50px;
}
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
  /* right: 0; */
  position: absolute;
  color: #fff;
}
img {
  min-width: 100%;
  min-height: 50vw;
  object-fit: cover;
}
</style>>
