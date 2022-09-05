<template>
  <div>
    <div class="accommodation-element mt-5">
      <h4 class="text-capitalize">
        explore our top featured {{ $route.name }}
      </h4>
      <p class="mt-3">Discover the Amazing Crafts of Bhutan</p>
    </div>
    <div class="row mb-3">
      <template v-for="product in sortProductsLatest()">
        <div v-if="product.parent_name === 'Handicrats'" :key="product.id"
          class="col-md-4 col-lg-4 col-xl-4 col-sm-6 col-xs-12 my-3">
          <div class="card mt-2">
            <a :href="ecomURL + 'product/' + product.slug">
              <div class="card-body">
                <img loading="lazy" :src="ecomURL + 'public/' + product.file_name" alt="" class="card-img img-fluid" />
                <div class="card-details my-3">
                  <h5 class="card-title text-truncate">
                    {{ product.name }}
                  </h5>
                  <p class="text-small text-grey text-truncate my-2">
                    {{ product.meta_description }}
                  </p>
                  <div class="product-row my-3">
                    <h6 class="card-text text-truncate">
                      <i class="bi bi-cash-coin mr-1"></i> Nu.
                      {{ product.unit_price }} / {{ product.unit }}
                    </h6>
                    <div class="duration-tours text-truncate">
                      <i class="bi bi-bookmark-star"></i>
                      {{ product.cat_name }}
                    </div>
                  </div>
                  <div class="my-3 d-flex">
                    <div class="duration-tours text-truncate me-3" v-if="!product.shop_address">
                      <i class="bi bi-geo"></i>
                      (Thimphu)
                    </div>
                    <div class="duration-tours text-truncate me-3" v-else>
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
                    <button class="btn btn-preview my-2">
                      <i class="bi bi-eye mr-1"></i>
                      Preview
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
  name: "FeaturedHandiCrafts",
  props: ["products"],

  async setup() {
    const handiCrafts = ref(null);
    const ecomURL = "https://shop.shinebhutan.com/";
    const ecom_products = await fetch(
      "https://shop.shinebhutan.com/api/v1/get_frontend_products"
    );
    handiCrafts.value = await ecom_products.json();

    return {
      handiCrafts,
      ecomURL,
    };
  },
  methods: {
    sortProductsLatest() {
      return this.handiCrafts.sort((a, b) => {
        return b.id - a.id;
      });
    },
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

.card-img {
  aspect-ratio: 1 !important;
}
</style>