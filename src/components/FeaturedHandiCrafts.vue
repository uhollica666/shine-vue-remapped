<template>
    <div>
        <div class="accommodation-element mt-5">
            <h4 class="text-capitalize">explore our top featured {{ $route.name }}</h4>
            <p class="mt-3">Discover the Amazing Crafts of Bhutan</p>
        </div>
        <div class="row mb-3">
            <div v-for="product in handiCrafts" :key="product.id"
                class="col-md-4 col-lg-4 col-xl-4 col-sm-6 col-xs-12 my-3">
                <div class="card mt-2">
                    <div class="card-body">
                        <img :src="product.image_id" alt="" class="card-img" />
                        <div class="card-details">
                            <h6 class="card-title text-truncate">
                                {{ product.post_id }}
                            </h6>
                            <p class="text-small text-grey text-truncate my-2">{{ product.post_details }}</p>
                            <div class="product-row my-3">
                                <h6 class="card-text text-truncate"><i class="bi bi-cash-coin mr-1"></i> Nu. {{
                                        product.price
                                }}</h6>
                                <div class="duration-tours text-truncate">
                                    <i class="bi bi-bookmark-star"></i>
                                    {{ product.category_id }}
                                </div>
                            </div>
                            <div class="preview-buttons d-flex item-center">
                                <a :href="ecomURL + '/product/' + product.name" target="_blank">
                                    <button class="btn btn-preview mx-auto my-2">
                                        <i class="bi bi-eye mr-1"></i>
                                        Preview
                                    </button>
                                </a>
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
    name: "FeaturedHandiCrafts",
    props: ["products"],

    data() {
        return {
            limit: 9,
        }
    },
    computed: {
        computedObject() {
            return this.limit ? this.products.slice(0, this.limit) : this.products;
        }
    },

    async setup() {
        const handiCrafts = ref(null);
        const ecomURL = "https://booking.hemantbhutanrealestate.com";
        const ecom_products = await fetch(
            "https://booking.hemantbhutanrealestate.com/api/v2/products"
        );
        handiCrafts.value = await ecom_products.json();

        return {
            handiCrafts,
            ecomURL,
        }
    },

};
</script>

<style scoped>
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