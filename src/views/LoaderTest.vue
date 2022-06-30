<template>
  <div class="container">
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-9">
        <HomeLoader class="in-out"/>
      </div>
    </div>
  </div>
</template>

<script>
import HomeLoader from "@/components/common/HomeLoader";
export default {
    name: "LoaderPage",
    components: {
        HomeLoader
    },
    data() {
        return {
        loading: true
        };
    },
    mounted() {
        setTimeout(() => {
        this.loading = false;
        }, 1000);
    }
};
</script>

<style>

</style>