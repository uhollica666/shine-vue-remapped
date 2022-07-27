<template>
  <div class="container my-5 cont">
    <div class="col-md-12 my-5">
        <h4 class="text-center my-5">Payment <span class="special"><u>Failed</u></span> with unknown reason. Please try again.</h4>
        <RouterLink to="" class="d-flex" @click="returnToPrev()">
            <button class="btn home-btn"><i class="bi bi-chevron-left"></i> Return to Home</button>
        </RouterLink>
    </div>
  </div>
</template>

<script>
export default {
    name: "PaymentFailed",
    methods: {
        //return to the previous page
        returnToPrev() {
            window.history.back();
        }
    }
};
</script>

<style scoped>
.special {
    color:rgb(219, 66, 66);
}
.special u{
    font-size: 1.5rem;
}
.home-btn{
    background-color: #f7941e;
    color: #fff;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 20rem;
    cursor: pointer;
    margin: 0 auto;
}
.cont{
    background: #fff;
    border-radius: 10px;
    padding: 2rem;
}

</style>