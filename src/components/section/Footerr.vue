<template>
  <div>
    <nav>
      <ul class="text-center flex justify-between items-center">
        <li
          class="inline-block"
          v-for="{ index, img, link } in footer"
          :key="index"
        >
          <a :href="link"><img :src="img" alt="" /></a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
export default {
  data() {
    return {
      footer: [
        {
          img: "../../../src/assets/imgs/footericon.png",
          link: "",
        },
        {
          img: "../../../src/assets/imgs/footericon2.png",
          link: "",
        },
        {
          img: "../../../src/assets/imgs/footericon3.png",
          link: "",
        },
      ],
    };
  },
};
</script>

<style scoped>
img {
  max-width: 35px;
}
ul {
  max-width: 13rem;
  margin: 0 auto;
  min-height: 8rem;
}
</style>