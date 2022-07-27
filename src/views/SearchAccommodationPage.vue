<template>
  <div class="container">
        <div class="row">
            <div class="col-md-3 col-lg-3 col-xl-3 col-sm-12 col-xs-12">
                <AccommodationSearchBar />
            </div>
            <div class="col-md-9 col-lg-9 col-xl-9 col-sm-12 col-xs-12 infinite-scroll">
                <PageBanner />
                
                <Suspense>
                    <template #default>
                        <SearchAccommodation />
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
import SearchAccommodation from '@/components/common/SearchAccommodation'
import AccommodationSearchBar from '@/components/common/AccommodationSearchBar'
export default {
/*eslint-disable*/
    name: 'SearchAccommodationPage',
    components: {
        SearchAccommodation,
        AccommodationSearchBar,
        Loader,
    },
}
</script>

<style>

</style>