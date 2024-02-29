<template>
  <div>
    <div class="row">
      <div class="col-md-6"><i class="bi bi-tag"></i> Property Type:</div>
      <div class="col-md-6">
        <div v-for="accommodation in accommodations.SpaceType" :key="accommodation">
          <div v-if="accommodation" class="text-left">
            <b>{{ accommodation }}</b> ✅
          </div>
          <div v-else>Not Available ❌</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRoute } from "vue-router";
export default {
  name: "PropertyType",
  async setup() {
    const route = useRoute();
    const routeId = route.params.id;
    const accommodations = ref(null);
    const siteURL = "https://booking.shinebhutan.com/";
    const bc_hotels = await fetch(
      `https://booking.shinebhutan.com/api/space_terms?id=${routeId}`
    );
    accommodations.value = await bc_hotels.json();
    return {
      accommodations,
      siteURL,
    };
  },
};
</script>

<style></style>
