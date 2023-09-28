<template>
  <div>
    <nav>
      <ul v-for="{ index, img } in footer" :key="index">
        <li><img :src="img" alt="" /></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      footer: [
        {
          img: "../../../src/assets/imgs/footericon.png",
        },
        {
          img: "../../../src/assets/imgs/footericon.png",
        },
        {
          img: "../../../src/assets/imgs/footericon.png",
        },
      ],
    };
  },
};
</script>

<style>
</style>