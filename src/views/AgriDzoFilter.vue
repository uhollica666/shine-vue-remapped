<template>
    <div class="container">
        <div class="row">
            <div class="col-md-3 col-lg-3 col-xl-3 col-sm-12 col-xs-12">
                <Suspense>
                    <AgriDzoSidebar />
                </Suspense>
            </div>
            <div class="col-md-9 col-lg-9 col-xl-9 col-sm-12 col-xs-12">
                <Suspense>
                    <template #default>
                        <AgriProductsDzo :key="$route.fullPath" />
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
import AgriDzoSidebar from '@/components/common/AgriDzoSidebar';
import AgriProductsDzo from '@/components/common/AgriProductsDzo';
export default {
    name: "AgriDzoFilter",
    components: {
        Loader,
        AgriDzoSidebar,
        AgriProductsDzo,
    },

}
</script>

<style>

</style>