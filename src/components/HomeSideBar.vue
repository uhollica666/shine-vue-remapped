<template>
  <div class="accordion mt-3 accordion-flush sticky-top app-sticky-top">
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
          aria-expanded="false" aria-controls="collapseOne">
          <i class="bi bi-sort-down"></i> Filter
        </button>
      </h2>
      <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
        data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <div class="c">
            <div class="sidebar-filters">
              <div class="block-1 mb-3">
                <h6>Handicrafts</h6>
                <ul class="home-block handicraft-block">
                  <li v-for="handicraft in homeHandicrafts" :key="handicraft">
                    <RouterLink :to="'/category-handicrafts/' + handicraft.name">{{
                        handicraft.name
                    }}</RouterLink>
                  </li>
                </ul>
              </div>

              <div class="block-2 my-3">
                <h6>Agriculture</h6>
                <ul class="home-block Agriculture-block">
                  <li v-for="product in homeAgriproducts" :key="product">
                    <RouterLink :to="'/category-agriproducts/' + product.name">{{
                        product.name
                    }}</RouterLink>
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

    <h2 class="accordion-header">
      <button class="accordion-button bu" id="bumbum">
        Popular Attraction
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show">
      <div class="accordion-body">
        <div class="c">
          <div class="sidebar-filters">
            <div class="block-1 mb-3">
              <div class="image-block my-2">
                <img loading="lazy" src="@/assets/img/brokpa.jpg" alt="" />
              </div>
              <ul class="home-block">
                <li v-for="attraction in popAttractions" :key="attraction" class="mt-1">
                  <RouterLink :to="
                    'https://test.hemantbhutanrealestate.com/news/' +
                    attraction
                  ">{{ attraction }}</RouterLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const homeHandicrafts = [
  { name: "Textile", link: "Textile-XDPg6" },
  { name: "Cane & Bamboo", link: "Cane--Bamboo-sGe1X" },
  { name: "Wood Crafts", link: "Wood-Crafts-oc1MB" },
  { name: "Metal Crafts", link: "Metal-Crafts-htfQ2" },
  { name: "General Souvenir", link: "General-Souvenir-y7ZYM" },
];

const homeAgriproducts = [
  { name: "Fresh Vegetables", link: "Fresh-Vegetables-hKvOE" },
  { name: "Food Grains", link: "Food-Grains-azYWe" },
  { name: "Fresh Fruits", link: "Fresh-Fruits-KUZ7q" },
  { name: "Proccessed Food", link: "Proccessed-Food-J8xL4" },
  { name: "Dairy Products", link: "Dairy-Products-bH7lp" },
  { name: "Mushrooms", link: "Mushrooms-CQgMe" },
  { name: "Edible Wild Plants", link: "Edible-Wild-Plants-wj7Xn" },
];

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
  "Brokpa of Merak Sakten",
  "Chorten Kora - Gompa Kora",
  "Mongar - Birding Capital",
  "Textile of Khoma",
  "Cotton Farming, Thongsa",
  "Royal Manas National Park",
  "Lhamoizingkha Excursion",
];
export default {
  name: "HomeSideBar",
  data() {
    return {
      homeHandicrafts,
      homeAgriproducts,
      dzongkhags,
      popAttractions,
    };
  },
};
</script>

<style scoped>
.image-block img {
  width: 100%;
  border-radius: 5px;
  height: 250px;
  object-fit: cover;
  transition: 300ms;
}

.image-block img:hover {
  filter: brightness(0.5);
}

.app-sticky-top-2 {
  top: 100vh;
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
}

@media only screen and (max-width: 768px) {
  .accordion {
    max-width: 100%;
  }
}
</style>
