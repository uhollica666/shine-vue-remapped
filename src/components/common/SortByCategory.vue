<template>
    <div>
        <div class="by-category mt-5 mb-3" v-if="$route.name === 'accommodation'">
            <h4 class="heading text-capitalize">
                Explore {{ $route.name }} by Category
            </h4>
            <p class="mt-3">{{ subTitleCategory }}</p>
            <div class="row">
                <div v-for="category in categoryAccommodations" :key="category.id"
                    class="col-md-3 col-lg-3 col-xl-3 mt-2">
                    <div class="card mt-2">
                        <div class="card-body">
                            <img :src="category.image_id" alt="" class="card-img" />
                            <RouterLink :to="siteURL + '/space?terms%5B%5D=' + category.space_id"
                                class="category-details text-center">
                                <div class="card-details">
                                    <h6 class="card-title text-truncate">
                                        {{ category.category }}
                                    </h6>
                                </div>
                            </RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="by-category mt-5 mb-3" v-if="$route.name === 'tours'">
            <h4 class="heading text-capitalize">
                Explore {{ $route.name }} by Category
            </h4>
            <p class="mt-3">{{ subTitleCategory }}</p>
            <div class="row">
                <div v-for="category in categoryTours" :key="category.id" class="col-md-3 col-lg-3 col-xl-3 mt-2">
                    <div class="card mt-2">
                        <div class="card-body">
                            <img :src="category.image_id" alt="" class="card-img" />
                            <RouterLink :to="siteURL + '/tour?terms%5B%5D=' + category.name"
                                class="category-details text-center">
                                <div class="card-details">
                                    <h6 class="card-title text-truncate">
                                        {{ category.name }}
                                    </h6>
                                </div>
                            </RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CATEGORY_DATA from "@/APIs/Category_DATA.json";
import { useFetch } from "@vueuse/core";
// import CATEGORY_Tours from "@/APIs/TourCategory_DATA.json";

export default {
    name: "SortByCategory",
    async setup() {
        const catSubtitle = "Eastern Bhutan Destinations Now Open";
        const apiURL = "http://dev.hemantbhutanrealestate.com/uploads/";
        const siteURL = "http://dev.hemantbhutanrealestate.com/";
        const [{ data: categoryTours }] =
            await Promise.all([
                // useFetch("http://dev.hemantbhutanrealestate.com/api/bc_spaces"),
                useFetch("http://dev.hemantbhutanrealestate.com/api/bc_tour_category"),
            ]);
        return {
            categoryAccommodations: CATEGORY_DATA,
            categoryTours,
            apiURL,
            catSubtitle,
            siteURL
        };
    },
};
</script>

<style>
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

.category-details {
    text-decoration: none;
    color: #2c3e50;
}

.category-details:hover {
    color: #f7941e;
}
</style>