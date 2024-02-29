<template>
  <div class="container-fluid my-5">
    <div v-for="product in products" :key="product.id">
      <div class="row product-card" v-if="product.slug === $route.params.slug">
        <div class="col-md-6 d-flex">
          <img :src="siteURL + 'public/' + product.file_name" :alt="product.name" class="img-fluid img-prod"
            loading="lazy" />
        </div>
        <div class="col-md-6 py-5">
          <section class="row">
            <div class="col-md-12 prod-descrip">
              <h3 class="text-capitalize">{{ product.name }}</h3>
            </div>
            <div class="col-md-6" v-if="!product.rating">
              <i class="bi bi-star-fill text-warning prod-descrip"></i> Product
              Rating: <em><b class="mx-1">No Ratings Yet!</b></em>
            </div>
            <div class="col-md-6" v-else>
              <i class="bi bi-star-fill text-warning prod-descrip"></i> Product
              Rating: {{ product.rating }}
            </div>
            <div class="col-md-6">
              <i class="bi bi-tag"></i> {{ product.cat_name }}
            </div>
          </section>
          <div class="hr my-4"></div>
          <section class="row">
            <div class="col-md-12 prod-descrip">
              <p><b>Price:</b></p>
            </div>
            <div class="col-md-12 prod-descrip" v-if="product.parent_name === 'Handicrats'">
              <h4>Nu. {{ product.unit_price }} <span> per {{ product.unit }}</span></h4>
            </div>
            <div class="col-md-12 prod-descrip" v-else>
              <h4>Nu. {{ product.unit_price }} <span>/ {{ product.unit }}</span></h4>
            </div>
          </section>
          <div class="hr my-4"></div>
          <section class="row">
            <div class="col-md-12 prod-descrip">
              <p><b>Description:</b></p>
            </div>
            <div class="col-md-12 descrip prod-descrip">
              <p>{{ product.meta_description }}</p>
            </div>
          </section>
          <div class="hr my-4"></div>
          <section class="row">
            <a :href="siteURL + 'product/' + product.slug">
              <button class="btn-buy">
                <i class="bi bi-eye"></i>Proceed to Buy
              </button>
            </a>
            <p class="py-3 notice-change">
              <em style="font-size: 12px !important">Note: you will be redirected to a more secured server to
                proceed futher with booking and payments</em>
            </p>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "ProductDetails",

  async setup() {
    const products = ref(null);
    const siteURL = "https://shop.shinebhutan.com/";
    const ecom_products = await fetch(
      "https://shop.shinebhutan.com/api/v1/get_frontend_products"
    );
    products.value = await ecom_products.json();

    return {
      products,
      siteURL,
    };
  },
};
</script>

<style scoped>
.notice-change {
  color: #dbba92;
}

.product-card {
  padding: 1rem;
  border: 1px solid #dedede;
  background: #fff;
  border-radius: 5px;
  margin-bottom: 1rem;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
}

.img-prod {
  width: 100%;
  aspect-ratio: 2/1;
  background-color: #dedede;
  object-fit: cover;
  border-radius: 5px;
  margin: 0;
}

img.img-prod:hover {
  backdrop-filter: opacity(0.5);
}

.hr {
  background: #dedede;
  width: 100%;
  height: 1px;
}

.descrip {
  min-height: 3rem;
}

.btn-buy {
  background: #f7941e;
  color: #fff;
  border-radius: 20rem;
  padding: 0.5rem 1rem;
  border: none;
}

.btn-buy:hover {
  background: #f9741e;
}

.prod-descrip {
  color: #2c3e50;
}
</style>
