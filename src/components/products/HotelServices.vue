<template>
  <section class="row">
    <div class="col-md-12 prod-descrip">
      <p><b>Hotel Services:</b></p>
    </div>
    <div v-for="service in services.HotelService" :key="service">
      <div class="row prod-descrip" v-if="!service">
        <div class="col-md-3">No Registered Hotel Services : ✅</div>
      </div>
      <div class="row prod-descrip text-center" v-else>
        <div class="col-md-12">No Registered Hotel Services : ✅</div>
      </div>
    </div>
    <div class="row prod-descrip text-center">
      <div class="col-md-12">No Registered Hotel Services : ❌</div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import { useRoute } from "vue-router";
export default {
  name: "HotelServices",
  async setup() {
    const route = useRoute();
    const routeId = route.params.id;
    const services = ref(null);
    const siteURL = "https://booking.shinenbuy.com/";
    const bc_hotels = await fetch(
      `https://booking.shinenbuy.com/api/hotel_terms?id=${routeId}`
    );
    services.value = await bc_hotels.json();
    return {
      siteURL,
      services,
    };
  },
  computed: {
    stringified() {
      return JSON.stringify(this.services);
    },
  },
};
</script>

<style></style>
