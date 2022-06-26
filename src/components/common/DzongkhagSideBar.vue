<template>
    <div class="accordion mt-5 accordion-flush sticky-top app-sticky-top">
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                    aria-expanded="false" aria-controls="collapseOne">
                    <i class="bi bi-sort-down"></i>Filters
                </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <div class="c">
                        <div class="sidebar-filters">
                            
                            <div class="heading">
                                <h6 class="mb-3">Explore Other Dzongkhags</h6>
                            </div>
                            <div class="dzo-list my-2" v-for="dzongkhag in dzongkhags" :key="dzongkhag">
                                <RouterLink :to="{name:'Dzongkhags', params:{location_id: dzongkhag}}">
                                    <ul class="lists-dzo">
                                        <li>{{dzongkhag}}</li>
                                    </ul>
                                </RouterLink>
                            </div>
                            <div class="back-to-home">
                                <RouterLink to="/" class="home-button">
                                    <i class="bi bi-caret-left"></i> Back To Home
                                </RouterLink>
                            </div>

                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
const dzongkhags = [
    "Dagana",
    "Lhuentse",
    "Mongar",
    "Pemagatshel",
    "Tashiyangtse",
    "Trashigang",
    "Zhemgang",
];
export default {
    name: "DzongkhagSideBar",
    data() {
        return {
            dzongkhags,

        }
    }
   

};
</script>

<style scoped>
.home-button{
    color: #f7941e;
    text-decoration: none;
}
.app-sticky-top {
    top: 6rem;
}

.accordion-button:not(.collapsed)::after {
    background-image: var(--bs-accordion-btn-icon);
}

.accordion-button:not(.collapsed) {
    color: #fff !important;
    background-color: #f7941e !important;
}

.accordion-item {
    border: none;
}

.accordion-body {
    padding: 1rem 1.2rem;
    border-radius: 10px !important;
}

.accordion {
    background: #fafafa;
    max-width: 80%;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    margin-top: 10px;
}

.sidebar {
    max-width: 100%;
    box-shadow: none;
    padding: 1rem;
}

.accordion-header {
    border-radius: 10px;
}
.lists-dzo{
    text-decoration: none;
    color: #2c3e50;
}



@media only screen and (max-width: 992px) {
    .accordion {
        max-width: 100%;
    }
}

@media only screen and (max-width: 768px) {
    .accordion {
        max-width: 100%;
    }
}
</style>
