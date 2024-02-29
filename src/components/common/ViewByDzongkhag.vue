<template>
  <div class="by-category mb-2">
    <h4 class="heading text-capitalize">
      Explore All Dzongkhags
    </h4>
    <p class="mt-3">{{ catSubtitle }}</p>
    <div class="row">
      <div v-for="dzongkhag in dzongkhags" :key="dzongkhag.id"
        class="col-md-2 col-lg-2 col-xl-2 col-sm-4 col-xs-6 cat-cards mt-2">
        <div class="card mt-2">
          <div class="card-body">
            <a :href="siteURL + '/tour?location_id=' + dzongkhag.id" class="category-details text-center"
              v-if="$route.name === 'Tours'">
              <img loading="lazy" :src="apiURL + dzongkhag.file_path" alt="" class="card-img-dzo" />
              <div class="card-details">
                <h6 class="card-title text-truncate">
                  {{ dzongkhag.name }}
                </h6>
              </div>
            </a>
            <a :href="siteURL + '/space?location_id=' + dzongkhag.id" class="category-details text-center" v-else>
              <img loading="lazy" :src="apiURL + dzongkhag.file_path" alt="" class="card-img-dzo" />
              <div class="card-details">
                <h6 class="card-title text-truncate">
                  {{ dzongkhag.name }}
                </h6>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "ViewByDzongkhag",

  async setup() {
    const dzongkhags = ref(null);
    const catSubtitle = "Eastern Bhutan Destinations Now Open";
    const apiURL = "https://booking.shinebhutan.com/uploads/";
    const siteURL = "https://booking.shinebhutan.com";
    const locations = await fetch(
      "https://booking.shinebhutan.com/api/bc_locations"
    );
    dzongkhags.value = await locations.json();

    return {
      dzongkhags,
      apiURL,
      catSubtitle,
      siteURL,
    };
  },
};
</script>

<style scoped>
.card-img-dzo {
  width: 100%;
  aspect-ratio: 16/10;
  object-fit: cover;
  border-radius: 5px;
}

@media screen and (max-width: 768px) {
  .cat-cards {
    width: 50%;
  }

}
</style>
