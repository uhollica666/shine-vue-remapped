<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-6">
        <h6 class="text-center py-3 home-heading">Agri Products</h6>
        <div class="container home-container">
          <div class="product-images row">
            <template v-for="product in computedProducts">
              <div class="cardo col-md-6 mt-2" v-if="product.parent_name === 'Agri Products'" :key="product.id">
                <img loading="lazy" :src="ecomURL + 'public/' + product.file_name" alt="" class="card-img img-fluid" />
              </div>
            </template>
          </div>
          <RouterLink to="/agriproducts" class="d-flex home-sec">
            <button class="btn btn-home mb-3">
              <i class="bi bi-eye"></i>View All Agri Products
            </button>
          </RouterLink>
        </div>
      </div>

      <div class="col-md-6 mb-3">
        <h6 class="text-center py-3 home-heading">Handicraft Products</h6>
        <div class="container home-container">
          <div class="product-images row">
            <template v-for="product in computedHandicrafts">
              <div class="cardo col-md-6 mt-2" v-if="product.parent_name === 'Handicrats'" :key="product.id">
                <img loading="lazy" :src="ecomURL + 'public/' + product.file_name" alt="" class="card-img img-fluid" />
              </div>
            </template>
          </div>
          <RouterLink to="/handicrafts" class="d-flex home-sec">
            <button class="btn btn-home mb-3">
              <i class="bi bi-eye"></i>View All Handicrafts
            </button>
          </RouterLink>
        </div>
      </div>
    </div>

    <div class="row mt-5">
      <div class="col-md-12 col-lg-12 col-xl-12 col-sm-12 col-xs-12">
        <h6 class="p-3 home-linear-heading">Tour Packages</h6>
        <div class="home-tour-group">
          <div class="row">
            <div class="col-md-2 col-sm-6 col-xs-6 home-objects" v-for="tour in computedTours" :key="tour.id">
              <RouterLink :to="'/tour/' + tour.slug" class="category-details">
              <img loading="lazy" class="card-img img-fluid" :src="apiURL + tour.file_path" />
                <div class="card-details">
                  <h6 class="card-title text-truncate text-capitalize py-2">
                    {{ tour.title }}
                  </h6>
                  <p class="text-truncate">
                    <i class="bi bi-geo"></i>{{ tour.name }}
                  </p>
                </div>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
      <RouterLink to="/tours">
        <button class="btn btn-preview mx-auto my-2">
          <i class="bi bi-eye mr-1"></i>
          View All Tour Packages
        </button>
      </RouterLink>
    </div>

    <div class="row mt-5">
      <div class="col-md-12 col-lg-12 col-xl-12 col-sm-12 col-xs-12">
        <h6 class="p-3 home-linear-heading">Accommodation</h6>
        <div class="home-tour-group">
          <div class="row">
            <div class="col-md-3 col-sm-6 col-xs-6 home-objects" v-for="accommodation in computedAccommodation"
              :key="accommodation.id">
              <RouterLink :to="
                '/properties/' +
                accommodation.id +
                'where?name=' +
                accommodation.slug
              " class="category-details">
              <img loading="lazy" class="card-img img-fluid" :src="apiURL + accommodation.file_path" />
              
                <div class="card-details">
                  <h6 class="card-title text-truncate text-capitalize py-2" v-if="!accommodation.title">
                    - Name Not Available -
                  </h6>
                  <h6 class="card-title text-truncate text-capitalize py-2" v-else>
                    {{ accommodation.title }}
                  </h6>
                  <p class="text-truncate">
                    <i class="bi bi-geo"></i>{{ accommodation.name }}
                  </p>
                </div>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
      <RouterLink to="/accommodation#spaces">
        <button class="btn btn-preview mx-auto my-2">
          <i class="bi bi-eye mr-1"></i>
          View All Accommodations
        </button>
      </RouterLink>
    </div>

    <div class="row mt-5">
      <div class="col-md-12 col-lg-12 col-xl-12 col-sm-12 col-xs-12">
        <h6 class="p-3 home-linear-heading">Hotels</h6>
        <div class="home-tour-group">
          <div class="row">
            <div class="col-md-3 col-sm-6 col-xs-6 home-objects" v-for="hotel in computedHotels" :key="hotel.id">            
              <RouterLink :to="'/hotel/' + hotel.id + 'where?name=' + hotel.slug" class="category-details">
              <img loading="lazy" class="card-img img-fluid" :src="apiURL + hotel.file_path" />
                <div class="card-details">
                  <h6 class="card-title text-truncate text-capitalize py-2" v-if="!hotel.title">
                    - Name Not Available -
                  </h6>
                  <h6 class="card-title text-truncate text-capitalize py-2" v-else>
                    {{ hotel.title }}
                  </h6>
                  <p class="text-truncate">
                    <i class="bi bi-geo"></i>{{ hotel.name }}
                  </p>
                </div>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
      <RouterLink to="/accommodation#hotels">
        <button class="btn btn-preview mx-auto my-2">
          <i class="bi bi-eye mr-1"></i> View All Hotels
        </button>
      </RouterLink>
    </div>

    <div class="row my-5">
      <div class="col-md-6 mt-3">
        <h6 class="text-center py-3 home-heading">Popular Agri Products</h6>
        <div class="container home-container">
          <div class="product-images row">
            <template v-for="product in computedProducts">
              <div class="cardo col-md-6 mt-2" v-if="product.parent_name === 'Agri Products'" :key="product.id">
                <img loading="lazy" :src="ecomURL + 'public/' + product.file_name" alt="" class="card-img img-fluid" />
              </div>
            </template>
          </div>
          <RouterLink to="/agriproducts" class="d-flex home-sec">
            <button class="btn btn-home mb-3">
              <i class="bi bi-eye"></i>View All
            </button>
          </RouterLink>
        </div>
      </div>

      <div class="col-md-6 mt-3">
        <h6 class="text-center py-3 home-heading">
          Popular Handicraft Products
        </h6>
        <div class="container home-container">
          <div class="product-images row">
            <template v-for="product in computedHandicrafts">
              <div class="cardo col-md-6 mt-2" v-if="product.parent_name === 'Handicrats'" :key="product.id">
                <img loading="lazy" :src="ecomURL + 'public/' + product.file_name" alt="" class="card-img img-fluid" />
              </div>
            </template>
          </div>
          <RouterLink to="/handicrafts" class="d-flex home-sec">
            <button class="btn btn-home mb-3">
              <i class="bi bi-eye"></i>View All
            </button>
          </RouterLink>
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
    const apiURL = "https://booking.shinebhutan.com/uploads/";
    const siteURL = "https://booking.shinebhutan.com/";
    const ecomURL = "https://shop.shinebhutan.com/";
    const bc_homeTours = await fetch(
      "https://booking.shinebhutan.com/api/bc_tours"
    );
    const bc_homeAccommodations = await fetch(
      "https://booking.shinebhutan.com/api/bc_spaces"
    );
    const bc_homeHotels = await fetch(
      "https://booking.shinebhutan.com/api/bc_hotels"
    );
    const bc_products = await fetch(
      "https://shop.shinebhutan.com/api/v1/get_frontend_products"
    );

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

  methods: {
    sortLatestHotels() {
      return this.homeHotels.sort((a, b) => (a.id < b.id ? 1 : -1));
    },
    sortLatestAccommodations() {
      return this.homeAccommodations.sort((a, b) => (a.id < b.id ? 1 : -1));
    },
    sortLatestTours() {
      return this.homeTours.sort((a, b) => (a.id < b.id ? 1 : -1));
    },
    filteredProducts() {
      return this.products.filter((product) => {
        return product.parent_name === "Handicrats";
      });
    },
    filteredAgriProds() {
      return this.products.filter((product) => {
        return product.parent_name === "Agri Products";
      });
    },
    sortLatestProducts() {
      return this.filteredProducts().sort((a, b) => (a.id < b.id ? 1 : -1));
    },
  },
  data() {
    return {
      limit: 4,
      hotelLimit: 8,
      tourLimit: 8,
    };
  },

  computed: {
    computedProducts() {
      return this.limit
        ? this.filteredAgriProds().slice(0, this.limit)
        : this.filteredAgriProds();
    },
    computedHandicrafts() {
      return this.limit
        ? this.filteredProducts().slice(0, this.limit)
        : this.filteredProducts();
    },
    computedAccommodation() {
      return this.limit
        ? this.sortLatestAccommodations().slice(0, this.limit)
        : this.sortLatestAccommodations();
    },
    computedHotels() {
      return this.limit
        ? this.sortLatestHotels().slice(0, this.limit)
        : this.sortLatestHotels();
    },
    computedTours() {
      return this.tourLimit
        ? this.sortLatestTours().slice(0, this.tourLimit)
        : this.sortLatestTours();
    },
  },
};
</script>

<style scoped>
.btn-preview {
  border: none;
}

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
  margin: 0.5rem;
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

/* .home-linear-heading::after{
  content: '🔄️';
  margin-left: 2rem;
} */

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
  aspect-ratio: 16/10;
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
