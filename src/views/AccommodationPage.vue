<template>
    <div class="container">
        <div class="row">
            <div class="col-md-3 col-lg-3 col-xl-3 col-sm-12 col-xs-12">
                <SidebarFilter :searchFilter="searchFilter" :filterItems="filterItems" :starFilter="starFilter" />
            </div>
            <div class="col-md-9 col-lg-9 col-xl-9 col-sm-12 col-xs-12 infinite-scroll">
                <PageBanner />
                <SortByCategory />
                <ViewByDzongkhag />
                <AccommodationContent :accommodations="accommodations" />
                <HotelsContent :hotels="hotels" />
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
import ACCOMMODATION_DATA from "@/APIs/Accommodation_DATA.json";
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
export default {
    name: "AccommodationPage",
    data() {
        return {
            accommodations: ACCOMMODATION_DATA,
        };
    },

    methods: {

        filterItems(filter) {
            this.resetAccommodations();
            if (filter === "All") {
                this.accommodations = ACCOMMODATION_DATA;
            } else {
                this.accommodations = ACCOMMODATION_DATA.filter((accommodation) => {
                    return accommodation.location_id
                        .toLowerCase()
                        .includes(filter.toLowerCase());
                });
            }
        },
        starFilter(starRating) {
            this.resetAccommodations();
            if (starRating === "All") {
                this.accommodations = ACCOMMODATION_DATA;
            } else if (starRating === 3) {
                this.accommodations = ACCOMMODATION_DATA.filter((tour) => {
                    return tour.star_rate === 3;
                });
            } else if (starRating === 4) {
                this.accommodations = ACCOMMODATION_DATA.filter((tour) => {
                    return tour.star_rate === 4;
                });
            } else if (starRating === 5) {
                this.accommodations = ACCOMMODATION_DATA.filter((tour) => {
                    return tour.star_rate === 5;
                });
            } else {
                this.accommodations = ACCOMMODATION_DATA.filter((tour) => {
                    return tour.star_rate === 2;
                });
            }
        },
        searchFilter(search) {
            this.resetAccommodations();
            this.accommodations = ACCOMMODATION_DATA.filter((accommodation) => {
                return accommodation.title.toLowerCase().includes(search.toLowerCase());
            });
        },
        resetAccommodations() {
            this.accommodations = ACCOMMODATION_DATA;
        },
    },
    components: {
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