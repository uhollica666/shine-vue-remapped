<template>
  <div>
    <div class="accommodation-element mt-5">
      <h4 class="text-capitalize">
        Your Searched for <u class="fs-4">{{ $route.params.category }}</u>
      </h4>
    </div>
    <div class="row mb-3">
      <template v-for="product in filterProducts">
        <div v-if="product.cat_name === $route.params.category" :key="product.id"
          class="col-md-3 col-lg-3 col-xl-3 col-sm-6 col-xs-6 my-3">
          <div class="card mt-2">
            <div class="card-body">
              <a :href="ecomURL + 'product/' + product.slug">
                <img loading="lazy" :src="ecomURL + 'public/' + product.file_name" alt="" class="card-img img-fluid" />
                <div class="card-details">
                  <h6 class="card-title text-truncate">
                    {{ product.name }}
                  </h6>
                  <p class="text-small text-grey my-2 text-truncate">
                    {{ product.meta_description }}
                  </p>
                  <div class="product-row my-3">
                    <h6 class="card-text text-truncate">
                      <i class="bi bi-cash-coin mr-1"></i> Nu.
                      {{ product.unit_price }} / {{product.unit}}
                    </h6>
                    <div class="duration-tours text-truncate">
                      <i class="bi bi-tag"></i>
                      {{ product.cat_name }}
                    </div>
                  </div>
                  <div class="preview-buttons d-flex item-center">

                    <button class="btn btn-preview mx-auto my-2">
                      <i class="bi bi-eye mr-1"></i>
                      View Details
                    </button>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div v-if="$route.params.category === 'All'" :key="product.id"
          class="col-md-3 col-lg-3 col-xl-3 col-sm-6 col-xs-6 my-3">
          <div class="card mt-2">
            <div class="card-body">
              <a :href="ecomURL + 'product/' + product.slug">
                <img loading="lazy" :src="ecomURL + 'public/' + product.file_name" alt="" class="card-img img-fluid" />
                <div class="card-details">
                  <h6 class="card-title text-truncate">
                    {{ product.name }}
                  </h6>
                  <p class="text-small text-grey my-2 text-truncate">
                    {{ product.meta_description }}
                  </p>
                  <div class="product-row my-3">
                    <h6 class="card-text text-truncate">
                      <i class="bi bi-cash-coin mr-1"></i> Nu.
                      {{ product.unit_price }} / {{product.unit}}
                    </h6>
                    <div class="duration-tours text-truncate">
                      <i class="bi bi-tag"></i>
                      {{ product.cat_name }}
                    </div>
                  </div>
                  <div class="preview-buttons d-flex item-center">

                    <button class="btn btn-preview mx-auto my-2">
                      <i class="bi bi-eye mr-1"></i>
                      View Details
                    </button>
                  </div>
                </div>
              </a>
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
  name: "CategorySearch",
  async setup() {
    const AgriProducts = ref(null);
    const ecomURL = "https://shop.shinebhutan.com/";
    const ecom_products = await fetch(
      "https://shop.shinebhutan.com/api/v1/get_frontend_products"
    );
    AgriProducts.value = await ecom_products.json();

    return {
      AgriProducts,
      ecomURL,
    };
  },
  methods: {
    filteredProducts() {
      return this.AgriProducts.filter(
        (product) => product.parent_name === "Agri Products"
      );
    },
  },
  computed: {
    filterProducts() {
      return this.filteredProducts();
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
