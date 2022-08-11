<template>
    <div class="container">
        <div id="carouselExampleInterval" class="carousel slide ad-carousel" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="2000">
                    <a href="#"><img src="@/assets/img/sample1.jpeg" class="d-block w-100" alt="..."></a>
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                    <img src="@/assets/img/sample2.png" class="d-block w-100" alt="...">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AdSlider",
}
</script>

<style>
.ad-carousel{
    height: auto;
}
.carousel-item img{
    border-radius: 5px;
}
</style>