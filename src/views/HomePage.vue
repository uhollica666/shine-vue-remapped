<template>
  <div>
    <HomeCarousel :navigation="true" :pagination="true" :startAutoPlay="true" :timeOut="5000" class="carousel"
      v-slot="{ currentSlide }">
      <HomeCarouselSlide v-for="(slide, index) in CarouselSlides" :key="index">
        <div v-show="currentSlide === index + 1" class="slide-info">
          <img loading="lazy" :src="`/assets/img/${slide}.jpg`" alt="" class="img-fluid" />
        </div>
      </HomeCarouselSlide>
      <div class="welcome-note text-center">
        <h1>Welcome to Shine!</h1>
        <h5>Experience Eastern Bhutan Like Never Before.</h5>
      </div>
    </HomeCarousel>

    <div class="container">
      <div class="row my-3">
        <NoticeSlider />
      </div>
    </div>

    <div class="container">
      <div class="row my-5">
        <div class="col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-12">
          <HomeSidebar />
        </div>
        <div class="col-md-9 col-xl-9 col-lg-9 col-xs-12 col-sm-12">
          <Suspense>
            <template #default>
              <HomeContent />
            </template>
            <template #fallback>
              <HomeLoader />
            </template>
          </Suspense>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeCarouselSlide from "@/components/HomeCarouselSlide";
import HomeCarousel from "@/components/HomeCarousel";
import HomeSidebar from "@/components/HomeSideBar";
import HomeContent from "@/components/HomeContent";
import HomeLoader from "@/components/common/HomeLoader";
import NoticeSlider from "@/components/NoticeSlider.vue";
export default {
  name: "HomePage",

  setup() {
    const CarouselSlides = [
      "slider1",
      "slider2",
      "slider3",
      "slider4",
      "slider5",
    ];
    return {
      CarouselSlides,
    };
  },
  components: {
    HomeCarouselSlide,
    HomeCarousel,
    HomeSidebar,
    HomeContent,
    HomeLoader,
    NoticeSlider,
},
};
</script>

<style scoped>
.card-body {
  height: 20rem;
}

.carousel {
  position: relative;
  min-height: 300px;
  height: 50vh;
}

.carousel .welcome-note {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
}

.welcome-note H1 {
  font-size: 3rem;
}

.welcome-note h1,
.welcome-note p {
  margin: 0;
  padding: auto;
  overflow: hidden;
}

.slide-info {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  max-height: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.slide-info img {
  min-width: 100%;
  aspect-ratio: 16/10;
  object-fit: cover;
}
</style>
