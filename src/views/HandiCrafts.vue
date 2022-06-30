<template>
    <div class="container">
        <div class="row">
            <div class="col-md-3 col-lg-3 col-xl-3 col-sm-12 col-xs-12">
                <SidebarFilter :filterItems="filterItems" :searchFilter="searchFilter" :starFilter="starFilter" />
            </div>
            <div class="col-md-9 col-lg-9 col-xl-9 col-sm-12 col-xs-12 infinite-scroll">
                <PageBanner />
                
                <Suspense>
                    <template #default>
                        <FeaturedHandiCrafts :products="products" />
                    </template>
                    <template #fallback>
                        <Loader />
                    </template>
                </Suspense>
            </div>
        </div>
        <Suspense>
            <template #default>
                <RecentProducts />
            </template>
            <template #fallback>
                <Loader />
            </template>
        </Suspense>
        <Suspense>
            <template #default>
                <PopularProducts />
            </template>
            <template #fallback>
                <Loader />
            </template>
        </Suspense>
    </div>
</template>

<script>
import Loader from "@/components/common/Loader";
import SidebarFilter from "@/components/common/SidebarFilter";
import PageBanner from "@/components/common/PageBanner";
import FeaturedHandiCrafts from "@/components/FeaturedHandiCrafts";
import RecentProducts from "@/components/common/RecentProducts";
import PopularProducts from "@/components/common/PopularProducts";
export default {
    name: "HandiCrafts",

    components: {
        SidebarFilter,
        PageBanner,
        FeaturedHandiCrafts,
        RecentProducts,
        PopularProducts,
        Loader,
    },
}
</script>