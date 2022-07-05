<template>
    <div class="container-fluid my-5">
        <div v-for="hotel in hotels" :key="hotel.id">
            <div class="property-card px-5">
                <section class="row">
                    <img :src="siteURL + 'uploads/' + hotel.file_path" :alt="hotel.title"
                        class="img-fluid img-prop col-md-12" loading="lazy" />
                </section>
                <section class="row mt-3">
                    <div class="col-md-6">
                        <div class="col-md-12 my-2 prod-descrip">
                            <b>Hotel Name:</b>
                        </div>
                        <h5 class="col-md-12 prod-descrip my-2">
                            {{ hotel.title }}
                        </h5>
                    </div>
                    <div class="col-md-6">
                        <div class="col-md-12 my-2 prod-descrip">
                            <b>Rate:</b>
                        </div>
                        <h5 class="col-md-12 prod-descrip my-2" v-if="!hotel.price">
                            Price Not Available
                        </h5>
                        <h5 class="col-md-12 prod-descrip my-2" v-else>
                            Nu. {{ hotel.price }} Per Night
                        </h5>
                    </div>
                    <div class="row my-2">
                        <div class="col-md-6" v-if="!hotel.star_rate">
                            <i class="bi bi-star-fill text-warning"></i> Star Rating: <em><b class="mx-1">No Star
                                    Ratings
                                    Yet!</b></em>
                        </div>
                        <div class="col-md-6" v-else>
                            <i class="bi bi-star-fill text-warning"></i> Star Rating: {{ hotel.star_rate }}
                        </div>
                        <div class="col-md-6">
                            <i class="bi bi-geo"></i> Location: <b>{{ hotel.name }}</b>
                        </div>
                    </div>
                </section>
                <div class="hr my-4"></div>
                <section class="row">
                    <div class="col-md-12 my-2 prod-descrip">
                        <b> Facilities:</b>
                    </div>
                    <HotelFacilites />
                </section>
                <div class="hr my-4"></div>
                <section class="row">
                    <div class="col-md-12 prod-descrip">
                        <p><b>Description:</b></p>
                    </div>
                    <div class="col-md-12 prod-descrip">
                        <p v-if="!hotel.content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
                            numquam, laborum quisquam
                            molestias, blanditiis a officiis inventore veritatis itaque adipisci animi culpa atque rem
                            accusamus!
                            <br><em style="font-size:10px" class="text-danger">Description Not Available.</em>
                        </p>
                        <p v-else><span v-html="hotel.content"></span></p>
                    </div>
                </section>
                <div class="hr my-4"></div>
                <section class="row">
                    <div class="col-md-12 prod-descrip">
                        <p><b>Hotel Services:</b></p>
                    </div>
                    <div class="row prod-descrip">
                        <div class="col-md-3" v-if="!hotel.lobby">Havana Lobby bar: ❌
                        </div>
                        <div class="col-md-3" v-else>Havana Lobby bar: ✅</div>
                        <div class="col-md-3" v-if="!hotel.restaurant">Fiesta Restaurant: ❌
                        </div>
                        <div class="col-md-3" v-else>Fiesta Restaurant: ✅</div>
                        <div class="col-md-3" v-if="!hotel.transport">Hotel transport services: ❌
                        </div>
                        <div class="col-md-3" v-else>Hotel transport services: ✅</div>
                        <div class="col-md-3" v-if="!hotel.luggage">Free luggage deposit: ❌
                        </div>
                        <div class="col-md-3" v-else>Free luggage deposit: ✅</div>
                        <div class="col-md-3" v-if="!hotel.laundry">Laundry Services: ❌
                        </div>
                        <div class="col-md-3" v-else>Laundry Services: ✅</div>
                        <div class="col-md-3" v-if="!hotel.pets">Pets welcome: ❌
                        </div>
                        <div class="col-md-3" v-else>Pets welcome: ✅</div>
                        <div class="col-md-3" v-if="!hotel.tickets">Tickets: ❌
                        </div>
                        <div class="col-md-3" v-else>Tickets: ✅</div>
                    </div>
                </section>
                <div class="hr my-4"></div>
                <section class="row">
                    <div class="col-md-12 prod-descrip">
                        <p><b>Hotel Rules & Policies:</b></p>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <p><b>Check In:</b></p>
                            <p v-if="!hotel.check_in_time"><i class="bi bi-clock"></i>Check-In Time Not Available
                            </p>
                            <p v-else><i class="bi bi-clock"></i>{{ hotel.check_in_time }}</p>
                        </div>
                        <div class="col-md-6">
                            <p><b>Check Out:</b></p>
                            <p v-if="!hotel.check_out_time"><i class="bi bi-clock"></i>12:00 Noon, Standard Check-Out
                                Time
                            </p>
                            <p v-else><i class="bi bi-clock"></i>{{ hotel.check_out_time }} Standard BST</p>
                        </div>
                        <div class="col-md-12">
                            <p><b>Hotel Policies:</b></p>
                            <p v-if="!hotel.policies">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero,
                                beatae? Atque, error eos neque delectus animi fugiat, dignissimos non quasi recusandae
                                voluptas deserunt sed accusamus inventore amet suscipit, autem enim veniam et molestiae
                                repellat dolore.<br>
                                <em style="font-size:10px" class="text-danger">The above is filler text. Policy Not
                                    Available</em>
                            </p>
                            <p v-else><i class="bi bi-clock"></i>{{ hotel.check_out }}</p>
                        </div>
                    </div>
                </section>
                <div class="hr my-4"></div>
                <section class="row">
                    <div class="col-md-12 prod-descrip">
                        <p><b>What's Nearby:</b></p>
                    </div>
                    <HotelNearby />
                </section>
                <div class="hr my-4"></div>
                <section class="row">
                    <a :href="siteURL + 'hotel/' + hotel.slug" target="_blank">
                        <button class="btn-buy"><i class="bi bi-eye"></i>Proceed to Booking</button>
                    </a>
                    <p class="py-3 notice-change"><em style="font-size: 12px !important;">Note: you will be redirected
                            to a more
                            secured server to proceed futher with booking and payments.</em></p>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useRoute } from 'vue-router';  
import HotelFacilites from '@/components/products/HotelFacilites'
import HotelNearby from '@/components/products/HotelNearby'
export default {
    name: "HotelDetails",
    components: {
        HotelFacilites,
        HotelNearby,
    },
    async setup() {
        const route = useRoute();
        const routeId = route.params.id;
        const hotels = ref(null);
        const siteURL = 'https://dev.hemantbhutanrealestate.com/';
        const bc_hotels = await fetch(
            `https://dev.hemantbhutanrealestate.com/api/single_hotel?id=${routeId}`
        );
        hotels.value = await bc_hotels.json();
        return {
            hotels,
            siteURL,
        };
    },
}
</script>

<style>
.property-card {
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    padding: 2rem;
}

.img-prop {
    width: 100%;
    object-fit: cover;
    aspect-ratio: 16/9;
    border-radius: 5px;
}

.notice-change {
    color: #dbba92;
}

.hr {
    background: #dedede;
    width: 100%;
    height: 1px;
}

.text-war {
    font-size: 2rem;
    color: #f7941e;
}

.btn-buy {
    background: #f7941e;
    color: #fff;
    border-radius: 20rem;
    padding: 0.5rem 1rem;
    border: none;
}

.btn-buy:hover {
    background: #f9741e;
}

.prod-descrip {
    color: #2c3e50;
}
</style>