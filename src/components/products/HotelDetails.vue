<template>
    <div class="container-fluid my-5">
        <div v-for="property in hotels" :key="property.id">
            <div class="property-card px-5" v-if="property.slug === $route.params.slug">
                <section class="row">
                    <img :src="siteURL + 'uploads/' + property.file_path" :alt="property.title"
                        class="img-fluid img-prop col-md-12" loading="lazy" />
                </section>
                <section class="row mt-3">
                    <div class="col-md-12 my-2 prod-descrip">
                        <b>Hotel Name:</b>
                    </div>
                    <h5 class="col-md-12 prod-descrip my-2">
                        {{ property.title }}
                    </h5>
                    <div class="row text-center my-2">
                        <div class="col-md-6" v-if="!property.type">
                            <i class="bi bi-star-fill text-warning"></i> Average Rating: <em><b class="mx-1">No Ratings
                                    Yet!</b></em>
                        </div>
                        <div class="col-md-6" v-else>
                            <i class="bi bi-star-fill text-warning"></i> Average Review:
                        </div>
                        <div class="col-md-6">
                            <i class="bi bi-geo"></i> Location: <b>{{ property.name }}</b>
                        </div>
                    </div>
                </section>
                <div class="hr my-4"></div>
                <section class="row">
                    <div class="col-md-12 my-2 prod-descrip">
                        <b> Facilities:</b>
                    </div>
                    <div class="row text-center">
                        <div class="col-md-3 prod-descrip">
                            <i class="bi bi-telephone text-war"></i>
                            <p v-if="!property.wakeup">Wake-up Call: ❌
                                <br><em style="font-size:10px" class="text-danger">ERR: 500. Server failed to
                                    respond.</em>
                            </p>

                            <p v-else> Wake-up Call: ✅</p>
                        </div>
                        <div class="col-md-3">
                            <i class="fa fa-car text-war"></i>
                            <p v-if="!property.car">Car Hire: ❌
                                <br><em style="font-size:10px" class="text-danger">ERR: 500. Server failed to
                                    respond.</em>
                            </p>
                            <p v-else>Car Hire: ✅</p>
                        </div>
                        <div class="col-md-3">
                            <i class="bi bi-bicycle text-war"></i>
                            <p v-if="!property.bicycle">Bicycle: ❌
                                <br><em style="font-size:10px" class="text-danger">ERR: 500. Server failed to
                                    respond.</em>
                            </p>
                            <p v-else>Bicycle: ✅</p>
                        </div>
                        <div class="col-md-3">
                            <i class="bi bi-tv text-war"></i>
                            <p v-if="!property.tv">Flat TV: ❌
                                <br><em style="font-size:10px" class="text-danger">ERR: 500. Server failed to
                                    respond.</em>
                            </p>
                            <p v-else>Flat TV: ✅</p>
                        </div>
                        <div class="col-md-3">
                            <i class="bi bi-arrow-repeat text-war"></i>
                            <p v-if="!property.laundry">Laundry Service: ❌
                                <br><em style="font-size:10px" class="text-danger">ERR: 500. Server failed to
                                    respond.</em>
                            </p>
                            <p v-else>Laundry Service: ✅</p>
                        </div>
                        <div class="col-md-3">
                            <i class="bi bi-router text-war"></i>
                            <p v-if="!property.wifi">Wi-Fi: ❌
                                <br><em style="font-size:10px" class="text-danger">ERR: 500. Server failed to
                                    respond.</em>
                            </p>
                            <p v-else>Flat TV: ✅</p>
                        </div>
                        <div class="col-md-3">
                            <i class="bi bi-cup-straw text-war"></i>
                            <p v-if="!property.coffee">Tea/Coffee: ❌
                                <br><em style="font-size:10px" class="text-danger">ERR: 500. Server failed to
                                    respond.</em>
                            </p>
                            <p v-else>Tea/Coffee: ✅</p>
                        </div>
                    </div>
                </section>
                <div class="hr my-4"></div>
                <section class="row">
                    <div class="col-md-12 prod-descrip">
                        <p><b>Description:</b></p>
                    </div>
                    <div class="col-md-12 prod-descrip">
                        <p v-if="!property.content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
                            numquam, laborum quisquam
                            molestias, blanditiis a officiis inventore veritatis itaque adipisci animi culpa atque rem
                            accusamus!
                            <br><em style="font-size:10px" class="text-danger">ERR: 500. Server failed to respond.</em>
                        </p>
                        <p v-else><span v-html="property.content"></span></p>
                    </div>
                </section>
                <div class="hr my-4"></div>
                <section class="row">
                    <div class="col-md-12 prod-descrip">
                        <p><b>Hotel Services:</b></p>
                    </div>
                    <div class="row text-center prod-descrip">
                        <div class="col-md-3" v-if="!property.lobby">Havana Lobby bar: ❌
                            <br><em style="font-size:10px" class="text-danger">ERR: 500. Server failed to respond.</em>
                        </div>
                        <div class="col-md-3" v-else>Havana Lobby bar: ✅</div>
                        <div class="col-md-3" v-if="!property.restaurant">Fiesta Restaurant: ❌
                            <br><em style="font-size:10px" class="text-danger">ERR: 500. Server failed to respond.</em>
                        </div>
                        <div class="col-md-3" v-else>Fiesta Restaurant: ✅</div>
                        <div class="col-md-3" v-if="!property.transport">Hotel transport services: ❌
                            <br><em style="font-size:10px" class="text-danger">ERR: 500. Server failed to respond.</em>
                        </div>
                        <div class="col-md-3" v-else>Hotel transport services: ✅</div>
                        <div class="col-md-3" v-if="!property.luggage">Free luggage deposit: ❌
                            <br><em style="font-size:10px" class="text-danger">ERR: 500. Server failed to respond.</em>
                        </div>
                        <div class="col-md-3" v-else>Free luggage deposit: ✅</div>
                        <div class="col-md-3" v-if="!property.laundry">Laundry Services: ❌
                            <br><em style="font-size:10px" class="text-danger">ERR: 500. Server failed to respond.</em>
                        </div>
                        <div class="col-md-3" v-else>Laundry Services: ✅</div>
                        <div class="col-md-3" v-if="!property.pets">Pets welcome: ❌
                            <br><em style="font-size:10px" class="text-danger">ERR: 500. Server failed to respond.</em>
                        </div>
                        <div class="col-md-3" v-else>Pets welcome: ✅</div>
                        <div class="col-md-3" v-if="!property.tickets">Tickets: ❌
                            <br><em style="font-size:10px" class="text-danger">ERR: 500. Server failed to respond.</em>
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
                            <p v-if="!property.check_in"><i class="bi bi-clock"></i>Check-In Time Not Available<br>
                                <em style="font-size:10px" class="text-danger">ERR: 500. Server failed to respond.</em></p>
                            <p v-else><i class="bi bi-clock"></i>{{ property.check_in }}</p>
                        </div>
                        <div class="col-md-6">
                            <p><b>Check Out:</b></p>
                            <p v-if="!property.check_out"><i class="bi bi-clock"></i>12:00 Noon, Standard Check-Out Time
                            </p>
                            <p v-else><i class="bi bi-clock"></i>{{ property.check_out }}</p>
                        </div>
                        <div class="col-md-12">
                            <p><b>Hotel Policies:</b></p>
                            <p v-if="!property.policies">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
                                unde numquam ullam autem laboriosam voluptate labore qui? Sit ex dolorem totam nostrum
                                aut quam vel.<br>
                                <em style="font-size:10px" class="text-danger">ERR: 500. Server failed to respond.</em>
                            </p>
                            <p v-else><i class="bi bi-clock"></i>{{ property.check_out }}</p>
                        </div>
                    </div>
                </section>
                <div class="hr my-4"></div>
                <section class="row">
                    <div class="col-md-12 prod-descrip">
                        <p><b>What's Nearby:</b></p>
                    </div>
                    <div class="row">
                        <div class="col-md-4 text-center">
                            <p><b>Education:</b></p>
                            <p v-if="!property.education">
                                <i class="bi bi-mortarboard text-war"></i><br>
                                No Data Available<br>
                                <em style="font-size:10px" class="text-danger">ERR: 500. Server failed to respond.</em>
                            </p>
                            <p v-else>
                                <i class="bi bi-clock"></i><br>
                                {{ property.ecudation }}
                            </p>
                        </div>
                        <div class="col-md-4 text-center">
                            <p><b>Health:</b></p>
                            <p v-if="!property.health">
                                <i class="bi bi-hospital text-war"></i><br>
                                No Data Available<br>
                                <em style="font-size:10px" class="text-danger">ERR: 500. Server failed to respond.</em>
                            </p>
                            <p v-else>
                                <i class="bi bi-clock"></i><br>
                                {{ property.hospital }}
                            </p>
                        </div>
                        <div class="col-md-4 text-center">
                            <p><b>Transportation:</b></p>
                            <p v-if="!property.transportation">
                                <i class="fa fa-train text-war"></i><br>
                                No Data Available<br>
                                <em style="font-size:10px" class="text-danger">ERR: 500. Server failed to respond.</em>
                            </p>
                            <p v-else>
                                <i class="bi bi-clock"></i><br>
                                {{ property.transportation }}
                            </p>
                        </div>
                    </div>
                </section>
                <div class="hr my-4"></div>
                <section class="row">
                    <a :href="siteURL + 'hotel/' + property.slug" target="_blank">
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
export default {
    name: "HotelDetails",
    async setup() {
        const hotels = ref(null);
        const siteURL = 'https://dev.hemantbhutanrealestate.com/';
        const bc_hotels = await fetch(
            "https://dev.hemantbhutanrealestate.com/api/bc_hotels"
        );

        hotels.value = await bc_hotels.json();
        return {
            hotels,
            siteURL
        }

    },
}
</script>

<style scoped>
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