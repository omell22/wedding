<template>
  <div class="container">
    <nav class="flex items-center fixed top-0 z-50">
      <ul>
        <li v-for="{ text, index } in menuItems" :key="index">{{ text }}</li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { id: 1, text: "Портфоліо" },
        { id: 2, text: "Про мене" },
        { id: 3, text: "Ціни" },
      ],
    };
  },
};
</script>

<style scoped>
nav {
  height: 100px;
}
li {
  display: inline-block;
  margin-left: 1rem;
}
</style>