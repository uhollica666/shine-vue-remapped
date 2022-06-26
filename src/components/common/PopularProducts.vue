<template>
    <div>
        <h4 class="text-center p-3 mt-5">Top Popular Products</h4>
        <div class="row flex-row flex-nowrap overflow-auto mb-5">
            <div class="col-md-3 col-lg-3 col-xl-3 col-sm-6 col-xs-6 mt-3 mx-auto" v-for="product in products"
                :key="product.id">
                <div class="card mt-3 mb-3">
                    <div class="card-body">
                        <img :src="product.thumbnail_image" alt="" class="card-img-blog" />
                        <RouterLink to="/" class="category-details">
                            <div class="card-details">
                                <h6 class="card-title text-truncate">
                                    {{ product.name }}
                                </h6>
                                <h6 class="card-text my-3">
                                    <i class="bi bi-cash-coin mr-1"></i> Nu.
                                    {{ product.stroked_price }}
                                </h6>
                            </div>
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
export default {
    name: "PopularProducts",
    async setup() {
        const products = ref(null);
        const catSubtitle = "Eastern Bhutan Destinations Now Open";
        const product = await fetch(
            "https://booking.hemantbhutanrealestate.com/api/v2/products"
        );
        products.value = await product.data.json();

        return {
            /* eslint-disable */
            products,
            catSubtitle,
            modalActive,
            toggleModal,
        };
    }
};
</script>

<style scoped>
.card-img-blog {
    aspect-ratio: 16/9;
    width: 100%;
    object-fit: cover;
    border-radius: 5px;
}
</style>