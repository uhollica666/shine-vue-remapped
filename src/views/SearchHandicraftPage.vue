<template>
  <div class="container">
        <div class="row">
            <div class="col-md-3 col-lg-3 col-xl-3 col-sm-12 col-xs-12">
                <HandicraftSearchBar />
            </div>
            <div class="col-md-9 col-lg-9 col-xl-9 col-sm-12 col-xs-12 infinite-scroll">
                <PageBanner />
                
                <Suspense>
                    <template #default>
                        <HandicraftSearch />
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
import Loader from "../components/common/Loader.vue";
import HandicraftSearch from '@/components/common/HandicraftSearch'
import HandicraftSearchBar from '@/components/common/HandicraftSearchBar'
export default {
/*eslint-disable*/
    name: 'SearchHandicraftPage',
    components: {
        HandicraftSearch,
        HandicraftSearchBar,
        Loader,
    },
}
</script>

<style>

</style>