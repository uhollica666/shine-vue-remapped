<template>
    <div>
        <div class="accommodation-element mt-5">
            <h4 class="text-capitalize" v-if="$route.params.category === 'All'">
                All Tours
            </h4>
            <h4 class="text-capitalize" v-else>
                Available Tours between Nu. <u class="fs-4">{{ $route.params.category }}</u>
            </h4>
        </div>
        <div class="row mb-3">
            <template v-for="accommodation in filterProducts1">
                <div v-if="$route.params.category === '1 - 5,000'" :key="accommodation.name"
                    class="col-md-3 col-lg-3 col-xl-3 col-sm-6 col-xs-6 my-3">
                    <div class="card mt-2">
                        <div class="card mt-3">
                            <RouterLink :to="'/tour/' + accommodation.id + 'where?name=' + accommodation.slug"
                                class="accommodation-details">
                                <div class="card-body">
                                    <img loading="lazy" :src="ecomURL + accommodation.file_path" alt=""
                                        class="card-img img-fluid" />

                                    <div class="card-details">
                                        <h6 class="card-title text-truncate">
                                            {{ accommodation.title }}
                                        </h6>
                                        <h6 class="card-text my-3" v-if="!accommodation.price">
                                            <i class="bi bi-cash-coin mr-1"></i> Rate Not Available
                                        </h6>
                                        <h6 class="card-text my-3" v-else>
                                            <i class="bi bi-cash-coin mr-1"></i> Nu. {{ accommodation.price }} /
                                            trip
                                        </h6>
                                        <div class="location-tours text-truncate mb-2">
                                            <i class="bi bi-geo-alt"></i>{{ accommodation.name }}
                                        </div>
                                        <div class="duration-tours text-truncate" v-if="!accommodation.date_form_to">
                                            <i class="bi bi-stopwatch"></i>
                                            Duration Not Available
                                        </div>
                                        <div class="duration-tours text-truncate" v-else>
                                            <i class="bi bi-stopwatch"></i>
                                            {{ accommodation.date_form_to }}
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
                            <RouterLink :to="'/tour/' + accommodation.id + 'where?name=' + accommodation.slug"
                                class="accommodation-details">
                                <div class="card-body">
                                    <img loading="lazy" :src="ecomURL + accommodation.file_path" alt=""
                                        class="card-img img-fluid" />

                                    <div class="card-details">
                                        <h6 class="card-title text-truncate">
                                            {{ accommodation.title }}
                                        </h6>
                                        <h6 class="card-text my-3" v-if="!accommodation.price">
                                            <i class="bi bi-cash-coin mr-1"></i> Rate Not Available
                                        </h6>
                                        <h6 class="card-text my-3" v-else>
                                            <i class="bi bi-cash-coin mr-1"></i> Nu. {{ accommodation.price }} /
                                            trip
                                        </h6>
                                        <div class="location-tours text-truncate mb-2">
                                            <i class="bi bi-geo-alt"></i>{{ accommodation.name }}
                                        </div>
                                        <div class="duration-tours text-truncate" v-if="!accommodation.date_form_to">
                                            <i class="bi bi-stopwatch"></i>
                                            Duration Not Available
                                        </div>
                                        <div class="duration-tours text-truncate" v-else>
                                            <i class="bi bi-stopwatch"></i>
                                            {{ accommodation.date_form_to }}
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
                            <RouterLink :to="'/tour/' + accommodation.id + 'where?name=' + accommodation.slug"
                                class="accommodation-details">
                                <div class="card-body">
                                    <img loading="lazy" :src="ecomURL + accommodation.file_path" alt=""
                                        class="card-img img-fluid" />

                                    <div class="card-details">
                                        <h6 class="card-title text-truncate">
                                            {{ accommodation.title }}
                                        </h6>
                                        <h6 class="card-text my-3" v-if="!accommodation.price">
                                            <i class="bi bi-cash-coin mr-1"></i> Rate Not Available
                                        </h6>
                                        <h6 class="card-text my-3" v-else>
                                            <i class="bi bi-cash-coin mr-1"></i> Nu. {{ accommodation.price }} /
                                            trip
                                        </h6>
                                        <div class="location-tours text-truncate mb-2">
                                            <i class="bi bi-geo-alt"></i>{{ accommodation.name }}
                                        </div>
                                        <div class="duration-tours text-truncate" v-if="!accommodation.date_form_to">
                                            <i class="bi bi-stopwatch"></i>
                                            Duration Not Available
                                        </div>
                                        <div class="duration-tours text-truncate" v-else>
                                            <i class="bi bi-stopwatch"></i>
                                            {{ accommodation.date_form_to }}
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
                            <RouterLink :to="'/tour/' + accommodation.id + 'where?name=' + accommodation.slug"
                                class="accommodation-details">
                                <div class="card-body">
                                    <img loading="lazy" :src="ecomURL + accommodation.file_path" alt=""
                                        class="card-img img-fluid" />

                                    <div class="card-details">
                                        <h6 class="card-title text-truncate">
                                            {{ accommodation.title }}
                                        </h6>
                                        <h6 class="card-text my-3" v-if="!accommodation.price">
                                            <i class="bi bi-cash-coin mr-1"></i> Rate Not Available
                                        </h6>
                                        <h6 class="card-text my-3" v-else>
                                            <i class="bi bi-cash-coin mr-1"></i> Nu. {{ accommodation.price }} /
                                            trip
                                        </h6>
                                        <div class="location-tours text-truncate mb-2">
                                            <i class="bi bi-geo-alt"></i>{{ accommodation.name }}
                                        </div>
                                        <div class="duration-tours text-truncate" v-if="!accommodation.date_form_to">
                                            <i class="bi bi-stopwatch"></i>
                                            Duration Not Available
                                        </div>
                                        <div class="duration-tours text-truncate" v-else>
                                            <i class="bi bi-stopwatch"></i>
                                            {{ accommodation.date_form_to }}
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
                        <RouterLink :to="'/tour/' + accommodation.id + 'where?name=' + accommodation.slug"
                            class="accommodation-details">
                            <div class="card-body">
                                    <img loading="lazy" :src="ecomURL + accommodation.file_path" alt=""
                                        class="card-img img-fluid" />

                                    <div class="card-details">
                                        <h6 class="card-title text-truncate">
                                            {{ accommodation.title }}
                                        </h6>
                                        <h6 class="card-text my-3" v-if="!accommodation.price">
                                            <i class="bi bi-cash-coin mr-1"></i> Rate Not Available
                                        </h6>
                                        <h6 class="card-text my-3" v-else>
                                            <i class="bi bi-cash-coin mr-1"></i> Nu. {{ accommodation.price }} /
                                            trip
                                        </h6>
                                        <div class="location-tours text-truncate mb-2">
                                            <i class="bi bi-geo-alt"></i>{{ accommodation.name }}
                                        </div>
                                        <div class="duration-tours text-truncate" v-if="!accommodation.date_form_to">
                                            <i class="bi bi-stopwatch"></i>
                                            Duration Not Available
                                        </div>
                                        <div class="duration-tours text-truncate" v-else>
                                            <i class="bi bi-stopwatch"></i>
                                            {{ accommodation.date_form_to }}
                                        </div>
                                    </div>
                                </div>
                        </RouterLink>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
export default {
    name: "SearchTours",
    async setup() {
        const Accommodations = ref(null);
        const ecomURL = "https://booking.shinebhutan.com/uploads/";
        const ecom_products = await fetch(
            "https://booking.shinebhutan.com/api/bc_tours"
        );
        Accommodations.value = await ecom_products.json();

        return {
            Accommodations,
            ecomURL,
        };
    },
    methods: {
        filteredProducts() {
            return this.Accommodations.filter(
                (product) => product.price > 0.00
            );
        },
        filteredProducts1() {
            return this.Accommodations.filter(
                (product) => product.price > 0.00 && product.price <= 5000.00
            );
        },
        filteredProducts2() {
            return this.Accommodations.filter(
                (product) => product.price > 5000.00 && product.price <= 10000.00
            );
        },
        filteredProducts3() {
            return this.Accommodations.filter(
                (product) => product.price > 10000.00 && product.price <= 15000.00
            );
        },
        filteredProducts4() {
            return this.Accommodations.filter(
                (product) => product.price > 15000.00
            );
        },
    },
    computed: {
        filterProducts() {
            return this.filteredProducts();
        },
        filterProducts1() {
            return this.filteredProducts1();
        },
        filterProducts2() {
            return this.filteredProducts2();
        },
        filterProducts3() {
            return this.filteredProducts3();
        },
        filterProducts4() {
            return this.filteredProducts4();
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
