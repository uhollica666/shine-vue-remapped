<template>
  <div v-if="$route.params.slug === 'hotels'">
    <div class="row mt-4">
      <template v-for="accommodation in catFitered">
        <div class="col-md-3 col-lg-3 col-xl-3 col-sm-6 col-xs-6 my-3" v-if="accommodation" :key="accommodation.id">
          <div class="card mt-2">
            <div class="card">
              <RouterLink :to="'/properties/' + accommodation.id + 'where?name=' + accommodation.slug"
                class="accommodation-details">
                <div class="card-body">
                  <img loading="lazy" :src="siteURL + accommodation.file_path" alt="" class="card-img-hotel img-fluid" />

                  <div class="card-details">
                    <h6 class="card-title text-truncate" v-if="!accommodation.title">
                      -Name Not Available-
                    </h6>
                    <h6 class="card-title text-truncate" v-else>
                      {{ accommodation.title }}
                    </h6>
                    <h6 class="card-text my-3">
                      <i class="bi bi-cash-coin mr-1"></i> Nu.
                      {{ accommodation.price }} / night
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
              </RouterLink>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
  <div class="container my-5 text-center" v-else>
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
    const siteURL = "https://booking.shinebhutan.com/uploads/";
    const filterCar = await fetch(
      "https://booking.shinebhutan.com/api/bc_hotels"
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
.card-img-hotel{
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
