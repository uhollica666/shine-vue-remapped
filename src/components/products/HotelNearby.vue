<template>
    <div>
        <div class="row  text-center">
            <i class="bi bi-mortarboard text-war col-md-4 "></i>
            <i class="bi bi-hospital text-war col-md-4 "></i>
            <i class="fa fa-train text-war col-md-4 "></i>
        </div>
        <div class="row">
            <template v-for="nearby in hotelsDetails">
                <div class="col-md-4 text-center" v-if="nearby.name" :key="nearby">
                    <h6 class="mt-2 margin-less-p"><b>Name:</b> {{ nearby.name }} </h6>
                    <p class="margin-less-p"><b>Type: </b> {{ nearby.content }}</p>
                    <p class="margin-less-p"><b>Distance:</b> {{ nearby.value }} {{ nearby.type }}</p>
                </div>
                <template v-else >
                    <div class="col-md-4 text-center" :key="nearby.name">
                        <h6 class="mt-2 margin-less-p"> No Landmarks Nearby</h6>
                    </div>
                    <div class="col-md-4 text-center" :key="nearby.name">
                        <h6 class="mt-2 margin-less-p"> No Landmarks Nearby</h6>
                    </div>
                    <div class="col-md-4 text-center" :key="nearby.name">
                        <h6 class="mt-2 margin-less-p"> No Landmarks Nearby</h6>
                    </div>
                </template>
            </template>
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
        const hotelsDetails = ref(null);
        const siteURL = 'https://dev.hemantbhutanrealestate.com/';
        const bc_hotels = await fetch(
            `https://dev.hemantbhutanrealestate.com/api/single_hotel_details?id=${routeId}`
        );
        hotelsDetails.value = await bc_hotels.json();
        return {
            hotelsDetails,
            siteURL,
        };
    },
}
</script>

<style scoped>
i.bi, i.fa {
    margin: 0;
}

.margin-less-p {
    margin-bottom: 0;
}
</style>
