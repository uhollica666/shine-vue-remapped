<template>
    <div>
         <div v-for="accommodation in accommodations.SpaceType" :key="accommodation">
            <div v-if="accommodation">
            <i class="bi bi-tag"></i> Property Type: <b>{{accommodation}}</b>
         </div>
         <div v-else>
            <i class="bi bi-tag"></i> Property Type: Not Available
         </div>
         </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
export default {
    name: 'PropertyType',
    async setup() {
        const route = useRoute();
        const routeId = route.params.id;
        const accommodations = ref(null);
        const siteURL = 'https://dev.hemantbhutanrealestate.com/';
        const bc_hotels = await fetch(
            `https://dev.hemantbhutanrealestate.com/api/space_terms?id=${routeId}`
        );
        accommodations.value = await bc_hotels.json();
        return {
            accommodations,
            siteURL,
        };
    },
}
</script>

<style>
</style>
