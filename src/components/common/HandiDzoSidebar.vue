<template>
    <div class="accordion my-5 accordion-flush sticky-top app-sticky-top">
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
                                <h6 class="mb-3" style="line-height:1.6rem">Handicraft Products from other Dzongkhags</h6>
                            </div>
                             <div v-for="dzongkhag in categories" :key="dzongkhag.name">
                                <ul class="agri-list">
                                    <RouterLink :to="'/handicraft-dzo-filter/' + dzongkhag.slug" :class="{ active: isActive }">
                                        <li>{{dzongkhag.name}}</li>
                                    </RouterLink>
                                </ul>
                             </div>
                            <div class="back-to-home">
                                <RouterLink to="/handicrafts" class="return-link">
                                    <i class="bi bi-caret-left"></i> Back To Previous Page
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
const categories = [
    { name: "All", slug: 'All' },
    { name: "Dagana", slug: 'Dagana' },
    { name: "Lhuentse", slug: 'Lhuentse' },
    { name: "Mongar", slug: 'Mongar' },
    { name: "Pemagatshel", slug: 'Pemagatshel' },
    { name: "Tashiyangtse", slug: 'Tashiyangtse' },
    { name: "Trashigang", slug: 'Trashigang' },
    { name: "Zhemgang", slug: 'Zhemgang' },
];

export default {
    name: "HandiDzoSidebar",
    data() {
        return {
            categories,

        }
    },
    methods: {
        //return to previous page
        backToPreviousPage() {
            this.$router.go(-1);
        },
    },
};
</script>

<style scoped>
a.router-link-exact-active li {
    color: #f7941e !important;
    font-weight: 600;
}
.agri-list a li{
    color: #2c3e50;
}
.agri-list a li:hover{
    color: #f7941e;
}
.return-link {
    color: #f7941e;
    cursor: pointer;
}

a.router-link-exact-active ul li {
    color: #f7941e !important;
    font-weight: 600;
}

.home-button {
    color: #f7941e;
    text-decoration: none;
}

.app-sticky-top {
    top: 2rem;
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
    border-radius: 5px;
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

.lists-dzo {
    text-decoration: none;
    margin: 0.5rem 0;
}

.lists-dzo li {
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
