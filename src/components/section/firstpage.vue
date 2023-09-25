<template>
  <div class="min-h-screen pt-28 flex flex-col">
    <p class="uppercase container">Весільний</p>
    <p class="uppercase container text-right flex-grow">фотограф</p>
    <button class="">
      <a href="" class="inline-block text-center mainButton"
        >Замовити послугу</a
      >
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  background: url("../../src/assets/bg/Hero.jpg") center/ cover;
}

@screen md {
  p {
    font-size: 12vw;
  }
}
@screen sm {
  p {
    font-size: 12vw;
  }
}
@screen lg {
  p {
    font-size: 10rem;
    line-height: 100%;
  }
}
.mainButton {
  padding: 10px 15px;
  margin-bottom: 20vh;
  border: 1px solid #fff;
  color: #fff;
  font-size: 1.1rem;
}
</style>