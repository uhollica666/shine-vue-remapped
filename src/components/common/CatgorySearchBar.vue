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
                                <h6 class="mb-3">Explore All Agri Products</h6>
                            </div>
                            <div class="dzo-list">
                                <RouterLink :to="{ name: 'Search', params: { category: 'All' } }"
                                    :class="{ active: isActive }">
                                    <ul class="lists-dzo">
                                        <li>All</li>
                                    </ul>
                                </RouterLink>
                            </div>
                            <div class="dzo-list" v-for="category in latestCategory()" :key="category.id">
                                <RouterLink :to="{ name: 'Search', params: { category: category.name } }"
                                    :class="{ active: isActive }">
                                    <ul class="lists-dzo">
                                        <li>{{ category.name }}</li>
                                    </ul>
                                </RouterLink>
                            </div>
                            <div class="back-to-home">
                                <RouterLink to="/agriproducts" class="home-button">
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
import { ref } from "vue";
export default {
    name: "CategorySearchBar",
    async setup() {
        const categories = ref(null);
        const fetchCategory = await fetch('https://shop.shinenbuy.com/api/v1/get_frontend_categories?id=4');
        categories.value = await fetchCategory.json();
        return {
            categories,
        }
    },
    methods: {
        latestCategory() {
            return this.categories.sort((a, b) => {
                return b.id - a.id;
            });
        }
    }


};
</script>

<style scoped>
a.router-link-exact-active ul li {
    color: #f7941e !important;
    font-weight: 600;
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
