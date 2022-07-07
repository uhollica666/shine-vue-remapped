<template>
    <div >
        <div class="row text-center" >
            <div class="col-md-3 prod-descrip" v-for="amenitie in amenities.RoomAmenities" :key="amenitie">
                <i class="bi bi-telephone text-war" v-if="amenitie === 'Wake-up call'"></i>
                <i class="fa fa-car text-war" v-if="amenitie === 'Car Hire'"></i>
                <i class="bi bi-bicycle text-war" v-if="amenitie === 'Bicycle'"></i>
                <i class="bi bi-tv text-war" v-if="amenitie === 'Flat Tv'"></i>
                <i class="bi bi-arrow-repeat text-war" v-if="amenitie === 'Laundry and dry cleaning'"></i>
                <i class="bi bi-router text-war" v-if="amenitie === 'Internet – Wifi'"></i>
                <i class="bi bi-cup-straw text-war" v-if="amenitie === 'Coffee and tea'"></i>
                <p v-if="amenitie === 'Laundry and dry cleaning'"> Laundry Service: ✅ </p>
                <p v-else>{{ amenitie }}: ✅ </p>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
export default {
    name: 'HotelFacilites',
    async setup() {
        const route = useRoute();
        const routeId = route.params.id;
        const hotels = ref(null);
        const siteURL = 'https://dev.hemantbhutanrealestate.com/';
        const bc_hotels = await fetch(
            `https://dev.hemantbhutanrealestate.com/api/hotel_room_terms?id=${routeId}`
        );
        hotels.value = await bc_hotels.json();

        const amenities = hotels;

        return {
            siteURL,
            amenities,
        };
    },
}
</script>

<style>
</style>