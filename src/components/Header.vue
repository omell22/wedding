<template>
  <section>
    <div class="container flex">
      <nav class="flex items-center fixed top-0 z-50 min-w-full">
        <ul>
          <li v-for="{ text, index, href } in menuItems" :key="index">
            <a :href="href">{{ text }}</a>
          </li>
        </ul>
      </nav>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { id: 1, text: "Портфоліо", href: "#porfolio" },
        { id: 2, text: "Про мене", href: "#about" },
        { id: 3, text: "Ціни", href: "#prices" },
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