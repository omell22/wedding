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

<script>
import footerlink1 from "../../../src/assets/imgs/footericon.png";
import footerlink2 from "../../../src/assets/imgs/footericon2.png";
import footerlink3 from "../../../src/assets/imgs/footericon3.png";
export default {
  data() {
    return {
      footer: [
        {
          img: footerlink1,
          link: "",
        },
        {
          img: footerlink2,
          link: "",
        },
        {
          img: footerlink3,
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