<template>
    <div>
        <div class="accommodation-element mt-5">
            <h4 class="text-capitalize">
                Your Searched for Properties between Nu. <u class="fs-4">{{ $route.params.category }}</u>
            </h4>
        </div>
        <div class="row mb-3">
            <h5 class="my-3">Accommodations</h5>
            <template v-for="accommodation in filterProducts1">
                <div v-if="$route.params.category === '1 - 5,000'" :key="accommodation.name"
                    class="col-md-3 col-lg-3 col-xl-3 col-sm-6 col-xs-6 my-3">
                    <div class="card mt-2">
                        <div class="card mt-3">
                            <RouterLink :to="'/properties/' + accommodation.id + 'where?name=' + accommodation.slug"
                                class="accommodation-details">
                                <div class="card-body">
                                    <img loading="lazy" :src="ecomURL + accommodation.file_path" alt=""
                                        class="card-img img-fluid" />

                                    <div class="card-details">
                                        <h6 class="card-title text-truncate" v-if="!accommodation.title">
                                            -Name Not Available-
                                        </h6>
                                        <h6 class="card-title text-truncate" v-else>
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
                                            <h6 class="rating" v-if="!accommodation.review_score">
                                                <i class="bi bi-star-fill start-icon mx-1"></i>
                                                Null
                                            </h6>
                                            <h6 class="rating" v-else>
                                                <i class="bi bi-star-fill start-icon mx-1"></i>
                                                {{ accommodation.review_score }} / 5
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </RouterLink>
                        </div>
                    </div>
                </div>
                <div v-if="!accommodation" :key="accommodation.price">
                    <h5>No Accommodation Available at this Price Range</h5>
                </div>
            </template>
            <template v-for="accommodation in filterProducts2">
                <div v-if="$route.params.category === '5,001 - 10,000'" :key="accommodation.name"
                    class="col-md-3 col-lg-3 col-xl-3 col-sm-6 col-xs-6 my-3">
                    <div class="card mt-2">
                        <div class="card mt-3">
                            <RouterLink :to="'/properties/' + accommodation.id + 'where?name=' + accommodation.slug"
                                class="accommodation-details">
                                <div class="card-body">
                                    <img loading="lazy" :src="ecomURL + accommodation.file_path" alt=""
                                        class="card-img img-fluid" />

                                    <div class="card-details">
                                        <h6 class="card-title text-truncate" v-if="!accommodation.title">
                                            -Name Not Available-
                                        </h6>
                                        <h6 class="card-title text-truncate" v-else>
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
                                            <h6 class="rating" v-if="!accommodation.review_score">
                                                <i class="bi bi-star-fill start-icon mx-1"></i>
                                                Null
                                            </h6>
                                            <h6 class="rating" v-else>
                                                <i class="bi bi-star-fill start-icon mx-1"></i>
                                                {{ accommodation.review_score }} / 5
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </RouterLink>
                        </div>
                    </div>
                </div>
                <div v-if="!accommodation" :key="accommodation.price">
                    <h5>No Accommodation Available at this Price Range</h5>
                </div>
            </template>
            <template v-for="accommodation in filterProducts3">
                <div v-if="$route.params.category === '10,001 - 15,000'" :key="accommodation.name"
                    class="col-md-3 col-lg-3 col-xl-3 col-sm-6 col-xs-6 my-3">
                    <div class="card mt-2">
                        <div class="card mt-3">
                            <RouterLink :to="'/properties/' + accommodation.id + 'where?name=' + accommodation.slug"
                                class="accommodation-details">
                                <div class="card-body">
                                    <img loading="lazy" :src="ecomURL + accommodation.file_path" alt=""
                                        class="card-img img-fluid" />

                                    <div class="card-details">
                                        <h6 class="card-title text-truncate" v-if="!accommodation.title">
                                            -Name Not Available-
                                        </h6>
                                        <h6 class="card-title text-truncate" v-else>
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
                                            <h6 class="rating" v-if="!accommodation.review_score">
                                                <i class="bi bi-star-fill start-icon mx-1"></i>
                                                Null
                                            </h6>
                                            <h6 class="rating" v-else>
                                                <i class="bi bi-star-fill start-icon mx-1"></i>
                                                {{ accommodation.review_score }} / 5
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </RouterLink>
                        </div>
                    </div>
                </div>
                <div v-if="!accommodation" :key="accommodation.price">
                    <h5>No Accommodation Available at this Price Range</h5>
                </div>
            </template>
            <template v-for="accommodation in filterProducts4">
                <div v-if="$route.params.category === '15,000 and over'" :key="accommodation.name"
                    class="col-md-3 col-lg-3 col-xl-3 col-sm-6 col-xs-6 my-3">
                    <div class="card mt-2">
                        <div class="card mt-3">
                            <RouterLink :to="'/properties/' + accommodation.id + 'where?name=' + accommodation.slug"
                                class="accommodation-details">
                                <div class="card-body">
                                    <img loading="lazy" :src="ecomURL + accommodation.file_path" alt=""
                                        class="card-img img-fluid" />

                                    <div class="card-details">
                                        <h6 class="card-title text-truncate" v-if="!accommodation.title">
                                            -Name Not Available-
                                        </h6>
                                        <h6 class="card-title text-truncate" v-else>
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
                                            <h6 class="rating" v-if="!accommodation.review_score">
                                                <i class="bi bi-star-fill start-icon mx-1"></i>
                                                Null
                                            </h6>
                                            <h6 class="rating" v-else>
                                                <i class="bi bi-star-fill start-icon mx-1"></i>
                                                {{ accommodation.review_score }} / 5
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </RouterLink>
                        </div>
                    </div>
                </div>
                    <div v-if="!accommodation" :key="accommodation.price">
                        <h5>No Accommodation Available at this Price Range</h5>
                    </div>
            </template>
            <template v-for="accommodation in filterProducts">
                <div v-if="$route.params.category === 'All'" :key="accommodation.id"
                    class="col-md-3 col-lg-3 col-xl-3 col-sm-6 col-xs-6 my-3">
                    <div class="card mt-3">
                        <RouterLink :to="'/properties/' + accommodation.id + 'where?name=' + accommodation.slug"
                            class="accommodation-details">
                            <div class="card-body">
                                <img loading="lazy" :src="ecomURL + accommodation.file_path" alt=""
                                    class="card-img img-fluid" />

                                <div class="card-details">
                                    <h6 class="card-title text-truncate" v-if="!accommodation.title">
                                        -Name Not Available-
                                    </h6>
                                    <h6 class="card-title text-truncate" v-else>
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
                                        <h6 class="rating" v-if="!accommodation.review_score">
                                            <i class="bi bi-star-fill start-icon mx-1"></i>
                                            No Rating
                                        </h6>
                                        <h6 class="rating" v-else>
                                            <i class="bi bi-star-fill start-icon mx-1"></i>
                                            {{ accommodation.review_score }} / 5
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </RouterLink>
                    </div>
                </div>
            </template>
            <h5 class="my-3">Hotels</h5>
            <template v-for="accommodation in filterProductsA">
                <div v-if="$route.params.category === 'All'" :key="accommodation.name"
                    class="col-md-3 col-lg-3 col-xl-3 col-sm-6 col-xs-6 my-3">
                    <div class="card mt-2">
                        <div class="card mt-3">
                            <RouterLink :to="'/properties/' + accommodation.id + 'where?name=' + accommodation.slug"
                                class="accommodation-details">
                                <div class="card-body">
                                    <img loading="lazy" :src="ecomURL + accommodation.file_path" alt=""
                                        class="card-img img-fluid" />

                                    <div class="card-details">
                                        <h6 class="card-title text-truncate" v-if="!accommodation.title">
                                            -Name Not Available-
                                        </h6>
                                        <h6 class="card-title text-truncate" v-else>
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
                                            <h6 class="rating" v-if="!accommodation.review_score">
                                                <i class="bi bi-star-fill start-icon mx-1"></i>
                                                No Rating
                                            </h6>
                                            <h6 class="rating" v-else>
                                                <i class="bi bi-star-fill start-icon mx-1"></i>
                                                {{ accommodation.review_score }} / 5
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </RouterLink>
                        </div>
                    </div>
                </div>
                <div v-if="!accommodation" :key="accommodation.price">
                    <h5>No Hotels Available at this Price Range</h5>
                </div>
            </template>
            <template v-for="accommodation in filterProductsB">
                <div v-if="$route.params.category === '1 - 5,000'" :key="accommodation.name"
                    class="col-md-3 col-lg-3 col-xl-3 col-sm-6 col-xs-6 my-3">
                    <div class="card mt-2">
                        <div class="card mt-3">
                            <RouterLink :to="'/properties/' + accommodation.id + 'where?name=' + accommodation.slug"
                                class="accommodation-details">
                                <div class="card-body">
                                    <img loading="lazy" :src="ecomURL + accommodation.file_path" alt=""
                                        class="card-img img-fluid" />

                                    <div class="card-details">
                                        <h6 class="card-title text-truncate" v-if="!accommodation.title">
                                            -Name Not Available-
                                        </h6>
                                        <h6 class="card-title text-truncate" v-else>
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
                                            <h6 class="rating" v-if="!accommodation.review_score">
                                                <i class="bi bi-star-fill start-icon mx-1"></i>
                                                No Rating
                                            </h6>
                                            <h6 class="rating" v-else>
                                                <i class="bi bi-star-fill start-icon mx-1"></i>
                                                {{ accommodation.review_score }} / 5
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </RouterLink>
                        </div>
                    </div>
                </div>
                <div v-if="!accommodation" :key="accommodation.price">
                    <h5>No Hotels Available at this Price Range</h5>
                </div>
            </template>
            <template v-for="accommodation in filterProductsC">
                <div v-if="$route.params.category === '5,001 - 10,000'" :key="accommodation.name"
                    class="col-md-3 col-lg-3 col-xl-3 col-sm-6 col-xs-6 my-3">
                    <div class="card mt-2">
                        <div class="card mt-3">
                            <RouterLink :to="'/properties/' + accommodation.id + 'where?name=' + accommodation.slug"
                                class="accommodation-details">
                                <div class="card-body">
                                    <img loading="lazy" :src="ecomURL + accommodation.file_path" alt=""
                                        class="card-img img-fluid" />

                                    <div class="card-details">
                                        <h6 class="card-title text-truncate" v-if="!accommodation.title">
                                            -Name Not Available-
                                        </h6>
                                        <h6 class="card-title text-truncate" v-else>
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
                                            <h6 class="rating" v-if="!accommodation.review_score">
                                                <i class="bi bi-star-fill start-icon mx-1"></i>
                                                No Rating
                                            </h6>
                                            <h6 class="rating" v-else>
                                                <i class="bi bi-star-fill start-icon mx-1"></i>
                                                {{ accommodation.review_score }} / 5
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </RouterLink>
                        </div>
                    </div>
                </div>
                <div v-if="!accommodation" :key="accommodation.price">
                    <h5>No Hotels Available at this Price Range</h5>
                </div>
            </template>
            <template v-for="accommodation in filterProductsD">
                <div v-if="$route.params.category === '10,001 - 15,000'" :key="accommodation.name"
                    class="col-md-3 col-lg-3 col-xl-3 col-sm-6 col-xs-6 my-3">
                    <div class="card mt-2">
                        <div class="card mt-3">
                            <RouterLink :to="'/properties/' + accommodation.id + 'where?name=' + accommodation.slug"
                                class="accommodation-details">
                                <div class="card-body">
                                    <img loading="lazy" :src="ecomURL + accommodation.file_path" alt=""
                                        class="card-img img-fluid" />

                                    <div class="card-details">
                                        <h6 class="card-title text-truncate" v-if="!accommodation.title">
                                            -Name Not Available-
                                        </h6>
                                        <h6 class="card-title text-truncate" v-else>
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
                                            <h6 class="rating" v-if="!accommodation.review_score">
                                                <i class="bi bi-star-fill start-icon mx-1"></i>
                                                No Rating
                                            </h6>
                                            <h6 class="rating" v-else>
                                                <i class="bi bi-star-fill start-icon mx-1"></i>
                                                {{ accommodation.review_score }} / 5
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </RouterLink>
                        </div>
                    </div>
                </div>
                <div v-if="!accommodation" :key="accommodation.price">
                    <h5>No Hotels Available at this Price Range</h5>
                </div>
            </template>
            <template v-for="accommodation in filterProductsD">
                <div v-if="$route.params.category === '15,000 and over'" :key="accommodation.name"
                    class="col-md-3 col-lg-3 col-xl-3 col-sm-6 col-xs-6 my-3">
                    <div class="card mt-2">
                        <div class="card mt-3">
                            <RouterLink :to="'/properties/' + accommodation.id + 'where?name=' + accommodation.slug"
                                class="accommodation-details">
                                <div class="card-body">
                                    <img loading="lazy" :src="ecomURL + accommodation.file_path" alt=""
                                        class="card-img img-fluid" />

                                    <div class="card-details">
                                        <h6 class="card-title text-truncate" v-if="!accommodation.title">
                                            -Name Not Available-
                                        </h6>
                                        <h6 class="card-title text-truncate" v-else>
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
                                            <h6 class="rating" v-if="!accommodation.review_score">
                                                <i class="bi bi-star-fill start-icon mx-1"></i>
                                                No Rating
                                            </h6>
                                            <h6 class="rating" v-else>
                                                <i class="bi bi-star-fill start-icon mx-1"></i>
                                                {{ accommodation.review_score }} / 5
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </RouterLink>
                        </div>
                    </div>
                    <div v-if="!accommodation" :key="accommodation.price">
                        <h5>No Hotels Available at this Price Range</h5>
                    </div>

                </div>
            </template>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
export default {
    name: "SearchAccommodation",
    async setup() {
        const Accommodations = ref(null);
        const Hotels = ref(null);
        const ecomURL = "https://booking.shinebhutan.com/uploads/";
        const ecom_products = await fetch(
            "https://booking.shinebhutan.com/api/bc_spaces"
        );
        const hotels_products = await fetch(
            "https://booking.shinebhutan.com/api/bc_hotels"
        );
        Accommodations.value = await ecom_products.json();
        Hotels.value = await hotels_products.json();

        return {
            Accommodations,
            Hotels,
            ecomURL,
        };
    },
    methods: {
        filteredProducts() {
            return this.Accommodations.filter(
                (product) => product.price > 0.00
            );
        },
        filteredProductsA() {
            return this.Hotels.filter(
                (product) => product.price > 0.00
            );
        },
        filteredProducts1() {
            return this.Accommodations.filter(
                (product) => product.price > 0.00 && product.price <= 5000.00
            );
        },
        filteredProductsB() {
            return this.Hotels.filter(
                (product) => product.price > 0.00 && product.price <= 5000.00
            );
        },
        filteredProducts2() {
            return this.Accommodations.filter(
                (product) => product.price > 5000.00 && product.price <= 10000.00
            );
        },
        filteredProductsC() {
            return this.Hotels.filter(
                (product) => product.price > 5000.00 && product.price <= 10000.00
            );
        },
        filteredProducts3() {
            return this.Accommodations.filter(
                (product) => product.price > 10000.00 && product.price <= 15000.00
            );
        },
        filteredProductsD() {
            return this.Hotels.filter(
                (product) => product.price > 10000.00 && product.price <= 15000.00
            );
        },
        filteredProducts4() {
            return this.Accommodations.filter(
                (product) => product.price > 15000.00
            );
        },
        filteredProductsE() {
            return this.Hotels.filter(
                (product) => product.price > 15000.00
            );
        },
    },
    computed: {
        filterProducts() {
            return this.filteredProducts();
        },
        filterProductsA() {
            return this.filteredProductsA();
        },
        filterProducts1() {
            return this.filteredProducts1();
        },
        filterProductsB() {
            return this.filteredProductsB();
        },
        filterProducts2() {
            return this.filteredProducts2();
        },
        filterProductsC() {
            return this.filteredProductsC();
        },
        filterProducts3() {
            return this.filteredProducts3();
        },
        filterProductsD() {
            return this.filteredProductsD();
        },
        filterProducts4() {
            return this.filteredProducts4();
        },
        filterProductsE() {
            return this.filteredProductsE();
        },
    },
};
</script>

<style scoped>
.card-img {
    aspect-ratio: 1;
}

.btn-preview {
    max-width: 100%;
    background: #f7941e;
    color: #fff;
    border-radius: 20rem;
    padding: 0.5rem 1rem;
}

.btn-preview:hover {
    background: #f9741e;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
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

.product-row {
    display: flex;
    justify-content: space-between;
    align-items: left;
}

.preview-buttons {
    display: flex;
    justify-content: space-between;
}
</style>
