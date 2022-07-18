<template>
  <div class="container-fluid my-5">
    <div v-for="tour in tours" :key="tour.id">
      <div class="property-card px-5">
        <section class="row">
          <img
            :src="siteURL + 'uploads/' + tour.file_path"
            :alt="tour.title"
            class="img-fluid img-prop"
            loading="lazy"
          />
        </section>
        <section class="row mt-3">
          <div class="col-md-12 my-2 prod-descrip">
            <b>Tour Name:</b>
          </div>
          <h5 class="col-md-12 prod-descrip my-2">
            {{ tour.title }}
          </h5>
          <div class="row text-center my-2">
            <div class="col-md-3" v-if="!tour.date_form_to">
              <i class="bi bi-clock"></i> Tour Duration:
              <em><b class="mx-1">No Data</b></em>
            </div>
            <div class="col-md-3" v-else>
              Duration: <b>{{ tour.date_form_to }}</b>
            </div>
            <div class="col-md-3">
              <i class="bi bi-geo"></i> Tour Origin: <b>{{ tour.name }}</b>
            </div>
            <div class="col-md-3">
              <i class="bi bi-person"></i> Min. Age: <b>18+</b>
            </div>
            <div class="col-md-3" v-if="!tour.pick_up">
              <i class="bi bi-geo-alt"></i> Pick Up: <b>Not Available</b>
            </div>
            <div class="col-md-3" v-else>
              <i class="bi bi-geo-alt"></i> Pick Up: <b>{{ tour.pick_up }}</b>
            </div>
          </div>
        </section>
        <div class="hr my-4"></div>
        <section class="row">
          <div class="col-md-12 my-2 prod-descrip">
            <b> Inclusion & Exclusion:</b>
          </div>
          <div class="row">
            <div class="col-md-">
              <div class="row">
                <div class="just-shit">
                  <ul class="unspoken-list row">
                    <li class="col-md-4" v-if="tour.fees">✅ Air Fees</li>
                    <li class="col-md-4" v-else>✅ Air Fees</li>
                    <li class="col-md-4" v-if="tour.insurance">
                      ✅ Insurance Premiums
                    </li>
                    <li class="col-md-4" v-else>❌ Insurance Premiums</li>
                    <li class="col-md-4" v-if="tour.expenses">
                      ✅ Personal Expenses
                    </li>
                    <li class="col-md-4" v-else>❌ Personal Expenses</li>
                    <li class="col-md-4" v-if="tour.social">
                      ✅ Insurance on social defaults
                    </li>
                    <li class="col-md-4" v-else>
                      ❌ Insurance on social defaults
                    </li>
                    <li class="col-md-4" v-if="tour.others">✅ Others</li>
                    <li class="col-md-4" v-else>❌ Others</li>
                    <li class="col-md-4" v-if="tour.everything">
                      ✅ Everything
                    </li>
                    <li class="col-md-4" v-else>❌ Everything</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div class="hr my-4"></div>
        <section class="row">
          <div class="col-md-12 prod-descrip">
            <p><b>Description:</b></p>
          </div>
          <div class="col-md-12 prod-descrip">
            <p v-if="!tour.content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium numquam, laborum quisquam molestias, blanditiis a
              officiis inventore veritatis itaque adipisci animi culpa atque rem
              accusamus!
            </p>
            <p v-else><span v-html="tour.content"></span></p>
          </div>
        </section>
        <div class="hr my-4"></div>
        <section class="row">
          <div class="col-md-12 prod-descrip">
            <p><b>Map View:</b></p>
          </div>
          <div class="row">
            <div v-if="tour.lang_id">
              <iframe
                class="map-yuu"
                :src="
                  'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1172.6441476127227!2d' +
                  tour.lang_id +
                  '!3d' +
                  tour.long_id +
                  '!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbt!4v1656893200352!5m2!1sen!2sbt'
                "
                width="1080"
                height="600"
                style="border: 0"
                allowfullscreen="yes"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div v-else>
              <iframe
                class="map-yuu"
                :src="'https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1769.7126460188265!2d89.618818!3d27.487146000000003!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbt!4v1656894002518!5m2!1sen!2sbt'"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              >
              </iframe>
            </div>
          </div>
        </section>
        <div class="hr my-4"></div>
        <section class="row">
          <a :href="siteURL + 'tour/' + tour.slug" target="_blank">
            <button class="btn-buy">
              <i class="bi bi-eye"></i>Proceed to Booking
            </button>
          </a>
          <p class="py-3 notice-change">
            <em style="font-size: 12px !important"
              >Note: you will be redirected to a more secured server to proceed
              futher with booking and payments.</em
            >
          </p>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "TourDetails",
  async setup() {
    const tours = ref(null);
    const siteURL = "https://booking.shinebhutan.com/";
    const bc_tours = await fetch(
      "https://booking.shinebhutan.com/api/bc_tours"
    );

    tours.value = await bc_tours.json();
    return {
      tours,
      siteURL,
    };
  },
};
</script>

<style scoped>
.map-yuu {
  width: 100%;
  aspect-ratio: 16/9;
}
.unspoken-list {
  list-style: none;
}

.property-card {
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 2rem;
}

.img-prop {
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
  border-radius: 1.5rem;
}

.notice-change {
  color: #dbba92;
}

.hr {
  background: #dedede;
  width: 100%;
  height: 1px;
}

.text-war {
  font-size: 2rem;
  color: #f7941e;
}

.btn-buy {
  background: #f7941e;
  color: #fff;
  border-radius: 20rem;
  padding: 0.5rem 1rem;
  border: none;
}

.btn-buy:hover {
  background: #f9741e;
}

.prod-descrip {
  color: #2c3e50;
}
</style>
