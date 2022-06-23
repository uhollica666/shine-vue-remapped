<template>
  <div>
    <div class="accommodation-element mt-5">
      <h4>Our Popular Accommodations</h4>
      <p>Best places to stay in Bhutan</p>
    </div>
    <button class="btn showButton my-2" :disabled="pending" @click="refresh">
      get latest data
    </button>
    <div class="row mb-3">
      <div v-for="accommodation in accommodations" :key="accommodation.id"
        class="col-md-4 col-lg-3 col-xl-3 col-sm-6 col-xs-12 mt-3">
        <div class="card mt-3">
          <div class="card-body">
            <img :src="apiURL + accommodation.file_path" alt="" class="card-img" />
            <RouterLink :to="siteURL + '/accomodation/' + accommodation.slug" class="accommodation-details">
              <div class="card-details">
                <h6 class="card-title text-truncate">
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
                  <h6 class="rating">
                    <i class="bi bi-star-fill start-icon mx-1"></i>
                    {{ accommodation.review_score }} / 5
                  </h6>
                </div>
              </div>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex btn-container">
      <!-- <button @click="limit = !limit" class="btn mt-5 showButton" :class="{limit : !limit}">
      Show All
    </button> -->
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: "AccommodationContent",
  props: ["accommodations"],

  // data() {
  //   return {
  //     limit: 8,
  //   };
  // },
  // computed: {
  //   computedObject() {
  //     return this.limit
  //       ? this.accommodations.slice(0, this.limit)
  //       : this.accommodations;
  //   },
  // },

  async setup() {
    const accommodations = ref(null);
    const catSubtitle = "Eastern Bhutan Destinations Now Open";
    const apiURL = "http://shine.test/uploads/";
    const siteURL = "http://shine.test/";
    const spaces = await fetch("http://shine.test/api/bc_spaces");
    accommodations.value = await spaces.json();

    return {
      /* eslint-disable */
      accommodations,
      apiURL,
      catSubtitle,
      siteURL,
    };
  },
};
</script>

<style scoped>
i.bi {
  margin-right: 0.5rem;
}

.btn-container {
  justify-content: flex-end;
}

button.limit {
  display: none;
}

.showButton {
  max-width: 100%;
  background: #f7941e;
  color: #fff;
  border: none;
  padding: 0.5rem 2rem;
}

.start-icon {
  color: #f7941e;
  padding: 2px;
  padding-bottom: 5px;
}

.rating {
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.26);
}

.card-body {
  padding: 0;
}

.card-img {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.card-details {
  padding: 0.5rem 1rem;
}

.details {
  display: flex;
}

.location {
  width: 60%;
}

.price {
  text-align: right;
}

.accommodation-details {
  text-decoration: none;
  color: #2c3e50;
}

.accommodation-details:hover {
  color: #f7941e;
}
</style>