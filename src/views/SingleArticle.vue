<template>
    <div class="container">
        <div class="row">
            <div class="col-md-3 col-lg-3 col-xl-3 col-sm-12 col-xs-12">
                <DzongkhagSideBar />
            </div>
            <div class="col-md-9 col-lg-9 col-xl-9 col-sm-12 col-xs-12">
                <Suspense>
                    <template #default>
                        <ArticleDetails />
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
import ArticleDetails from '@/components/products/ArticleDetails';
export default {
    name: "SingleArticle",
    components: {
        Loader,
        DzongkhagSideBar,
        ArticleDetails,
    },
};
</script>

<style>
</style>