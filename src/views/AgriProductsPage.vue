<template>
  <div class="container">
        <div class="row">
            <div class="col-md-3 col-lg-3 col-xl-3 col-sm-12 col-xs-12">
                <CategorySidebarFilter />
            </div>
            <div class="col-md-9 col-lg-9 col-xl-9 col-sm-12 col-xs-12 infinite-scroll">
                <Suspense>
                    <template #default>
                        <AllAgriProducts />
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
import AllAgriProducts from '@/components/AllAgriProducts';
import CategorySidebarFilter from '@/components/common/CategorySidebarFilter';
export default {
    name: "AgriProductsPage",
    components: {
        AllAgriProducts,
        CategorySidebarFilter,
        Loader,
    },
};
</script>

<style>

</style>