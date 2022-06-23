<template>
    <div>
        <h4 class="text-center p-3 mt-5">Recently Added Products</h4>
        <div class="row flex-row flex-nowrap overflow-auto mb-5">
                <div class="col-md-3 col-lg-3 col-xl-3 col-sm-6 col-xs-6 mt-3 mx-auto" v-for="product in recentProducts"
                :key="product.id">
                <div class="card mt-3 mb-3">
                    <div class="card-body">
                        <img :src="product.image_id" alt="" class="card-img-blog" />
                        <RouterLink to="/#AccomodationDetails" class="category-details">
                            <div class="card-details">
                                <h6 class="card-title text-truncate">
                                    {{ product.post_id }}
                                </h6>
                                <p class="post-details text-truncate">{{ product.post_details }}</p>
                                <div class="location text-truncate">
                                    <i class="bi bi-tag"></i> {{ product.category_id }}
                                </div>
                                <p class="my-3">
                                    <i class="bi bi-calendar"></i> Uploaded on
                                    {{ product.date_added }}
                                </p>
                            </div>
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PRODUCTS from "@/APIs/Products_DATA.json";
export default {
    name: "RecentProducts",
    data() {
        return {
            recentProducts: PRODUCTS,
        };
    },
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