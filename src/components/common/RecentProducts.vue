<template>
  <div>
    <h4 class="text-center p-3 mt-5">Recently Added Products</h4>
    <div class="row flex-row flex-nowrap overflow-auto mb-5">
      <div class="col-md-3 col-lg-3 col-xl-3 col-sm-6 col-xs-6 mt-3 mx-auto" v-for="product in products"
        :key="product.id">
        <div class="card mt-3 mb-3">
          <div class="card-body">
            <img loading="lazy" :src="ecomURL + 'public/' + product.file_name" alt="" class="card-img-blog" />
            <RouterLink :to="'/product/' + product.slug" class="category-details">
              <div class="card-details">
                <h6 class="card-title text-truncate">
                  {{ product.name }}
                </h6>
                <p class="post-details text-truncate">
                  {{ product.meta_description }}
                </p>
                <div class="location text-truncate">
                  <i class="bi bi-cash-coin"></i> Nu. {{ product.unit_price }} /
                  KG
                </div>
                <p class="my-3">
                  <i class="bi bi-tag"></i> Category:
                  {{ product.cat_name }}
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
import { ref } from "vue";
export default {
  name: "RecentProducts",
  async setup() {
    const products = ref(null);
    const catSubtitle = "Eastern Bhutan Destinations Now Open";
    const siteURL = "https://dev.hemantbhutanrealestate.com";
    const ecomURL = "https://booking.hemantbhutanrealestate.com/";
    const product = await fetch(
      "https://booking.hemantbhutanrealestate.com/api/v1/get_frontend_products"
    );
    products.value = await product.json();
    return {
      /* eslint-disable */
      products,
      catSubtitle,
      siteURL,
      ecomURL,
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
