<template>
  <Header />
  <Main />
  <Footer />
</template>

<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Footer from "./components/section/footer.vue";

export default {
  components: {
    Header,
    Main,
    Footer,
  },
};
</script>

<style>
</style>