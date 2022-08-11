<template>
  <div class="container">
    <div class="row">
      <div class="col-md-3 col-lg-3 col-xl-3 col-sm-12 col-xs-12" v-if="$route.name==='Dzongkhags'" >
        <DzongkhagSideBar />
      </div>
      <div class="col-md-3 col-lg-3 col-xl-3 col-sm-12 col-xs-12" v-else-if="$route.name==='AccommodationDzongkhags'">
        <DzongkhagSideBarTwo />
      </div>
      <div class="col-md-3 col-lg-3 col-xl-3 col-sm-12 col-xs-12" v-else>
        <DzongkhagSideBarThree />
      </div>
      <div class="col-md-9 col-lg-9 col-xl-9 col-sm-12 col-xs-12">
        <PageBanner />

        <Suspense>
          <template #default>
            <DzongkhagContent />
          </template>
          <template #fallback>
            <Loader/>
          </template>
        </Suspense>
        
      </div>
    </div>

    <div class="row" v-if="$route.name !=='AccommodationDzongkhags' && $route.name !=='ToursDzongkhags'">
      <div class="col-md-12 col-lg-12 col-xl-12 col-sm-12 col-xs-12 mt-5">
        <Suspense>
          <template #default>
            <BlogPost />
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
import DzongkhagSideBar from '@/components/common/DzongkhagSideBar';
import DzongkhagSideBarTwo from '@/components/common/DzongkhagSideBarTwo';
import DzongkhagSideBarThree from '@/components/common/DzongkhagSideBarThree';
import PageBanner from '@/components/common/PageBanner';
import DzongkhagContent from '@/components/DzongkhagContent';
import BlogPost from '@/components/common/BlogPost';
import Loader from '@/components/common/Loader';


export default {
  name: "DzongkhagsPage",
  components: {
    DzongkhagSideBar,
    DzongkhagSideBarTwo,
    DzongkhagSideBarThree,
    PageBanner,
    BlogPost,
    DzongkhagContent,
    Loader,
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
  aspect-ratio: 16/10;
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
