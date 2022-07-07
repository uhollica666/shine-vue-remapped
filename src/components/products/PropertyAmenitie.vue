<template>
    <div class="row text-center prod-descrip">
        <div class="col-md-2" v-for="amenitie in amenities.Amenities" :key="amenitie">
            {{ amenitie }}: ✅
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
export default {
    name: 'PropertyAmenitie',
    async setup() {
        const route = useRoute();
        const routeId = route.params.id;
        const amenities = ref(null);
        const siteURL = 'https://dev.hemantbhutanrealestate.com/';
        const bc_hotels = await fetch(
            `https://dev.hemantbhutanrealestate.com/api/space_terms?id=${routeId}`
        );
        amenities.value = await bc_hotels.json();
        return {
            amenities,
            siteURL,
        };
    },

}
</script>

<style>
</style>