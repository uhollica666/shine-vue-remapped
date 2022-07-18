<template>
  <div class="container my-5 text-center">
    <h4 class="heading">
      Page
      <span class="text-capitalize text-larger">{{ $route.params.slug }}</span>
      does not exist
    </h4>
    <p>
      This Page has been recalled because of a technical error. <br />It will be
      updated and reloaded very soon. Kindly keep testing other pages.
    </p>
    <button class="btn backBtn" @click="goBack()">
      <i class="bi bi-caret-left"></i>Go Back
    </button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "CategoryFilterPage",

  async setup() {
    const catFitered = ref(null);
    const siteURL = "https://booking.shinebhutan.com/";
    const filterCar = await fetch(
      "https://booking.shinebhutan.com/api/bc_spaces"
    );
    catFitered.value = await filterCar.json();
    return {
      catFitered,
      siteURL,
    };
  },
  methods: {
    goBack() {
      window.history.back();
    },
  },
};
</script>

<style scoped>
.text-larger {
  color: #333369;
  font-size: 1.5rem;
  text-decoration: underline;
}
.heading {
  color: #f7941e;
}
.backBtn {
  background-color: #f7941e;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 10rem;
  cursor: pointer;
}
</style>
