<template>
  <div>
    <div class="accommodation-element mt-5">
      <h4 class="text-capitalize">
        explore our top featured {{ $route.name }}
      </h4>
      <p class="mt-3">Discover the freshness of Bhutan</p>
    </div>
    <div class="row">
      <template v-for="product in products">
        <div
          v-if="product.parent_name === 'Agri Products'"
          :key="product.id"
          class="col-md-4 col-lg-4 col-xl-4 col-sm-6 col-xs-12"
        >
          <div class="card mt-5">
            <div class="card-body">
              <img
                loading="lazy"
                :src="ecomURL + 'public/' + product.file_name"
                alt=""
                class="card-img img-fluid"
              />
              <div class="card-details">
                <h6 class="card-title text-truncate">
                  {{ product.name }}
                </h6>
                <p class="text-small text-grey text-truncate my-2">
                  {{ product.meta_description }}
                </p>
                <div class="product-row my-3">
                  <h6 class="card-text text-truncate">
                    <i class="bi bi-cash-coin mr-1"></i> Nu.
                    {{ product.unit_price }} per KG
                  </h6>
                  <div class="duration-tours text-truncate">
                    <i class="bi bi-bookmark-star"></i>
                    {{ product.cat_name }}
                  </div>
                </div>
                <div class="preview-buttons d-flex item-center">
                  <RouterLink :to="'/product/' + product.slug">
                    <button class="btn btn-preview mx-auto my-2">
                      <i class="bi bi-eye mr-1"></i>
                      Preview
                    </button>
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "FeaturedProducts",
  props: ["products"],

  async setup() {
    const products = ref(null);
    const ecomURL = "https://shop.shinebhutan.com/";
    const catSubtitle = "Eastern Bhutan Destinations Now Open";
    const product = await fetch(
      "https://shop.shinebhutan.com/api/v1/get_frontend_products"
    );
    products.value = await product.json();

    return {
      /* eslint-disable */
      products,
      catSubtitle,
      ecomURL,
    };
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
