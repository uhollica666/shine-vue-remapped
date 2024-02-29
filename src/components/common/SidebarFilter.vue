<template>
  <div class="accordion mt-5 accordion-flush sticky-top app-sticky-top">
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
              <div class="heading">
                <h6 class="mb-3">Filter By Dzongkhag</h6>
              </div>

              <div class="form-check my-2" v-for="filter in filters" :key="filter.name">
                <RouterLink :to="'/agri-dzo-filter/' + filter.slug" v-if="$route.name === 'Agriproducts'">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                  <label class="form-check-label dzongkhag-filter-each" for="flexRadioDefault1">
                    {{ filter.name }}
                  </label>
                </RouterLink>
                <RouterLink :to="'/handicraft-dzo-filter/' + filter.slug" v-if="$route.name === 'Handicrafts'">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                  <label class="form-check-label dzongkhag-filter-each" for="flexRadioDefault1">
                    {{ filter.name }}
                  </label>
                </RouterLink>
                <RouterLink :to="'/accommodation-dzongkhags/' + filter.slug" v-if="$route.name === 'Accommodations'">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                  <label class="form-check-label dzongkhag-filter-each" for="flexRadioDefault1">
                    {{ filter.name }}
                  </label>
                </RouterLink>
                <RouterLink :to="'/tours-dzongkhags/' + filter.slug" v-if="$route.name === 'Tours'">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                  <label class="form-check-label dzongkhag-filter-each" for="flexRadioDefault1">
                    {{ filter.name }}
                  </label>
                </RouterLink>
              </div>

              <div v-show="$route.name === 'Handicrafts'">
                <div class="heading">
                  <h6 class="mb-3 mt-3">Filter By Category</h6>
                </div>
                <div class="form-check my-2" v-for="caregory in latestCategoryHandi()" :key="caregory">
                  <RouterLink :to="'/searchhandicraft/' + caregory.name" class="text-dark">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" />
                    <label class="form-check-label dzongkhag-filter-each" for="flexRadioDefault1">
                      {{ caregory.name }}
                    </label>
                  </RouterLink>
                </div>
              </div>

              <div v-show="$route.name === 'Agriproducts'">
                <div class="heading">
                  <h6 class="mb-3 mt-3">Filter By Category</h6>
                </div>
                <div class="form-check my-2" v-for="caregory in latestCategory()" :key="caregory">
                  <RouterLink :to="'/search/' + caregory.name" class="text-dark">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" />
                    <label class="form-check-label dzongkhag-filter-each" for="flexRadioDefault1">
                      {{ caregory.name }}
                    </label>
                  </RouterLink>
                </div>
              </div>

              <div v-show="$route.name === 'Accommodations'">
                <div class="heading">
                  <h6 class="mb-3 mt-3">Properties By Price Range</h6>
                </div>
                <div class="form-check my-2" v-for="starRating in starRatings" :key="starRating">
                  <RouterLink :to="'/searchaccommodation/' + starRating">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" />
                    <label class="form-check-label dzongkhag-filter-each" for="flexRadioDefault1"
                      v-if="starRating === 'All'">
                      {{ starRating }} Properties
                    </label>
                    <label class="form-check-label dzongkhag-filter-each" for="flexRadioDefault1"
                      v-else-if="starRating === '15,000 and over'">
                      Nu. {{ starRating }}
                    </label>
                    <label class="form-check-label dzongkhag-filter-each" for="flexRadioDefault1" v-else>
                      Between Nu. {{ starRating }}
                    </label>
                  </RouterLink>
                </div>
              </div>

              <div v-show="$route.name === 'Tours'">
                <div class="heading">
                  <h6 class="mt-3">Filter Tours By Price</h6>
                </div>
                <div class="form-check my-2" v-for="price in toursPrice" :key="price">
                  <RouterLink :to="'/searchtours/' + price">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" />
                    <label class="form-check-label dzongkhag-filter-each" for="flexRadioDefault1" v-if="price === 'All'">
                      {{ price }} Tours
                    </label>
                    <label class="form-check-label dzongkhag-filter-each" for="flexRadioDefault1"
                      v-else-if="price === '15,000 and over'">
                      Nu. {{ price }}
                    </label>
                    <label class="form-check-label dzongkhag-filter-each" for="flexRadioDefault1" v-else>
                      Between Nu. {{ price }}
                    </label>
                  </RouterLink>
                </div>
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
              <div class="heading">
                <h6 class="mb-3">Filter By Dzongkhag</h6>
              </div>

              <div class="form-check my-2" v-for="filter in filters" :key="filter.name">
                <RouterLink :to="'/agri-dzo-filter/' + filter.slug" v-if="$route.name === 'Agriproducts'">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                  <label class="form-check-label dzongkhag-filter-each" for="flexRadioDefault1">
                    {{ filter.name }}
                  </label>
                </RouterLink>
                <RouterLink :to="'/handicraft-dzo-filter/' + filter.slug" v-if="$route.name === 'Handicrafts'">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                  <label class="form-check-label dzongkhag-filter-each" for="flexRadioDefault1">
                    {{ filter.name }}
                  </label>
                </RouterLink>
                <RouterLink :to="'/accommodation-dzongkhags/' + filter.slug" v-if="$route.name === 'Accommodations'">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                  <label class="form-check-label dzongkhag-filter-each" for="flexRadioDefault1">
                    {{ filter.name }}
                  </label>
                </RouterLink>
                <RouterLink :to="'/tours-dzongkhags/' + filter.slug" v-if="$route.name === 'Tours'">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                  <label class="form-check-label dzongkhag-filter-each" for="flexRadioDefault1">
                    {{ filter.name }}
                  </label>
                </RouterLink>
              </div>

              <div v-show="$route.name === 'Handicrafts'">
                <div class="heading">
                  <h6 class="mb-3 mt-3">Filter By Category</h6>
                </div>
                <div class="form-check my-2" v-for="caregory in latestCategoryHandi()" :key="caregory">
                  <RouterLink :to="'/searchhandicraft/' + caregory.name" class="text-dark">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" />
                    <label class="form-check-label dzongkhag-filter-each" for="flexRadioDefault1">
                      {{ caregory.name }}
                    </label>
                  </RouterLink>
                </div>
              </div>

              <div v-show="$route.name === 'Agriproducts'">
                <div class="heading">
                  <h6 class="mb-3 mt-3">Filter By Category</h6>
                </div>
                <div class="form-check my-2" v-for="caregory in latestCategory()" :key="caregory">
                  <RouterLink :to="'/search/' + caregory.name" class="text-dark">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" />
                    <label class="form-check-label dzongkhag-filter-each" for="flexRadioDefault1">
                      {{ caregory.name }}
                    </label>
                  </RouterLink>
                </div>
              </div>

              <div v-show="$route.name === 'Accommodations'">
                <div class="heading">
                  <h6 class="mb-3 mt-3">Properties By Price Range</h6>
                </div>
                <div class="form-check my-2" v-for="starRating in starRatings" :key="starRating">
                  <RouterLink :to="'/searchaccommodation/' + starRating">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" />
                    <label class="form-check-label dzongkhag-filter-each" for="flexRadioDefault1"
                      v-if="starRating === 'All'">
                      {{ starRating }} Properties
                    </label>
                    <label class="form-check-label dzongkhag-filter-each" for="flexRadioDefault1"
                      v-else-if="starRating === '15,000 and over'">
                      Nu. {{ starRating }}
                    </label>
                    <label class="form-check-label dzongkhag-filter-each" for="flexRadioDefault1" v-else>
                      Between Nu. {{ starRating }}
                    </label>
                  </RouterLink>
                </div>
              </div>

              <div v-show="$route.name === 'Tours'">
                <div class="heading">
                  <h6 class="mt-3">Filter Tours By Price</h6>
                </div>
                <div class="form-check my-2" v-for="price in toursPrice" :key="price">
                  <RouterLink :to="'/searchtours/' + price">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" />
                    <label class="form-check-label dzongkhag-filter-each" for="flexRadioDefault1" v-if="price === 'All'">
                      {{ price }} Tours
                    </label>
                    <label class="form-check-label dzongkhag-filter-each" for="flexRadioDefault1"
                      v-else-if="price === '15,000 and over'">
                      Nu. {{ price }}
                    </label>
                    <label class="form-check-label dzongkhag-filter-each" for="flexRadioDefault1" v-else>
                      Between Nu. {{ price }}
                    </label>
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const filters = [
  { name: "Dagana", slug: 'Dagana' },
  { name: "Lhuentse", slug: 'Lhuentse' },
  { name: "Mongar", slug: 'Mongar' },
  { name: "Pemagatshel", slug: 'Pemagatshel' },
  { name: "Tashiyangtse", slug: 'Tashiyangtse' },
  { name: "Trashigang", slug: 'Trashigang' },
  { name: "Zhemgang", slug: 'Zhemgang' },
];
const starRatings = [
  "All",
  "1 - 5,000",
  "5,001 - 10,000",
  "10,001 - 15,000",
  "15,000 and over",
];

const toursPrice = [
  "All",
  "1 - 5,000",
  "5,001 - 10,000",
  "10,001 - 15,000",
  "15,000 and over",
];

import { ref } from "vue";

export default {
  name: "SidebarFilter",
  props: [
    "filterItems",
    "filteredAccommodation",
    "starFilter",
    "searchFilter",
    "productCategories",
    "agriCategory",
  ],
  async setup() {
    const agriCategory = ref(null)
    const productCategories = ref(null)
    const agri = await fetch('https://shop.shinebhutan.com/api/v1/get_frontend_categories?id=4');
    const handi = await fetch('https://shop.shinebhutan.com/api/v1/get_frontend_categories?id=5');
    agriCategory.value = await agri.json();
    productCategories.value = await handi.json();
    return {
      /* eslint-disable */
      agriCategory,
      productCategories
    };

  },
  methods: {
    latestCategory() {
      return this.agriCategory.sort((a, b) => {
        return b.id - a.id;
      });
    },
    latestCategoryHandi() {
      return this.productCategories.sort((a, b) => {
        return b.id - a.id;
      });
    },
  },
  data() {
    return {
      /*eslint-disable*/
      filters,
      starRatings,
      toursPrice,
    };
  },
  mounted() {
    const isMobile = ref(null);
    if (window.innerWidth < 768) {
      return isMobile.value = true;
    } else {
      return isMobile.value = false;
    }
  },
};
</script>

<style scoped>
.form-check a {
  color: #2c3e50;
  cursor: pointer;
}

.app-sticky-top {
  top: 2rem;
}

.accordion-button:not(.collapsed)::after {
  background-image: var(--bs-accordion-btn-icon);
}

.accordion-button:not(.collapsed) {
  color: #fff !important;
  background-color: #f7941e !important;
}

.accordion-item {
  border: none;
}

.accordion-body {
  padding: 1rem 1.2rem;
  border-radius: 10px !important;
}

.accordion {
  background: #fafafa;
  max-width: 80%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-top: 10px;
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

@media only screen and (max-width: 992px) {
  .accordion {
    max-width: 100%;
  }
}

@media only screen and (max-width: 768px) {
  .accordion {
    max-width: 100%;
  }
}
</style>
