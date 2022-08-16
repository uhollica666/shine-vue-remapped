<template>
    <div class="container">
        <div class="row">
            <div class="col-md-3 col-lg-3 col-xl-3 col-sm-12 col-xs-12">
                <Suspense>
                    <DzongkhagSideBar />
                </Suspense>
            </div>
            <div class="col-md-9 col-lg-9 col-xl-9 col-sm-12 col-xs-12">
                <Suspense>
                    <template #default>
                       <ProductDetails />
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
import Loader from '@/components/common/Loader'
import ProductDetails from '@/components/products/ProductDetails'
import DzongkhagSideBar from '@/components/common/DzongkhagSideBar';
export default {
    name: "SingleProduct",
    components: {
        Loader,
        DzongkhagSideBar,
        ProductDetails,
    },
};
</script>

<style>
</style>