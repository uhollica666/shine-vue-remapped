<template>
    <div class="row">
        <div class="accommodation-element mt-5">
            <h4 class="text-capitalize" v-if="$route.params.slug === 'All'">All handicraft Products</h4>
            <h4 class="text-capitalize" v-else>handicraft products from {{ $route.params.slug }}</h4>
            <div class="d-flex pd-cnt ">
                <p class="mt-3">Discover the Freshness of Bhutan</p>
                <p class="mt-3" >Overall Products: ({{handiProductCount()}})</p>
            </div>
        </div>
        <div class="row mb-3">
            <template v-for="product in filteredHandiProds()">
                <div v-if="$route.params.slug === 'All'" :key="product.id"
                    class="col-md-4 col-lg-4 col-xl-4 col-sm-6 col-xs-6 my-3">
                    <div class="card mt-2">
                        <a :href=" siteURL + 'product/' + product.slug">
                            <div class="card-body">
                                <img loading="lazy" :src="siteURL + 'public/' + product.file_name" alt=""
                                    class="card-img img-fluid" />
                                <div class="card-details my-3">
                                    <h5 class="card-title text-truncate">
                                        {{ product.name }}
                                    </h5>
                                    <p class="text-small text-grey my-2 text-truncate">
                                        {{ product.meta_description }}
                                    </p>
                                    <div class="product-row my-2">
                                        <h6 class="card-text text-truncate">
                                            <i class="bi bi-cash-coin mr-1"></i> Nu.
                                            {{ product.unit_price }}/KG
                                        </h6>
                                        <div class="duration-tours text-truncate">
                                            <i class="bi bi-tag"></i>
                                            {{ product.cat_name }}
                                        </div>
                                    </div>
                                    <div class="my-2 d-flex">
                                        <div class="duration-tours text-truncate me-3" v-if="!product.shop_address">
                                            <i class="bi bi-geo"></i>
                                            (Thimphu)
                                        </div>
                                        <div class="duration-tours text-truncate  me-3" v-else>
                                            <i class="bi bi-geo"></i>
                                            {{ product.shop_address }}
                                        </div>
                                        <div class="duration-tours text-truncate" v-if="!product.shop_name">
                                            <i class="bi bi-shop"></i>
                                            Shine
                                        </div>
                                        <div class="duration-tours text-truncate" v-else>
                                            <i class="bi bi-shop"></i>
                                            {{ product.shop_name }}
                                        </div>
                                    </div>
                                    <div class="preview-buttons d-flex item-center">
                                        <button class="btn btn-preview mx-auto my-2">
                                            <i class="bi bi-eye mr-1"></i>
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div v-if="product.shop_address === $route.params.slug" :key="product.id"
                    class="col-md-4 col-lg-4 col-xl-4 col-sm-6 col-xs-6 my-3">
                    <div class="card mt-2">
                        <a :href="siteURL + 'product/' + product.slug">
                            <div class="card-body">
                                <img loading="lazy" :src="siteURL + 'public/' + product.file_name" alt=""
                                    class="card-img img-fluid" />
                                <div class="card-details my-3">
                                    <h5 class="card-title text-truncate">
                                        {{ product.name }}
                                    </h5>
                                    <p class="text-small text-grey my-2 text-truncate">
                                        {{ product.meta_description }}
                                    </p>
                                    <div class="product-row my-2">
                                        <h6 class="card-text text-truncate">
                                            <i class="bi bi-cash-coin mr-1"></i> Nu.
                                            {{ product.unit_price }} per Unit
                                        </h6>
                                        <div class="duration-tours text-truncate">
                                            <i class="bi bi-tag"></i>
                                            {{ product.cat_name }}
                                        </div>
                                    </div>
                                    <div class="my-2 d-flex">
                                        <div class="duration-tours text-truncate me-3" v-if="!product.shop_address">
                                            <i class="bi bi-geo"></i>
                                            (Thimphu)
                                        </div>
                                        <div class="duration-tours text-truncate  me-3" v-else>
                                            <i class="bi bi-geo"></i>
                                            {{ product.shop_address }}
                                        </div>
                                        <div class="duration-tours text-truncate" v-if="!product.shop_name">
                                            <i class="bi bi-shop"></i>
                                            Shine
                                        </div>
                                        <div class="duration-tours text-truncate" v-else>
                                            <i class="bi bi-shop"></i>
                                            {{ product.shop_name }}
                                        </div>
                                    </div>
                                    <div class="preview-buttons d-flex item-center">
                                        <button class="btn btn-preview mx-auto my-2">
                                            <i class="bi bi-eye mr-1"></i>
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

      <script>
import { ref } from "vue";
export default {
    name: "HandiProductsDzo",

    async setup() {
        const handiProducts = ref(null);
        const siteURL = "https://shop.shinebhutan.com/";
        const products = await fetch('https://shop.shinebhutan.com/api/v1/get_frontend_products');
        handiProducts.value = await products.json();

        return {
            handiProducts,
            siteURL,
        };
    },

    methods: {
        filteredHandiProds() {
            return this.handiProducts.filter((product) => {
                return product.parent_name === "Handicrats";
            });
        },
        handiProductCount() {
            return this.filteredHandiProds().length;
        },
    },
};
</script>

<style scoped>
.pd-cnt{
    display: flex;
    justify-content: space-between;
}

img {
    width: 100%;
    aspect-ratio: 16/12 !important;
    object-fit: cover;
}

.spacer {
    opacity: 0;
}

.txty {
    font-size: 1.7rem;
    color: #333369;
}

.card-img-hotel {
    width: 100%;
    aspect-ratio: 16/10;
    margin: 0;
    object-fit: cover;
    border-radius: 5px;
}

.text-larger {
    color: #333369;
    font-size: 1.5rem;
    text-decoration: underline;
}

.heading {
    color: #f7941e;
}

.backBtn {
    background-color: #f7941e;
    color: #fff;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 10rem;
    cursor: pointer;
}
</style>
