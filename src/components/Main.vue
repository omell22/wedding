<template>
  <firstpage />
  <portfolio />
  <about />
  <comments />
  <prices />
  <contacts />
</template>

<script>
import firstpage from "./section/firstpage.vue";
import about from "./section/about.vue";
import portfolio from "./section/porfolio.vue";
import prices from "./section/prices.vue";
import contacts from "./section/contacts.vue";
import comments from "./section/comments.vue";

export default {
  components: {
    firstpage,
    about,
    portfolio,
    comments,
    prices,
    contacts,
  },
};
</script>

<style>
.swiper-pagination-bullet-active {
  border-radius: 50%;
  border: 1px solid #000;
}
.swiper-button-next:after,
.swiper-button-prev:after {
  z-index: 1000;
  color: #000;
  font-weight: bold;
}
.swiper-button-next,
.swiper-button-prev {
  position: fixed;

  z-index: 1000;
}
.swiper-wrapper {
  padding-top: 30px;
}
.swiper-pagination-bullet {
  height: 20px;
  width: 20px;

  padding: 16px;
  background: none;
  position: relative;
}

.swiper-pagination-bullet:after {
  content: "";
  position: absolute;
  height: 8px;
  width: 8px;
  top: 50%;
  left: 50%;
  background: #000;
  transform: translate(-50%, -50%);
  border-radius: 50%;
}
@screen md {
  .swiper-slide-next.portfolio-slide {
    transition: 1s;
    transform: translate(0, -20px) scale(1.05);
    z-index: 100;

    border-radius: 5px;
    overflow: hidden;
  }
}

.swiper-slide.portfolio-slide {
  transition: 1s;
}
.swiper.portfolio {
  width: 95%;
}
</style>