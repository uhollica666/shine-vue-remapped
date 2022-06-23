<template>
  <div class="container">
    <div class="row">
      <div class="col-md-3 col-lg-3 col-xl-3 col-sm-12 col-xs-12">
        <SidebarFilter
          :filterItems="filterItems"
          :searchFilter="searchFilter"
          :starFilter="starFilter"
        />
      </div>
      <div class="col-md-9 col-lg-9 col-xl-9 col-sm-12 col-xs-12">
        <PageBanner />
        <div class="dzongkhag-accommodation mt-5">
          <h4 class="text-capitalize">
            Explore accommodatons under
            {{ $route.params.location_id }} dzongkhag
          </h4>
          <div class="row">
            <div
              v-for="accommodation in accommodations"
              :key="accommodation.id"
            >
              <div
                class="col-md-4 col-lg-3 col-xl-3 col-sm-6 col-xs-12 mt-3"
                v-if="accommodation.name === $route.params.location_id"
              >
                <div class="card mt-3">
                  <div class="card-body">
                    <img
                      :src="apiURL + accommodation.file_path"
                      alt=""
                      class="card-img"
                    />
                    <RouterLink
                      :to="'/accomodation/' + accommodation.title"
                      class="accommodation-details"
                    >
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
                            <i class="bi bi-geo-alt"></i
                            >{{ accommodation.name }}
                          </div>
                          <h6 class="rating">
                            <i class="bi bi-star-fill start-icon mx-1"></i>
                            {{ accommodation.review_score }} / 5
                          </h6>
                        </div>
                      </div>
                    </RouterLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="dzongkhag-accommodation mt-5">
          <h4 class="text-capitalize">
            Explore Tours under {{ $route.params.location_id }} dzongkhag
          </h4>
          <div class="row">
            <div v-for="tour in tours" :key="tour.id">
              <div
                class="col-md-4 col-lg-3 col-xl-3 col-sm-6 col-xs-12 mt-3"
                v-if="tour.name === $route.params.location_id"
              >
                <div class="card mt-2" loading="lazy">
                  <div class="card-body">
                    <img
                      :src="apiURL + tour.file_path"
                      alt=""
                      class="card-img"
                    />
                    <RouterLink
                      :to="'/tour/' + tour.title"
                      class="accommodation-details"
                    >
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
                        <div class="duration-tours text-truncate">
                          <i class="bi bi-stopwatch"></i>
                          {{ tour.date_form_to }}
                        </div>
                      </div>
                    </RouterLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="my-5">
          <h4 class="text-capitalize my-3">
            A little Insight about {{ $route.params.location_id }}
          </h4>
          <div
            v-for="detail in dzongkhagDetails"
            :key="detail.id"
            class="quote-about"
          >
            <em
              ><span
                v-html="detail.content"
                v-if="detail.name === $route.params.location_id"
                class="about-dzongkhag-details lead py-4 px-2"
              >
              </span
            ></em>
          </div>
        </div>

        <div class="dzongkhag-accommodation mt-5">
          <h4 class="text-capitalize">
            top selling agr products from
            {{ $route.params.location_id }} dzongkhag
          </h4>
          <div class="row">
            <div
              class="col-md-4 col-lg-3 col-xl-3 col-sm-6 col-xs-12 mt-3"
              v-for="tour in tours"
              :key="tour.id"
            >
              <div
                class="card mt-2"
                loading="lazy"
                v-show="tour.location_id === $route.params.location_id"
              >
                <div class="card-body">
                  <img :src="tour.image_id" alt="" class="card-img" />
                  <RouterLink
                    :to="'/tour/' + tour.post_id"
                    class="accommodation-details"
                  >
                    <div class="card-details">
                      <h6 class="card-title text-truncate">
                        {{ tour.post_id }}
                      </h6>
                      <h6 class="card-text my-3">
                        <i class="bi bi-cash-coin mr-1"></i> Nu.
                        {{ tour.price }} / night
                      </h6>
                      <div class="location-tours text-truncate mb-2">
                        <i class="bi bi-geo-alt"></i>{{ tour.location_id }}
                      </div>
                      <div class="duration-tours text-truncate">
                        <i class="bi bi-stopwatch"></i>
                        {{ tour.duration_time }}
                      </div>
                    </div>
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="dzongkhag-accommodation mt-5">
          <h4 class="text-capitalize">
            top selling handicraft products from
            {{ $route.params.location_id }} dzongkhag
          </h4>
          <div class="row">
            <div
              class="col-md-4 col-lg-3 col-xl-3 col-sm-6 col-xs-12 mt-3"
              v-for="tour in tours"
              :key="tour.id"
            >
              <div
                class="card mt-2"
                loading="lazy"
                v-show="tour.location_id === $route.params.location_id"
              >
                <div class="card-body">
                  <img :src="tour.image_id" alt="" class="card-img" />
                  <RouterLink
                    :to="'/tour/' + tour.post_id"
                    class="accommodation-details"
                  >
                    <div class="card-details">
                      <h6 class="card-title text-truncate">
                        {{ tour.post_id }}
                      </h6>
                      <h6 class="card-text my-3">
                        <i class="bi bi-cash-coin mr-1"></i> Nu.
                        {{ tour.price }} / night
                      </h6>
                      <div class="location-tours text-truncate mb-2">
                        <i class="bi bi-geo-alt"></i>{{ tour.location_id }}
                      </div>
                      <div class="duration-tours text-truncate">
                        <i class="bi bi-stopwatch"></i>
                        {{ tour.duration_time }}
                      </div>
                    </div>
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12 col-lg-12 col-xl-12 col-sm-12 col-xs-12 mt-5">
        <PromotionWrapper>
          <PromotionSlots title="Top Events">
            <PromotionEvents />
          </PromotionSlots>
          <PromotionSlots title="Trending Tours">
            <PromotionTours />
          </PromotionSlots>
          <PromotionSlots title="Top Selling Products">
            <PromotionProducts />
          </PromotionSlots>
        </PromotionWrapper>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 col-lg-12 col-xl-12 col-sm-12 col-xs-12 mt-5">
        <BlogPost />
      </div>
    </div>
  </div>
</template>



<script>
import SidebarFilter from "@/components/common/SidebarFilter";
import PageBanner from "@/components/common/PageBanner";
import BlogPost from "@/components/common/BlogPost";
import PromotionWrapper from "@/components/common/PromotionWrapper";
import PromotionSlots from "@/components/common/PromotionSlots";
import PromotionEvents from "@/components/common/PromotionEvents";
import PromotionTours from "@/components/common/PromotionTours";
import PromotionProducts from "@/components/common/PromotionProducts";
import { useFetch } from "@vueuse/core";
export default {
  name: "Location_id",
  components: {
    SidebarFilter,
    PageBanner,
    BlogPost,
    PromotionWrapper,
    PromotionSlots,
    PromotionEvents,
    PromotionTours,
    PromotionProducts,
  },
  computed: {
    accommodations() {
      /*eslint-disable */
      return accommodations.filter(
        (accommodation) => accommodation.name === this.$route.params.location_id
      );
    },
    tours() {
      return tours.filter(
        (tour) => tour.name === this.$route.params.location_id
      );
    },
    dzongkhagDetails() {
      return dzongkhagDetails.filter(
        (detail) => detail.name === this.$route.params.location_id
      );
    },
  },

  async setup() {
    const apiURL = "http://shine.test/uploads/";
    const siteURL = "http://shine.test/";
    const [
      { data: tours },
      { data: accommodations },
      { data: dzongkhagDetails },
    ] = await Promise.all([
      useFetch("http://shine.test/api/bc_tours"),
      useFetch("http://shine.test/api/bc_spaces"),
      useFetch("http://shine.test/api/bc_locations"),
      // useFetch("http://shine.test/api/bc_tours"),
      // useFetch("http://shine.test/api/bc_tours"),
    ]);
    return {
      tours,
      accommodations,
      dzongkhagDetails,
      // agriProducts,
      // handicrafts,
      apiURL,
      siteURL,
    };
  },
};
</script>

<style scoped>
.quote-about {
  background-color: #dedede;
  border-radius: 0.5rem;
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
  height: 150px;
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
