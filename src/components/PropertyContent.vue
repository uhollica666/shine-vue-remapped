<template>
    <transition name="modal-animation">
        <div v-show="modalActive" class="modal">
            <transition name="modal-animation-inner">
                <div v-show="modalActive" class="modal-inner">
                    <i class="bi bi-x-circle"></i>
                    <slot />
                    <button>Close</button>
                </div>
            </transition>
        </div>
    </transition>
</template>

<script>
export default {
    name: "PropertyContent",
    props: ["modalActive"],
};
</script>

<style scoped>
.modal{
    z-index: 99999;
    height: 50rem;
    background: #333;
}
</style>
