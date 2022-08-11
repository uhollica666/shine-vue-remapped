<template>
    <div class="container">
        <div class="row">
            <div class="col-md-3 col-lg-3 col-xl-3 col-sm-12 col-xs-12">
                <Suspense>
                    <HandiDzoSidebar />
                </Suspense>
            </div>
            <div class="col-md-9 col-lg-9 col-xl-9 col-sm-12 col-xs-12">
                <Suspense>
                    <template #default>
                        <HandiProductsDzo :key="$route.fullPath" />
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
import HandiDzoSidebar from '@/components/common/HandiDzoSidebar';
import HandiProductsDzo from '@/components/common/HandiProductsDzo';
export default {
    name: "HandiDzoFilter",
    components: {
        Loader,
        HandiDzoSidebar,
        HandiProductsDzo,
    },

}
</script>

<style>

</style>