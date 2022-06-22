<template>
    <div>
        <div class="accommodation-element mt-5">
            <h4>Explore Our Popular Tours</h4>
            <p class="mt-3">Discover the Eastern Bhutan</p>
        </div>
        <button class="btn showButton my-2" :disabled="pending" @click="refresh">
            get latest data
        </button>
        <div class="row mb-3">
            <div v-for="tour in tours" :key="tour.id" class="col-md-4 col-lg-3 col-xl-3 col-sm-6 col-xs-12 mt-2">
                <div class="card mt-2" loading="lazy">
                    <div class="card-body">
                        <img :src="apiURL + tour.file_path" alt="" class="card-img" />
                        <RouterLink :to="siteURL + '/tour/' + tour.slug" class="accommodation-details">
                            <div class="card-details">
                                <h6 class="card-title text-truncate">
                                    {{ tour.title }}
                                </h6>
                                <h6 class="card-text my-3">
                                    <i class="bi bi-cash-coin mr-1"></i> Nu. {{ tour.price }} /
                                    night
                                </h6>
                                <div class="location-tours text-truncate mb-2">
                                    <i class="bi bi-geo-alt"></i>{{ tour.name }}
                                </div>
                                <div class="duration-tours text-truncate">
                                    <i class="bi bi-stopwatch"></i>
                                    {{ tour.date_form_to }}
                                </div>
                            </div>
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
        <div class="d-flex btn-container"></div>
    </div>
</template>

<script>
import { useFetch } from '@vueuse/core';
export default {
    name: 'ToursContent',
    props: ["tours"],

    data() {
        return {
            limit: 8,
        };
    },
    computed: {
        computedObject() {
            return this.limit ? this.tours.slice(0, this.limit) : this.tours;
        },
    },
    async setup() {
        const catSubtitle = "Eastern Bhutan Destinations Now Open";
        const apiURL = "http://dev.hemantbhutanrealestate.com/uploads/";
        const siteURL = "http://dev.hemantbhutanrealestate.com/";
        const [{ data: tours }, pending, refresh] = await Promise.all([
            useFetch("http://dev.hemantbhutanrealestate.com/api/bc_tours"),
        ]);
        return {
            // eslint-disable-next-line vue/no-dupe-keys
            tours,
            apiURL,
            pending,
            refresh,
            catSubtitle,
            siteURL
        };
    },
};
</script>

<style scoped>
i.bi {
    margin-right: 0.5rem;
}

.btn-container {
    justify-content: flex-end;
}

button.limit {
    display: none;
}

.showButton {
    max-width: 100%;
    background: #f7941e;
    color: #fff;
    border: none;
    padding: 0.5rem 2rem;
}

.duration-tours {
    display: flex;
}

.card {
    border: none;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.card:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.26);
}

.card-body {
    padding: 0;
}

.card-img {
    width: 100%;
    height: 150px;
    object-fit: cover;
}

.card-details {
    padding: 0.5rem 1rem;
}

.details {
    display: flex;
}

.location-tours {
    width: 50%;
}

.price {
    text-align: right;
}

.accommodation-details {
    text-decoration: none;
    color: #2c3e50;
}

.accommodation-details:hover {
    color: #f7941e;
}
</style>