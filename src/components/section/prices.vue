<template>
  <section class="flex">
    <img src="../../../src/assets/bg/prices.jpg" alt="" />
    <div class="prices">
      <h2>ЦІНИ</h2>
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
          id: 1,
          title: "LOVE STORY",
          price: "$800",
        },
      ],
    };
  },
};
</script>

<style scoped>
section {
  padding-top: 120px;
}
img {
  max-width: 50vw;
}
span:nth-last-child(1) {
  font-size: 2rem;
  line-height: 100%;
  font-family: Kiyv;
}
.prices {
  padding: 6rem;
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
