<template>
    <div >
        <div class="row text-center" >
            <div class="col-md-3 prod-descrip" v-for="amenitie in amenities" :key="amenitie">
                <i class="bi bi-telephone text-war" v-if="amenitie === 'Wake-up call'"></i>
                <i class="fa fa-car text-war" v-if="amenitie === 'Car Hire'"></i>
                <i class="bi bi-bicycle text-war" v-if="amenitie === 'Bicycle'"></i>
                <i class="bi bi-tv text-war" v-if="amenitie === 'Flat TV'"></i>
                <i class="bi bi-arrow-repeat text-war" v-if="amenitie === 'Laundry & Room Services'"></i>
                <i class="bi bi-router text-war" v-if="amenitie === 'Internet - Wifi'"></i>
                <i class="bi bi-cup-straw text-war" v-if="amenitie === 'Coffee'"></i>
                <p>{{ amenitie }}: ✅ </p>
            </div>
            <!-- <div class="col-md-3">
                <i class="fa fa-car text-war"></i>
                <p v-if="!hotel.car">Car Hire: ❌
                </p>
                <p v-else>Car Hire: ✅</p>
            </div>
            <div class="col-md-3">
                <i class="bi bi-bicycle text-war"></i>
                <p v-if="!hotel.bicycle">Bicycle: ❌
                </p>
                <p v-else>Bicycle: ✅</p>
            </div>
            <div class="col-md-3">
                <i class="bi bi-tv text-war"></i>
                <p v-if="!hotel.tv">Flat TV: ✅
                </p>
                <p v-else>Flat TV: ✅</p>
            </div>
            <div class="col-md-3">
                <i class="bi bi-arrow-repeat text-war"></i>
                <p v-if="!hotel.laundry">Laundry Service: ❌
                </p>
                <p v-else>Laundry Service: ✅</p>
            </div>
            <div class="col-md-3">
                <i class="bi bi-router text-war"></i>
                <p v-if="!hotel.wifi">Wi-Fi: ✅
                </p>
                <p v-else>Flat TV: ✅</p>
            </div>
            <div class="col-md-3">
                <i class="bi bi-cup-straw text-war"></i>
                <p v-if="!hotel.coffee">Tea/Coffee: ✅
                </p>
                <p v-else>Tea/Coffee: ✅</p>
            </div> -->
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
        console.log(hotels);

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