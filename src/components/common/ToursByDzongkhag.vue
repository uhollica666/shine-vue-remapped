<template>
  <div class="by-category mt-5 mb-3">
    <h4 class="heading text-capitalize">
      Explore {{ $route.name }} by Dzongkhag
    </h4>
    <p class="mt-3">{{ catSubtitle }}</p>
    <div class="row">
      <div
        v-for="dzongkhag in dzongkhags"
        :key="dzongkhag.id"
        class="col-md-2 col-lg-2 col-xl-2 col-sm-4 col-xs-6 mt-2"
      >
        <div class="card mt-2">
          <div class="card-body">
            <img
              loading="lazy"
              :src="apiURL + dzongkhag.file_path"
              alt=""
              class="card-img-dzo"
            />
            <RouterLink
              :to="'/dzongkhags/' + dzongkhag.name"
              class="category-details text-center"
            >
              <div class="card-details">
                <h6 class="card-title text-truncate">
                  {{ dzongkhag.name }}
                </h6>
              </div>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "ToursByDzongkhag",

  async setup() {
    const dzongkhags = ref(null);
    const catSubtitle = "Eastern Bhutan Destinations Now Open";
    const apiURL = "https://booking.shinebhutan.com/uploads/";
    const siteURL = "https://booking.shinebhutan.com";
    const bc_locations = await fetch(
      "https://booking.shinebhutan.com/api/bc_locations"
    );
    dzongkhags.value = await bc_locations.json();

    console.log(dzongkhags.value);

    return {
      dzongkhags,
      apiURL,
      catSubtitle,
      siteURL,
    };
  },
};
</script>

<style>
.card-img-dzo {
  width: 100%;
  aspect-ratio: 16/10;
  object-fit: cover;
  border-radius: 5px;
}
</style>
