<template>
  <div class="container text-center my-5">
    <img src="@/assets/img/404.png" alt="">
    <h3 class="my-5">Hmmm... Something is missing</h3>
    <button class="btn back-btn mx-auto" @click="goBack" type="button">Go Back</button>
  </div>
</template>

<script>
export default {
  name: "NotFound",
  methods: {
    goBack() {
      this.$router.push('/');
    }
  },
}
</script>

<style scoped>
.back-btn{
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50rem;
  padding: 0.5rem 2rem;
  background-color: #f7941e;
  color: #fff;
}
</style>