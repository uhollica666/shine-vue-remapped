<template>
  <div>
    <div class="row mt-3">
      <div class="col-md-6 mb-3">
        <h6 class="text-center py-3 home-heading">Agri Products</h6>
        <div class="container home-container">
          <div class="product-images">
            <div class="cardo">card1</div>
            <div class="cardo">card1</div>
            <div class="cardo">card1</div>
            <div class="cardo">card1</div>
          </div>
          <RouterLink to="/agriproducts" class="d-flex home-sec">
            <button class="btn btn-home mb-3">View More</button>
          </RouterLink>
        </div>
      </div>
      <div class="col-md-6 mb-3">
        <h6 class="text-center py-3 home-heading">Handicraft Products</h6>
        <div class="container home-container">
          <div class="product-images">
            <div class="cardo">card1</div>
            <div class="cardo">card1</div>
            <div class="cardo">card1</div>
            <div class="cardo">card1</div>
          </div>
          <RouterLink to="/handicrafts" class="d-flex home-sec">
            <button class="btn btn-home mb-3">View More</button>
          </RouterLink>
        </div>
      </div>
    </div>

    <div class="row mt-5">
      <div class="col-md-12 col-lg-12 col-xl-12 col-sm-12 col-xs-12">
        <h6 class="p-3 home-linear-heading">Tour Packages</h6>
        <div class="home-tour-group">
          <div class="row">
            <div
              class="col-md-2 home-objects"
              v-for="tour in homeTours"
              :key="tour.id"
            >
              <img class="card-img" :src="apiURL + tour.file_path" />
              <RouterLink :to="'/tours/' + tour.title" class="category-details">
                <div class="card-details">
                  <h6
                    class="card-title text-truncate text-capitalize p-3 text-center"
                  >
                    {{ tour.title }}
                  </h6>
                </div>
              </RouterLink>
            </div>
          </div>
          <!-- <RouterLink to="/tours">
                    <button class="btn btn-home my-3">View All</button>
                </RouterLink> -->
        </div>
      </div>
    </div>

    <div class="row mt-5">
      <div class="col-md-12 col-lg-12 col-xl-12 col-sm-12 col-xs-12">
        <h6 class="p-3 home-linear-heading">Accommodation</h6>
        <div class="home-tour-group">
          <div class="row">
            <div
              class="col-md-3 home-objects"
              v-for="accommodation in homeAccommodations"
              :key="accommodation.id"
            >
              <img class="card-img" :src="apiURL + accommodation.file_path" />
              <RouterLink
                :to="'/tours/' + accommodation.title"
                class="category-details"
              >
                <div class="card-details">
                  <h6
                    class="card-title text-truncate text-capitalize p-3 text-center"
                  >
                    {{ accommodation.title }}
                  </h6>
                </div>
              </RouterLink>
            </div>
          </div>
          <!-- <RouterLink to="/accommodation">
                    <button class="btn btn-home my-2">View All</button>
                </RouterLink> -->
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-md-6 mt-3">
          <h6 class="text-center py-3 home-heading">Popular Agri Products</h6>
          <div class="container home-container">
            <div class="product-images">
              <div class="cardo">card1</div>
              <div class="cardo">card1</div>
              <div class="cardo">card1</div>
              <div class="cardo">card1</div>
            </div>
            <RouterLink to="/agriproducts" class="d-flex home-sec">
              <button class="btn btn-home mb-3">View More</button>
            </RouterLink>
          </div>
        </div>
        <div class="col-md-6 mt-3">
          <h6 class="text-center py-3 home-heading">
            Popular Handicraft Products
          </h6>
          <div class="container home-container">
            <div class="product-images">
              <div class="cardo">card1</div>
              <div class="cardo">card1</div>
              <div class="cardo">card1</div>
              <div class="cardo">card1</div>
            </div>
            <RouterLink to="/handicrafts" class="d-flex home-sec">
              <button class="btn btn-home mb-3">View More</button>
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
    const homeAccommodations = ref(null);
    const apiURL = "https://dev.hemantbhutanrealestate.com/uploads/";
    const siteURL = "https://dev.hemantbhutanrealestate.com/";
    const [bc_homeTours, bc_homeAccommodations] = await Promise.all([
      fetch("https://dev.hemantbhutanrealestate.com/api/bc_tours"),
      fetch("https://dev.hemantbhutanrealestate.com/api/bc_spaces"),
    ]);
    homeTours.value = await bc_homeTours.json();
    homeAccommodations.value = await bc_homeAccommodations.json();

    return {
      homeTours,
      homeAccommodations,
      siteURL,
      apiURL,
    };
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
}

.product-images {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem;
}

.cardo {
  width: 40%;
  height: auto;
  background: #f7941e;
  border-radius: 5px;
  margin: 0.5rem;
  color: #fff;
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
