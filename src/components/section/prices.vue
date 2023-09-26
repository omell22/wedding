<template>
  <section
    class="flex mt-7 sm:flex-col md:flex-row relative sm:pt-14 md:pt-16 lg:pt-28"
  >
    <img
      src="../../../src/assets/bg/prices.jpg"
      class="sm:min-w-full md:min-w-0 lg:min-w-0 sm:filter brightness-75 lg:brightness-100 sm:max-h-72 md:max-h-full"
      alt=""
    />
    <div class="prices sm:px-0 md:px-20">
      <h2
        class="sm:absolute sm:top-1/4 sm:left-1/2 sm:-translate-x-1/2 sm:text-white md:relative md:text-black md:top-0 md:translate-0"
      >
        ЦІНИ
      </h2>
      <ul class="text-center">
        <li v-for="{ price, title, id } in prices" :key="id">
          <span>{{ title }}</span> <span>{{ price }}</span>
        </li>
        <buttonorder class="mx-auto mt-8" />
      </ul>
    </div>
  </section>
</template>

<script>
import buttonorder from "../ui/button.vue";
export default {
  components: {
    buttonorder,
  },
  data() {
    return {
      prices: [
        {
          id: 1,
          title: "WEDDING",
          price: "$1000",
        },
        {
          id: 2,
          title: "LOVE STORY",
          price: "$800",
        },
      ],
    };
  },
};
</script>

<style scoped>
img {
  width: 50vw;

  object-fit: cover;
}
span:nth-last-child(1) {
  font-size: 2rem;
  line-height: 100%;
  font-family: Kiyv;
}
.prices {
  flex-grow: 1;
}
ul {
  border: 1px solid #000;
  padding: 40px 20px;
}
li {
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  font-family: KiyvBold;
}
li:after {
  content: "";
  background-color: #000;
  width: 100%;
  position: absolute;
  bottom: -5px;
  left: 0;
  height: 1px;
}
</style>>
