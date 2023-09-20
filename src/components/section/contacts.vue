<template>
  <section class="flex justify-between">
    <div class="contacts mx-auto">
      <h2 class="mb-4">КОНТАКТИ</h2>
      <form>
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
        <buttonorder class="mt-6" />
      </form>
    </div>
    <img src="../../../src/assets/bg/contacts.jpg" alt="" />
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
img {
  max-width: 40vw;
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
.contacts {
  padding-top: 120px;
}
form {
  padding: 25px;
  border: 1px solid #000;
  border-radius: 6px;
}
textarea {
  background: none;
  border: 1px solid #000;
  border-radius: 4px;
}
</style>