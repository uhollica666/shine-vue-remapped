<template>
    <div class="container">
        <div class="row">
            <div class="col-md-3 col-lg-3 col-xl-3 col-sm-12 col-xs-12">
                <SidebarFilter :filterItems="filterItems" :searchFilter="searchFilter" :starFilter="starFilter" />
            </div>
            <div class="col-md-9 col-lg-9 col-xl-9 col-sm-12 col-xs-12 infinite-scroll">
                <PageBanner />
                <Suspense>
                    <FeaturedProducts :products="products" />
                </Suspense>
            </div>
        </div>
        <Suspense>
            <RecentProducts />
        </Suspense>
        <Suspense>
            <PopularProducts />
        </Suspense>
        <Suspense>
            <BlogPost />
        </Suspense>
    </div>
</template>

<script>
import SidebarFilter from "@/components/common/SidebarFilter";
import PageBanner from "@/components/common/PageBanner";
import FeaturedProducts from "@/components/FeaturedProducts";
import RecentProducts from "@/components/common/RecentProducts";
import PopularProducts from "@/components/common/PopularProducts";
import BlogPost from "@/components/common/BlogPost";
import PRODUCTS from '@/APIs/Products_DATA.json';
export default {
    name: "AgriProducts",
    data() {
        return {
            products: PRODUCTS,
        };
    },
    components: {
        SidebarFilter,
        PageBanner,
        FeaturedProducts,
        RecentProducts,
        PopularProducts,
        BlogPost,
    },
}
</script>
