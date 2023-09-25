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
.swiper-wrapper {
  padding-top: 20px;
}
.swiper-pagination-bullet {
  height: 20px;
  width: 20px;

  padding: 16px;
  background: none;
  position: relative;
}
.swiper-pagination-bullet-active {
  border: 1px solid #000;
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
.swiper-slide-next {
  transition: 1s;
  top: -20px;
  z-index: 100;
  margin: 0 -10px;
  border-radius: 5px;
  overflow: hidden;
}
</style>