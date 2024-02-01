<template>
  <div class="by-category mb-3">
    <div class="row flex-row flex-nowrap overflow-auto">
      <div v-for="prompTour in prompTours" :key="prompTour.id"
        class="col-md-3 col-lg-3 col-xl-3 col-sm-3 col-xs-3 mt-2 mb-3">
        <div class="card mt-3">
          <div class="card-body">
            <a :href="siteURL + 'tour/' + prompTour.slug" class="category-details">
              <img loading="lazy" :src="apiURL + prompTour.file_path" alt="" class="card-img img-fluid" />
              <div class="card-details">
                <h6 class="card-title text-truncate">
                  {{ prompTour.title }}
                </h6>
                <div class="location text-truncate">
                  <i class="bi bi-geo-alt"></i>{{ prompTour.name }}
                </div>
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
  name: "PromotionTours",
  computed: {
    prompTours() {
      // eslint-disable-next-line no-undef
      return prompTours.filter(
        (prompTour) => prompTour.name === "Adventure Travel"
      );
    },
  },

  async setup() {
    const prompTours = ref(null);
    const apiURL = "https://booking.shinenbuy.com/uploads/";
    const siteURL = "https://booking.shinenbuy.com";
    const bc_prompTours = await fetch(
      "https://booking.shinenbuy.com/api/bc_tours"
    );
    prompTours.value = await bc_prompTours.json();
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      prompTours,
      apiURL,
      siteURL,
    };
  },
};
</script>

<style scoped>
i.bi {
  margin-right: 0.5rem;
}
</style>
