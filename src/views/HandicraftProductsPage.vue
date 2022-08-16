<template>
  <div class="container">
        <div class="row">
            <div class="col-md-3 col-lg-3 col-xl-3 col-sm-12 col-xs-12">
                <Suspense>
                    <CategorySidebarFilter />
                </Suspense>
            </div>
            <div class="col-md-9 col-lg-9 col-xl-9 col-sm-12 col-xs-12 infinite-scroll">
                <Suspense>
                    <template #default>
                        <AllHandicraftProducts />
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
import AllHandicraftProducts from '@/components/AllHandicraftProducts';
import CategorySidebarFilter from '@/components/common/CategorySidebarFilter';
import Loader from '@/components/common/Loader';
export default {
    name: "AgriProductsPage",
    components: {
    AllHandicraftProducts,
    CategorySidebarFilter,
    Loader,
},
};
</script>

<style>

</style>