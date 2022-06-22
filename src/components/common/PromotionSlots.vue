<template>
  <div class="tab-content" v-show="title == selectedTitle">
      <slot />
  </div>
</template>

<script>
import { inject } from 'vue';
export default {
    name:'PromotionSlots',
    props: ['title'],
    setup(){
        const selectedTitle = inject('selectedTitle')
        return {
            selectedTitle,
        };
    },
}
</script>

<style scoped>
.tab-content{
    padding: 0.5rem 2rem;
    border-radius: 5px;
    background: #ddd;
}

.tab-content::-webkit-scrollbar{
    height: 5px;
    width: 5px;
}

</style>