<template>
  <div class="container">
        <div class="row">
            <div class="col-md-3 col-lg-3 col-xl-3 col-sm-12 col-xs-12">
                <ToursSearchBar />
            </div>
            <div class="col-md-9 col-lg-9 col-xl-9 col-sm-12 col-xs-12 infinite-scroll">
                <PageBanner />
                
                <Suspense>
                    <template #default>
                        <SearchTours />
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
import SearchTours from '@/components/common/SearchTours'
import ToursSearchBar from '@/components/common/ToursSearchBar'
export default {
/*eslint-disable*/
    name: 'SearchToursPage',
    components: {
        SearchTours,
        ToursSearchBar,
        Loader,
    },
}
</script>

<style>

</style>