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
                loading="lazy"
                :src="ecomURL + 'public/' + prompProduct.file_name"
                alt=""
                class="card-img img-fluid"
              />
              <RouterLink
                :to="'/product/' + prompProduct.slug"
                class="category-details"
                target="_blank"
              >
                <div class="card-details">
                  <h6 class="card-title text-truncate">
                    {{ prompProduct.name }}
                  </h6>
                  <div class="location text-truncate">
                    <i class="bi bi-cash-coin"></i>Nu.
                    {{ prompProduct.unit_price }}.00
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
import { ref } from "vue";
export default {
  name: "PromotionProducts",
  async setup() {
    const prompProducts = ref(null);
    const apiURL = "https://booking.shinebhutan.com/uploads/";
    const siteURL = "https://booking.shinebhutan.com/";
    const ecomURL = "https://shop.shinebhutan.com/";
    const bc_prompProducts = await fetch(
      "https://shop.shinebhutan.com/api/v1/get_frontend_products"
    );
    prompProducts.value = await bc_prompProducts.json();
    return {
      prompProducts,
      apiURL,
      siteURL,
      ecomURL,
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
