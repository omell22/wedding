<template>
  <firstpage />
  <portfolio />
  <about />
  <comments />
  <prices />
  <contacts />
  <Footerr />
</template>

<script>
import firstpage from "./section/firstpage.vue";
import about from "./section/about.vue";
import portfolio from "./section/porfolio.vue";
import prices from "./section/prices.vue";
import contacts from "./section/contacts.vue";
import comments from "./section/comments.vue";
import Footerr from "./section/Footerr.vue";
export default {
  components: {
    firstpage,
    about,
    portfolio,
    comments,
    prices,
    contacts,
    Footerr,
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
/* .swiper-button-next,
.swiper-button-prev {
  position: fixed;

  z-index: 1000;
} */
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
@screen sm {
  .swiper-button-next,
  .swiper-button-prev {
    position: fixed;
    top: 100%;
    z-index: 1000;
  }
  .swiper-button-next {
    right: 35%;
    margin-top: 20px;
  }
  .swiper-button-prev {
    left: 35%;
    margin-top: 20px;
  }
  .comments-swiper > .swiper-button-next,
  .comments-swiper > .swiper-button-prev {
    position: absolute;
    top: 93%;
    z-index: 1000;
  }
  .comments-swiper > .swiper-button-next {
    right: 50px;
    margin-top: 0px;
  }
  .comments-swiper > .swiper-button-prev {
    right: 5%;
    left: calc(100% - 180px);
    margin-top: 0px;
  }
  .comments-swiper > .swiper-button-next:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 150%;
    background: #000;
    height: 5px;
    border-radius: 15px;
    transform: translate(-40%, -50%);
    z-index: 1000;
  }
  .comments-swiper > .swiper-button-prev:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 150%;
    background: #000;
    height: 5px;
    border-radius: 15px;
    transform: translate(5%, -50%);
    z-index: 1000;
  }
}
@screen md {
  .swiper-slide-next.portfolio-slide {
    transition: 1s;
    transform: translate(0, -20px) scale(1.05);
    z-index: 100;
    border-radius: 5px;
    overflow: hidden;
  }
  .swiper-button-next,
  .swiper-button-prev {
    position: fixed;
    top: 50%;
    z-index: 1000;
  }
  .swiper-button-next {
    right: 15px;
    margin-top: 0;
  }
  .swiper-button-prev {
    left: 15px;
    margin-top: 0;
  }
  .comments-swiper > .swiper-button-next {
    right: calc((100vw - 1280px) / 2);
    margin-top: 0px;
  }
  .comments-swiper > .swiper-button-prev {
    right: 5%;
    left: calc((100vw - 1280px) / 2 + 1130px);
    margin-top: 0px;
  }
}

.swiper-slide.portfolio-slide {
  transition: 1s;
}
.swiper.portfolio {
  width: 95%;
}
</style>