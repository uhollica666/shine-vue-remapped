<template>
  <div>
    <div class="by-category mt-5 mb-3" v-if="$route.name === 'Accommodations'">
      <h4 class="heading text-capitalize">
        Explore {{ $route.name }} by Category
      </h4>
      <p class="mt-3">{{ subTitleCategory }}</p>
      <div class="row">
        <div v-for="category in categoryAccommodations" :key="category.id" class="col-md-3 col-lg-3 col-xl-3 cat-cards mt-2">
          <div class="card mt-2">
            <RouterLink :to="'/cat-filter/' + category.slug" class="category-details text-center">
              <div class="card-body">
                <img loading="lazy" :src="category.image_id" alt="" class="card-img img-fluid" />
                <div class="card-details">
                  <h6 class="card-title text-truncate">
                    {{ category.category }}
                  </h6>
                </div>
              </div>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
    <div class="by-category mt-5 mb-3" v-if="$route.name === 'Tours'">
      <h4 class="heading text-capitalize">
        Explore {{ $route.name }} by Category
      </h4>
      <p class="mt-3">{{ subTitleCategory }}</p>
      <div class="row">
        <div v-for="category in categoryTours" :key="category.id" class="col-md-3 col-lg-3 col-xl-3 cat-cards mt-2">
          <div class="card mt-2">
            <RouterLink :to="'/cat-filter/' + category.slug" class="category-details text-center">
              <div class="card-body">
                <img v-if="category.name === 'City trips'" loading="lazy" :src="'assets/img/city_trips.jpg'" alt=""
                  class="card-img img-fluid" />
                <img v-if="category.name === 'Ecotourism'" loading="lazy" :src="'assets/img/eco_tourism.jpeg'" alt=""
                  class="card-img img-fluid" />
                <img v-if="category.name === 'Escorted tour'" loading="lazy" :src="'assets/img/escorted_tour.jpeg'"
                  alt="" class="card-img img-fluid" />
                <img v-if="category.name === 'Food and Festivals'" loading="lazy" :src="'assets/img/food_festival.jpeg'"
                  alt="" class="card-img img-fluid" />
                <img v-if="category.name === 'Nature & Adventure'" loading="lazy" :src="'assets/img/nature_adv.jpeg'"
                  alt="" class="card-img img-fluid" />
                <img v-if="category.name === 'Culture & Society'" loading="lazy"
                  :src="'assets/img/culture_society.jpeg'" alt="" class="card-img img-fluid" />
                <img v-if="category.name === 'Agriculture & Livelyhood'" loading="lazy"
                  :src="'assets/img/agri_tour.jpeg'" alt="" class="card-img img-fluid" />
                <div class="card-details">
                  <h6 class="card-title text-truncate">
                    {{ category.name }}
                  </h6>
                </div>
              </div>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CATEGORY_DATA from "@/APIs/Category_DATA.json";
import { ref } from "vue";

export default {
  name: "SortByCategory",

  async setup() {
    const categoryTours = ref(null);
    const catSubtitle = "Eastern Bhutan Destinations Now Open";
    const apiURL = "https://booking.shinebhutan.com/uploads/";
    const siteURL = "https://booking.shinebhutan.com/";
    const category = await fetch(
      "https://booking.shinebhutan.com/api/bc_tour_category"
    );
    categoryTours.value = await category.json();

    return {
      categoryAccommodations: CATEGORY_DATA,
      categoryTours,
      apiURL,
      catSubtitle,
      siteURL,
    };
  },
};
</script>

<style>
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

.category-details {
  text-decoration: none;
  color: #2c3e50;
}

.category-details:hover {
  color: #f7941e;
}
@media screen and (max-width: 768px) {
  .cat-cards {
    width: 50%;
  }
  
}
</style>
