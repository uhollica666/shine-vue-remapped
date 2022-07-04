<template>
    <div class="container-fluid my-5">
        <div v-for="property in properties" :key="property.id">
            <div class="property-card px-5" v-if="property.slug === $route.params.slug">
                <section class="row">
                    <img :src="siteURL + 'uploads/' + property.file_path" :alt="property.title"
                        class="img-fluid img-prop col-md-12" loading="lazy" />
                </section>
                <section class="row mt-3">
                    <div class="col-md-12 my-2 prod-descrip">
                        <b>Property:</b>
                    </div>
                    <h5 class="col-md-12 prod-descrip my-2">
                        {{ property.title }}
                    </h5>
                    <div class="row text-center">
                        <div class="col-md-4" v-if="!property.rating">
                            <i class="bi bi-star-fill text-warning"></i> Average Review: <em><b class="mx-1">No Ratings
                                    Yet!</b></em>
                        </div>
                        <div class="col-md-4" v-else>
                            <i class="bi bi-star-fill text-warning"></i> Average Review:
                        </div>
                        <div class="col-md-4" v-if="!property.type">
                            <i class="bi bi-tag"></i> Property Type: <em><b class="mx-1">No data</b></em>
                            <p><em style="font-size:10px" class="text-danger">ERR: 500. Server failed to respond.</em></p>
                        </div>
                        <div class="col-md-4" v-else>
                            <i class="bi bi-tag"></i> Property Type: <b>VHS</b>
                        </div>
                        <div class="col-md-4">
                            <i class="bi bi-geo"></i> Location: <b>{{ property.name }}</b>
                        </div>
                    </div>
                </section>
                <div class="hr my-4"></div>
                <section class="row">
                    <div class="col-md-12 my-2 prod-descrip">
                        <b> Property Details:</b>
                    </div>
                    <div class="row text-center">
                        <div class="col-md-3 prod-descrip">
                            <i class="bi bi-columns text-war"></i>
                            <p v-if="!property.size">Size: ~? sqft
                                <br><em style="font-size:10px" class="text-danger">ERR: 500. Server failed to respond.</em>
                            </p>
                            
                            <p v-else>Size: {{property.size}} sqft</p>
                        </div>
                        <div class="col-md-3">
                            <i class="bi bi-door-closed text-war"></i>
                            <p v-if="!property.people">Max: ~? People
                                <br><em style="font-size:10px" class="text-danger">ERR: 500. Server failed to respond.</em>
                            </p>
                            <p v-else>Max: {{property.people}} People</p>
                        </div>
                        <div class="col-md-3">
                            <i class="fa fa-bath text-war"></i>
                            <p v-if="!property.bathroom">Total: ~? Bathroom(s)
                                <br><em style="font-size:10px" class="text-danger">ERR: 500. Server failed to respond.</em>
                            </p>
                            <p v-else>Total: {{property.bathroom}} Bathroom(s)</p>
                        </div>
                        <div class="col-md-3">
                            <i class="fa fa-bed text-war"></i>
                            <p v-if="!property.beds">Per Room: ~? Beds
                                <br><em style="font-size:10px" class="text-danger">ERR: 500. Server failed to respond.</em>
                            </p>
                            <p v-else>Per Room: {{property.beds}} Beds</p>
                        </div>
                    </div>
                </section>
                <div class="hr my-4"></div>
                <section class="row">
                    <div class="col-md-12 prod-descrip">
                        <p><b>Description:</b></p>
                    </div>
                    <div class="col-md-12 prod-descrip">
                        <p v-if="!property.content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium numquam, laborum quisquam
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
                        <p><b>Amenities:</b></p>
                    </div>
                    <div class="row text-center prod-descrip">
                        <div class="col-md-2" v-if="!property.air_contition">Air Condition: ❌
                                <br><em style="font-size:10px" class="text-danger">ERR: 500. Server failed to respond.</em>
                            </div>
                        <div class="col-md-2" v-else>Air Condition: ✅</div>
                        <div class="col-md-2" v-if="!property.breakfast">Breakfast: ❌
                                <br><em style="font-size:10px" class="text-danger">ERR: 500. Server failed to respond.</em>
                            </div>
                        <div class="col-md-2" v-else>Breakfast: ✅</div>
                        <div class="col-md-2" v-if="!property.kitchen">Kitchen: ❌
                                <br><em style="font-size:10px" class="text-danger">ERR: 500. Server failed to respond.</em>
                            </div>
                        <div class="col-md-2" v-else>Kitchen: ✅</div>
                        <div class="col-md-2" v-if="!property.parking">Parking: ❌
                                <br><em style="font-size:10px" class="text-danger">ERR: 500. Server failed to respond.</em>
                            </div>
                        <div class="col-md-2" v-else>Parking: ✅</div>
                        <div class="col-md-2" v-if="!property.pool">Pool: ❌
                                <br><em style="font-size:10px" class="text-danger">ERR: 500. Server failed to respond.</em>
                            </div>
                        <div class="col-md-2" v-else>Pool: ✅</div>
                        <div class="col-md-2" v-if="!property.wifi">Wi-Fi: ❌
                                <br><em style="font-size:10px" class="text-danger">ERR: 500. Server failed to respond.</em>
                            </div>
                        <div class="col-md-2" v-else>Wi-Fi: ✅</div>
                    </div>
                </section>
                <div class="hr my-4"></div>
                <section class="row">
                    <a :href="siteURL + 'space/' + property.slug" target="_blank">
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
    name: "PropertyDetails",
    async setup() {
        const properties = ref(null);
        const siteURL = 'https://dev.hemantbhutanrealestate.com/';
        const bc_accommodations = await fetch(
            "https://dev.hemantbhutanrealestate.com/api/bc_spaces"
        );

        properties.value = await bc_accommodations.json();
        return {
            properties,
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