<template>
  <section class="relative">
    <div class="relative pl-0 ml-0">
      <img class="" src="../../../src/assets/bg/about.jpg" alt="" />
      <h2 class="container mx-auto">Про мене</h2>
      <div
        class="absolute container flex justify-end right-0 top-1/3 inline-block list-wrapper"
      >
        <ul class="right-0 z-10 list flex flex-col mr-0">
          <li
            v-for="{ num, title, text } in list"
            :key="num"
            class="flex items-start"
          >
            <span class="num">{{ num }}</span>
            <span class="flex flex-col"
              ><span>{{ title }}</span
              ><span class="text">{{ text }}</span></span
            >
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          num: 1,
          title: "МИТТЄВІ ФОТО",
          text: "Ви отримаєте перші фото одразу у день вашого весілля",
        },
        {
          num: 2,
          title: "СУЧАСНА ТЕХНІКА",
          text: "Ми знімаємо на найкращому обладнанні. Для якісної зйомки у русі використовуємо дрон.",
        },
        {
          num: 3,
          title: "ПОСЛУГА 24/7",
          text: "Процес зйомки ваших особливих моментів триватиме до закінчення святкового дня.",
        },
      ],
    };
  },
};
</script>

<style scoped>
img {
  min-width: 90vw;
}
h2 {
  color: #fff;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  top: 3rem;
}
section {
  padding-top: 120px;
}
.list {
  background-color: #f0e2bf;
  border: 1px solid var(--blue-100, #001528);
  align-self: start;
  font-family: KiyvBold;
  max-width: 500px;
  gap: 2rem;
  padding: 40px;
}

li:nth-child(2) {
  margin-left: 20px;
}
.list-wrapper {
  width: 60%;
}
.text {
  font-family: Kiyv;
}
.num {
  font-size: 6rem;
  line-height: 75%;
  align-self: start;
  justify-self: start;
  font-family: Kiyv;
  display: inline-block;
  padding-right: 20px;
  color: var(--grey-50, #777e90);
}
</style>