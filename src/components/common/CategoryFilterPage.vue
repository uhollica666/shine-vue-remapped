<template>
  <div v-if="$route.params.slug === 'hotels'">
    <div class="row mt-4">
      <template v-for="accommodation in hotelFitered">
        <div class="col-md-4 col-lg-4 col-xl-4 col-sm-6 col-xs-6 my-3" v-if="accommodation" :key="accommodation.id">
          <div class="card mt-2">
            <div class="card">
              <a :href=" bookingURL + '/hotel/' + accommodation.slug" class="accommodation-details">
                <div class="card-body">
                  <img loading="lazy" :src="siteURL + accommodation.file_path" alt="" class="card-img-hotel img-fluid" />

                  <div class="card-details text-capitalize">
                    <h5 class="card-title text-truncate my-3" v-if="!accommodation.title">
                      -Name Not Available-
                    </h5>
                    <h5 class="card-title text-truncate my-3" v-else>
                      {{ accommodation.title }}
                    </h5>

                    <h6 class="col-md-6 text-success" v-if="accommodation.is_featured">
                      <i class="bi bi-patch-check-fill"></i> FEATURED
                    </h6>
                    <h6 class="col-md-6 text-warning" v-else>
                      <i class="bi bi-patch-exclamation-fill"></i> Not Featured
                    </h6>

                    <h6 class="card-text my-3">
                      <i class="bi bi-cash-coin mr-1"></i> Nu.
                      {{ accommodation.price }} / Night
                    </h6>
                    <div class="details">
                      <div class="location text-truncate">
                        <i class="bi bi-geo-alt"></i>{{ accommodation.name }}
                      </div>
                      <h6 class="rating" v-if="!accommodation.review_score">
                        <i class="bi bi-star-fill start-icon mx-1"></i>
                        No Rating
                      </h6>
                      <h6 class="rating" v-else>
                        <i class="bi bi-star-fill start-icon mx-1"></i>
                        {{ accommodation.review_score }} / 5
                      </h6>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>

  <div class="container my-5" v-else-if="
      $route.params.slug === 'vhs-village-home-stay' ||
      $route.params.slug === 'guest-house' ||
      $route.params.slug === 'eco-lodge'
    ">
    <div class="row my-4 ">
      <div class="hahahaha text-capitalize+">These are all the Available Accommodations under <span class="text-danger">{{
                $route.params.slug }}</span> </div>
      <template v-for="space in spaceFiltered">
        <div class="col-md-4 col-lg-4 col-xl-4 col-sm-6 col-xs-6 my-3" v-if="space" :key="space.id">
          <div class="card mt-2">
            <div class="card">
              <a :href="bookingURL + '/space/' + space.slug" class="accommodation-details">
                <div class="card-body">
                  <img loading="lazy" :src="siteURL + space.file_path" alt="" class="card-img-hotel img-fluid" />
                  <div class="card-details text-capitalize">
                    <h5 class="card-title text-truncate my-3" v-if="!space.title">
                      -Name Not Available-
                    </h5>
                    <h5 class="card-title text-truncate my-3" v-else>
                      {{ space.title }}
                    </h5>
                    <h6 class="col-md-6 text-success" v-if="space.is_featured !== null">
                      <i class="bi bi-patch-check-fill"></i> FEATURED
                    </h6>
                    <h6 class="col-md-6 text-warning" v-else>
                      <i class="bi bi-patch-exclamation-fill"></i> Not Featured
                    </h6>
                    <h6 class="card-text my-2" v-if="space.sale_price !== null">
                      <i class="bi bi-cash-coin mr-1"></i>Nu.
                      {{ space.sale_price }} / Night <s class="text-secondary">Nu. {{ space.price }}</s>
                    </h6>
                    <h6 class="card-text my-2" v-else>
                      <i class="bi bi-cash-coin mr-1"></i>Nu.
                      {{ space.price }} / Night
                    </h6>
                    <div class="details">
                      <div class="location text-truncate" v-if="space.name">
                        <i class="bi bi-geo-alt"></i>{{ space.name }}
                      </div>
                      <div class="location text-truncate text-secondary" v-else>
                        <i class="bi bi-geo-alt"></i>Location NA
                      </div>
                      <h6 class="rating" v-if="!space.review_score">
                        <i class="bi bi-star-fill start-icon mx-1"></i>
                        No Rating
                      </h6>
                      <h6 class="rating" v-else>
                        <i class="bi bi-star-fill start-icon mx-1"></i>
                        {{ space.review_score }} / 5
                      </h6>
                    </div>
                    <div class="text-secondary mb-2 text-uppercase">
                      <i class="bi bi-tags"></i> {{ $route.params.slug }}
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>

  <div class="container my-5" v-else>
    <div class="row my-4">
      <template v-for="tour in tourFiltered">
        <div class="col-md-4 col-lg-4 col-xl-4 col-sm-6 col-xs-6 my-3" v-if="tour" :key="tour.id">
          <div class="card mt-2">
            <div class="card">
              <a :href=" bookingURL + '/tour/' + tour.slug" class="accommodation-details">
                <div class="card-body">
                  <img loading="lazy" :src="siteURL + tour.file_path" alt="" class="card-img-hotel img-fluid" />
                  <div class="card-details">
                    <h5 class="card-title text-truncate my-3" v-if="!tour.title">
                      -Name Not Available-
                    </h5>
                    <h5 class="card-title text-truncate my-3 text-capitalize" v-else>
                      {{ tour.title }}
                    </h5>
                    <h6 class="col-md-6 text-success" v-if="tour.is_featured">
                      <i class="bi bi-patch-check-fill"></i> FEATURED
                    </h6>
                    <h6 class="col-md-6 text-warning" v-else>
                      <i class="bi bi-patch-exclamation-fill"></i> Not Featured
                    </h6>
                    <h6 class="card-text my-3" v-if="tour.sale_price">
                      <i class="bi bi-cash-coin mr-1"></i> Nu.
                      {{ tour.sale_price }} / Trip <s class="text-secondary">
                        <span class="spacer">ha</span>Nu. {{ tour.price }}
                      </s>
                    </h6>
                    <h6 class="card-text my-3 text-secondary" v-else-if="!tour.price">
                      <i class="bi bi-cash-coin mr-1"></i>Tour Price: <span class="text-danger">Not Available</span>
                    </h6>
                    <h6 class="card-text my-3" v-else>
                      <i class="bi bi-cash-coin mr-1"></i> Nu.
                      {{ tour.price }} / Trip
                    </h6>
                    <div class="text-turncate mb-3" v-if="tour.date_form_to">
                      <i class="bi bi-clock-history"></i>Duration: {{ tour.date_form_to }}
                    </div>
                    <div class="text-turncate mb-3" v-else>
                      <i class="bi bi-clock-history"></i>Duration: <span class="text-danger">Not Available</span>
                    </div>
                    <div class="details">
                      <div class="location text-truncate">
                        <i class="bi bi-geo-alt"></i>{{ tour.name }}
                      </div>
                      <h6 class="rating text-danger" v-if="!tour.review_score">
                        <i class="bi bi-star-fill start-icon mx-1"></i>
                        No Rating
                      </h6>
                      <h6 class="rating" v-else>
                        <i class="bi bi-star-fill start-icon mx-1"></i>
                        {{ tour.review_score }} / 5
                      </h6>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRoute } from "vue-router";
export default {
  name: "CategoryFilterPage",

  async setup() {
    const hotelFitered = ref(null);
    const spaceFiltered = ref(null);
    const tourFiltered = ref(null);
    const route = useRoute();
    const routeId = route.params.slug;
    const siteURL = "https://booking.shinenbuy.com/uploads/";

    if (routeId === 'hotels') {
      const filterCar = await fetch(
        "https://booking.shinenbuy.com/api/bc_hotels"
      );
      hotelFitered.value = await filterCar.json();
    }

    if (routeId === 'vhs-village-home-stay' ||
      routeId === 'guest-house' ||
      routeId === 'eco-lodge') {
      const spaceCategory = await fetch(
        `https://booking.shinenbuy.com/api/space_types?name=${routeId}`
      );
      spaceFiltered.value = await spaceCategory.json();
    } else {
      const tourCategory = await fetch(
        `https://booking.shinenbuy.com/api/tour_types?name=${routeId}`
      );
      tourFiltered.value = await tourCategory.json();
    }

    const bookingURL = "https://booking.shinenbuy.com";

    return {
      hotelFitered,
      spaceFiltered,
      tourFiltered,
      siteURL,
      bookingURL,
    };
  },
};
</script>

<style scoped>
.hahahaha,
.hahahaha * {
  font-size: 1.8rem !important;
}

img {
  width: 100%;
  aspect-ratio: 16/12 !important;
  object-fit: cover;
}

.spacer {
  opacity: 0;
}

.txty {
  font-size: 1.7rem;
  color: #333369;
}

.card-img-hotel {
  width: 100%;
  aspect-ratio: 16/10;
  margin: 0;
  object-fit: cover;
  border-radius: 5px;
}

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
