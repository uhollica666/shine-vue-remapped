<template>
  <div class="container">
        <div class="row">
            <div class="col-md-3 col-lg-3 col-xl-3 col-sm-12 col-xs-12">
                <CatgorySearchBar />
            </div>
            <div class="col-md-9 col-lg-9 col-xl-9 col-sm-12 col-xs-12 infinite-scroll">
                <PageBanner />
                
                <Suspense>
                    <template #default>
                        <CategorySearch />
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
import CategorySearch from '@/components/common/CategorySearch'
import CatgorySearchBar from '@/components/common/CatgorySearchBar'
export default {
/*eslint-disable*/
    name: 'Search',
    components: {
        CategorySearch,
        CatgorySearchBar,
        Loader,
    },
}
</script>

<style>

</style>