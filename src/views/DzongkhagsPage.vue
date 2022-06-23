<template>
  <div class="container">
    <div class="row">
      <div class="col-md-3 col-lg-3 col-xl-3 col-sm-12 col-xs-12">
        <SidebarFilter :filterItems="filterItems" :searchFilter="searchFilter" :starFilter="starFilter" />
      </div>
      <div class="col-md-9 col-lg-9 col-xl-9 col-sm-12 col-xs-12">
        <PageBanner />

        <Suspense>
          <template #default>
            <DzongkhagContent />
          </template>
          <template #fallback>
            <h5 class="text-center my-5"> 🔄️ Fetching Dzongkhag Details...</h5>
          </template>
        </Suspense>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12 col-lg-12 col-xl-12 col-sm-12 col-xs-12 mt-5">

        <Suspense>
          <template #default>
            <PromotionWrapper>
              <PromotionSlots title="Top Events">
                <PromotionEvents />
              </PromotionSlots>
              <PromotionSlots title="Trending Tours">
                <PromotionTours />
              </PromotionSlots>
              <PromotionSlots title="Top Selling Products">
                <PromotionProducts />
              </PromotionSlots>
            </PromotionWrapper>
          </template>
          <template #fallback>
            <h5 class="text-center my-5">🔄️ Fetching details...</h5>
          </template>
        </Suspense>

      </div>
    </div>
    <div class="row">
      <div class="col-md-12 col-lg-12 col-xl-12 col-sm-12 col-xs-12 mt-5">

        <Suspense>
          <template #default>
            <BlogPost />
          </template>
          <template #fallback>
            <h5 class="text-center my-5">🔄️ Fetching details...</h5>
          </template>
        </Suspense>

      </div>
    </div>
  </div>
</template>

<script>
import SidebarFilter from '@/components/common/SidebarFilter';
import PageBanner from '@/components/common/PageBanner';
import DzongkhagContent from '@/components/DzongkhagContent';
import PromotionWrapper from '@/components/common/PromotionWrapper';
import PromotionEvents from '@/components/common/PromotionEvents';
import PromotionTours from '@/components/common/PromotionTours';
import PromotionProducts from '@/components/common/PromotionProducts';
import PromotionSlots from '@/components/common/PromotionSlots';
import BlogPost from '@/components/common/BlogPost';


export default {
  name: "DzongkhagsPage",
  components: {
    SidebarFilter,
    PageBanner,
    PromotionWrapper,
    PromotionSlots,
    PromotionEvents,
    PromotionTours,
    PromotionProducts,
    BlogPost,
    DzongkhagContent
  },
};
</script>

<style scoped>
.quote-about {
  background-color: #dedede;
  border-radius: 0.5rem;
}

span.about-dzongkhag-details h4 {
  color: #f7941e;
}

.btn-container {
  justify-content: flex-end;
}

button.limit {
  display: none;
}

.showButton {
  max-width: 100%;
  background: #f7941e;
  color: #fff;
  border: none;
  padding: 0.5rem 2rem;
}

.start-icon {
  color: #f7941e;
  padding: 2px;
  padding-bottom: 5px;
}

.rating {
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.26);
}

.card-body {
  padding: 0;
}

.card-img {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.card-details {
  padding: 0.5rem 1rem;
}

.details {
  display: flex;
}

.location {
  width: 60%;
}

.price {
  text-align: right;
}

.accommodation-details {
  text-decoration: none;
  color: #2c3e50;
}

.accommodation-details:hover {
  color: #f7941e;
}
</style>
