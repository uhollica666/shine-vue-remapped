<template>
    <div class="container">
        <div class="row">
            <div class="col-md-3 col-lg-3 col-xl-3 col-sm-12 col-xs-12">
                <DzongkhagSideBar />
            </div>
            <div class="col-md-9 col-lg-9 col-xl-9 col-sm-12 col-xs-12">
                <Suspense>
                    <template #default>
                        <div class="container">
                            <h4 class="my-5 text-center">
                            This is Tours Page
                        </h4>
                        <p>and the route is {{ $route.params.slug }}</p>
                        </div>
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
import DzongkhagSideBar from '@/components/common/DzongkhagSideBar';
export default {
    name: "SingleTour",
    components: {
        Loader,
        DzongkhagSideBar,
    },
};
</script>

<style>
</style>