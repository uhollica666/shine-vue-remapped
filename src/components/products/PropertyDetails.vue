<template>
    <div class="container-fluid my-5">
        <div v-for="property in properties" :key="property.id">
            <div class="property-card px-5">
                <section class="row">
                    <img :src="siteURL + 'uploads/' + property.file_path" :alt="property.title"
                        class="img-fluid img-prop col-md-12" loading="lazy" />
                </section>
                <section class="row mt-3">
                    <div class="col-md-6 my-2 prod-descrip">
                        <b>Property:</b>
                    </div>
                    <div class="col-md-6 my-2 prod-descrip">
                        <b>Price:</b>
                    </div>
                    <h5 class="col-md-6 prod-descrip my-3">
                        {{ property.title }}
                    </h5>
                    <div v-if="property.sale_price" class="col-md-6 prod-descrip my-3">
                        <p><span class="text-danger me-2">Before Discount: </span><s>Nu. {{property.price}} per Night</s></p>
                        <h5>
                            <span class="text-success me-2">Discount: </span> Nu. {{ property.sale_price }} per Night
                        </h5>
                    </div>
                    <div v-else class="col-md-6 prod-descrip my-3">
                        <h5>
                            Nu. {{ property.price }} per Night
                        </h5>
                    </div>
                </section>
                <div class="hr my-4"></div>
                <section class="row my-3">
                    <div class="row">
                        <div class="col-md-4" v-if="!property.rating">
                            <i class="bi bi-star-fill text-warning"></i> Review: <em><b class="mx-1">No Ratings
                                    Yet!</b></em>
                        </div>
                        <div class="col-md-4" v-else>
                            <i class="bi bi-star-fill text-warning"></i> Review:
                        </div>
                        <div class="col-md-4">
                            <PropertyType />
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
                            <p v-if="!property.square">Size: ~? sqft <br /> Not Available

                            </p>

                            <p v-else>Size: {{ property.square }} sqft</p>
                        </div>
                        <div class="col-md-3">
                            <i class="bi bi-door-closed text-war"></i>
                            <p v-if="!property.max_guests">Max: ~? People

                            </p>
                            <p v-else>Max: {{ property.max_guests }} People</p>
                        </div>
                        <div class="col-md-3">
                            <i class="fa fa-bath text-war"></i>
                            <p v-if="!property.bathroom">Total: ~? Bathroom(s)

                            </p>
                            <p v-else>Total: {{ property.bathroom }} Bathroom(s)</p>
                        </div>
                        <div class="col-md-3">
                            <i class="fa fa-bed text-war"></i>
                            <p v-if="!property.bed">Total: ~? Beds

                            </p>
                            <p v-else>Total: {{ property.bed }} Beds</p>
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

                        </p>
                        <p v-else><span v-html="property.content"></span></p>
                    </div>
                </section>
                <div class="hr my-4"></div>
                <section class="row">
                    <div class="col-md-12 prod-descrip">
                        <p><b>Amenities:</b></p>
                    </div>
                            <PropertyAmenitie />
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
import { useRoute } from 'vue-router';
import PropertyType from '@/components/products/PropertyType'
import PropertyAmenitie from '@/components/products/PropertyAmenitie'

export default {
    name: "PropertyDetails",
    async setup() {
        const route = useRoute();
        const routeId = route.params.id;
        const properties = ref(null);
        const siteURL = 'https://dev.hemantbhutanrealestate.com/';
        const bc_accommodations = await fetch(
            `https://dev.hemantbhutanrealestate.com/api/single_space?id=${routeId}`
        );

        properties.value = await bc_accommodations.json();
        return {
            properties,
            siteURL,
            PropertyType,
        }

    },
    components: {
        PropertyType,        
        PropertyAmenitie,
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