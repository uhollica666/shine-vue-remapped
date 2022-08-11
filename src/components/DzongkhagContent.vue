<template>
  <div>
    <div class="dzongkhag-accommodation mt-5">
      <h5 class="text-capitalize">
        Explore accommodatons under
        {{ $route.params.location_id }} dzongkhag
      </h5>
      <div class="row">
        <template v-for="accommodation in accommodations">
          <div class="col-md-4 col-lg-4 col-xl-4 col-sm-6 col-xs-12 mt-3"
            v-if="accommodation.name === $route.params.location_id" :key="accommodation.id">
            <div class="card mt-3">
              <RouterLink :to="'/properties/' + accommodation.id + 'where?name=' + accommodation.slug"
                class="accommodation-details">
                <div class="card-body">
                  <img loading="lazy" :src="apiURL + accommodation.file_path" alt="" class="card-img img-fluid" />
                  <div class="card-details">
                    <h6 class="card-title text-truncate">
                      {{ accommodation.title }}
                    </h6>
                    <h6 class="card-text my-3">
                      <i class="bi bi-cash-coin mr-1"></i> Nu.
                      {{ accommodation.price }} / night
                    </h6>
                    <div class="details">
                      <div class="location text-truncate">
                        <i class="bi bi-geo-alt"></i>{{ accommodation.name }}
                      </div>
                      <h6 class="rating" v-if="!accommodation.review_score">
                        <i class="bi bi-star-fill start-icon mx-1"></i>
                        No reviews
                      </h6>
                      <h6 class="rating" v-else>
                        <i class="bi bi-star-fill start-icon mx-1"></i>
                        {{ accommodation.review_score }} / 5
                      </h6>
                    </div>
                  </div>
                </div>
              </RouterLink>
            </div>
          </div>
        </template>
      </div>
    </div>

    <div class="dzongkhag-accommodation mt-5">
      <h5 class="text-capitalize">
        Explore Hotels under
        {{ $route.params.location_id }} dzongkhag
      </h5>
      <div class="row">
        <template v-for="hotel in hotels">
          <div class="col-md-4 col-lg-4 col-xl-4 col-sm-6 col-xs-6 mt-3" v-if="hotel.name === $route.params.location_id"
            :key="hotel.id">
            <div class="card mt-3">
              <RouterLink :to="'/hotel/' + hotel.id + 'where?name=' + hotel.slug" class="accommodation-details">
                <div class="card-body">
                  <img loading="lazy" :src="apiURL + hotel.file_path" alt="" class="card-img img-fluid" />
                  <div class="card-details">
                    <h6 class="card-title text-truncate">
                      {{ hotel.title }}
                    </h6>
                    <h6 class="card-text my-3">
                      <i class="bi bi-cash-coin mr-1"></i> Nu.
                      {{ hotel.price }} / night
                    </h6>
                    <div class="details">
                      <div class="location text-truncate">
                        <i class="bi bi-geo-alt"></i>{{ hotel.name }}
                      </div>
                      <h6 class="rating" v-if="!hotel.review_score">
                        <i class="bi bi-star-fill start-icon mx-1"></i>
                        No reviews
                      </h6>
                      <h6 class="rating" v-else>
                        <i class="bi bi-star-fill start-icon mx-1"></i>
                        {{ hotel.review_score }} / 5
                      </h6>
                    </div>
                  </div>
                </div>
              </RouterLink>
            </div>
          </div>
        </template>
      </div>
    </div>

    <div class="dzongkhag-accommodation mt-5">
      <h5 class="text-capitalize">
        Explore Tours under {{ $route.params.location_id }} dzongkhag
      </h5>
      <div class="row">
        <template v-for="tour in tours">
          <div class="col-md-4 col-lg-4 col-xl-4 col-sm-6 col-xs-12 mt-3" :key="tour.id"
            v-if="tour.name === $route.params.location_id">
            <div class="card mt-2">
              <RouterLink :to="'/tour/' + tour.slug" class="accommodation-details">
                <div class="card-body">
                  <img loading="lazy" :src="apiURL + tour.file_path" alt="" class="card-img img-fluid" />
                  <div class="card-details">
                    <h6 class="card-title text-truncate">
                      {{ tour.title }}
                    </h6>
                    <h6 class="card-text my-3">
                      <i class="bi bi-cash-coin mr-1"></i> Nu.
                      {{ tour.price }} / night
                    </h6>
                    <div class="location-tours text-truncate mb-2">
                      <i class="bi bi-geo-alt"></i>{{ tour.name }}
                    </div>
                    <div class="duration-tours text-truncate" v-if="!tour.date_form_to">
                      <i class="bi bi-stopwatch"></i>
                      duration not available
                    </div>
                    <div class="duration-tours text-truncate" v-else>
                      <i class="bi bi-stopwatch"></i>
                      {{ tour.date_form_to }}
                    </div>
                  </div>
                </div>
              </RouterLink>
            </div>
          </div>
        </template>
      </div>
    </div>

    <div class="my-5">
      <h5 class="text-capitalize my-3">
        A little Insight about {{ $route.params.location_id }}
      </h5>
      <template v-for="detail in dzongkhagDetails">
        <div v-if="detail.name === $route.params.location_id" :key="detail.id" class="quote-about px-5 py-3">
          <em><span v-html="detail.content" class="about-dzongkhag-details lead py-4 px-2">
            </span></em>
        </div>
      </template>
    </div>

    <div class="dzongkhag-accommodation mt-5">
      <h5 class="text-capitalize">
        top selling agri products from
        {{ $route.params.location_id }} dzongkhag
      </h5>
      <div class="row">
        <template v-for="product in agriProducts">
          <div class="col-md-4 col-lg-4 col-xl-4 col-sm-6 col-xs-12 mt-3" :key="product.id"
            v-if="product.parent_name === 'Agri Products' && product.shop_address === $route.params.location_id">
            <div class="card mt-2">
              <RouterLink :to="'/product/' + product.slug" class="accommodation-details">
                <div class="card-body">
                  <img loading="lazy" :src="ecomURL + 'public/' + product.file_name" alt=""
                    class="card-img img-fluid" />
                  <div class="card-details py-3">
                    <h5 class="card-title text-truncate">
                      {{ product.name }}
                    </h5>
                    <div class="d-flex shop-detail">
                        <h6 class="card-text my-3 me-4">
                          <i class="bi bi-cash-coin mr-1"></i> Nu.
                          {{ product.unit_price }} / kg
                        </h6>
                        <i class="bi bi-shop"></i>
                        {{product.shop_name}}
                    </div>
                    <h6 class="text-gray">
                      <i class="bi bi-geo"></i>
                      {{ product.shop_address }}
                    </h6>
                  </div>
                </div>
              </RouterLink>
            </div>
          </div>
        </template>
      </div>
    </div>

    <div class="dzongkhag-accommodation mt-5">
      <h5 class="text-capitalize">
        top selling handicraft products from
        {{ $route.params.location_id }} dzongkhag
      </h5>
      <div class="row">
        <template v-for="product in agriProducts">
          <div class="col-md-4 col-lg-3 col-xl-3 col-sm-6 col-xs-12 mt-3" :key="product.id"
            v-if="product.parent_name === 'Handicrafts' && product.shop_address === 'Zhemgang'">
            <div class="card mt-2">
              <RouterLink :to="'/product/' + product.slug" class="accommodation-details">
                <div class="card-body">
                  <img loading="lazy" :src="ecomURL + 'public/' + product.file_name" alt=""
                    class="card-img img-fluid" />
                  <div class="card-details">
                    <h6 class="card-title text-truncate">
                      {{ product.name }}
                    </h6>
                    <h6 class="card-text my-3">
                      <i class="bi bi-cash-coin mr-1"></i> Nu.
                      {{ product.unit_price }} / pc
                    </h6>
                  </div>
                </div>
              </RouterLink>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "DzongkhagContent",
  async setup() {
    const tours = ref(null);
    const accommodations = ref(null);
    const dzongkhagDetails = ref(null);
    const hotels = ref(null);
    const agriProducts = ref(null);
    const apiURL = "https://booking.shinebhutan.com/uploads/";
    const siteURL = "https://booking.shinebhutan.com";
    const ecomURL = "https://shop.shinebhutan.com/";
    const bc_tours = await fetch(
      "https://booking.shinebhutan.com/api/bc_tours"
    );
    const bc_accommodations = await fetch(
      "https://booking.shinebhutan.com/api/bc_spaces"
    );
    const bc_dzongkhagDetails = await fetch(
      "https://booking.shinebhutan.com/api/bc_locations"
    );
    const bc_hotels = await fetch(
      "https://booking.shinebhutan.com/api/bc_hotels"
    );
    const ecom_products = await fetch(
      "https://shop.shinebhutan.com/api/v1/get_frontend_products"
    );
    tours.value = await bc_tours.json();
    accommodations.value = await bc_accommodations.json();
    dzongkhagDetails.value = await bc_dzongkhagDetails.json();
    hotels.value = await bc_hotels.json();
    agriProducts.value = await ecom_products.json();

    return {
      /*eslint-disable*/
      tours,
      agriProducts,
      accommodations,
      dzongkhagDetails,
      apiURL,
      siteURL,
      ecomURL,
      hotels,
    };
  },
};
</script>

<style scoped>
.shop-detail{
  display: flex;
  align-items: center;
}
.quote-about {
  background-color: #ffffff;
  border-radius: 0.5rem;
  color: #2c3e50;
}

span.about-dzongkhag-details h4 {
  color: #f7941e;
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

.start-icon {
  color: #f7941e;
  padding: 2px;
  padding-bottom: 5px;
}

.rating {
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.26);
}

.card-body {
  padding: 0;
}

.card-img {
  width: 100%;
  aspect-ratio: 16/10 !important;
  object-fit: cover;
}

.card-details {
  padding: 0.5rem 1rem;
}

.details {
  display: flex;
}

.location {
  width: 60%;
}

.price {
  text-align: right;
}

.accommodation-details {
  text-decoration: none;
  color: #2c3e50;
}

.accommodation-details:hover {
  color: #f7941e;
}
</style>
