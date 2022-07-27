<template>
    <div class="accordion mt-5 mb-5 accordion-flush sticky-top app-sticky-top">
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
                                <h6 class="mb-3">Explore Properties By Price</h6>
                            </div>
                            <div class="dzo-list" v-for="category in categories" :key="category">
                                <RouterLink :to="{ name: 'SearchToursPage', params: { category: category } }"
                                    :class="{ active: isActive }">
                                    <ul class="lists-dzo">
                                        <li v-if="category === 'All'">{{ category }} Properties</li>
                                        <li v-else-if="category === '15,000 and over'"> Nu. {{ category }}</li>
                                        <li v-else>Between Nu. {{ category }}</li>
                                    </ul>
                                </RouterLink>
                            </div>
                            <div class="back-to-home">
                                <RouterLink to="/tours" class="home-button">
                                    <i class="bi bi-caret-left"></i> Back To Previous Page
                                </RouterLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
const categories = [
    "All",
    '1 - 5,000',
    '5,001 - 10,000',
    '10,001 - 15,000',
    "15,000 and over",
];
export default {
    name: "ToursSearchBar",
    data() {
        return {
            categories,

        }
    }


};
</script>

<style scoped>
a.router-link-exact-active ul li {
    color: #f7941e !important;
}

.home-button {
    color: #f7941e;
    text-decoration: none;
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
    border-radius: 5px;
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

.lists-dzo {
    text-decoration: none;
    margin: 0.5rem 0;
}

.lists-dzo li {
    color: #2c3e50;
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
