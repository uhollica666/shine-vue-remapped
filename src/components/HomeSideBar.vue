<template>
  <div>
    <div class="accordion accordion-flush mobile-accordion">
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
            aria-expanded="false" aria-controls="collapseOne" v-if="isMobile">
            <i class="bi bi-sort-down"></i> Filter
          </button>
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
            aria-expanded="true" aria-controls="collapseOne" v-else>
            <i class="bi bi-sort-down"></i> Filter
          </button>
        </h2>
        <div v-if="isMobile" id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
          data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <div class="c">
              <div class="sidebar-filters">
                <div class="block-2 my-3">
                  <h6>Agri Products</h6>
                  <ul class="home-block Agriculture-block">
                    <li v-for="product in latestCategory()" :key="product.id">
                      <RouterLink :to="'/category-agriproducts/' + product.name">{{ product.name }}</RouterLink>
                    </li>
                  </ul>
                </div>

                <div class="block-1 mb-3">
                  <h6>Handicraft Products</h6>
                  <ul class="home-block handicraft-block">
                    <li v-for="handicraft in latestCategoryHandi()" :key="handicraft.id">
                      <RouterLink :to="'/category-handicrafts/' + handicraft.name">{{ handicraft.name }}</RouterLink>
                    </li>
                  </ul>
                </div>

                <div class="block-2 my-3">
                  <h6>Browse Dzongkhags</h6>
                  <ul class="home-block Dzongkhag-block">
                    <li v-for="dzongkhag in dzongkhags" :key="dzongkhag">
                      <RouterLink :to="{
                                                                      name: 'Dzongkhags',
                                                                      params: { location_id: dzongkhag },
                                                                    }">{{ dzongkhag }}</RouterLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
          data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <div class="c">
              <div class="sidebar-filters">
                <div class="block-2 my-3">
                  <h6>Agri Products</h6>
                  <ul class="home-block Agriculture-block">
                    <li v-for="product in latestCategory()" :key="product">
                      <RouterLink :to="'/category-agriproducts/' + product.name">{{ product.name }}</RouterLink>
                    </li>
                  </ul>
                </div>

                <div class="block-1 mb-3">
                  <h6>Handicraft Products</h6>
                  <ul class="home-block handicraft-block">
                    <li v-for="handicraft in latestCategoryHandi()" :key="handicraft">
                      <RouterLink :to="'/category-handicrafts/' + handicraft.name">{{ handicraft.name }}</RouterLink>
                    </li>
                  </ul>
                </div>

                <div class="block-2 my-3">
                  <h6>Browse Dzongkhags</h6>
                  <ul class="home-block Dzongkhag-block">
                    <li v-for="dzongkhag in dzongkhags" :key="dzongkhag">
                      <RouterLink :to="{
                                                                      name: 'Dzongkhags',
                                                                      params: { location_id: dzongkhag },
                                                                    }">{{ dzongkhag }}</RouterLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="sticky-top mt-5 accordion here-heading">
      <h6 class="attraction-header">Popular Attractions</h6>
      <div class="c">
        <div class="sidebar-filters">
          <div class="block-1 mb-3">
            <div class="image-block my-2">
              <img loading="lazy" src="@/assets/img/brokpa.jpg" alt="" />
            </div>
            <ul class="home-block pb-3">
              <li v-for="attraction in popAttractions" :key="attraction.name" class="mt-1">
                <RouterLink :to="'/article/' + attraction.slug">
                  {{ attraction.name }}
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const dzongkhags = [
  "Dagana",
  "Lhuentse",
  "Mongar",
  "Pemagatshel",
  "Tashiyangtse",
  "Trashigang",
  "Zhemgang",
];
const popAttractions = [
  { name: "Brokpa of Merak Sakten", slug: "brokpa-of-merak-sakten" },
  { name: "Chorten Kora - Gompa Kora", slug: "chorten-kora-gompa-kora" },
  { name: "Mongar - Birding Capital", slug: "mongar-birding-capital" },
  { name: "Textile of Khoma", slug: "textile-of-khom" },
  { name: "Cotton Farming, Thongsa", slug: "cotton-farming-thongsa" },
  { name: "Royal Manas National Park", slug: "royal-manas-national-park" },
  { name: "Lhamoizingkha Excursion", slug: "lhamoizingkha-excursion" },
];
import { ref } from "vue";
export default {
  name: "HomeSideBar",
  beforeMount() {
    const isMobile = ref(null);
    if (window.innerWidth < 768) {
      isMobile.value = true;
    } else {
      isMobile.value = false;
    }
  },
  data() {
    return {
      dzongkhags,
      popAttractions,
      isMobile: this.isMobile,
    };
  },
  async setup() {
    const homeAgriproducts = ref(null);
    const homeHandicrafts = ref(null);
    const agri = await fetch(
      "https://shop.shinebhutan.com/api/v1/get_frontend_categories?id=4"
    );
    const handi = await fetch(
      "https://shop.shinebhutan.com/api/v1/get_frontend_categories?id=5"
    );
    homeAgriproducts.value = await agri.json();
    homeHandicrafts.value = await handi.json();
    return {
      homeAgriproducts,
      homeHandicrafts,
    };
  },
  methods: {
    latestCategory() {
      return this.homeAgriproducts.sort((a, b) => {
        return b.id - a.id;
      });
    },
    latestCategoryHandi() {
      return this.homeHandicrafts.sort((a, b) => {
        return b.id - a.id;
      });
    },
  },
};
</script>

<style scoped>
.attraction-header {
  padding: 1rem;
  background: #f7941e;
  color: #fff;
  border-radius: 5px 5px 0 0;
}

.image-block img {
  width: 100%;
  border-radius: 5px;
  aspect-ratio: 12/16;
  object-fit: cover;
  transition: 300ms;
}

.image-block img:hover {
  filter: brightness(0.5);
}

.app-sticky-top-2 {
  top: 10vh;
  margin-top: 20rem;
}

.app-sticky-top {
  top: 2rem;
}

.accordion-button:not(.collapsed)::after {
  background-image: var(--bs-accordion-btn-icon);
  color: #666 !important;
}

.accordion-button:not(.collapsed) {
  color: #fff !important;
  background-color: #f7941e !important;
  border-radius: 5px 5px 0 0;
}

.accordion-item {
  border: none;
  border-radius: 5px !important;
}

.accordion-body {
  padding: 1rem 1.2rem;
}

.accordion {
  background: #fafafa;
  max-width: 85%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

.sidebar {
  max-width: 100%;
  box-shadow: none;
  padding: 1rem;
}

.accordion-header {
  border-radius: 10px;
}

.form-group-range {
  width: 100%;
  display: flex;
  margin: 1rem 0;
}

.input-group-text-minmax {
  border: none;
  margin: 0 0.5rem 0 0;
  align-content: center;
  justify-content: center;
  padding: 0.5rem 0;
}

.input-group input {
  border-radius: 5px;
  text-align: center;
  -moz-appearance: textfield;
}

.separator {
  width: 10%;
  margin: 0 0.5rem;
  text-align: center;
  align-content: center;
  justify-content: center;
  font-size: 16px;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.slider {
  height: 8px;
  border-radius: 2rem;
  background: #ddd;
  position: relative;
}

.progress-slider {
  height: 8px;
  left: 25%;
  right: 25%;
  position: absolute;
  border-radius: 2rem;
  background: #f7941e;
}

.range-input {
  position: relative;
}

.range-input input {
  height: 8px;
  position: absolute;
  top: -1.5rem;
  width: 100%;
  background: none;
  -webkit-appearance: none;
  pointer-events: none;
}

input[type="range"]::-webkit-slider-thumb {
  height: 1rem;
  width: 1rem;
  background: #f9741e;
  border-radius: 5rem;
  pointer-events: auto;
  -webkit-appearance: none;
}

input[type="range"]::-moz-range-thumb {
  height: 1rem;
  width: 1rem;
  background: #f9741e;
  border-radius: 5rem;
  pointer-events: auto;
  border: none;
  -moz-appearance: none;
}

.home-block li a {
  color: #2c3e50;
  text-decoration: none;
}

.home-block li a:hover {
  color: #f7941e;
}

.accordion-button.bu#bumbum::after {
  display: none;
}

@media only screen and (max-width: 992px) {
  .accordion {
    max-width: 100%;
  }

  .mobile-accordion {
    margin-bottom: 3rem;
  }
}

@media screen and (max-width: 576px) {
  .here-heading {
    display: none;
  }
}
</style>