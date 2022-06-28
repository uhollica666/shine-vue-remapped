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

        <Suspense>
          <template #default>
            <SortByCategory />
          </template>
          <template #fallback>
            <h5 class="text-center my-5">🔄️ Fetching Categories...</h5>
          </template>
        </Suspense>

        <Suspense>
          <template #default>
            <ToursByDzongkhag />
          </template>
          <template #fallback>
            <h5 class="text-center my-5">🔄️ Fetching Locations...</h5>
          </template>
        </Suspense>

        <Suspense>
          <template #default>
            <ToursContent :tours="tours" />
          </template>
          <template #fallback>
            <h5 class="text-center my-5">🔄️ Fetching Tours...</h5>
          </template>
        </Suspense>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 col-lg-12 col-xl-12 col-sm-12 col-xs-12 mt-5">
        <Suspense>
          <template #default>
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
          </template>
          <template #fallback>
            <h5 class="text-center my-5">🔄️ Fetching Promotions...</h5>
          </template>
        </Suspense>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 col-lg-12 col-xl-12 col-sm-12 col-xs-12 mt-5">
        <Suspense>
          <template #default>
            <BlogPost />
          </template>
          <template #fallback>
            <h5 class="text-center my-5">🔄️ Fetching Blog Posts...</h5>
          </template>
        </Suspense>
      </div>
    </div>
  </div>
</template>

<script>
import SidebarFilter from "@/components/common/SidebarFilter";
import PageBanner from "@/components/common/PageBanner";
import SortByCategory from "@/components/common/SortByCategory";
import ToursByDzongkhag from "@/components/common/ToursByDzongkhag";
import ToursContent from "@/components/ToursContent";
import PromotionWrapper from "@/components/common/PromotionWrapper";
import PromotionSlots from "@/components/common/PromotionSlots";
import PromotionEvents from "@/components/common/PromotionEvents";
import PromotionTours from "@/components/common/PromotionTours";
import PromotionProducts from "@/components/common/PromotionProducts";
import BlogPost from "@/components/common/BlogPost";
import TOURS_DATA from "@/APIs/Tours_DATA.json";

export default {
  data() {
    return {
      tours: TOURS_DATA,
    };
    // return {
    //     tours: []
    // };
  },
  // async mounted(){
  //     const touritems = await fetch('https://test.hemantbhutanrealestate.com/api/tours');
  //     const content = await touritems.json();
  // },

  methods: {
    filterItems(filter) {
      this.resetAccommodations();
      if (filter === "All") {
        this.tours = TOURS_DATA;
      } else if (filter === "Dagana") {
        return alert("No Tours Available in Dagana");
      } else {
        this.tours = TOURS_DATA.filter((tour) => {
          return tour.location_id.toLowerCase().includes(filter.toLowerCase());
        });
      }
    },

    starFilter(starRating) {
      this.resetAccommodations();
      if (starRating === "All") {
        this.tours = TOURS_DATA;
      } else if (starRating === 3) {
        this.tours = TOURS_DATA.filter((tour) => {
          return tour.star_rate === 3;
        });
      } else if (starRating === 4) {
        this.tours = TOURS_DATA.filter((tour) => {
          return tour.star_rate === 4;
        });
      } else if (starRating === 5) {
        this.tours = TOURS_DATA.filter((tour) => {
          return tour.star_rate === 5;
        });
      } else {
        this.tours = TOURS_DATA.filter((tour) => {
          return tour.star_rate === 2;
        });
      }
    },

    searchFilter(search) {
      this.resetAccommodations();
      this.tours = TOURS_DATA.filter((tour) => {
        return tour.title.toLowerCase().includes(search.toLowerCase());
      });
    },
    resetAccommodations() {
      this.tours = TOURS_DATA;
    },
  },
  components: {
    SidebarFilter,
    PageBanner,
    SortByCategory,
    ToursByDzongkhag,
    ToursContent,
    PromotionWrapper,
    PromotionSlots,
    PromotionEvents,
    PromotionTours,
    PromotionProducts,
    BlogPost,
  },
};
</script>

<style></style>
