<template>
    <div class="carousel">
        <slot :currentSlide="currentSlide" />

        <!-- Navigation -->
        <div v-if="navEnabled" class="navigation">
            <div class="toggle-page left">
                <i @click="prevSlide" class="bi bi-arrow-left-short"></i>
            </div>
            <div class="toggle-page right">
                <i @click="nextSlide" class="bi bi-arrow-right-short"></i>
            </div>
        </div>

        <!-- Pagination -->
        <div v-if="paginationEnabled" class="pagination">
            <span @click="goToSlide(index)" v-for="(slide, index) in getSlideCount" :key="index"
                :class="{ active: index + 1 === currentSlide }">
            </span>
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from "vue";
export default {
    name: "HomeCarousel",
    props: ["startAutoPlay", "timeOut", "navigation", "pagination"],
    setup(props) {
        const currentSlide = ref(1);
        const getSlideCount = ref(null);
        const autoPlayEnabled = ref(
            props.startAutoPlay === undefined ? true : props.startAutoPlay
        );
        const timeOutDuration = ref(
            props.timeOut === undefined ? 5000 : props.timeOut
        );
        const paginationEnabled = ref(
            props.pagination === undefined ? true : props.pagination
        );
        const navEnabled = ref(
            props.navigation === undefined ? true : props.navigation
        );

        // next slide
        const nextSlide = () => {
            if (currentSlide.value === getSlideCount.value) {
                currentSlide.value = 1;
                return;
            }
            currentSlide.value += 1;
        };

        // prev slide
        const prevSlide = () => {
            if (currentSlide.value === 1) {
                currentSlide.value = 1;
                return;
            }
            currentSlide.value -= 1;
        };

        const goToSlide = (index) => {
            currentSlide.value = index + 1;
        };

        // auto play
        const autoPlay = () => {
            setInterval(() => {
                nextSlide();
            }, timeOutDuration.value);
        };
        if (autoPlayEnabled.value) {
            autoPlay();
        }

        onMounted(() => {
            getSlideCount.value = document.querySelectorAll(".carousel-slide").length;
        });

        return {
            currentSlide,
            prevSlide,
            nextSlide,
            getSlideCount,
            goToSlide,
            paginationEnabled,
            navEnabled,
        };
    },
};
</script>

<style>
.navigation {
    padding: 0 16px;
    height: 100%;
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
}

.toggle-page {
    display: flex;
    flex: 1;
}

.right {
    justify-content: flex-end;
}

.toggle-page i {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    color: #f7941e;
    font-size: 24px;
    font-weight: bold;
    background: rgba(0, 0, 0, 0.5);
    transition: 0.4s ease-in-out;
}

.toggle-page i:hover {
    background: #f7941e;
    color: #fff;
}

.pagination {
    position: absolute;
    bottom: 24px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
}

.pagination span {
    cursor: pointer;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.6);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: 0.2s ease-in-out;
}

.pagination span.active {
    background: #f7941e;
    width: 30px;
    border-radius: 20rem;
}
</style>