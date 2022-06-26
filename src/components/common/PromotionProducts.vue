<template>
  <div class="by-category mb-3">
    <div class="row flex-row flex-nowrap overflow-auto">
      <Suspense>
        <div
          v-for="prompProduct in prompProducts"
          :key="prompProduct.id"
          class="col-md-3 col-lg-3 col-xl-3 col-sm-3 col-xs-3 mt-2 mb-3"
        >
          <div class="card mt-3">
            <div class="card-body">
              <img
                :src="prompProduct.thumbnail_image"
                alt=""
                class="card-img"
              />
              <RouterLink to="/#AccomodationDetails" class="category-details">
                <div class="card-details">
                  <h6 class="card-title text-truncate">
                    {{ prompProduct.name }}
                  </h6>
                  <div class="location text-truncate">
                    <i class="bi bi-cash-coin"></i
                    >{{ prompProduct.stroked_price }}
                  </div>
                </div>
              </RouterLink>
            </div>
          </div>
        </div>
      </Suspense>
    </div>
  </div>
</template>

<script>
// import { useFetch } from "@vueuse/core";
export default {
  name: "PromotionProducts",
  async setup() {
    const apiURL = "https://dev.hemantbhutanrealestate.com/uploads/";
    const siteURL = "https://dev.hemantbhutanrealestate.com/";
    // const [{ data: prompProducts }] = await Promise.all([
    //   useFetch("http://shine-ecomm.test/api/v2/products"),
    // ]);
    return {
      // prompProducts,
      apiURL,
      siteURL,
    };
  },

  // computed: {
  //     prompProducts() {
  //         let prompProducts = [];
  //         this.json.data.forEach((item) => {
  //             let data = item.inner_data.top_data.data;
  //             prompProducts.push({
  //                 id: data.id,
  //                 name: data.name,
  //                 thumbnail_image: data.thumbnail_image,
  //                 stroked_price: data.stroked_price,
  //             });
  //         });
  //     },
  // },
};
</script>
