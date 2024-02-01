<template>
  <div class="container">
    <div class="row">
      <div class="col-md-3 col-lg-3 col-xl-3 col-sm-12 col-xs-12">
        <Suspense>
          <SidebarFilter :filterItems="filterItems" :filteredAccommodation="filteredAccommodation"
            :starRating="starRating" />
        </Suspense>
      </div>
      <div class="col-md-9 col-lg-9 col-xl-9 col-sm-12 col-xs-12 infinite-scroll">
        <PageBanner />

        <Suspense>
          <template #default>
            <SortByCategory />
          </template>
          <template #fallback>
            <Loader />
          </template>
        </Suspense>

        <Suspense>
          <template #default>
            <ViewByDzongkhag />
          </template>
          <template #fallback>
            <Loader />
          </template>
        </Suspense>

        <Suspense>
          <template #default>
            <AccommodationContent :accommodations="accommodations" />
          </template>
          <template #fallback>
            <Loader />
          </template>
        </Suspense>

        <Suspense>
          <template #default>
            <HotelsContent :hotels="hotels" />
          </template>
          <template #fallback>
            <Loader />
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
            <Loader />
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
            <Loader />
          </template>
        </Suspense>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from "@/components/common/Loader";
import SidebarFilter from "@/components/common/SidebarFilter";
import PageBanner from "@/components/common/PageBanner";
import SortByCategory from "@/components/common/SortByCategory";
import ViewByDzongkhag from "@/components/common/ViewByDzongkhag";
import AccommodationContent from "@/components/AccommodationContent";
import HotelsContent from "@/components/HotelsContent";
import PromotionWrapper from "@/components/common/PromotionWrapper";
import PromotionSlots from "@/components/common/PromotionSlots";
import PromotionEvents from "@/components/common/PromotionEvents";
import PromotionTours from "@/components/common/PromotionTours";
import PromotionProducts from "@/components/common/PromotionProducts";
import BlogPost from "@/components/common/BlogPost";
// import { ref } from "vue";

export default {
  name: "AccommodationPage",

  // async setup() {
  //     const accommodations = ref(null);
  //     const hotels = ref(null);
  //     const bc_accommodations = await fetch('https://booking.shinenbuy.com/api/bc_spaces');
  //     const bc_hotels = await fetch('https://booking.shinenbuy.com/api/bc_hotels');
  //     accommodations.value = await bc_accommodations.json();
  //     hotels.value = await bc_hotels.json();

  //     return {
  //         accommodations,
  //         hotels
  //     }
  // },

  methods: {
    starFilter(starRating) {
      this.resetAccommodations();
      if (starRating === "All") {
        return this.accommodations;
      } else {
        this.accommodations = this.accommodations.filter((accommodation) => {
          return accommodation.star_rating >= starRating;
        });
      }
    },
    filteredAccommodation(filter) {
      this.resetAccommodations();
      if (filter === "All") {
        return this.accommodations;
      } else {
        this.accommodations = this.accommodations.filter((accommodation) => {
          return accommodation.name === filter;
        });
      }
    },
    resetAccommodations() {
      return this.accommodations;
    },
  },

  // computed: {
  //     accommodations() {
  //       return this.$store.state.accommodations;
  //     },
  //     filteredAccommodation:{
  //         get() {
  //             return this.accommodations
  //         },
  //         set(value) {
  //             this.accommodations = value;
  //         }
  //     }
  // },

  components: {
    Loader,
    SidebarFilter,
    PageBanner,
    SortByCategory,
    ViewByDzongkhag,
    AccommodationContent,
    HotelsContent,
    PromotionWrapper,
    PromotionSlots,
    PromotionEvents,
    PromotionTours,
    PromotionProducts,
    BlogPost,
  },
};
</script>
