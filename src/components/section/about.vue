<template>
  <section class="relative sm:mt-10">
    <div class="wrapper relative section-wrapper sm:hidden lg:block">
      <div class="container">
        <h2 class="sm:text-center lg:text-left">Про мене</h2>

        <div class="list-wrapper absolute flex justify-end container">
          <ul class="z-10 list flex flex-col mr-0">
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
    </div>

    <img
      src="../../../src/assets/bg/about.jpg"
      class="lg:hidden md:block sm:block"
      alt=""
    />
    <h2
      class="sm:text-center lg:text-left absolute top-12 left-1/2 -translate-x-2/4 lg:hidden md:block sm:block"
    >
      Про мене
    </h2>
    <div class="list-wrapper justify-end hidden lg:hidden sm:flex md:flex">
      <ul class="right-0 z-10 list flex flex-col mr-0">
        <li
          v-for="{ num, title, text } in list"
          :key="num"
          class="flex items-start"
        >
          <span class="num sm:text-6xl md:text-7xl lg:text-8xl">{{ num }}</span>
          <span class="flex flex-col"
            ><span>{{ title }}</span
            ><span class="text">{{ text }}</span></span
          >
        </li>
      </ul>
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
h2 {
  color: #fff;
  line-height: 150%;
  z-index: 40;
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

@screen sm {
  li:nth-child(2) {
    margin-left: 0;
  }
}
@screen md {
  li:nth-child(2) {
    margin-left: 20px;
  }
}
.list-wrapper {
  bottom: -4rem;
  width: 100%;
  right: 0;
  left: 0;
}
.text {
  font-family: Kiyv;
}
.num {
  /* font-size: 6rem; */
  line-height: 75%;
  align-self: start;
  justify-self: start;
  font-family: Kiyv;
  display: inline-block;
  padding-right: 20px;
  color: var(--grey-50, #777e90);
}
.section-wrapper {
  min-height: 80vh;
  background-origin: content-box;
  background: url("../../../src/assets/bg/about.jpg") center/ cover;
}
@screen sm {
  .section-wrapper {
    min-width: 100vw;
    min-height: none;
  }
}
</style>