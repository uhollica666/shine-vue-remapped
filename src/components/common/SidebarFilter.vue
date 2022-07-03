<template>
    <div class="accordion mt-5 accordion-flush sticky-top app-sticky-top">
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                    aria-expanded="false" aria-controls="collapseOne">
                    <i class="bi bi-sort-down"></i>Filters
                </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <div class="c">
                        <div class="sidebar-filters">
                            <div class="heading">
                                <h6 class="mb-3">Search Anything</h6>
                            </div>
                            <form class="form-inline mb-3" for="search" @submit.prevent="">
                                <input class="form-control" type="search" placeholder="Search" id="search" />
                                <!-- v-model="search" @keydown="searchFilter(search)" /> -->
                            </form>

                            <div class="heading">
                                <h6 class="mb-3">Filter By Dzongkhag</h6>
                            </div>
                            <div class="form-check my-2" v-for="filter in filters" :key="filter">
                                <input class="form-check-input" type="radio" name="flexRadioDefault"
                                    id="flexRadioDefault1" @click="() => filteredAccommodation(filter)" />
                                <label class="form-check-label dzongkhag-filter-each" for="flexRadioDefault1">
                                    {{ filter }}
                                </label>
                            </div>

                            <div v-show="$route.name === 'Accommodation'">
                                <div class="heading">
                                    <h6 class="mb-3 mt-3">Filter By Rating</h6>
                                </div>
                                <div class="form-check my-2" v-for="starRating in starRatings" :key="starRating">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" />
                                    <label class="form-check-label dzongkhag-filter-each" for="flexRadioDefault1"
                                        v-if="starRating === 'All'">
                                        {{ starRating }} Star Properties
                                    </label>
                                    <label class="form-check-label dzongkhag-filter-each" for="flexRadioDefault1"
                                        v-else>
                                        {{ starRating }} <i class="bi bi-star-fill text-warning"></i> Properties
                                    </label>
                                </div>
                            </div>

                            <div v-show="$route.name === 'Handicrafts'">
                                <div class="heading">
                                    <h6 class="mb-3 mt-3">Filter By Category</h6>
                                </div>
                                <div class="form-check my-2" v-for="caregory in productCategories" :key="caregory">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" />
                                    <label class="form-check-label dzongkhag-filter-each" for="flexRadioDefault1">
                                        {{ caregory }}
                                    </label>
                                </div>
                            </div>

                            <div v-show="$route.name === 'Agriproducts'">
                                <div class="heading">
                                    <h6 class="mb-3 mt-3">Filter By Category</h6>
                                </div>
                                <div class="form-check my-2" v-for="caregory in agriCategory" :key="caregory">
                                    <RouterLink :to="'/search/' + caregory" class="text-dark">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" />
                                        <label class="form-check-label dzongkhag-filter-each" for="flexRadioDefault1">
                                            {{ caregory }}
                                        </label>
                                    </RouterLink>
                                </div>
                            </div>

                            <div v-show="$route.name === 'Tours'">
                                <div class="heading">
                                    <h6 class="mt-3">Filter By Price range</h6>
                                </div>
                                <div class="form-group-range mb-3">
                                    <div class="input-group">
                                        <span class="input-group-text-minmax bg-light">Min.</span>
                                        <input type="number" class="input-min form-control" placeholder="Min"
                                            aria-label="Min" aria-describedby="basic-addon1" value="25000" />
                                    </div>
                                    <div class="separator">-</div>
                                    <div class="input-group">
                                        <span class="input-group-text-minmax bg-ligh">Max.</span>
                                        <input type="text" class="input-max form-control" placeholder="Max"
                                            aria-label="Max" aria-describedby="basic-addon1" value="75000" />
                                    </div>
                                </div>
                                <div class="slider mb-3 mt-4">
                                    <div class="progress-slider"></div>
                                </div>
                                <div class="range-input">
                                    <input type="range" class="range-min" min="0" max="100000" value="25000" />
                                    <input type="range" class="range-max" min="0" max="100000" value="75000" />
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
    "All",
    "Dagana",
    "Lhuentse",
    "Mongar",
    "Pemagatshel",
    "Tashiyangtse",
    "Trashigang",
    "Zhemgang",
];
const starRatings = ["All", 2, 3, 4, 5];

const productCategories = [
    "All",
    "Textile",
    "Cane & Bamboo",
    "Painting",
    "Wood Craft",
    "Metal Craft",
    "General Souvenir",
];

const agriCategory = [
    "All",
    "Fresh Vegetables",
    "Food Grains",
    "Fresh Fruits",
    "Proccessed Food",
    "Dairy Products",
    "Mushrooms",
    "Edible Wild Plants",
];

export default {
    name: "SidebarFilter",
    props: [
        "filterItems",
        "filteredAccommodation",
        // "starFilter",
        // "searchFilter",
        // "productCategories",
        // "agriCategory",
    ],
    data() {
        return {
            /*eslint-disable*/
            filters,
            starRatings,
            productCategories,
            agriCategory
        };
    },

};
</script>

<style scoped>
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
