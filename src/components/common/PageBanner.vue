<template>
  <div class="banner">
    <div class="row mt-5">
      <div class="col-md-12">
        <div class="banner-style banner-content-accommodation" v-if="$route.name === 'Accommodations'">
          <div class="banner-text">
            <h1>
              <span class="text-uppercase"> {{ $route.name }} </span>
            </h1>
            <p>{{ subTitleAccommodation }}</p>
          </div>
        </div>

        <div class="banner-style banner-content-tours" v-else-if="$route.name === 'Tours'">
          <div class="banner-text">
            <h1>
              <span class="text-uppercase"> {{ $route.name }} </span>
            </h1>
            <p>{{ subTitleTours }}</p>
          </div>
        </div>

        <div class="banner-style banner-content-agriproducts" v-else-if="$route.name === 'Agriproducts'">
          <div class="banner-text">
            <h1>
              <span class="text-uppercase"> {{ $route.name }} </span>
            </h1>
            <p>{{ subTitleTours }}</p>
          </div>
        </div>

        <div class="banner-style banner-content-handicrafts" v-if="$route.name === 'Handicrafts'">
          <div class="banner-text">
            <h1>
              <span class="text-uppercase"> {{ $route.name }} </span>
            </h1>
            <p>{{ subTitleTours }}</p>
          </div>
        </div>

        <div class="banner-style banner-content-dagana" v-if="$route.params.location_id === 'Dagana'">
          <div class="banner-text">
            <h1>
              <span class="text-uppercase">
                {{ $route.params.location_id }}
              </span>
            </h1>
            <p>{{ subTitleTours }}</p>
          </div>
        </div>

        <div class="banner-style banner-content-lhuentse" v-if="$route.params.location_id === 'Lhuentse'">
          <div class="banner-text">
            <h1>
              <span class="text-uppercase">
                {{ $route.params.location_id }}
              </span>
            </h1>
            <p>{{ subTitleTours }}</p>
          </div>
        </div>

        <div class="banner-style banner-content-mongar" v-if="$route.params.location_id === 'Mongar'">
          <div class="banner-text">
            <h1>
              <span class="text-uppercase">
                {{ $route.params.location_id }}
              </span>
            </h1>
            <p>{{ subTitleTours }}</p>
          </div>
        </div>

        <div class="banner-style banner-content-pemagatshel" v-if="$route.params.location_id === 'Pemagatshel'">
          <div class="banner-text">
            <h1>
              <span class="text-uppercase">
                {{ $route.params.location_id }}
              </span>
            </h1>
            <p>{{ subTitleTours }}</p>
          </div>
        </div>

        <div class="banner-style banner-content-tashiyangtse" v-if="$route.params.location_id === 'Tashiyangtse'">
          <div class="banner-text">
            <h1>
              <span class="text-uppercase">
                {{ $route.params.location_id }}
              </span>
            </h1>
            <p>{{ subTitleTours }}</p>
          </div>
        </div>

        <div class="banner-style banner-content-trashigang" v-if="$route.params.location_id === 'Trashigang'">
          <div class="banner-text">
            <h1>
              <span class="text-uppercase">
                {{ $route.params.location_id }}
              </span>
            </h1>
            <p>{{ subTitleTours }}</p>
          </div>
        </div>

        <div class="banner-style banner-content-zhemgang" v-if="$route.params.location_id === 'Zhemgang'">
          <div class="banner-text">
            <h1>
              <span class="text-uppercase">
                {{ $route.params.location_id }}
              </span>
            </h1>
            <p>{{ subTitleTours }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageBanner",
  setup() {
    const subTitleAccommodation = "The best places to stay in Bhutan";
    const subTitleTours = "The Best Bhutan Experience";
    return {
      subTitleAccommodation,
      subTitleTours,
    };
  },
};
</script>

<style scoped>
.banner-style {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 350px;
  display: flex;
  position: relative;
  border-radius: 5px;
  transition: 0.3s all ease-in-out;
}

.banner-content-tours {
  background-image: url(@/assets/img/tourpackage.jpg);
}

.banner-content-accommodation {
  background-image: url(@/assets/img/accommodation.jpg);
}

.banner-content-handicrafts {
  background-image: url(@/assets/img/handicrafts.jpg);
}

.banner-content-agriproducts {
  background-image: url(@/assets/img/agriproducts.jpg);
}

.banner-content-dagana {
  background-image: url(@/assets/img/dagana.jpg);
}

.banner-content-lhuentse {
  background-image: url(@/assets/img/lhuentse.jpg);
}

.banner-content-mongar {
  background-image: url(@/assets/img/mongar.jpg);
}

.banner-content-pemagatshel {
  background-image: url(@/assets/img/pemagatshel.jpg);
}

.banner-content-tashiyangtse {
  background-image: url(@/assets/img/tashiyangtse.jpg);
}

.banner-content-trashigang {
  background-image: url(@/assets/img/trashigang.jpg);
}

.banner-content-zhemgang {
  background-image: url(@/assets/img/zhemgang.jpg);
}

.banner-style:hover {
  filter: brightness(0.8);
}

.banner-text {
  position: absolute;
  bottom: 10%;
  color: #fff;
  padding-left: 2rem;
  padding-bottom: 1rem;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
  width: 100%;
}
</style>
