<template>
  <div>
    <div class="accommodation-element mt-5">
      <h4>Explore Our Popular Tours</h4>
      <p class="mt-3">Discover the Eastern Bhutan</p>
    </div>
    <div class="row mb-3">
      <div v-for="tour in tours" :key="tour.id" class="col-md-4 col-lg-3 col-xl-3 col-sm-6 col-xs-12 mt-2">
        <div class="card mt-2">
          <RouterLink :to="'/tour/' + tour.id + 'where?name=' + tour.slug" class="accommodation-details">
            <div class="card-body">
              <img loading="lazy" :src="apiURL + tour.file_path" alt="" class="card-img img-fluid" />

              <div class="card-details">
                <h6 class="card-title text-truncate">
                  {{ tour.title }}
                </h6>
                <h6 class="card-text my-3" v-if="!tour.price">
                  <i class="bi bi-cash-coin mr-1"></i> Rate Not Available
                </h6>
                <h6 class="card-text my-3" v-else>
                  <i class="bi bi-cash-coin mr-1"></i> Nu. {{ tour.price }} /
                  trip
                </h6>
                <div class="location-tours text-truncate mb-2">
                  <i class="bi bi-geo-alt"></i>{{ tour.name }}
                </div>
                <div class="duration-tours text-truncate" v-if="!tour.date_form_to">
                  <i class="bi bi-stopwatch"></i>
                  Duration Not Available
                </div>
                <div class="duration-tours text-truncate" v-else>
                  <i class="bi bi-stopwatch"></i>
                  {{ tour.date_form_to }}
                </div>
              </div>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "ToursContent",
  props: ["tours"],

  data() {
    return {
      limit: 8,
    };
  },
  computed: {
    computedObject() {
      return this.limit ? this.tours.slice(0, this.limit) : this.tours;
    },
  },
  async setup() {
    const tours = ref(null);
    const catSubtitle = "Eastern Bhutan Destinations Now Open";
    const apiURL = "https://booking.shinebhutan.com/uploads/";
    const siteURL = "https://booking.shinebhutan.com/";
    const bc_tours = await fetch(
      "https://booking.shinebhutan.com/api/bc_tours"
    );
    tours.value = await bc_tours.json();

    return {
      // eslint-disable-next-line vue/no-dupe-keys
      tours,
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

.duration-tours {
  display: flex;
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
  aspect-ratio: 16/10;
  object-fit: cover;
}

.card-details {
  padding: 0.5rem 1rem;
}

.details {
  display: flex;
}

.location-tours {
  width: 50%;
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
