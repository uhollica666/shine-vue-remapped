<template>
  <div class="blog-slider">
    <div v-if="$route.name === 'Accommodations' || $route.name === 'Tours'">
      <div class="blog-post-topic">
        <h4 class="text-center p-3">Recent Articles</h4>
        <p class="text-center">Explore the stories and weekly blog updates</p>
      </div>
      <div class="row flex-row flex-nowrap overflow-auto mb-5">
        <div class="col-md-3 col-lg-3 col-xl-3 col-sm-6 col-xs-6 mt-3 mx-auto" v-for="story in getBlogPost"
          :key="story.id">
          <div class="card mt-3 mb-3">
            <div class="card-body">
              <img loading="lazy" :src="apiURL + story.file_path" alt="" class="card-img-blog img-fluid"
                :data-src="apiURL + story.file_path" />
              <RouterLink :to="'/article/' + story.slug" class="category-details">
                <div class="card-details">
                  <h6 class="card-title text-truncate">
                    {{ story.title }}
                  </h6>
                  <p class="post-details text-truncate">{{ story.content }}</p>
                  <div class="location text-truncate">
                    <i class="bi bi-tag"></i> Category: {{ story.name }}
                  </div>
                  <p class="my-3">
                    <i class="bi bi-calendar"></i> Posted on
                    {{ story.created_at }}
                  </p>
                </div>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="blog-post-topic">
        <h4 class="text-center p-3">
          Popular Attraction of {{ $route.params.location_id }}
        </h4>
        <p class="text-center">Explore the stories and weekly blog updates</p>
      </div>
      <div class="row flex-row flex-nowrap overflow-auto mb-5">
        <template v-for="story in getDzongkhagBlogPost">
          <div class="col-md-3 col-lg-3 col-xl-3 col-sm-6 col-xs-6 mt-3" v-if="story" :key="story.id">
            <div class="card mt-3 mb-3">
              <div class="card-body">
                <img loading="lazy" :src="apiURL + story.file_path" alt="" class="card-img-blog img-fluid"
                  :data-src="apiURL + story.file_path" />
                <RouterLink :to="'/article/' + story.slug" class="category-details">
                  <div class="card-details">
                    <h6 class="card-title text-truncate">
                      {{ story.title }}
                    </h6>
                    <p class="post-details text-truncate">{{ story.content }}</p>
                    <div class="location text-truncate">
                      <i class="bi bi-tag"></i> Category: {{ story.name }}
                    </div>
                    <p class="my-3">
                      <i class="bi bi-calendar"></i> Posted on
                      {{ story.created_at }}
                    </p>
                  </div>
                </RouterLink>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRoute } from "vue-router";
export default {
  name: "BlogPost",
  async setup() {
    const route = useRoute();
    const routeId = route.params.location_id.toLowerCase();
    const stories = ref(null);
    const apiURL = "https://booking.shinebhutan.com/uploads/";
    const siteURL = "https://booking.shinebhutan.com";
    const bc_stories = await fetch(
      "https://booking.shinebhutan.com/api/articles"
    );
    stories.value = await bc_stories.json();

    return {
      stories,
      apiURL,
      siteURL,
      routeId,
    };
  },
  methods: {
    sortBlogPost() {
      return this.stories.sort((a, b) => (a.id < b.id ? 1 : -1));
    },
    sortDzongkhagBlogPost() {
      return this.stories.filter((a) =>
        a.title.toLowerCase().includes(this.routeId)
      );
    },
  },
  computed: {
    getBlogPost() {
      return this.sortBlogPost();
    },
    getDzongkhagBlogPost() {
      console.log(this.stories);
      console.log(this.routeId);
      return this.sortDzongkhagBlogPost();
    },
  },
};
</script>

<style scoped>
i.bi {
  margin-right: 0.5rem;
}

.card-img-blog {
  width: 100%;
  aspect-ratio: 16/10;
  object-fit: cover;
  border-radius: 5px;
}

@media screen and (max-width: 768px) {
  .blog-slider {
    display: none;
  }
}
</style>