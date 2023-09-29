<template>
  <section
    class="flex justify-between sm:flex-col-reverse md:flex-row relative"
  >
    <div
      class="contacts mx-auto sm:pt-16 md:pt-18 lg:pt-28 sm:min-w-full md:min-w-min md:px-6"
    >
      <h2
        class="sm:absolute sm:top-24 sm:left-1/2 sm:-translate-x-1/2 sm:text-white md:relative md:text-black md:top-0 md:translate-0 z-10"
      >
        КОНТАКТИ
      </h2>
      <form class="sm:min-w-full">
        <ul class="flex flex-col gap-6">
          <li v-for="{ id, title, placeholder } in inputs" :key="id">
            <span class="block">{{ title }}</span>
            <input type="text" :placeholder="placeholder" />
          </li>
          <li>
            <span>Message</span
            ><textarea
              placeholder="Напишіть своє повідомлення"
              id=""
              cols="30"
              rows="5"
              class="p-4"
            ></textarea>
          </li>
        </ul>
        <div class="sm:text-center md:text-left">
          <buttonorder class="mt-6" />
        </div>
      </form>
    </div>
    <img
      class="sm:min-w-full md:min-w-0 lg:min-w-0 sm:filter brightness-75 lg:brightness-100 sm:max-h-72 md:max-h-full"
      src="../../../src/assets/bg/contacts.jpg"
      alt=""
    />
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
      inputs: [
        {
          id: 1,
          title: "Ім’я",
          placeholder: "Введіть ім’я",
        },
        {
          id: 2,
          title: "Телефон",
          placeholder: "+380",
        },
        {
          id: 3,
          title: "Email",
          placeholder: "Введіть свій email",
        },
      ],
    };
  },
};
</script>

<style scoped>
h2 {
  padding: 0 30px;
}
span {
  font-family: KiyvBold;
}

input {
  background: none;
  position: relative;
  padding: 15px;
}
li {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
li:nth-last-child(1):after {
  display: none;
}
li:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 1px;
  background: #000;
  bottom: 0;
  left: 0;
}

form {
  padding: 25px;
  border: 1px solid #000;
  border-radius: 6px;

  margin: 0 auto;
}
textarea {
  background: none;
  border: 1px solid #000;
  border-radius: 4px;
}
img {
  min-width: 40vw;

  object-fit: cover;
}
h2 {
  text-align: center;
}
</style>