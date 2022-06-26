<template>
    <div class="container">
        <div class="row">
            <div class="col-md-3 col-lg-3 col-xl-3 col-sm-12 col-xs-12">
                <SidebarFilter :searchFilter="searchFilter" :filterItems="filterItems" :starFilter="starFilter" />
            </div>
            <div class="col-md-9 col-lg-9 col-xl-9 col-sm-12 col-xs-12 infinite-scroll">
                <PageBanner />

                <Suspense>
                    <template #default>
                        <SortByCategory />
                    </template>
                    <template #fallback>
                        <h5 class="text-center my-5"> 🔄️ Fetching Categories...</h5>
                    </template>
                </Suspense>

                <Suspense>
                    <template #default>
                        <ViewByDzongkhag />
                    </template>
                    <template #fallback>
                        <h5 class="text-center my-5"> 🔄️ Fetching Category...</h5>
                    </template>
                </Suspense>

                <Suspense>
                    <template #default>
                        <AccommodationContent :accommodations="accommodations" />
                    </template>
                    <template #fallback>
                        <h5 class="text-center my-5"> 🔄️ Fetching Accommodations...</h5>
                    </template>
                </Suspense>

                <Suspense>
                    <template #default>
                        <HotelsContent :hotels="hotels" />
                    </template>
                    <template #fallback>
                        <h5 class="text-center my-5"> 🔄️ Fetching Hotels...</h5>
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
                        <h5 class="text-center my-5"> 🔄️ Fetching Promotions...</h5>
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
                        <h5 class="text-center my-5"> 🔄️ Fetching Blog Posts...</h5>
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

    methods: {
        filterItems(filter) {
            this.resetAccommodations();
            if (filter === "All") {
                this.accommodations = this.AccommodationContent;
            } else {
                this.accommodations = AccommodationContent.filter((accommodation) => {
                    return accommodation.name
                        .toLowerCase()
                        .includes(filter.toLowerCase());
                });
            }
        },
        starFilter(starRating) {
            this.resetAccommodations();
            if (starRating === "All") {
                this.accommodations = AccommodationContent;
            } else if (starRating === 3) {
                this.accommodations = AccommodationContent.filter((accommodation) => {
                    return accommodation.review_score >= 3;
                });
            } else if (starRating === 4) {
                this.accommodations = AccommodationContent.filter((accommodation) => {
                    return accommodation.review_score >= 4;
                });
            } else if (starRating === 5) {
                this.accommodations = AccommodationContent.filter((accommodation) => {
                    return accommodation.review_score >= 5;
                });
            } else {
                this.accommodations = AccommodationContent.filter((accommodation) => {
                    return accommodation.review_score >= 2;
                });
            }
        },
        searchFilter(search) {
            this.resetAccommodations();
            this.accommodations = AccommodationContent.filter((accommodation) => {
                return accommodation.title.toLowerCase().includes(search.toLowerCase());
            });
        },
        resetAccommodations() {
            this.accommodations = AccommodationContent;
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