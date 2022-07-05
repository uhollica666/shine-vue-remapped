<template>
    <div>
        <div class="row" v-for="hotel in hotels" :key="hotel">
            <div class="col-md-4 text-center">
                <p><b>Education:</b></p>
                <p v-if="!hotel.education">
                    <i class="bi bi-mortarboard text-war"></i><br />
                    No Data Available
                </p>
                <p v-else>
                    <i class="bi bi-clock"></i><br />
                    {{ hotel.ecudation }}
                </p>
            </div>
            <div class="col-md-4 text-center">
                <p><b>Health:</b></p>
                <p v-if="!hotel.health">
                    <i class="bi bi-hospital text-war"></i><br />
                    No Data Available
                </p>
                <p v-else>
                    <i class="bi bi-clock"></i><br />
                    {{ hotel.hospital }}
                </p>
            </div>
            <div class="col-md-4 text-center">
                <p><b>Transportation:</b></p>
                <p v-if="!hotel.transportation">
                    <i class="fa fa-train text-war"></i><br />
                    No Data Available
                </p>
                <p v-else>
                    <i class="bi bi-clock"></i><br />
                    {{ hotel.transportation }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
export default {
    name: 'HotelNearby',
    async setup() {
        const route = useRoute();
        const routeId = route.params.id;
        const hotels = ref(null);
        const siteURL = 'https://dev.hemantbhutanrealestate.com/';
        const bc_hotels = await fetch(
            `https://dev.hemantbhutanrealestate.com/api/hotel_room_terms?id=${routeId}`
        );
        hotels.value = await bc_hotels.json();
        console.log(hotels);
        return {
            hotels,
            siteURL,
        };
    },
}
</script>

<style>
</style>
