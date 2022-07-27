<template>
  <div class="container my-5 cont">
    <div class="col-md-12 my-5">
        <h4 class="text-center my-5">Payment Has Been <span class="special"><u>Successfully</u></span> Processed. Your Order is under review. You will be timely updated on the status of your order via e-mail.</h4>
        <RouterLink to="/" class="d-flex">
            <button class="btn home-btn"><i class="bi bi-chevron-left"></i> Return to Home</button>
        </RouterLink>
    </div>
  </div>
</template>

<script>
export default {
    name: "PaymentSuccessful",
};
</script>

<style scoped>
.special {
    color: #f7941e;
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