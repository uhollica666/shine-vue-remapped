<template>
  <div>
    <div class="hotel-element mt-5" id="hotels">
      <h4>Our Popular Hotels</h4>
      <p>Best Hotels in Bhutan</p>
    </div>
    <div class="row mb-3">
      <div v-for="hotel in latestHotels()" :key="hotel.id" class="col-md-4 col-lg-4 col-xl-4 col-sm-6 col-xs-12 mt-3">
        <div class="card mt-3">
          <a :href="siteURL + '/hotel/' + hotel.slug" class="hotel-details">
            <div class="card-body">
              <img loading="lazy" :src="apiURL + hotel.file_path" alt="" class="card-img img-fluid" />
              <div class="card-details py-3">
                <h5 class="card-title text-truncate" v-if="!hotel.title">
                  - Name Not Available -
                </h5>
                <h5 class="card-title text-truncate" v-else>
                  {{ hotel.title }}
                </h5>
                <h6 class="card-text my-3">
                  <i class="bi bi-cash-coin mr-1"></i> Nu. {{ hotel.price }} /
                  night
                </h6>
                <div class="details">
                  <div class="location text-truncate">
                    <i class="bi bi-geo-alt"></i>{{ hotel.name }}
                  </div>
                  <h6 class="rating" v-if="!hotel.review_score">
                    <i class="bi bi-star-fill start-icon mx-1"></i>
                    Null
                  </h6>
                  <h6 class="rating" v-else>
                    <i class="bi bi-star-fill start-icon mx-1"></i>
                    {{ hotel.review_score }} / 5
                  </h6>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="d-flex btn-container">
      <button @click="limit = !limit" class="btn mt-5 showButton" :class="{ limit: !limit }">
        Show All
      </button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "HotelsContent",
  // props: ["hotels"],

  async setup() {
    const hotels = ref(null);
    const catSubtitle = "Eastern Bhutan Destinations Now Open";
    const apiURL = "https://booking.shinebhutan.com/uploads/";
    const siteURL = "https://booking.shinebhutan.com";
    const bc_hotels = await fetch(
      "https://booking.shinebhutan.com/api/bc_hotels"
    );
    hotels.value = await bc_hotels.json();

    return {
      apiURL,
      catSubtitle,
      siteURL,
      // eslint-disable-next-line vue/no-dupe-keys
      hotels,
    };
  },
  methods: {
    latestHotels() {
      return this.hotels.sort((a, b) => {
        return b.id - a.id;
      });
    }
  }
};
</script>

<style scoped>
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
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.card-body {
  padding: 0;
}

.card-img {
  width: 100%;
  aspect-ratio: 16/10;
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

.hotel-details {
  text-decoration: none;
  color: #2c3e50;
}

.hotel-details:hover {
  color: #f7941e;
}
</style>
