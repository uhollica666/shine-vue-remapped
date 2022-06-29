<template>
  <div>
    <div class="row mt-3">
      <div class="col-md-6 mb-3">
        <h6 class="text-center py-3 home-heading">Agri Products</h6>
        <div class="container home-container">
          <div class="product-images row">
            <template v-for="product in computedAgriProducts">
              <div class="cardo col-md-6 mt-2" v-if="product.parent_name === 'Agri Products'" :key="product.id">
                <img :src="ecomURL + 'public/' + product.file_name" alt="" class="card-img" />
              </div>
            </template>
          </div>
          <RouterLink to="/agriproducts" class="d-flex home-sec">
            <button class="btn btn-home mb-3"><i class="bi bi-eye"></i>View All</button>
          </RouterLink>
        </div>
      </div>

      <div class="col-md-6 mb-3">
        <h6 class="text-center py-3 home-heading">Handicraft Products</h6>
        <div class="container home-container">
          <div class="product-images row">
            <template v-for="product in computedAgriProducts">
              <div class="cardo col-md-6 mt-2" v-if="product.parent_name === 'Handicrats'" :key="product.id">
                <img :src="ecomURL + 'public/' + product.file_name" alt="" class="card-img" />
              </div>
            </template>
          </div>
          <RouterLink to="/handicrafts" class="d-flex home-sec">
            <button class="btn btn-home mb-3"><i class="bi bi-eye"></i>View All</button>
          </RouterLink>
        </div>
      </div>
    </div>

    <div class="row mt-5">
      <div class="col-md-12 col-lg-12 col-xl-12 col-sm-12 col-xs-12">
        <h6 class="p-3 home-linear-heading">Tour Packages</h6>
        <div class="home-tour-group">
          <div class="row">
            <div class="col-md-2 col-sm-6 col-xs-6 home-objects" v-for="tour in homeTours" :key="tour.id">
              <img class="card-img img-fluid" :src="apiURL + tour.file_path" />
              <a :href="siteURL + 'tour/' + tour.slug" class="category-details" target="_blank">
                <div class="card-details">
                  <h6 class="card-title text-truncate text-capitalize py-2">
                    {{ tour.title }}
                  </h6>
                  <p class="text-truncate"><i class="bi bi-geo"></i>{{ tour.name }}</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row mt-5">
      <div class="col-md-12 col-lg-12 col-xl-12 col-sm-12 col-xs-12">
        <h6 class="p-3 home-linear-heading">Accommodation</h6>
        <div class="home-tour-group">
          <div class="row">
            <div class="col-md-3 col-sm-6 col-xs-6 home-objects" v-for="accommodation in homeAccommodations"
              :key="accommodation.id">
              <img class="card-img img-fluid" :src="apiURL + accommodation.file_path" />
              <a :href="siteURL + 'space/' + accommodation.slug" class="category-details" target="_blank">
                <div class="card-details">
                  <h6 class="card-title text-truncate text-capitalize py-2">
                    {{ accommodation.title }}
                  </h6>
                  <p class="text-truncate"><i class="bi bi-geo"></i>{{ accommodation.name }}</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row mt-5">
      <div class="col-md-12 col-lg-12 col-xl-12 col-sm-12 col-xs-12">
        <h6 class="p-3 home-linear-heading">Hotels</h6>
        <div class="home-tour-group">
          <div class="row">
            <div class="col-md-3 col-sm-6 col-xs-6 home-objects" v-for="accommodation in homeHotels"
              :key="accommodation.id">
              <img class="card-img img-fluid" :src="apiURL + accommodation.file_path" />
              <a :href="siteURL + 'hotel/' + accommodation.slug" class="category-details" target="_blank">
                <div class="card-details">
                  <h6 class="card-title text-truncate text-capitalize py-2">
                    {{ accommodation.title }}
                  </h6>
                  <p class="text-truncate"><i class="bi bi-geo"></i>{{ accommodation.name }}</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-md-6 mt-3">
          <h6 class="text-center py-3 home-heading">Popular Agri Products</h6>
          <div class="container home-container">
            <div class="product-images row">
              <template v-for="product in computedAgriProducts">
                <div class="cardo col-md-6 mt-2" v-if="product.parent_name === 'Agri Products'" :key="product.id">
                <img :src="ecomURL + 'public/' + product.file_name" alt="" class="card-img" />
              </div>
              </template>
            </div>
            <RouterLink to="/agriproducts" class="d-flex home-sec">
              <button class="btn btn-home mb-3"><i class="bi bi-eye"></i>View All</button>
            </RouterLink>
          </div>
        </div>

        <div class="col-md-6 mt-3">
          <h6 class="text-center py-3 home-heading">
            Popular Handicraft Products
          </h6>
          <div class="container home-container">
            <div class="product-images row">
              <template v-for="product in computedAgriProducts">
                <div class="cardo col-md-6 mt-2" v-if="product.parent_name === 'Handicrats'" :key="product.id">
                <img :src="ecomURL + 'public/' + product.file_name" alt="" class="card-img" />
              </div>
              </template>
            </div>
            <RouterLink to="/handicrafts" class="d-flex home-sec">
              <button class="btn btn-home mb-3"><i class="bi bi-eye"></i>View All</button>
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
  name: "HomeContent",

  async setup() {
    const homeTours = ref(null);
    const homeHotels = ref(null);
    const homeAccommodations = ref(null);
    const products = ref(null);
    const apiURL = "https://dev.hemantbhutanrealestate.com/uploads/";
    const siteURL = "https://dev.hemantbhutanrealestate.com/";
    const ecomURL = "https://booking.hemantbhutanrealestate.com/";
    const bc_homeTours = await fetch("https://dev.hemantbhutanrealestate.com/api/bc_tours");
    const bc_homeAccommodations = await fetch("https://dev.hemantbhutanrealestate.com/api/bc_spaces");
    const bc_homeHotels = await fetch("https://dev.hemantbhutanrealestate.com/api/bc_hotels");
    const bc_products = await fetch("https://booking.hemantbhutanrealestate.com/api/v1/get_frontend_products");

    homeTours.value = await bc_homeTours.json();
    homeAccommodations.value = await bc_homeAccommodations.json();
    homeHotels.value = await bc_homeHotels.json();
    products.value = await bc_products.json();

    return {
      homeTours,
      products,
      homeAccommodations,
      siteURL,
      apiURL,
      ecomURL,
      homeHotels,
    };
  },
  data() {
    return {
      limit: 6
    }
  },
  computed: {
    computedAgriProducts() {
      return this.limit ? this.products.slice(0, this.limit) : this.products;
    }
  },
};
</script>

<style scoped>
.card-details {
  background: #fff;
  border-radius: 5px;
}

.home-sec {
  text-decoration: none;
}

.home-objects {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  margin: 0 1rem 1rem 1rem;
  padding: 0;
}

.home-objects:hover {
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
}

.home-linear-heading {
  max-width: 50%;
  color: #fff;
  background: #f7941e;
  margin: 0;
  border-radius: 5px 5px 0 0;
}

.home-heading {
  color: #fff;
  background: #f7941e;
  margin: 0;
  border-radius: 5px 5px 0 0;
}

.home-tour-group {
  border-radius: 5px;
  padding: 1rem 0;
}

.home-container {
  border-radius: 5px;
  height: 25rem;
}

.product-images {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem;
}

.cardo {
  width: 48%;
  aspect-ratio: 16/9;
  object-fit: cover;
  border-radius: 5px;
}

.card-img {
  width: 100%;
  aspect-ratio: 16/9;
  border-radius: 5px;
  margin: 0;
}

.btn-home {
  background: #f7941e;
  color: #fff;
  border: none;
  border-radius: 5px;
  margin: 0 auto;
  width: 50%;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 10rem;
}

.btn-home:hover {
  background: #f9741e;
  color: #333369;
}
</style>
