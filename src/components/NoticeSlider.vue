<template>
  <div class="container notice-mobile">
    <div id="carouselExampleInterval" class="carousel slide my-carousel" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="2000">
          <a href="https://shine.grat.at"><img src="@/assets/img/sample1.jpeg" class="d-block w-100" alt="" /></a>
        </div>
        <!-- <div class="carousel-item" data-bs-interval="2000">
          <img src="@/assets/img/sample2.png" class="d-block w-100" alt="..." />
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NoticeSlider",
};
</script>

<style>
.my-carousel {
  height: auto;
}

.carousel-item img {
  border-radius: 5px;
}
@media screen and (max-width: 768px) {
  .notice-mobile {
    display: none;
  }
  
}
</style>
