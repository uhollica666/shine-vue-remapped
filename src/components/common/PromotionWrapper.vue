<template>
    <div class="mb-3 pro-area">
        <h4 class="text-center p-3">Promotion</h4>
        <p class="text-center">Explore our top Events, Best selling products and more</p>
        <div class="tabs">
            <ul class="tab__headers">
                <li v-for="title in tabTitles" :key="title" :class="{ selected: title == selectedTitle }"
                    @click="selectedTitle = title">
                    {{ title }}
                </li>
            </ul>
        </div>
        <slot />
    </div>
</template>

<script>
import { ref, provide } from "vue";
export default {
    name: "PromotionWrapper",
    setup(props, { slots }) {
        const tabTitles = ref(slots.default().map((tab) => tab.props.title));
        const selectedTitle = ref(tabTitles.value[0]);

        provide('selectedTitle', selectedTitle);

        return {
            tabTitles,
            selectedTitle,
        };
    },
};
</script>

<style scoped>
.tabs {
    display: flex;
    justify-content: center;
    align-items: center;
}

.tab__headers {
    margin: 2rem 0;
    list-style: none;
    display: flex;
}

.tab__headers li {
    text-align: center;
    margin: 0 0.5rem;
    padding: 0.5rem 1rem;
    background: #f7e8e8;
    border-radius: 5px;
    cursor: pointer;
    color: #f9741e;
    transition: 0.3s all ease-in-out;
}

.tab__headers li:hover {
    background: #f7951eaa;
}

.tab__headers li.selected {
    background: #f7941e;
    color: #f7e8e8;
}

@media screen and (max-width: 768px) {
    .pro-area{
        display: none;
    }
}
</style>