<template>
    <div class="container">
        <div class="row">
            <div class="col-md-3 col-lg-3 col-xl-3 col-sm-12 col-xs-12">
                <Suspense>
                    <SidebarFilter :filterItems="filterItems" :searchFilter="searchFilter" :starFilter="starFilter" />
                </Suspense>
            </div>
            <div class="col-md-9 col-lg-9 col-xl-9 col-sm-12 col-xs-12 infinite-scroll">
                <PageBanner />
                <Suspense>
                    <template #default>
                        <FeaturedProducts :products="products" />
                    </template>
                    <template #fallback>
                        <LoaderTwo />
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
import LoaderTwo from "@/components/common/LoaderTwo";
import SidebarFilter from "@/components/common/SidebarFilter";
import PageBanner from "@/components/common/PageBanner";
import FeaturedProducts from "@/components/FeaturedProducts";
import RecentProducts from "@/components/common/RecentProducts";
import PopularProducts from "@/components/common/PopularProducts";
export default {
    name: "AgriProducts",
    components: {
        SidebarFilter,
        PageBanner,
        FeaturedProducts,
        RecentProducts,
        PopularProducts,
        LoaderTwo,
    },
}
</script>
