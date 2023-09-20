<template>
  <firstpage />
  <!-- <portfolio /> -->
  <about />
  <prices />
  <contacts />
</template>

<script>
import firstpage from "./section/firstpage.vue";
import about from "./section/about.vue";
// import portfolio from "./section/porfolio.vue";
import prices from "./section/prices.vue";
import contacts from "./section/contacts.vue";
export default {
  components: {
    firstpage,
    about,
    //  portfolio,
    prices,
    contacts,
  },
};
</script>

<style>
</style>