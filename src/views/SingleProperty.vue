<template>
  <div class="container">
    <div class="row">
      <div class="col-md-3 col-lg-3 col-xl-3 col-sm-12 col-xs-12">
        <Suspense>
          <PropertySideBar />
        </Suspense>
      </div>
      <div class="col-md-9 col-lg-9 col-xl-9 col-sm-12 col-xs-12">

        <Suspense>
          <template #default>
              <PropertyDetails :key="$route.fullPath"/>
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
import Loader from '@/components/common/Loader';
import PropertyDetails from '@/components/products/PropertyDetails';
import PropertySideBar from '@/components/common/PropertySideBar';
// import DzongkhagContent from '@/components/DzongkhagContent';


export default {
  name: "SingleProperty",
  components: {
    Loader,
    PropertyDetails,
    PropertySideBar,
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
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
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
